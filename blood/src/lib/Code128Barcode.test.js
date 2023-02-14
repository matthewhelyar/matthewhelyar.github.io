//import { Code128Barcode } from './lib/Code128Barcode';
const Code128Barcode = require('./Code128Barcode');

const useDetailedTests = false;

// generic barcode to test functions on
const x = new Code128Barcode('test');

// test Code128Barcode.get128Avalue();
if (useDetailedTests) {
	const codeA = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_` +
		`\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000A\u000B\u000C\u000D\u000E\u000F` +
		`\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001A\u001B\u001C\u001D\u001E\u001F`;
	for (let i = 0; i < codeA.length; i++) {
		let c = codeA[i];
		test(`Code128Barcode.get128Avalue(): ${c},  ${c.charCodeAt(0)}, ${i}}`, () => {
			expect(x.get128Avalue(c)).toEqual(codeA.indexOf(c));
		});
	}

	const fncCharsCommonA = [
		{ name: 'FNC1', value: 102, char: '\u00CA' },
		{ name: 'FNC2', value: 97, char: '\u00C5' },
		{ name: 'FNC3', value: 96, char: '\u00C4' },
		{ name: 'FNC4', value: 101, char: '\u00C9' }
	];
	for (var i = 0; i < fncCharsCommonA.length; i++) {
		let c = fncCharsCommonA[i];
		test(`Code128Barcode.get128Avalue(): ${c.name}`, () => {
			expect(x.get128Avalue(c.char)).toEqual(c.value);
		});
	}
}

// test Code128Barcode.get128Bvalue();
if (useDetailedTests) {
	const codeB = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_` +
		`\`abcdefghijklmnopqrstuvwxyz{|}~`;
	for (let i = 0; i < codeB.length; i++) {
		let c = codeB[i];
		test(`Code128Barcode.get128Bvalue(): ${c},  ${c.charCodeAt(0)}, ${i}}`, () => {
			expect(x.get128Bvalue(c)).toEqual(codeB.indexOf(c));
		});
	}

	const fncCharsCommonB = [
		{ name: 'DEL', value: 95, char: '\u00C3' },
		{ name: 'FNC1', value: 102, char: '\u00CA' },
		{ name: 'FNC2', value: 97, char: '\u00C5' },
		{ name: 'FNC3', value: 96, char: '\u00C4' },
		{ name: 'FNC4', value: 100, char: '\u00C8' }
	];
	for (var i = 0; i < fncCharsCommonB.length; i++) {
		let c = fncCharsCommonB[i];
		test(`Code128Barcode.get128Bvalue(): ${c.name}`, () => {
			expect(x.get128Bvalue(c.char)).toEqual(c.value);
		});
	}
}

// test overall class

const classTests = [
	{ input: 'test', output: [104, 84, 69, 83, 84, 87, 106] },
	{ input: '0123', output: [105, 1, 23, 49, 106] },
	{ input: 'G0123456789', output: [104, 39, 99, 1, 23, 45, 67, 89, 38, 106] },
	// FNC1 in the middle changes to code B as i haven't put it into code C yet. seems to complicated.
	{ input: '012345\u00CA67', output: [105, 1, 23, 45, 100, 102, 22, 23, 48, 106] },
	{ input: { msg: 'test' }, output: [104, 84, 69, 83, 84, 87, 106] },
];

for (let n of classTests) {
	test('Code128Barcode class, input= ' + n.input, () => {
		expect((new Code128Barcode(n.input)).valueArray).toEqual(n.output);
	});
}