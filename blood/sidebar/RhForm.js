class RhForm {
	constructor(boxD, boxC, boxE, boxc, boxe, genotypeSpan) {

		function generateGenotypeList() {
			// generate all genotypes as an array of {str, freq}

			function generatePartial(result, arr1, arr2) {
				for (let i = 0; i < arr1.length; i++) {
					for (let j = (arr1 == arr2) ? i : 0; j < arr2.length; j++) {
						// to get order of 1,2,3,0
						let i_ = (i + 1) % arr1.length;
						let j_ = (j + 1) % arr2.length;
						const str = arr1[i_][0] + arr2[j_][0];
						const cdeStr = (arr1[i_][1] + "/" + arr2[j_][1]).toString();
						const freq = arr1[i_][2] * arr2[j_][2];
						if (!result.some(x => x.str == str))
							result.push({ str: str, cdeStr: cdeStr, freq: freq });
					}
				}
			}

			const PosHaplotypes = [['R0', 'cDe', 0.0257], ['R1', 'CDe', 0.4204], ['R2', 'cDE', 0.1411], ['RZ', 'CDE', 0.0024]];
			const NegHaplotypes = [['r', 'cde', 0.3886], ['r\'', 'Cde', 0.0098], ['r\"', 'cdE', 0.0119], ['ry', 'CdE', 0.0005]];

			let result = [];
			generatePartial(result, PosHaplotypes, PosHaplotypes);
			generatePartial(result, PosHaplotypes, NegHaplotypes);
			generatePartial(result, NegHaplotypes, NegHaplotypes);
			return result;
		}

		// Ideally this would be a const generated once, but javascript class fields can't be const.
		this.genotypeList = generateGenotypeList();

		this.rhBoxes = {
			D: boxD,
			C: boxC,
			E: boxE,
			c: boxc,
			e: boxe,
		};

		boxD.postChangeCallback = this.tristateRhChanged.bind(this);
		boxC.postChangeCallback = this.tristateRhChanged.bind(this);
		boxE.postChangeCallback = this.tristateRhChanged.bind(this);
		boxc.postChangeCallback = this.tristateRhChanged.bind(this);
		boxe.postChangeCallback = this.tristateRhChanged.bind(this);

		this.genotypeSpan = genotypeSpan;

		this.tristateRhChanged();
	}

	tristateRhChanged() {

		function round(num, dp) {
			const f = Math.pow(10, dp);
			return Math.round(num * f) / f;
		};

		function filterDown(arr, boxState, searchLetter) {
			if (boxState == 'checked')
				return arr.filter((x) => { return x.cdeStr.includes(searchLetter); });
			else if (boxState == 'unchecked')
				return arr.filter((x) => { return !x.cdeStr.includes(searchLetter); });
			return arr;
		}

		let genotypes = [];

		if ((this.rhBoxes.C.state == 'unchecked' && this.rhBoxes.c.state == 'unchecked') ||
			(this.rhBoxes.E.state == 'unchecked' && this.rhBoxes.e.state == 'unchecked')) {
			genotypes = [{ str: 'Rh<sub>null</sub>', cdeStr: '', freq: 1 }];
		}
		else {

			// deep copy allHaplotypes, because allHaplotypes isn't const.
			// if it isn't a copy, get deeper and deeper nested <sub> and <sup> tags.
			genotypes = JSON.parse(JSON.stringify(this.genotypeList));

			genotypes = filterDown(genotypes, this.rhBoxes.D.state, 'D');
			genotypes = filterDown(genotypes, this.rhBoxes.C.state, 'C');
			genotypes = filterDown(genotypes, this.rhBoxes.E.state, 'E');
			genotypes = filterDown(genotypes, this.rhBoxes.c.state, 'c');
			genotypes = filterDown(genotypes, this.rhBoxes.e.state, 'e');
		}

		// sort result by frequency
		genotypes = genotypes.sort((a, b) => {
			if (a.freq < b.freq) return 1;
			if (a.freq > b.freq) return -1;
			if (a.freq == b.freq) return 0;
		});

		// convert frequency in population to percentage chance of each possible haplotype
		let freqSum = genotypes.reduce((sum, x) => sum + x.freq, 0);
		let multiplier = 100 / freqSum;

		// write back to sidebar.
		this.genotypeSpan.innerHTML = "";
		for (let g of genotypes) {
			g.str = g.str.padEnd(4, ' ');
			g.str = g.str.replaceAll('0', '<sub>0</sub>');
			g.str = g.str.replaceAll('1', '<sub>1</sub>');
			g.str = g.str.replaceAll('2', '<sub>2</sub>');
			g.str = g.str.replaceAll('Z', '<sub>Z</sub>');
			g.str = g.str.replaceAll('y', '<sup>y</sup>');
			const percentage = round(g.freq * multiplier, 5).toFixed(5).padStart(9, ' ') + "%";
			this.genotypeSpan.innerHTML += `${g.str} : ${percentage}<br />`;
		}
	}

	/*
	rhChanged() {
		// this works for checkboxes, but not for tristateBoxes.
		// left it in anyway because I use the score algorithm in my head at work.

		//const RhPosPhens = [['R\u2080', 0.0257], ['R\u2081', 0.4204], ['R\u2082', 0.1411], ['RZ', 0.0024]];
		const RhPosPhens = [['R0', 0.0257], ['R1', 0.4204], ['R2', 0.1411], ['RZ', 0.0024]];
		//const RhNegPhens = [['r', 0.3886], ['r\u2032', 0.0098], ['r\u2033', 0.0119], ['ry', 0.0005]];
		const RhNegPhens = [['r', 0.3886], ['r\'', 0.0098], ['r\"', 0.0119], ['ry', 0.0005]];

		function round(num, dp) {
			const f = Math.pow(10, dp);
			return Math.round(num * f) / f;
		};

		function generateRh(D, a, b, result) {
			let arr = [a, b].sort((a, b) => {
				// order should be 1,2,3,0
				if (a == 0) return 1;
				if (b == 0) return -1;
				if (a == b) return 0;
				return (a > b) ? 1 : -1;
			});

			let str = "";
			let freq = 0;
			if (D) {
				// try DD,
				str = `${RhPosPhens[arr[0]][0]}${RhPosPhens[arr[1]][0]}`;
				freq = RhPosPhens[arr[0]][1] * RhPosPhens[arr[1]][1];
				if (!result.some(x => x.str == str))
					result.push({ str: str, freq: freq });
				//Dd,
				str = `${RhPosPhens[arr[0]][0]}${RhNegPhens[arr[1]][0]}`;
				freq = RhPosPhens[arr[0]][1] * RhNegPhens[arr[1]][1];
				if (!result.some(x => x.str == str))
					result.push({ str: str, freq: freq });
				//dD
				str = `${RhPosPhens[arr[1]][0]}${RhNegPhens[arr[0]][0]}`;
				freq = RhPosPhens[arr[1]][1] * RhNegPhens[arr[0]][1];
				if (!result.some(x => x.str == str))
					result.push({ str: str, freq: freq });
			} else {
				// try dd
				str = `${RhNegPhens[arr[0]][0]}${RhNegPhens[arr[1]][0]}`;
				freq = RhNegPhens[arr[0]][1] * RhNegPhens[arr[1]][1];
				if (!result.some(x => x.str == str))
					result.push({ str: str, freq: freq });
			}
		}

		// calculate possible R notations just for fun
		const checked = {
			D: document.querySelector("#RhD").checked,
			C: document.querySelector("#RhC").checked,
			E: document.querySelector("#RhE").checked,
			c: document.querySelector("#Rhc").checked,
			e: document.querySelector("#Rhe").checked
		};

		let result = [];

		if ((!checked.C && !checked.c) || (!checked.E && !checked.e)) {
			result = [{ str: 'Rh<sub>null</sub>', freq: 1 }];
		} else {
			// 2 different ways to combine pairs of C/!c and E/!e.
			let score1 = { a: 0, b: 0 },
				score2 = { a: 0, b: 0 };
			if (checked.C) { score1.a += 1; score2.a += 1; }
			if (checked.E) { score1.a += 2; score2.b += 2; }
			if (!checked.c) { score1.b += 1; score2.b += 1; }
			if (!checked.e) { score1.b += 2; score2.a += 2; }

			if ((score1.a == score2.a && score1.b == score2.b) ||
				(score1.a == score2.b && score1.b == score2.a)) {
				generateRh(checked.D, score1.a, score1.b, result);

			} else {
				generateRh(checked.D, score1.a, score1.b, result);
				generateRh(checked.D, score2.a, score2.b, result);
			}
		}

		// sort result by frequency
		result = result.sort((a, b) => {
			if (a.freq < b.freq) return 1;
			if (a.freq > b.freq) return -1;
			if (a.freq == b.freq) return 0;
		});

		// convert frequency in population to percentage chance of each possible haplotype
		let freqSum = result.reduce((sum, x) => sum + x.freq, 0);
		let multiplier = 100 / freqSum;

		// write back to sidebar.
		const phenSpan = document.querySelector('#genotypeList');
		phenSpan.innerHTML = "";
		for (let r of result) {
			r.str = r.str.padEnd(4, ' ');
			r.str = r.str.replaceAll('0', '<sub>0</sub>');
			r.str = r.str.replaceAll('1', '<sub>1</sub>');
			r.str = r.str.replaceAll('2', '<sub>2</sub>');
			r.str = r.str.replaceAll('Z', '<sub>Z</sub>');
			r.str = r.str.replaceAll('y', '<sup>y</sup>');
			const percentage = round(r.freq * multiplier, 2).toFixed(2).padStart(6, ' ') + "%";
			phenSpan.innerHTML += `${r.str} : ${percentage}<br />`;
		}

		// Phen	sum			possible haplotypes
		//					DD		Dd		dD		dd
		//--------------------------------------------------
		//ccee	0 = 0 + 0	R0R0	R0r				rr
		//Ccee	1 = 0 + 1	R0R1	R1r		R0r'	rr'
		//CCee	2 = 1 + 1	R1R1	R1r'			r'r'
		//ccEe	2 = 2 + 0	R0R2	R2r		R0r"	rr"
		//CcEe	3 = 1 + 2	R1R2	R2r'	R1r"	r'r"
		//CcEe	3 = 3 + 0	R0Rz	Rzr		R0ry	rry
		//ccEE	4 = 2 + 2	R2R2	R2r"			r"r"
		//CCEe	4 = 1 + 3	R1Rz	Rzr'	R1ry	r'ry
		//CcEE	5 = 2 + 3	R2Rz	Rzr"	R2ry	r"ry
		//CCEE	6 = 3 + 3	RzRz	Rzry			ryry

		//// simple cases where they are the same
		//// homozygous RhCE cases are simple, 3 options based on D.					haplotype
		//if (score1 == 0 && score2 == 0) { } //	ccee	R0R0 / R0r / rr				sums to 0 (0+0)
		//if (score1 == 1 && score2 == 1) { } //	CCee	R1R1 / R1r' / r'r'			sums to 2 (1+1)
		//if (score1 == 2 && score2 == 2) { } //	ccEE	R2R2 / R2r' / r"r"			sums to 4 (2+2)
		//if (score1 == 3 && score2 == 3) { } //	CCEE	RzRz / Rzry / ryry			sums to 6 (3+3)

		//// 1x homozygous, 1x heterozygous, 4 options
		//if (score1 == 1 && score2 == 0) { } //	Ccee	R1R0 / R1r / R0r' / r'r		sums to 1 (1+0)
		//if (score1 == 2 && score2 == 0) { } //	ccEe	R2R0 / R2r / R0r" / r"r		sums to 2 (2+0)
		//if (score1 == 3 && score2 == 1) { } //	CCEe	R1Rz / R1ry / Rzr' / r'ry	sums to 4 (1+3)
		//if (score1 == 3 && score2 == 2) { } //	CcEE	R2Rz / R2ry / Rzr" / r"ry	sums to 5 (2+3)

		//// both aleles heterozygous, 8 options
		//if (score1 == 3 && score2 == 0) { } //	CcEe	R1R2 / R1r" / R2r' / r'r" /	sums to 3 (2+1) or
		//											CcEe	R0Rz / R0ry / Rzr / rry		sums to 3 (3+0)

		// Rh Null (0,3) = null for both
		// (0,3), (2,3), (2,1), (0,1) = null for C
		// (0,3), (1,3), (1,2), (0,2) = null for E
	}
	*/
}