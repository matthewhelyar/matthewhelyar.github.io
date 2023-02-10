class DinForm {
	constructor(finInput, yearInput, seqInput) {
		this.finIn = finInput;
		this.yearIn = yearInput;
		this.seqIn = seqInput;

		this.finIn.addEventListener('keydown', this.onKeyDown.bind(this, event));
		this.finIn.addEventListener('keyup', this.validateFin.bind(this, event));
		this.finIn.addEventListener('focusout', this.finalValidate.bind(this));
		this.finIn.addEventListener('focusin', this.selectSingleChar.bind(event));
		this.finIn.addEventListener('click', this.selectSingleChar.bind(event));

		this.yearIn.addEventListener('keydown', this.onKeyDown.bind(this, event));
		this.yearIn.addEventListener('keyup', this.validateYear.bind(this, event));
		this.yearIn.addEventListener('focusout', this.finalValidate.bind(this));
		this.yearIn.addEventListener('focusin', this.selectSingleChar.bind(event));
		this.yearIn.addEventListener('click', this.selectSingleChar.bind(event));

		this.seqIn.addEventListener('keydown', this.onKeyDown.bind(this, event));
		this.seqIn.addEventListener('keyup', this.validateSeq.bind(this, event));
		this.seqIn.addEventListener('focusout', this.finalValidate.bind(this));
		this.seqIn.addEventListener('focusin', this.selectSingleChar.bind(event));
		this.seqIn.addEventListener('click', this.selectSingleChar.bind(event));
	}

	onKeyDown(_discard, event) {

		// try input masking here.
		const t = event.target;
		const l = t.length;
		let s = t.value;
		let c = { start: t.selectionStart, end: t.selectionEnd };
		let char = event.key; //String.fromCharCode(event.keyCode);
		let code = event.keyCode;

		//console.log(code, char);

		if ((code >= 48 && code <= 57) && !event.shiftKey) {
			//console.log("0-9");
		}
		else if (code >= 65 && code <= 90) {
			//console.log("A-Z");
			if (event.target != this.finIn || c.start >= 3)
				event.preventDefault();
		}
		else if (code >= 97 && code <= 122) {
			//console.log("a-z");
			if (event.target != this.finIn || c.start >= 3)
				event.preventDefault();
		}
		else if (code == 8) {
			//console.log("backspace");
		}
		else if (code == 9) {
			//console.log("tab");
		}
		else if (code == 27) {
			//console.log("escape");
		}
		else if (code >= 37 && code <= 40) {
			//console.log("arrow keys");
			// can't change the selection in here.
			//this.handleArrowKeys(event, null, this.yearIn);
		}
		//else if (code == 45) console.log("insert");
		else if (code == 46) {
			//console.log("delete");
		}
		else {
			//console.log("invalid char");
			event.preventDefault(); // don't insert char
		}
	}

	selectSingleChar(event) {
		let t = event.target;
		let l = t.value.length;

		if (t.selectionStart == t.selectionEnd) {
			// any single point select e.g. clicked on a spot.
			t.selectionEnd = Math.min(t.selectionStart + 1, l);
		}

		t.selectionStart = Math.min(Math.max(t.selectionStart, 0), l - 1);
		t.selectionEnd = Math.min(Math.max(t.selectionEnd, 1), l);
	}

	handleArrowKeys(event, prev, next) {
		// returns true if arrow key so can avoid input validation for this keystroke which messes up caret position.
		function gotoPrev() {
			prev.focus();
			prev.selectionStart = prev.value.length - 1;
			prev.selectionEnd = prev.value.length;
		}

		function gotoNext() {
			next.focus();
			next.selectionStart = 0;
			next.selectionEnd = 1;
		}

		let t = event.target;

		// not an arrow key
		if (event.keyCode < 37 || event.keyCode > 40)
			return false;

		// haven't got shift selection working yet
		if (event.shiftKey)
			return true;

		switch (event.keyCode) {
			case 37:
				// left
				if (t.selectionStart == 0) {
					if (prev) {
						gotoPrev();
						return true;
					}
				}
				t.selectionEnd = Math.max(t.selectionStart, 1);
				t.selectionStart = Math.max(t.selectionStart - 1, 0);
				return true;
			case 38:
				// up
				if (prev) gotoPrev();
				return true;
			case 39:
				// right
				if (t.selectionStart == t.value.length) {
					if (next) {
						gotoNext();
						return true;
					}
				}
				t.selectionEnd = Math.min(t.selectionStart + 1, t.value.length);
				t.selectionStart = Math.min(t.selectionStart, t.value.length - 1);
				return true;
			case 40:
				// down
				if (next) gotoNext();
				return true;
		}
		return false;
	}

	validateFin(_discard, event) {
		if (this.handleArrowKeys(event, null, this.yearIn)) return;

		let caret = event.target.selectionStart;
		let s = this.finIn.value.replace(/\s/g, '').toUpperCase().slice(0, 5); // length no more than 5 characters
		// first 3 chars must be A-N, P-Z or 0-9, last 2 chars must be 0-9
		s = s.slice(0, 3).replace(/[^A-NP-Z0-9]/g, '') + s.slice(3).replace(/[^0-9]/g, '');
		this.finIn.value = s;
		event.target.selectionStart = caret;
		event.target.selectionEnd = Math.min(caret + 1, s.length);
		if (event.target.selectionStart >= 5) {
			this.yearIn.focus();
			this.yearIn.selectionStart = 0;
			this.yearIn.selectionEnd = 1;
		}
	}

	finalValidateFin() {
		// to add an error message handler later.
		let error = false;
		let s = this.finIn.value.replace(/\s/g, '');;

		if (s.length != 5) error = true;
		if (/[^A-NP-Z0-9]/g.test(s.slice(0, 3))) error = true;
		if (/[^0-9]/g.test(s.slice(3))) error = true;

		if (error) this.finIn.classList.add('error');
		else {
			this.finIn.value = s.slice(0, 4) + " " + s.slice(4);
			this.finIn.classList.remove('error');
		}
		return !error;
	}

	validateYear(_discard, event) {
		if (this.handleArrowKeys(event, this.finIn, this.seqIn)) return;
		let caret = event.target.selectionStart;
		let s = this.yearIn.value.replace(/[^0-9]/g, '').slice(0, 2); // 2 numbers
		this.yearIn.value = s;
		event.target.selectionStart = caret;
		event.target.selectionEnd = Math.min(caret + 1, s.length);
		if (event.target.selectionStart >= 2) {
			this.seqIn.focus();
			this.seqIn.selectionStart = 0;
			this.seqIn.selectionEnd = 1;
		}
	}

	finalValidateYear() {
		// to add an error message handler later.
		let error = false;
		let s = this.yearIn.value.replace(/\s/g, '');

		if (s.length != 2) error = true;
		if (/[^0-9]/g.test(s)) error = true;

		if (error) this.yearIn.classList.add('error');
		else this.yearIn.classList.remove('error');
		return !error;
	}

	validateSeq(_discard, event) {
		if (this.handleArrowKeys(event, this.yearIn, null)) return;
		let caret = event.target.selectionStart;
		let s = this.seqIn.value.replace(/[^0-9]/g, '').slice(0, 6); // 2 numbers
		this.seqIn.value = s;
		event.target.selectionStart = caret;
		event.target.selectionEnd = Math.min(caret + 1, s.length);
		if (event.target.selectionStart >= 6) {
			this.seqIn.blur(); // don't keep typing, want to eat up the extra barcode characters.
			//this.seqIn.selectionStart = 5;
			//this.seqIn.selectionEnd = this.seqIn.value.length;
		}
	}

	finalValidateSeq() {
		// to add an error message handler later.
		let error = false;
		let s = this.seqIn.value.replace(/\s/g, '');

		if (s.length != 6) error = true;
		if (/[^0-9]/g.test(s)) error = true;

		if (error) this.seqIn.classList.add('error');
		else {
			this.seqIn.value = s.slice(0, 3) + " " + s.slice(3);
			this.seqIn.classList.remove('error');
		}
		return !error;
	}

	finalValidate() {
		let finValid = this.finalValidateFin();
		let yearValid = this.finalValidateYear();
		let seqValid = this.finalValidateSeq();
		if (finValid && yearValid && seqValid)
			this.writeToLabel();
	}

	writeToLabel() {
		//console.log("Writing valid DIN to label");
	}
}