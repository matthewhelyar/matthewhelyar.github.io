/*
 *  MIT License
 *
 *  Copyright (c) 2023 Matthew Helyar (modifications only)
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *  
 *      Based on: 
 *      https://github.com/datalog/barcode-svg
 *      under MIT license
 *      # barcode.js has no dependencies
 *      Copyright (c) 2020 Constantine
 * 
 *  (Yes, I see the irony of taking an intentionally  very compact library and blowing it up into a featureful class)
 */

/*
Usage: make a new object with either a message or input settings object e.g. {msg: 'Hello, world!', dim: [100,30], pad[10,5], pal: ['black','white'].

Either pass in a SVG to replace the contents of, or don't and use the .svg getter to get a new SVG element out of it.

Input dim will not affect existing svg, only new svg. Every other input will apply to both.

The SVG element itself won't be assigned over, so eventListeners etc on that element won't be broken by changing the contents.

message can be changed by setting .msg = 'new message'. svg element will automatically update.

The full character set of Code128 A,B and C is covered and the shortest barcode string will be generated using all 3 as needed. 

There are no standard equivalent encodable characters for FNC1-4, they exist purely as bytes in barcodes (where they are standard values). 
I have assigned some "common" unicode characters to be used as inputs for those function bytes. 
There is no complex functionality associated with the use of these FNC bytes in this barcode, they just where they are put in the barcode.
I really should allow the user to provide an array of characters to use instead of my chosen ones as they like. Also should do something about 
the fact that FNC4 is different depending on which encoding is currently in use because curerntly difficult for user to know which FNC4 will work in a given string.
For DEL and FNC1-4 characters, use the following unicode decimal characters:
	DEL  = decimal 195 = \u00C3
	FNC1 = decimal 202 = \u00CA
	FNC2 = decimal 197 = \u00C5
	FNC3 = decimal 196 = \u00C4
	FNC4 = decimal 200 / 201 = \u00C8 / \u00C9 depending on whether it's currently in A or B mode.
	
dim, pad and pal are publicly read only
valueArray and encoded are also publicly read only

most of this is using es2022 private fields. This could be transpiled to a closure to keep the encapsulation semantics with backwards compatibility.
*/
type msgBlock_t = { data: string, enc: string; };
type input_t = { msg: string, dim: number[], pad: number[] | number, pal: (string | null)[] };

export
	class Code128Barcode {
	// message string
	#msg: string = '';
	get msg() { return this.#msg; }
	set msg(msg: string) {
		this.#msg = msg;
		this.#encode(this.#msg);
		if (this.#svgElement == null) return;
		this.#calculateDimensions();
		this.#fillSvg(this.#svgElement);
	}

	// dimensions
	#dim: number[] = [0, 0]; // 0 = auto
	get dim() { return this.#dim; }
	#w: number = 0;
	#h: number = 0;

	// padding
	#pad: number[] = [0, 0];
	get pad() { return this.#pad; }
	set pad(p: number[] | number) {
		if (p == null) return;
		if (typeof p === 'number') {
			this.#pad = [p, p];
		} else if (p[1] == null) {
			this.#pad = [p[0], p[0]];
		} else if (typeof p[0] === 'number' && typeof p[1] === 'number') {
			this.#pad = p;
		}
		if (this.#svgElement == null) return;
		this.#calculateDimensions();
		this.#fillSvg(this.#svgElement);
	}
	#px: number = 0;
	#py: number = 0;
	#sx: number = 1;
	#sy: number = 1;

	// foreground/background colors
	#pal: (string|null)[] = ['#000', null];
	get pal(): (string | null)[] { return this.#pal; }
	set pal(p: (string | null)[] ){
		if (p == null) return;
		if (typeof p === 'string' && this.#isColor(p)) {
			this.#pal[0] = p;
		} else {
			if (typeof p[0] === 'string' && this.#isColor(p[0])) { this.#pal[0] = p[0]; }
			if (typeof p[1] === 'string' && this.#isColor(p[1])) { this.#pal[1] = p[1]; }
		}
		if (this.#svgElement == null) return;
		this.#calculateDimensions();
		this.#fillSvg(this.#svgElement);
	}

	// direction, horizontal or vertical
	#dir: string = 'h';

	// array of decimal values of encoded bytes.
	#valueArray: number[] = [];
	get valueArray() { return this.#valueArray; }

	// barcoded encoded in binary
	#encoded: number[] = [];
	get encoded() { return this.#encoded; }

	// to avoid nulling references to the element outside of this library, do not assign to this outside of constructor. 
	// instead, change the elements within or the attributes.
	#svgElement: SVGElement;
	get svg() { return this.#svgElement; }

	#svgNamespace = 'http://www.w3.org/2000/svg';

	// input message string or input_t settings object. Optionally input SVG element to replace contents of.
	constructor(B: string | input_t, svgElement: SVGElement) {
		// set up from inputs
		if (typeof B === 'string')
			this.#msg = B;
		else {
			if (B.msg != null)this.#msg = B.msg;
			if (B.dim != null)this.#dim = B.dim;
			this.pad = B.pad;
			this.pal = B.pal;
		}

		this.#encode(this.#msg);

		// either use the element provided to constructor or make one.
		if (svgElement == null) {
			this.#svgElement = this.#createElement('svg', this.#svgNamespace, {
				'viewBox': [0, 0, this.#w, this.#h].join(' '),
				'width': this.#w,
				'height': this.#h,
				'shape-rendering': 'crispEdges',
				'xmlns': this.#svgNamespace,
				'version': '1.1'
			}) as SVGElement;
		}
		else {
			this.#svgElement = svgElement;
			const style = window.getComputedStyle(svgElement);
			this.#dim = [parseFloat(style.getPropertyValue('width')), parseFloat(style.getPropertyValue('height'))];
		}

		this.#calculateDimensions();

		this.#fillSvg(this.#svgElement);


	}

	#isColor(strColor: string) {
		const s = new Option().style;
		s.color = strColor;
		return s.color !== '';
	}

	#calculateDimensions() {
		this.#sx = 1;
		this.#sy = 1;
		this.#w = Math.abs(this.#dim[0]);
		this.#h = Math.abs(this.#dim[1]);
		this.#px = Math.abs(this.#pad[0]);
		this.#py = Math.abs(this.#pad[1]);

		/* deal with auto width and height */
		if (0 == this.#w && 0 == this.#h) {
			this.#w = 2 * (this.#encoded.length + this.#px);
			this.#h = this.#w / 3;
		}

		this.#dir = this.#h > this.#w ? 'v' : 'h';

		/* deal with auto width or height */
		if (0 == this.#w) {
			// assumes if h is set but w is auto, intention is horizontal
			this.#w = 2 * (this.#encoded.length + this.#px);
			this.#dir = 'h';
		}
		if (0 == this.#h) {
			// assumes if w is set but h is auto, intention is vetical
			this.#h = 2 * (this.#encoded.length + this.#py);
			this.#dir = 'v';
		}

		this.#px = Math.min(this.#w, this.#px);
		this.#py = Math.min(this.#h, this.#py);

		if (this.#dir == 'v')
			this.#sy = this.#encoded.length;
		else
			this.#sx = this.#encoded.length;

		this.#sx = parseFloat(((this.#w - (2 * this.#px)) / this.#sx).toFixed(4));
		this.#sy = parseFloat(((this.#h - (2 * this.#py)) / this.#sy).toFixed(4));

		if (this.#svgElement == null) return;
		this.#svgElement.setAttribute('viewBox', [0, 0, this.#w.toFixed(4), this.#h.toFixed(4)].join(' '));
		this.#svgElement.setAttribute('width', this.#w.toFixed(4));
		this.#svgElement.setAttribute('height', this.#h.toFixed(4));
	}

	#createElement(tag: string, namespace: string, attributes: any): Element {
		const element = document.createElementNS(namespace, tag);
		//let key: keyof typeof attributes;
		for (let key in attributes) {
			element.setAttribute(key, attributes[key]);
			//element.setAttributeNS(namespace, key, attributes[key]);
		}
		return element;
	}

	#generatePath(encoded: number[], dir: string): Element {
		return this.#createElement('path', this.#svgNamespace, {
			'transform': 'matrix(' + [this.#sx, 0, 0, this.#sy, this.#px, this.#py] + ')',
			'fill': this.#pal[0],
			'd': this.#generatePathD(encoded, dir)
		});
	}

	#generatePathD(encoded: number[], dir: string): string {
		// here's the real magic, making a very efficient single path barcode.
		let path = '', barThickness = 0, penPosition = encoded.length;
		while (penPosition) {
			encoded[--penPosition] && ++barThickness && !encoded[penPosition - 1] && (path += (dir == 'v') ?
				`M1,${penPosition}H0v${barThickness}h1v-${barThickness}z` :
				`M${penPosition},1h${barThickness}V0h-${barThickness}v1z`, barThickness = 0);
		}
		return path;
	}

	#fillSvg(element: SVGElement) {
		if (element == null) return;
		// empty svgElement
		while (element.lastChild)
			element.removeChild(element.lastChild);

		// add background path to svg
		if (this.#pal[1] != null) element.appendChild(this.#createElement('path', this.#svgNamespace, {
			'fill': this.#pal[1],
			'd': `M0,0V${this.#h}H${this.#w}V0H0Z`
		}));

		// apply transform and add path tag to svg
		element.appendChild(this.#generatePath(this.#encoded, this.#dir));
		return element;
	}

	#tryC(array: msgBlock_t[], arrayIndex: number): boolean {
		// collapses CBA encoding into either C or AB
		// returns true if C chosen, false if C rejected.
		const block = array[arrayIndex];
		const isFirstBlock = arrayIndex === 0;
		const isLastBlock = arrayIndex === array.length - 1;

		// test length of numerical block to see if it's worth it to encode as 128C
		const longEnoughForC = block.data.length >= 2 + (isFirstBlock ? 0 : 2) + (isLastBlock ? 0 : 2);

		//console.log(block, "trying C...");
		if (!longEnoughForC) {
			// remove C from enc and try again
			block.enc = block.enc.replace(/C/g, "");
			//console.log("C rejected, trying: " + n.enc);
			return false;
		}

		block.enc = "C";
		//console.log("C chosen");

		if (block.data.length % 2 === 0)
			return true;

		if (isFirstBlock && isLastBlock) {
			// if block is whole message, make a new block encoding B at end
			//console.log("whole message, odd length, push last char to new block");
			array.push({ data: block.data.slice(-1), enc: "B" });
			block.data = block.data.slice(0, -1);
		}
		else if (isLastBlock) {
			// if at end, push off first character to previous
			//console.log("last block, odd length, push first char to prev block")
			array[arrayIndex - 1].data += block.data.slice(0, 1);
			block.data = block.data.slice(1);
		}
		else {
			// else push off last character.
			//console.log("not last block, odd length, push last char to next block")
			array[arrayIndex + 1].data = block.data.slice(-1) + array[arrayIndex + 1].data;
			block.data = block.data.slice(0, -1);
		}
		return true;
	}

	#chooseEncoding(array: msgBlock_t[], arrayIndex: number): void {
		// for each, determine what encoding should be, removing from encoding until everything is just 1 encoding
		/* - for CBA, test if C, move either extra odd first/last char to preceding/subsequent item,
		* then encoding either becomes C or BA.
		* - for BA, look forward and backward to see if either end is framed with either A or B and use that;
		* if both sides are start/end or C, then just use B as default, so change encoding or A or B.
		* - now everythig is C or B or A.
		*/

		const block = array[arrayIndex];
		//console.log(n, i, isFirstBlock, isLastBlock);

		//if (block.enc.length == 0) {
		//	console.error(block, "ERROR: NOT POSSIBLE TO ENCODE");
		//	return;
		//}

		//if (block.enc.length == 1) {
		//	//console.log(n, `encoding chosen: ${n.enc}`);
		//	return;
		//}

		while (block.enc.length > 1) {
			// chose an encoding.
			//console.log(n, "need to choose encoding.");

			if (block.enc.includes("C") && this.#tryC(array, arrayIndex))
				break;

			//console.log(block, "trying B|A...");
			//console.log("look backward");
			for (let j = arrayIndex - 1; j >= 0; j--) {
				if (array[j].enc.includes("C")) {
					//console.log("ran into a previous C, can't set A|B encoding based on previous");
					break;
				}
				if (array[j].enc == "A" || array[j].enc == "B") {
					block.enc = array[j].enc;
					//console.log(`found a ${n.enc}, set encoding to that.`)
					return;
				}
				//console.log(`previous encoding = ${array[j].enc}, continuing to look backwards`);
			}

			if (arrayIndex == array.length - 1) {
				// at end of array, break out of recursion, don't try to look forwards.
				block.enc = "B";
				return;
			}

			//console.log("look forward");
			for (let j = arrayIndex + 1; j < array.length; j++) {
				//if (array[j].enc.includes("C")) {
				if (array[j].enc.includes("C")) {
					// look ahead and just determine whether that collapses to C or A|B.
					this.#tryC(array, j);
				}
				if (array[j].enc == "C") {
					block.enc = "B";
					//console.log("ran into a following C, can't set A|B encoding based on next, default to B");
					return;
				}
				if (array[j].enc == "A" || array[j].enc == "B") {
					block.enc = array[j].enc;
					//console.log(`found a ${n.enc}, set encoding to that.`)
					return;
				}
				//console.log(`next encoding = ${array[j].enc}, continuing to look forwards`);
			}

			if (block.enc.length > 1) {
				// if still not found, recurse to work backwards from the end.
				// sholdn't ever need to do this.#
				//console.log(array);
				//console.log("*********** RECURSE FORWARDS ***********");
				this.#chooseEncoding(array, arrayIndex + 1);
			}
		}
	}

	get128Avalue(str: string): number {
		let char = str.charCodeAt(0);

		// char codes 0-31, value = charcode + 64 (i.e. 64-95)
		if (char < 32)
			return char + 64;

		// char codes 32-127, value = charcode - 32 (i.e. 0-95).
		else if (char < 127)
			return char - 32;

		// common/uncommon/Barcodesoft -> value
		// FNC1 202/207/247 -> 102 in A,B,C
		// FNC2 197/202/242 -> 97  in A,B
		// FNC3 196/201/241 -> 96  in A,B
		// FNC4 201/206/246 -> 101 in A
		// FNC4 200/205/245 -> 100 in B
		// commmon used here:
		else if (char == 196 || char == 197 || char == 201 || char == 202)
			return char - 100;

		else {
			console.error('illegal character in barcode could not be converted to Code128A:' + str);
			return NaN;
		}
	}

	get128Bvalue(str: string): number {
		let char = str.charCodeAt(0);

		// char codes 0-31, not in 128B.
		if (char < 32)
			return NaN;

		// char codes 32-127, value = charcode - 32 (i.e. 0-95).
		else if (char < 127)
			return char - 32;

		// common/uncommon/Barcodesoft -> value
		// FNC1 202/207/247 -> 102 in A,B,C
		// FNC2 197/202/242 -> 97  in A,B
		// FNC3 196/201/241 -> 96  in A,B
		// FNC4 201/206/246 -> 101 in A
		// FNC4 200/205/245 -> 100 in B
		// commmon used here:
		else if (char == 195 || char == 196 || char == 197 || char == 200 || char == 202)
			return char - 100;

		else {
			console.error('illegal character in barcode could not be converted to Code128B:' + str);
			return NaN;
		}
	}

	#checkSum(valArr: number[]): number {
		var sum = 0;
		for (let i = valArr.length - 1; i > 0; --i)
			sum += i * valArr[i];
		return (sum + valArr[0]) % 103;
	}

	#getValueArray(blockArray: msgBlock_t[]): number[] {
		// converts an array of {string data+encoding} blocks into a decimal value array

		let lastEnc = "", valueArray = [];
		for (let i = 0; i < blockArray.length; i++) {
			const block = blockArray[i];

			// handle Start and Change codes and data
			switch (block.enc) {
				case "A":
					if (block.enc != lastEnc) {
						valueArray.push((i == 0) ? 103 : 101);
						lastEnc = block.enc;
					}
					for (let char of block.data) {
						const v = this.get128Avalue(char);
						if (!isNaN(v)) valueArray.push(v);
					}
					break;
				case "B":
					if (block.enc != lastEnc) {
						valueArray.push((i == 0) ? 104 : 100);
						lastEnc = block.enc;
					}
					for (let char of block.data) {
						const v = this.get128Bvalue(char);
						if (!isNaN(v)) valueArray.push(v);
					}
					break;
				case "C":
					if (block.enc != lastEnc) {
						valueArray.push((i == 0) ? 105 : 99);
						lastEnc = block.enc;
					}
					for (let j = 0; j < block.data.length; j += 2) {
						valueArray.push(parseInt(block.data[j] + block.data[j + 1]));
					}
					break;
				default:
					console.error("message block encoding unknown");
			}
		}
		// insert checksum
		valueArray.push(this.#checkSum(valueArray));

		// insert end code
		valueArray.push(106);

		return valueArray;
	}

	#encode(o: string): number[] {
		// encodes message as an array of 1 and 0 for a bar/space pattern.
		// 1. split into numbers, exclusive A, exclusive B, and A&B!C (AB overlap, not C).
		const splitMsg: RegExpMatchArray | null = o.match(/[0-9]+|[\x00-\x1F\xC9]+|[\x60-\x7F\xC3\xC8]+|[\x20-\x2F\x3A-\x5F\xC4\xC5\xCA]+/g);
		if (!splitMsg) return [];
		// 2. test each to see which encodings are possible. (differnt tests to exclusive)
		// and asign each array element into an object of data and encoding
		let msgBlocks: msgBlock_t[] = [];
		for (let m of splitMsg) {
			let encoding = "";
			if (/[0-9]+/g.test(m)) encoding += "C";
			if (/[\x20-\x7F\xC3\xC4\xC5\xC8\xCA]+/g.test(m)) encoding += "B";
			if (/[\x00-\x5F\xC4\xC5\xC9\xCA]+/g.test(m)) encoding += "A";
			msgBlocks.push({ data: m, enc: encoding });
		}

		// 3. choose optimal encoding pattern 
		for (let i = 0; i < msgBlocks.length; i++) {
			this.#chooseEncoding(msgBlocks, i);
		}

		// 4. insert Start and Change code values, convert data to values, add checksum and End code.
		// 5. convert to bar/space pattern.
		let r: string[] = [];
		this.#valueArray = this.#getValueArray(msgBlocks);
		for (let val of this.#valueArray) {
			if (val <= 106) r.push(this.#def(val));
		}
		this.#encoded = this.#bin(r.join(''));
		return this.#encoded;
	}

	#def(n: number): string {
		// return bar/space pattern as a binary string from an index into array. e.g. def(0) = "11011001100"
		if (106 < n) return '';
		return [1740, 1644, 1638, 1176, 1164, 1100, 1224, 1220, 1124, 1608, 1604, 1572, 1436, 1244, 1230, 1484, 1260, 1254, 1650, 1628, 1614,
			1764, 1652, 1902, 1868, 1836, 1830, 1892, 1844, 1842, 1752, 1734, 1590, 1304, 1112, 1094, 1416, 1128, 1122, 1672, 1576, 1570, 1464,
			1422, 1134, 1496, 1478, 1142, 1910, 1678, 1582, 1768, 1762, 1774, 1880, 1862, 1814, 1896, 1890, 1818, 1914, 1602, 1930, 1328, 1292,
			1200, 1158, 1068, 1062, 1424, 1412, 1232, 1218, 1076, 1074, 1554, 1616, 1978, 1556, 1146, 1340, 1212, 1182, 1508, 1268, 1266, 1956,
			1940, 1938, 1758, 1782, 1974, 1400, 1310, 1118, 1512, 1506, 1960, 1954, 1502, 1518, 1886, 1966, 1668, 1680, 1692, 6379][n].toString(2);
	}

	#bin(o: string): number[] {
		// converts a number string to an array of single digit numbers. I think the input would be only base 2 anyway. e.g. 00111 -> [0,0,1,1,1)
		var r = [],
			c = o.length;
		while (c) r[--c] = parseInt(o[c]);
		return r;
	}
}

//exports.Code128Barcode = Code128Barcode;

// for jest testing framework. Means imports have to be in the require() syntax even outside of test.
module.exports = Code128Barcode;