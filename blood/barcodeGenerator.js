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
    }
}

