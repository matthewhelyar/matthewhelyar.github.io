class PhenotypePopupForm {
	constructor(phenotypeForm, phenotypeDisplay) {

		this.phenotypes = {
			unk: ['M', 'N', 'S', 's', 'K', 'k', 'Lea', 'Leb', 'Fya', 'Fyb', 'Jka', 'Jkb', 'Cw', 'Mia', 'U', 'P1', 'Lua', 'Kpa', 'Doa', 'Dob', 'Ina', 'Cob', 'Dia', 'VS/V', 'Jsa'],
			pos: [],
			neg: []
		};

		this.form = phenotypeForm;
		this.openButton = phenotypeDisplay.querySelector('#openPhenotypesFormButton');
		this.cancelButton = this.form.querySelector('#phenotypesCancelButton');
		this.submitButton = this.form.querySelector('#phenotypesSubmitButton');
		this.sidebarUnkSpan = phenotypeDisplay.querySelector('#phUnk');
		this.sidebarNegSpan = phenotypeDisplay.querySelector('#phNeg');
		this.sidebarPosSpan = phenotypeDisplay.querySelector('#phPos');
		this.formUnkSelect = this.form.querySelector('#phenUnk');
		this.formNegSelect = this.form.querySelector('#phenNeg');
		this.formPosSelect = this.form.querySelector('#phenPos');

		this.writeToSidebar(this.sidebarUnkSpan, this.phenotypes.unk);
		this.writeToSidebar(this.sidebarPosSpan, this.phenotypes.pos);
		this.writeToSidebar(this.sidebarNegSpan, this.phenotypes.neg);

		for (let d of this.form.querySelectorAll(".draggableOption")) {
			d.addEventListener('dragstart', this.dragStart.bind(this));
		}

		for (let d of this.form.querySelectorAll(".dragSelect")) {
			d.addEventListener('drop', this.dropSelect.bind(this));
			d.addEventListener('dragover', (e) => { e.preventDefault(); });
		}

		this.openButton.addEventListener('click', this.open.bind(this));
		this.cancelButton.addEventListener('click', this.reset.bind(this));
		this.submitButton.addEventListener('click', this.submit.bind(this));
	}

	alphabeticCaseSort(x, y) {
		// sort alphabetically accounting for case.
		if (x === y) return 0;
		if (x.toUpperCase() == y.toUpperCase) {
			if (x < y) return -1;
			if (x > y) return 1;
		}
		if (x.toUpperCase() < y.toUpperCase()) return -1;
		if (x.toUpperCase() > y.toUpperCase()) return 1;
		return 0;
	}

	clearSelect(select) {
		if (!select || !select.options) return;
		for (let opt of select.options)
			opt.selected = false;
	}

	dragStart(e) {
		e.dataTransfer.setData('text/plain', e.target.id);
	}

	dropSelect(e) {
		const id = e.dataTransfer.getData('text/plain');
		if (id == "") return;

		const draggable = document.getElementById(id);
		if (!draggable) return;

		let select;
		switch (e.target.tagName) {
			case "SELECT":
				select = e.target;
				break;
			case "OPTION":
				select = e.target.parentNode;
				break;
			default:
				return;
		}

		// insert alphabetically
		let i = 0;
		while (i < select.options.length && this.alphabeticCaseSort(draggable.text, select.options[i].text) == 1)
			i++;

		select.add(draggable, select.options[i]);

		this.clearSelect(select);
	}

	open() {
		if (getComputedStyle(this.form).getPropertyValue('display') != "none")
			return;
		this.reset();
		this.form.style.display = "block";
	}

	submit() {
		function saveFromForm(select, array) {
			array.length = 0;
			for (let p of select.options)
				array.push(p.value);
		}

		saveFromForm(this.formUnkSelect, this.phenotypes.unk);
		saveFromForm(this.formNegSelect, this.phenotypes.pos);
		saveFromForm(this.formPosSelect, this.phenotypes.neg);

		this.writeToSidebar(this.sidebarUnkSpan, this.phenotypes.unk);
		this.writeToSidebar(this.sidebarPosSpan, this.phenotypes.pos);
		this.writeToSidebar(this.sidebarNegSpan, this.phenotypes.neg);

		this.form.style.display = "none";
	}

	reset() {
		this.writeToForm(this.formUnkSelect, this.phenotypes.unk);
		this.writeToForm(this.formNegSelect, this.phenotypes.pos);
		this.writeToForm(this.formPosSelect, this.phenotypes.neg);
		this.form.style.display = "none";
	}

	writeToForm(select, array) {
		select.options.length = 0;
		array = array.sort(this.alphabeticCaseSort);
		for (let o of array) {
			let option = document.createElement('option');
			option.id = "phenOption_" + o;
			option.text = o;
			option.classList.add("draggableOption");
			option.draggable = "true";
			option.addEventListener('dragstart', this.dragStart.bind(this));
			select.appendChild(option);
		}
	}

	writeToSidebar(span, array) {
		span.textContent = "";
		for (let i = 0; i < array.length; i++) {
			span.textContent += array[i];
			if (i != array.length - 1)
				span.textContent += ", ";
		}
	}

	//getSelectValues(select) {
	//// was going to be used for multiple select drag, but drag and multi select interfere with each other.
	//	if (!select || !select.options) return;
	//	let result = [];
	//	for (let opt of select.options)
	//		if (opt.selected)
	//			result.push(opt.value);
	//	return result;
	//}
};