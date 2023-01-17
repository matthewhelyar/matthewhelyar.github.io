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

export function Codabar(B) {

	// return thick/thin pattern as a binary string
	function pattern(char) {
		const patterns = {	//BSBSBSB
			'0': 3,			//0000011
			'1': 6,			//0000110
			'2': 9,			//0001001
			'3': 96,		//1100000
			'4': 18,		//0010010
			'5': 66,		//1000010
			'6': 33,		//0100001
			'7': 36,		//0100100
			'8': 48,		//0110000
			'9': 72,		//1001000
			'-': 12,		//0001100
			'$': 24,		//0011000
			':': 69,		//1000101
			'/': 81,		//1010001
			'.': 84,		//1010100
			'+': 21,		//0010101
			'A': 26,		//0011010
			'B': 41,		//0101001
			'C': 11,		//0001011
			'D': 14,		//0001110
			'T': 26,		//0011010
			'N': 41,		//0101001
			'*': 11,		//0001011
			'E': 14,		//0001110
		}
		if (!patterns[char]) { console.warn(`Codabar: Invalid character for Codabar: ${char}`); return; }
		return patterns[char].toString(2).padStart(7, '0');
	}

	// encodes message as an array of 1 and 0 for a thick/thin pattern.
	function encode(msg) {
		var out = [],
			i = msg.length;
		while (i)
			out[--i] = pattern(msg[i]);

		return out.join('0'); // add a narrow space in between each symbol.
	}

	// helper just for handling config object
	function abs(n) {
		return Math.abs(parseInt(n)) || 0;
	}

	// helper just for handling config object
	function ishex(color) {
		return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(color);
	}

	// handle input config object
	var b = ('string' == typeof B) ? {
		msg: B
	} : B || {},
		msg = b.msg.toUpperCase(),
		dir = 0,
		len = 0,
		dim = b.dim || [320, 80],
		pad = b.pad || [20, 16],
		pal = b.pal || ["#000", "#fff"],
		w = abs(dim[0]),
		h = abs(dim[1]),
		px = abs(pad[0]),
		py = abs(pad[1]),
		fg = pal[0],
		bg = pal[1],
		sx = 1,
		sy = 1,
		er = 0,
		// thick:thin ratio valid from 2.25:1 - 3:1.
		ratio = Math.min(Math.max(parseInt(b.ratio), 2.25), 3.0) || 3;

	// validate input
	if (!msg || 'string' !== typeof msg) {
		console.warn('Codabar: Expected {msg} should be not empty string!');
		msg = '';
		er = 1;
	}
	if (/[^-$:/.+*ABCDNET0-9]/g.test(msg)) {
		console.warn('Codabar: Expected {msg} contains characters not encodable in Codabar!');
		msg = '';
		er = 1;
	}
	if (/^[^*ABCDNET]|[^*ABCDNET]$/g.test(msg)) {
		console.warn('Codabar: First and last characters of Codabar {msg} must be one of either: *ABCDNET');
		msg = '';
		er = 1;
	}
	if (/[^-$:/.+0-9]/g.test(msg.substring(1, msg.length - 1))) {
		console.warn('Codabar: Inner characters of Codabar {msg} must be either: -$:/.+0-9');
		msg = '';
		er = 1;
	}

	const thin = 1, thick = thin * ratio;

	// convert string message to thick/thin pattern
	msg = encode(msg);

	// calculate length of barcode
	len = 0;
	for (let i = 0; i < msg.length; i++) {
		len += (msg[i] == '1') ? thick : thin;
	}

	/* ecc: reset to default values and relative width */
	if (0 == w && 0 == h) px = 20, py = 16, w = 2 * (len + px), h = 80;
	dir = h > w;

	/* deal with auto width or height */
	if (0 == w) w = 2 * (len + px), dir = 0;
	if (0 == h) h = 2 * (len + py), dir = 1;
	if (w < px) {
		px = w;
		console.warn('Codabar: Expected {pad} value could not be bigger than {dim} value');
	}
	if (h < py) {
		py = h;
		console.warn('Codabar: Expected {pad} value could not be bigger than {dim} value');
	}
	if (dir) sy = len;
	else sx = len;
	sx = ((w - (2 * px)) / sx).toFixed(4);
	sy = ((h - (2 * py)) / sy).toFixed(4);
	if (er || !ishex(fg) || bg && !ishex(bg)) {
		fg = '#b11', bg = '#fee';
		console.warn('Codabar: Please, double check barcode params');
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

		var ns = 'http://www.w3.org/2000/svg';

		// generate path for barcode from encoded msg.
		let pos = 0,
			path = (dir) ? 'M1,0' : 'M0,';
		for (let i = 0; i < msg.length; i++) {
			const step = (msg[i] == '1') ? thick : thin;
			pos += step;
			if (i % 2 == 0) {
				// bar
				path += (dir) ?
					`H0v${step}h1v-${step}z` : // vertical
					`1h${step}V0h-${step}v1z`; // horizontal
			}
			else {
				// space
				path += (dir) ?
					`M1,${pos}` : // vertical
					`M${pos},`;   // horizontal
			}
		}

		// set up svg tag
		var r = svg('svg', {
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
		// apply transform and add barcode path to svg
		r.appendChild(svg('path', {
			'transform': 'matrix(' + [sx, 0, 0, sy, px, py] + ')',
			'd': path
		}));
		return r;
	})();
}