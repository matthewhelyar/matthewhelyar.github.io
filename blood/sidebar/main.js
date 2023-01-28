'use strict';

// globals
let tristateBoxes = [];
let phenotypePopupForm;
let sidebar;


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
})();