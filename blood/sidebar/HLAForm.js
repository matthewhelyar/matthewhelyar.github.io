
class HLAForm {
	constructor(hlaDiv, hlaASelect, hlaBSelect) {
		this.hlaDiv = hlaDiv;
		this.hlaASelect = hlaASelect;
		this.hlaBSelect = hlaBSelect;

		this.hlaAList = [
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

		this.hlaBList = [
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

		this.hpaList = [
			'HPA-1a',
			'HPA-1b',
			'HPA-2a',
			'HPA-2b',
			'HPA-3a',
			'HPA-3b',
			'HPA-4a',
			'HPA-4b',
			'HPA-5a',
			'HPA-5b',
			'HPA-6bw',
			'HPA-7bw',
			'HPA-15a',
			'HPA-15b',
		];

		this.hlaAList.forEach(x => this.hlaASelect.add(new Option(x.text, x.value), undefined));
		this.hlaBList.forEach(x => this.hlaBSelect.add(new Option(x.text, x.value), undefined));

		this.hpaList.forEach(x => {
			const dropdownDiv = this.hlaDiv.querySelector('.dropdownContents');

			const div = document.createElement('div');
			div.setAttribute('onclick', "let t = this.children[0].children[0]; if (event.target != t) t.click();");
			div.classList.add("dropdownItem");
			dropdownDiv.appendChild(div);

			const span1 = document.createElement('span');
			span1.innerHTML = `${x}: `;
			span1.classList.add("checkboxLabel");
			div.appendChild(span1);

			const span2 = document.createElement('span');
			span2.classList.add("tristateBox");
			span2.classList.add("indeterminate");
			span2.classList.add("floatingCheckbox");
			span1.appendChild(span2);

			tristateBoxes.push(new TristateBox(span2));

		});
	}
}
