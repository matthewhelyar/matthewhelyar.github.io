import { DATAMatrix } from './lib/datamatrix.js';
import { Codabar } from './lib/codabar.js';
import { Code128 } from './lib/code128.js';

export class BarcodeGenerator {
	generateBarcodefromId(value: string, svgId: string, format: string) {
		this.generateBarcode(value, document.getElementById(svgId)!, format);
	}

	generateBarcode(text: string, oldSvg: HTMLElement, format: string) {
		const x: string = oldSvg.getAttribute('x')!;
		const y: string = oldSvg.getAttribute('y')!;
		const h: string = oldSvg.getAttribute('height')!;
		const w: string = oldSvg.getAttribute('width')!;

		const parent: ParentNode = oldSvg.parentNode!;
		const id: string = oldSvg.getAttribute("id")!;
		oldSvg.remove();

		let newSvg;
		if (format == "code128") {
			newSvg = Code128({
				msg: text,
				dim: [parseFloat(w), parseFloat(h)],
				pad: [0, 0],
				pal: ["#000", "#fff"]
			});
		}
		else if (format == "codabar") {
			newSvg = Codabar({
				msg: text,
				dim: [parseFloat(w), parseFloat(h)],
				pad: [0, 0],
				pal: ["#000", "#fff"],
				ratio: 2.25
			});
		}

		newSvg.setAttribute("id", id);
		newSvg.setAttribute('title', text);
		newSvg.setAttribute('preserveAspectRatio', 'none');
		newSvg.setAttribute('x', x);
		newSvg.setAttribute('y', y);
		newSvg.setAttribute('width', w);
		newSvg.setAttribute('height', h);
		parent.appendChild(newSvg);
	}

	generateDataMatrix(din: string, group: string, product: string, expiry: string, phenotype: string) {
		if (!din || !group || !product || !expiry) return;

		const parent = document.getElementById("blood_unit");
		if (!parent) return;
		// concatenate string in one of 2 formats. Either RT017-ICCBBA format 10 or 3.
		// don't know which NHSBT will use. Could also conceivably use format 9.
		let text = "";
		if (phenotype) {
			const numberOfStructures = 5;
			const messageCode = 10;
			const leader = "=+" + String(numberOfStructures).padStart(2, '0') + String(messageCode).padStart(3, '0');
			text = leader + din + group + product + expiry + phenotype;
		}
		else {
			const numberOfStructures = 4;
			const messageCode = 3;
			const leader = "=+" + String(numberOfStructures).padStart(2, '0') + String(messageCode).padStart(3, '0');
			text = leader + din + group + product + expiry;
		}

		// remove old element with this id
		const id = "dmSvg"
		let oldSvg = document.getElementById(id);
		if (oldSvg) oldSvg.remove();

		// make a new svg element and append it to parent.
		let svg = DATAMatrix({
			msg: text,
			dim: 10, // only 10mm because inside blood_unit SVG. if it was outside it would need to be about dim:38
			// max size in specification is 13mm square. Typical size in example for blood label is 8mm square.
			pad: 0,
			pal: ["#000", "#fff"],
		});
		svg.setAttribute("id", id);
		svg.setAttribute('title', text);
		parent.appendChild(svg);
	}
}

