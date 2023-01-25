/* Tristate Checkbox by M. Helyar 2023
 * 
 * To use:
 * Add <div class="tristateBox"></div> to HTML.
 * Add classes 'unchecked', 'checked', 'indeterminate' and 'disabled' to HTML to set default.
 * make a new TristateBox and pass in that element. e.g. let obj = new TristateBox(document.querySelector('.tristateBox'));
 * 
 * You can add Event Listeners to either the DOM element or the javascript object.
 * You can publicly read state with object.state and compare it with object.states.
 */

class TristateBox {
	states = ['unchecked', 'checked', 'indeterminate'];

	constructor(tristateBox) {
		this.box = tristateBox;
		this.box.addEventListener('click', this.nextState.bind(this));
		if (!this.state) {this.box.classList.add(this.states[0]) }
	}

	get isEnabled() { return !this.box.classList.contains('disabled'); }

	get state() { return this.states.filter((obj) => { return this.box.classList.contains(obj); })[0]; }

	enable() {
		this.box.classList.remove('disabled');
		this.box.addEventListener('click', this.nextState.bind(this));
	}

	disable() {
		this.box.classList.add('disabled');
		this.box.removeEventListener('click', this.nextState.bind(this));
	}

	nextState() {
		if (!this.isEnabled) return;
		const currentState = this.state;
		if (!currentState) return;
		const nextStateIndex = (this.states.indexOf(currentState) + 1) % this.states.length;
		this.box.classList.remove(currentState);
		this.box.classList.add(this.states[nextStateIndex]);
	}

	addEventListener(e, f) { this.box.addEventListener(e, f); }

	removeEventListener(e, f) { this.box.removeEventListener(e, f); }
}