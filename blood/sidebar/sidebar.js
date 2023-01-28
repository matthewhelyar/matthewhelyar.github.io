class Sidebar {
	constructor(sidebarDiv) {
		sidebarDiv.querySelector('#navOpenDiv').addEventListener('click', this.toggleSidebar.bind(this, sidebarDiv));

		sidebarDiv.querySelectorAll('.dropdownButton').forEach((btn) => {
			btn.addEventListener('click', this.toggleDropdown.bind(this, btn.parentNode));
		});

		this.rhForm = new RhForm(
			tristateBoxes.find((b) => { return b.box.id == 'RhD'; }),
			tristateBoxes.find((b) => { return b.box.id == 'RhC'; }),
			tristateBoxes.find((b) => { return b.box.id == 'RhE'; }),
			tristateBoxes.find((b) => { return b.box.id == 'Rhc'; }),
			tristateBoxes.find((b) => { return b.box.id == 'Rhe'; }),
			document.querySelector('#genotypeList')
		);
	}

	toggleDropdown(dropdownDiv) {
		const dropdown = dropdownDiv.querySelector(":scope > .dropdownContents");
		if (!dropdown) return;
		dropdown.style.display = (getComputedStyle(dropdown).getPropertyValue('display') == "none") ? "block" : "none";
	}

	toggleSidebar(sidebar) {
		const t = event.target.getAttribute("id");
		if (t != "navOpenDiv" && t != "navOpen" && t != "sidebarHeading")
			return;

		const scrollbarWidth = sidebar.offsetWidth - sidebar.clientWidth;
		const sidebarWidth = parseInt(getComputedStyle(sidebar).getPropertyValue('width'));
		const handleWidth = parseInt(getComputedStyle(document.querySelector("#navOpenDiv")).getPropertyValue('width'));
		const finalWidth = sidebarWidth - handleWidth - scrollbarWidth;
		document.documentElement.style.setProperty('--animation-width', `-${finalWidth}px`);


		if (getComputedStyle(sidebar).getPropertyValue('left') == "0px") {
			sidebar.style.animation = "right 0.2s";
			sidebar.style.left = `-${finalWidth}px`;
			sidebar.style.resize = "none";
		}
		else {
			sidebar.style.animation = "left 0.2s";
			sidebar.style.left = "0";
			sidebar.style.resize = "horizontal";
		}
	}

	toggleRhDropdown(dropdownDiv, noAlwaysVisibleLines = 1) {
		// always show first line of Rh phenotype list. To use change Rh phenotype div as follows:
		// <a class="sidebarButton" onclick="toggleRhDropdown(this.parentNode, 1);">Possible haplotype(s): <span class="caretDown" /></a>
		// <div class="dropdownContents" style="display:block; box-shadow:none; height: 2em; overflow: hidden;">

		// not used because looks a bit ugly 
		// (and sometimes messes up the sizes of the subscript characters.
		// EDIT: I KNOW WHY IT MESSES UP THE SIZE OF THE SUBSCRIPT CHARACTERS, THAT WAS A CSS THING.)

		const dropdown = dropdownDiv.querySelector(":scope > .dropdownContents");
		if (!dropdown) return;
		console.log(getComputedStyle(dropdown).getPropertyValue('height'));
		dropdown.style.height = (dropdown.style.height == "auto") ? `${0.5 + 1.5 * noAlwaysVisibleLines}em` : "auto";
	}
}