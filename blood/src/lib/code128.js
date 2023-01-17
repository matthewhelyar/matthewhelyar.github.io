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
 *      Modified from: 
 *      https://github.com/datalog/barcode-svg
 *      under MIT license
 *      # barcode.js has no dependencies
 *      Copyright (c) 2020 Constantine
 */
'use strict';

export function Code128(B) {

	// test length of numerical block to see if it's worth it to encode as 128C
	function chooseC(blockData, isFirstBlock, isLastBlock) {
		// numeric at least 2 chars long
		if (blockData.length < 2) return false;
		// how long does number need to be for it to be worth it to change to 128C.
		let threshold = 2;
		// not first item, longer threshold to account for preceding change code
		if (!isFirstBlock) threshold += 2;
		// not last item, longer threshold to account for following change code
		if (!isLastBlock) threshold += 2;
		//console.log(blockData.length, threshold);
		return (blockData.length >= threshold);
	}

	// collapses CBA encoding into either C or AB
	function tryC(array, arrayIndex) {
		// returns true if C chosen, false if C rejected.
		const block = array[arrayIndex];
		const isFirstBlock = (arrayIndex == 0);
		const isLastBlock = (arrayIndex == array.length - 1);

		//console.log(block, "trying C...");
		if (!chooseC(block.data, isFirstBlock, isLastBlock)) {
			// remove C from enc and try again
			block.enc = block.enc.replace("C", "");
			//console.log("C rejected, trying: " + n.enc);
			return false;
		}

		block.enc = "C";
		//console.log("C chosen");

		if (block.data.length % 2 == 0)
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

	// for each, determine what encoding should be, removing from encoding until everything is just 1 encoding
	function chooseEncoding(array, arrayIndex) {
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

			if (block.enc.includes("C") && tryC(array, arrayIndex))
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
					tryC(array, j);
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
				// sholdn't ever need to do this.
				//console.log(array);
				//console.log("*********** RECURSE FORWARDS ***********");
				chooseEncoding(array, arrayIndex + 1);
			}
		}
	}

	// converts an array of {string data+encoding} blocks into a decimal value array
	function getValueArray(blockArray) {
		function get128Avalue(char) {
			char = char.charCodeAt(0);
			// char codes 0-31, value = charcode + 64 (i.e. 64-95)
			// char codes 32-127, value = charcode - 32 (i.e. 0-95).

			// control codes have values from 96-106, but no ascii equivalent,
			// so I don't see how this formula can work.
			// implementation here is charcode-50 or zero.
			return (char > 126) ?
				(128 == char) ? 0 : char - 50 :
				(char > 32) ? char - 32 : char + 64;
		}

		function get128Bvalue(char) {
			char = char.charCodeAt(0);
			// char codes 0-31 not in 128B (this returns 0)
			// char codes 32-127, value = charcode - 32 (i.e. 0-95).

			// control codes have values from 96-106, but no ascii equivalent,
			// so I don't see how this formula can work.
			// implementation here is charcode-50 or zero.
			return (char > 126) ?
				(128 == char) ? 0 : char - 50 :
				(char > 32) ? char - 32 : 0;
		}

		function checkSum(valArr) {
			var sum = 0;
			for (let i = valArr.length - 1; i > 0; --i)
				sum += i * valArr[i];
			return (sum + valArr[0]) % 103;
		}

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
						valueArray.push(get128Avalue(char));
					}
					break;
				case "B":
					if (block.enc != lastEnc) {
						valueArray.push((i == 0) ? 104 : 100);
						lastEnc = block.enc;
					}
					for (let char of block.data) {
						valueArray.push(get128Bvalue(char));
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
		valueArray.push(checkSum(valueArray));

		// insert end code
		valueArray.push(106);

		return valueArray;
	}

	// return bar/space pattern as a binary string from an index into array. e.g. def(0) = "11011001100"
	function def(i) {
		if (106 < i) console.warn(`Code128: {bad char} (${i}) was used and it was replaced by X`), i = 56, er = 1;
		return [1740, 1644, 1638, 1176, 1164, 1100, 1224, 1220, 1124, 1608, 1604, 1572, 1436, 1244, 1230, 1484, 1260, 1254, 1650, 1628, 1614,
			1764, 1652, 1902, 1868, 1836, 1830, 1892, 1844, 1842, 1752, 1734, 1590, 1304, 1112, 1094, 1416, 1128, 1122, 1672, 1576, 1570, 1464,
			1422, 1134, 1496, 1478, 1142, 1910, 1678, 1582, 1768, 1762, 1774, 1880, 1862, 1814, 1896, 1890, 1818, 1914, 1602, 1930, 1328, 1292,
			1200, 1158, 1068, 1062, 1424, 1412, 1232, 1218, 1076, 1074, 1554, 1616, 1978, 1556, 1146, 1340, 1212, 1182, 1508, 1268, 1266, 1956,
			1940, 1938, 1758, 1782, 1974, 1400, 1310, 1118, 1512, 1506, 1960, 1954, 1502, 1518, 1886, 1966, 1668, 1680, 1692, 6379][i].toString(2);
	}

	// seems to just convert a number to an array of single digit numbers. I think the input would be only base 2 anyway. e.g. 00111 -> [0,0,1,1,1)
	function bin(o) {
		var r = [],
			c = o.length;
		while (c) r[--c] = parseInt(o[c]);
		return r;
	}

	// encodes message as an array of 1 and 0 for a bar/space pattern.
	function encode(o) {
		// 1. split into exclusive A, exclusive B, numbers, and A^B!C (AB overlap, not C).
		const splitMsg = o.match(/[0-9]+|[\x00-\x1F]+|[\x60-\x7F]+|[\x20-\x2F\x3A-\x5F]+/g);

		// 2. test each to see which encodings are possible. (differnt tests to exclusive)
		// and asign each array element into an object of data and encoding
		let msgBlocks = [];
		for (let m of splitMsg) {
			let encoding = "";
			if (/[0-9]+/g.test(m)) encoding += "C";
			if (/[\x20-\x7F]+/g.test(m)) encoding += "B";
			if (/[\x00-\x5F]+/g.test(m)) encoding += "A";
			msgBlocks.push({ data: m, enc: encoding });
		}

		// 3. choose optimal encoding pattern 
		for (let i = 0; i < msgBlocks.length; i++) {
			chooseEncoding(msgBlocks, i);
		}

		// 4. insert Start and Change code values, convert data to values, add checksum and End code.
		// 5. convert to bar/space pattern.
		let r = [];
		for (let val of getValueArray(msgBlocks)) {
			r.push(def(val));
		}
		return bin(r.join(''));
	}

	/********* everything below here is Copyright (c) 2020 Constantine *********/
	// helper just for handling config object
	function abs(o) {
		return Math.abs(parseInt(o)) || 0;
	}

	// helper just for handling config object
	function ishex(c) {
		return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(c);
	}

	// handle input config object
	var b = ('string' == typeof B) ? {
		msg: B
	} : B || {},
		msg = b.msg,
		dir = 0,
		l = 0,
		dim = b.dim || [320, 80],
		pad = b.pad || [20, 16],
		pal = b.pal || ['#000'],
		w = abs(dim[0]),
		h = abs(dim[1]),
		px = abs(pad[0]),
		py = abs(pad[1]),
		fg = pal[0],
		bg = pal[1],
		sx = 1,
		sy = 1,
		er = 0;
	if (!msg || 'string' !== typeof msg) {
		console.warn('Code128: Expected {msg} should be not empty string!');
		msg = 'error!';
		er = 1;
	}
	// convert string message to bar/space pattern
	msg = encode(msg);
	l = msg.length;
	/* ecc: reset to default values and relative width */
	if (0 == w && 0 == h) px = 20, py = 16, w = 2 * (l + px), h = 80;
	dir = h > w;
	/* deal with auto width or height */
	if (0 == w) w = 2 * (l + px), dir = 0;
	if (0 == h) h = 2 * (l + py), dir = 1;
	if (w < px) {
		px = w;
		console.warn('Code128: Expected {pad} value could not be bigger than {dim} value', pad, dim);
	}
	if (h < py) {
		py = h;
		console.warn('Code128: Expected {pad} value could not be bigger than {dim} value', pad, dim);
	}
	if (dir) sy = l;
	else sx = l;
	sx = ((w - (2 * px)) / sx).toFixed(4);
	sy = ((h - (2 * py)) / sy).toFixed(4);
	if (er || !ishex(fg) || bg && !ishex(bg)) {
		fg = '#b11',
			bg = '#fee';
		console.warn('Code128: Please, double check barcode params');
	}
	return (function () {
		// write outout as SVG
		function svg(n, a) {
			n = document.createElementNS(ns, n);
			for (var o in a || {}) {
				n.setAttribute(o, a[o]);
			}
			return n;
		}
		var r,
			ns = 'http://www.w3.org/2000/svg',
			path = '',
			c = l,
			d = 0;

		// here's the real magic, making a very efficient single path barcode.
		// c is the horizontal position, literally just comes from the remaining length of the message
		// d is the bar thickness.
		while (c) {
			msg[--c] && ++d && !msg[c - 1] && (path += (dir) ?
				'M1,' + c + 'H0v' + d + 'h1v-' + d + 'z' :
				'M' + c + ',1h' + d + 'V0h-' + d + 'v1z', d = 0);
		}
		// set up svg tag
		r = svg('svg', {
			'viewBox': [0, 0, w, h].join(' '),
			'width': w,
			'height': h,
			'fill': fg,
			'shape-rendering': 'crispEdges',
			'xmlns': ns,
			'version': '1.1'
		});
		// add background path to svg
		if (bg) r.appendChild(svg('path', {
			'fill': bg,
			'd': 'M0,0V' + h + 'H' + w + 'V0H0Z'
		}));
		// apply transform and add path tag to svg
		r.appendChild(svg('path', {
			'transform': 'matrix(' + [sx, 0, 0, sy, px, py] + ')',
			'd': path
		}));
		return r;
	})();
}