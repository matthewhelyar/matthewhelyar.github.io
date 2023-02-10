/* Tristate Checkbox by M. Helyar 2023
 * 
 * To use:
 * Add <span class="tristateBox"></span> to HTML.
 * Add classes 'unchecked', 'checked', 'indeterminate' and 'disabled' to HTML to set default.
 * make a new TristateBox and pass in that element. e.g. let obj = new TristateBox(document.querySelector('.tristateBox'));
 * 
 * You can add Event Listeners to either the DOM element or the javascript object. (N.B. MAY BE RACE CONDITION FOR EVENT HANDLERS)
 * If you want something to happen AFTER the state has changed, pass the function in as callback or set with setPostChangeCallback 
 * You can publicly read state with object.state and compare it with object.states. Problem is can only be one callback, instead of 
 * multiple event listeners.
 * 
 * 
 */

class TristateBox {
	states = ['indeterminate', 'unchecked', 'checked'];

	constructor(tristateBox, callback) {
		this.box = tristateBox;
		this.postChangeCallback = callback;
		this.box.addEventListener('click', this.nextState.bind(this));
		if (!this.state) { this.box.classList.add(this.states[0]); }
	}

	get isEnabled() { return !this.box.classList.contains('disabled'); }

	get state() { return this.states.filter((obj) => { return this.box.classList.contains(obj); })[0]; }

	get stateIndex() { return this.states.indexOf(this.state); }

	setPostChangeCallback(callback) { this.postChangeCallback = callback; };

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

		if (this.postChangeCallback) this.postChangeCallback();
	}

	addEventListener(e, f) { this.box.addEventListener(e, f); }

	removeEventListener(e, f) { this.box.removeEventListener(e, f); }
}