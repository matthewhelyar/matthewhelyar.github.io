class BarcodeGenerator {
    generateBarcodefromId(value, svgId, format) {
        this.generateBarcode(value, document.getElementById(svgId), format);
    }

    generateBarcode(value, svg, format) {
        // store existing size attribtues
        if (svg == null) return;
        const x = svg.getAttribute('x');
        const y = svg.getAttribute('y');
        const h = svg.getAttribute('height');
        const w = svg.getAttribute('width');

        // generate new SVG
        JsBarcode(svg, value, {
            format: format,
            displayValue: false,
            margin: 0,
        });

        // set the SVG's attributes back to the stored ones.
        svg.setAttribute('preserveAspectRatio', 'none')
        svg.setAttribute('x', x);
        svg.setAttribute('y', y);
        svg.setAttribute('width', w);
        svg.setAttribute('height', h);

        svg.setAttribute('title', value);
    }

    generateDataMatrix(din, group, product, expiry, phenotype) {
        if (!din || !group || !product || !expiry) return;

        const parent = document.getElementById("blood_unit");

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
        //console.log(text);

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

