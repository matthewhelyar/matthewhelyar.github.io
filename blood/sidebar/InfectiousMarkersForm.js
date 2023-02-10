class InfectiousMarkersForm {
	constructor(markersDiv) {
		this.output = "";
		this.markersDiv = markersDiv;
		this.dropdownDiv = this.markersDiv.querySelector('.dropdownContents');

		this.markers = [
			{ name: 'HIV-1/2 Antibody', box: null, pos: 0, defaultState: 'unchecked', disabled: true },
			{ name: 'HIV-p24 Antigen', box: null, pos: 1, defaultState: 'unchecked', disabled: true },
			{ name: 'HIV Genome', box: null, pos: 2, defaultState: 'unchecked', disabled: true },
			{ name: 'HCV Antibody', box: null, pos: 3, defaultState: 'unchecked', disabled: true },
			{ name: 'HCV Antigen', box: null, pos: 4, defaultState: 'indeterminate', disabled: true }, // apparently not tested by NHSBT
			{ name: 'HCV Genome', box: null, pos: 5, defaultState: 'unchecked', disabled: true },
			{ name: 'HBc Antibody', box: null, pos: 6, defaultState: 'unchecked', disabled: true },
			{ name: 'HBs Antigen', box: null, pos: 7, defaultState: 'unchecked', disabled: true },
			{ name: 'HBV Genome', box: null, pos: 8, defaultState: 'unchecked', disabled: true },
			{ name: 'HTLV-I/II Antibody', box: null, pos: 9, defaultState: 'unchecked', disabled: true },
			{ name: 'Syphilis Antibody', box: null, pos: 10, defaultState: 'unchecked', disabled: true },
			{ name: 'CMV Antibody', box: null, pos: 11, defaultState: 'indeterminate', disabled: false },
			{ name: 'CMV Genome', box: null, pos: 12, defaultState: 'indeterminate', disabled: true },
			{ name: 'EBV Genome', box: null, pos: 13, defaultState: 'indeterminate', disabled: true },
			{ name: 'WNV Genome', box: null, pos: 14, defaultState: 'indeterminate', disabled: false },
			{ name: 'Parvovirus B19 Antibody', box: null, pos: 15, defaultState: 'indeterminate', disabled: true },
			{ name: 'Parvovirus B19 Genome', box: null, pos: 16, defaultState: 'indeterminate', disabled: true },
			{ name: 'Chagas (T. Cruzi) Antibody', box: null, pos: 17, defaultState: 'indeterminate', disabled: false },
			{ name: 'HEV Genome', box: null, pos: 18, defaultState: 'unchecked', disabled: true },
			{ name: 'Malaria (P.F. / P.V.) Antibody', box: null, pos: 999, defaultState: 'indeterminate', disabled: false } // pos 999 because not in barcode but still included as may be in text
		];

		for (let x of this.markers.sort((a, b) => a.name > b.name)) {
			const div = document.createElement('div');
			div.addEventListener('click', (event) => {
				let t = div.children[0].children[0]; //span2
				if (event.target != t)
					t.click();
			});
			div.classList.add("dropdownItem");
			this.dropdownDiv.appendChild(div);

			const span1 = document.createElement('span');
			span1.innerHTML = `${x.name}: `;
			span1.classList.add("checkboxLabel");
			div.appendChild(span1);

			const span2 = document.createElement('span');
			span2.setAttribute('id', x.name.replace(/\s/g, '_'));
			span2.classList.add("tristateBox");
			span2.classList.add(x.defaultState);
			span2.classList.add("floatingCheckbox");
			if (x.disabled) span2.classList.add("disabled");
			span1.appendChild(span2);

			x.box = new TristateBox(span2);
			x.box.postChangeCallback = this.updateOutput.bind(this);
			tristateBoxes.push(x.box);
		}

		this.updateOutput(this, null);
	}

	updateOutput(_discard, event) {
		this.output = '&"';

		let sortedMarkers = this.markers.sort((a, b) => a.pos > b.pos);
		// don't include malaria, it's not in the barcode.
		sortedMarkers = sortedMarkers.filter(x => x.pos < 37);
		for (let i = 0; i < sortedMarkers.length; i += 2) {
			let a = sortedMarkers[i].box.stateIndex * 3;
			let b = (sortedMarkers[i + 1]) ? sortedMarkers[i + 1].box.stateIndex : 0;
			this.output += (a + b).toString();
		}

		// reserved
		this.output += '00000000';

		console.log(this.output);
	}
}