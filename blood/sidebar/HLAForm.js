
class HLAForm {
	constructor(hlaDiv) {
		function createHlaDiv(parentDiv, allele, _this) {
			const itemDiv = document.createElement('div');
			itemDiv.classList.add('dropdownItem');

			const label = document.createElement('label');
			label.setAttribute('style', 'display: block; width: 100%; user-select: none;');
			label.innerHTML = allele.name + ': \n';

			allele.select.classList.add('sidebarSelect');
			//allele.select.setAttribute('id', allele.name.replace(/\s/g, '_'));

			allele.options.forEach(x => allele.select.add(new Option(x.text, x.value), undefined));

			label.appendChild(allele.select);
			itemDiv.appendChild(label);
			parentDiv.appendChild(itemDiv);

			allele.select.addEventListener('change', _this.updateOutput.bind(_this, event));
		}

		this.output = "";
		this.hlaDiv = hlaDiv;
		this.dropdownDiv = this.hlaDiv.querySelector('.dropdownContents');

		{
			const hlaAList = [
				{ value: "00", text: "not tested" },
				{ value: "01", text: "A1" },
				{ value: "02", text: "A2 / A203 / A210" },
				{ value: "03", text: "A3" },
				{ value: "09", text: "A9" },
				{ value: "10", text: "A10" },
				{ value: "11", text: "A11" },
				{ value: "19", text: "A19" },
				{ value: "23", text: "A23" },
				{ value: "24", text: "A24 / A2403" },
				{ value: "25", text: "A25" },
				{ value: "26", text: "A26" },
				{ value: "28", text: "A28" },
				{ value: "29", text: "A29" },
				{ value: "30", text: "A30" },
				{ value: "31", text: "A31" },
				{ value: "32", text: "A32" },
				{ value: "33", text: "A33" },
				{ value: "34", text: "A34" },
				{ value: "36", text: "A36" },
				{ value: "43", text: "A43" },
				{ value: "66", text: "A66" },
				{ value: "68", text: "A68" },
				{ value: "69", text: "A69" },
				{ value: "74", text: "A74" },
				{ value: "80", text: "A80" },
				{ value: "99", text: "no information" }
			];

			const hlaBList = [
				{ value: "00", text: "not tested" },
				{ value: "05", text: "B5" },
				{ value: "07", text: "B7 / B703" },
				{ value: "08", text: "B8" },
				{ value: "12", text: "B12" },
				{ value: "13", text: "B13" },
				{ value: "14", text: "B14" },
				{ value: "15", text: "B15" },
				{ value: "16", text: "B16" },
				{ value: "17", text: "B17" },
				{ value: "18", text: "B18" },
				{ value: "21", text: "B21" },
				{ value: "22", text: "B22" },
				{ value: "27", text: "B27 / B2708" },
				{ value: "35", text: "B35" },
				{ value: "37", text: "B37" },
				{ value: "38", text: "B38" },
				{ value: "39", text: "B39" },
				{ value: "40", text: "B40 / B4005" },
				{ value: "41", text: "B41" },
				{ value: "42", text: "B42" },
				{ value: "44", text: "B44" },
				{ value: "45", text: "B45" },
				{ value: "46", text: "B46" },
				{ value: "47", text: "B47" },
				{ value: "48", text: "B48" },
				{ value: "49", text: "B49" },
				{ value: "50", text: "B50" },
				{ value: "51", text: "B51 / B5102 / B5103" },
				{ value: "52", text: "B52" },
				{ value: "53", text: "B53" },
				{ value: "54", text: "B54" },
				{ value: "55", text: "B55" },
				{ value: "56", text: "B56" },
				{ value: "57", text: "B57" },
				{ value: "58", text: "B58" },
				{ value: "59", text: "B59" },
				{ value: "60", text: "B60" },
				{ value: "61", text: "B61" },
				{ value: "62", text: "B62" },
				{ value: "63", text: "B63" },
				{ value: "64", text: "B64" },
				{ value: "65", text: "B65" },
				{ value: "67", text: "B67" },
				{ value: "70", text: "B70" },
				{ value: "71", text: "B71" },
				{ value: "72", text: "B72" },
				{ value: "73", text: "B73" },
				{ value: "75", text: "B75" },
				{ value: "76", text: "B76" },
				{ value: "77", text: "B77" },
				{ value: "78", text: "B78" },
				{ value: "81", text: "B81" },
				{ value: "82", text: "B82" },
				{ value: "83", text: "B83" },
				{ value: "99", text: "no information" }
			];

			this.hlaAlleles = [
				{ name: 'HLA-A (allele 1)', select: document.createElement('select'), options: hlaAList },
				{ name: 'HLA-A (allele 2)', select: document.createElement('select'), options: hlaAList },
				{ name: 'HLA-B (allele 1)', select: document.createElement('select'), options: hlaBList },
				{ name: 'HLA-B (allele 2)', select: document.createElement('select'), options: hlaBList }
			];
			this.hlaAlleles.forEach(allele => createHlaDiv(this.dropdownDiv, allele, this));
		}

		{
			this.hpaList = [
				{ name: 'HPA-1a', box: null, pos: 0 },
				{ name: 'HPA-1b', box: null, pos: 1 },
				{ name: 'HPA-2a', box: null, pos: 2 },
				{ name: 'HPA-2b', box: null, pos: 3 },
				{ name: 'HPA-3a', box: null, pos: 4 },
				{ name: 'HPA-3b', box: null, pos: 5 },
				{ name: 'HPA-4a', box: null, pos: 6 },
				{ name: 'HPA-4b', box: null, pos: 7 },
				{ name: 'HPA-5a', box: null, pos: 8 },
				{ name: 'HPA-5b', box: null, pos: 9 },
				{ name: 'HPA-6bw', box: null, pos: 11 },
				{ name: 'HPA-7bw', box: null, pos: 13 },
				{ name: 'HPA-15a', box: null, pos: 10 },
				{ name: 'HPA-15b', box: null, pos: 12 },
			];

			this.hpaList.forEach(x => {
				const div = document.createElement('div');
				div.setAttribute('onclick', "let t = this.children[0].children[0]; if (event.target != t) t.click();");
				div.classList.add("dropdownItem");
				this.dropdownDiv.appendChild(div);

				const span1 = document.createElement('span');
				span1.innerHTML = `${x.name}: `;
				span1.classList.add("checkboxLabel");
				div.appendChild(span1);

				const span2 = document.createElement('span');
				span2.classList.add("tristateBox");
				span2.classList.add("indeterminate");
				span2.classList.add("floatingCheckbox");
				span1.appendChild(span2);

				x.box = new TristateBox(span2);
				x.box.postChangeCallback = this.updateOutput.bind(this);
				tristateBoxes.push(x.box);
			});
		}

		const cmv = tristateBoxes.find(x => x.box.getAttribute('id') == 'CMV_Antibody');
		const iga = tristateBoxes.find(x => x.box.getAttribute('id') == 'IgA');
		const ht = tristateBoxes.find(x => x.box.getAttribute('id') == 'HT');
		cmv.box.addEventListener('click', this.updateOutput.bind(this)); // may be a race condition, seems OK for now.
		iga.box.addEventListener('click', this.updateOutput.bind(this)); // may be a race condition, seems OK for now.
		ht.box.addEventListener('click', this.updateOutput.bind(this));  // may be a race condition, seems OK for now.

		this.updateOutput(this, null);
	}

	// need to put event listeners to this function to iga, cmv and HT boxes.
	updateOutput(_discard, event) {
		this.output = '&{';
		// HLA
		this.hlaAlleles.forEach(a => this.output += a.select.value);

		// HPA
		let sortedHpa = this.hpaList.sort((a, b) => a.pos > b.pos);
		for (let i = 0; i < sortedHpa.length; i += 2) {
			let a = sortedHpa[i].box.stateIndex * 3;
			let b = sortedHpa[i + 1].box.stateIndex;
			this.output += (a + b).toString();
		}

		// IgA, CMV *** N.B. I HAVE ASSUMED IT'S THE CMV ANTIBODY. IT MIGHT NOT BE ***
		const cmv = tristateBoxes.find(x => x.box.getAttribute('id') == 'CMV_Antibody');
		const iga = tristateBoxes.find(x => x.box.getAttribute('id') == 'IgA');
		this.output += (iga.stateIndex * 3 + cmv.stateIndex).toString();

		// reserved
		this.output += '0';

		// HT
		const ht = tristateBoxes.find(x => x.box.getAttribute('id') == 'HT');
		this.output += (+(ht.state == 'unchecked')).toString(); // '1' if neg, otherwise '0'.

		console.log(this.output);
	}
}
