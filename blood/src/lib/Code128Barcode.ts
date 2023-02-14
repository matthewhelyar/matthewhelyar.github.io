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
 */

type msgBlock_t = { data: string, enc: string; };
type input_t = { msg: string, dim: [number, number], pad: [number, number], pal: [string, string]; };
enum direction { h, v };

export class Code128Barcode {
	#testField:string = 'privateText';
	msg: string = '';
	encoded: number[] = [];

	dim: [number, number] = [320, 80];
	#w: number;
	#h: number;

	pad: [number, number] = [20, 16];
	#px: number;
	#py: number;

	pal: [string, string] = ['#000', '#FFF'];
	#fg: string;
	#bg: string;

	#dir: direction = direction.h;

	#l: number;
	#sx: number = 1;
	#sy: number = 1;
	#er: number = 0;

	valueArray: number[] = [];

	constructor(B: string | input_t) {
		if (typeof B === 'string')
			this.msg = B;
		else {
			if (B.msg) this.msg = B.msg;
			if (B.dim) this.dim = B.dim;
			if (B.pad) this.pad = B.pad;
			if (B.pal) this.pal = B.pal;
		}
		this.#l = 0;
		this.#w = Math.abs(this.dim[0]);
		this.#h = Math.abs(this.dim[1]);
		this.#px = Math.abs(this.pad[0]);
		this.#py = Math.abs(this.pad[1]);
		this.#fg = this.pal[0];
		this.#bg = this.pal[1];

		// convert string message to bar/space pattern
		this.encoded = this.encode(this.msg);
		this.#l = this.encoded.length;

		/* ecc: reset to default values and relative width */
		if (0 == this.#w && 0 == this.#h) {
			this.#px = 20;
			this.#py = 16;
			this.#w = 2 * (this.#l + this.#px);
			this.#h = 80;
		}

		this.#dir = this.#h > this.#w ? direction.v : direction.h;

		/* deal with auto width or height */
		if (0 == this.#w) {
			this.#w = 2 * (this.#l + this.#px);
			this.#dir = direction.h;
		}
		if (0 == this.#h) {
			this.#h = 2 * (this.#l + this.#py);
			this.#dir = direction.v;
		}

		if (this.#w < this.#px) {
			this.#px = this.#w;
			console.warn('Code128: Expected {pad} value could not be bigger than {dim} value', this.pad, this.dim);
		}

		if (this.#h < this.#py) {
			this.#py = this.#h;
			console.warn('Code128: Expected {pad} value could not be bigger than {dim} value', this.pad, this.dim);
		}

		if (this.#dir)
			this.#sy = this.#l;
		else
			this.#sx = this.#l;

		this.#sx = parseFloat(((this.#w - (2 * this.#px)) / this.#sx).toFixed(4));
		this.#sy = parseFloat(((this.#h - (2 * this.#py)) / this.#sy).toFixed(4));

		if (this.#er || !ishex(this.#fg) || this.#bg && !ishex(this.#bg)) {
			this.#fg = '#b11';
			this.#bg = '#fee';
			console.warn('Code128: Please double check barcode params');
		}

		// helper just for handling config object
		function ishex(c: string) {
			return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(c);
		}
	}

	get svg() { return this.#generateSvg(); }

	#createElement(tag: string, namespace: string, attributes: any): Element {
		const n = document.createElementNS(namespace, tag);
		//let key: keyof typeof attributes;
		for (let key in attributes) {
			n.setAttribute(key, attributes[key]);
		}
		return n;
	}

	#generateSvg(): SVGElement {
		// write outout as SVG
		const namespace = 'http://www.w3.org/2000/svg';
		let path = '';

		// here's the real magic, making a very efficient single path barcode.
		// c is the horizontal position, literally just comes from the remaining length of the message
		// d is the bar thickness.
		let d = 0;
		let c = this.#l;
		while (c) {
			this.encoded[--c] && ++d && !this.encoded[c - 1] && (path += (this.#dir == direction.v) ?
				'M1,' + c + 'H0v' + d + 'h1v-' + d + 'z' :
				'M' + c + ',1h' + d + 'V0h-' + d + 'v1z', d = 0);
		}
		// set up svg tag
		const r = this.#createElement('svg', namespace, {
			'viewBox': [0, 0, this.#w, this.#h].join(' '),
			'width': this.#w,
			'height': this.#h,
			'fill': this.#fg,
			'shape-rendering': 'crispEdges',
			'xmlns': namespace,
			'version': '1.1'
		});
		// add background path to svg
		if (this.#bg) r.appendChild(this.#createElement('path', namespace, {
			'fill': this.#bg,
			'd': 'M0,0V' + this.#h + 'H' + this.#w + 'V0H0Z'
		}));
		// apply transform and add path tag to svg
		r.appendChild(this.#createElement('path', namespace, {
			'transform': 'matrix(' + [this.#sx, 0, 0, this.#sy, this.#px, this.#py] + ')',
			'd': path
		}));

		return r as SVGElement;
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

	encode(o: string): number[] {
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
		this.valueArray = this.#getValueArray(msgBlocks);
		for (let val of this.valueArray) {
			r.push(this.#def(val));
		}
		return this.#bin(r.join(''));
	}

	#def(n: number): string {
		// return bar/space pattern as a binary string from an index into array. e.g. def(0) = "11011001100"
		if (106 < n) console.warn(`Code128: {bad char} (${n}) was used and it was replaced by X`), n = 56, this.#er = 1;
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