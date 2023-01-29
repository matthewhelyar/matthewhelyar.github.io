'use strict';

// globals
let tristateBoxes = [];
let phenotypePopupForm;
let sidebar;


let triggerBarcode = '';

function handleBarcodeScan(event) {
	//console.log(event.type);
	// barcode inputs probably won't input shift, but teseting 
	//with a keyboard messes up this function, so ignore shift.
	if (event.key == 'Shift') return;

	// start looking for ISBT inputs
	if (event.key == '=' || event.key == '&') {
		triggerBarcode = event.key;
		return;
	}

	// handling second character of ISBT barcode inputs.
	if (triggerBarcode == '=') {
		if (event.key == '%') { console.log("set group from barcode"); }
		else if (event.key == '<') { console.log("set product from barcode"); }
		else { console.log("set DIN from barcode"); }
		triggerBarcode = '';
	}
	else if (triggerBarcode == '&') {
		if (event.key == '>') { console.log("set expiry date from barcode"); }
		else if (event.key == '\\') { console.log("set red cell antigens from barcode"); }
		else if (event.key == '{') { console.log("set HLA/HPA antigens from barcode"); }
		else if (event.key == '\"') { console.log("set infectious markers from barcode"); }
		else if (event.key == '*') { console.log("set collection date from barcode"); }
		triggerBarcode = '';
	}
}

(function init() {
	// set up tristateBoxes.
	document.querySelectorAll('.tristateBox').forEach((box) => {
		tristateBoxes.push(new TristateBox(box));
	});

	sidebar = new Sidebar(document.querySelector('#sidebar'));

	phenotypePopupForm = new PhenotypePopupForm(
		document.querySelector('#phenotypePopup'),
		document.querySelector('#phenotypeDisplay')
	);

	// don't know which it would be.
	document.querySelector('body').addEventListener('keyup', handleBarcodeScan.bind(event));
	document.querySelector('body').addEventListener('keydown', handleBarcodeScan.bind(event));
})();