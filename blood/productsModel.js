// everything to do with the products form, products filter, products label.

class ProductsForm {
    constructor(productLabel, components) {
        if (!productLabel) alert("Product Label Undefined");
        this.productLabel = productLabel;
        this.components = components;

        this.componentSelect = document.getElementById("product_type_select");
        this.irradiatedIn = document.getElementById("irradiated_in");
        this.specialIn = document.getElementById("special_in");
        this.availableIn = document.getElementById("available_in");

        this.productSelect = document.getElementById("product_select");
        this.cmvIn = document.getElementById('cmv_in');
        this.hbsIn = document.getElementById('hbs_in');

        const init = (() => {
            for (let c of this.components) {
                this.componentSelect.add(new Option(c.text, c.name), undefined);
            }
            this.componentSelect.addEventListener("change", this.productFiltersChanged.bind(this));
            this.irradiatedIn.addEventListener("change", this.productFiltersChanged.bind(this));
            this.specialIn.addEventListener("change", this.productFiltersChanged.bind(this));
            this.availableIn.addEventListener("change", this.productFiltersChanged.bind(this));
            this.productSelect.addEventListener("change", this.selectedProductChanged.bind(this));

            this.updateProductsSelect();
            this.productFiltersChanged();
        })();
    }

    updateProductsSelect() {
        // store currently selected product code:
        const currentlySelectedProduct = this.productSelect.value;

        // clear options from this.productSelect
        while (this.productSelect.length > 0) {
            this.productSelect.remove(0);
        }

        // filter products as per form
        const filteredProducts = products.filter(x => {
            return x.component.name === this.componentSelect.value &&
                x.irr === this.irradiatedIn.checked &&
                x.special === this.specialIn.checked &&
                x.availability >= this.availableIn.checked;
        });

        // add options to this.productSelect
        for (const p of filteredProducts) {
            let text = (p.pack > 0) ? p.text + " (" + p.pack + ")" : p.text;
            if (!p.availability) text += " [unavailable]";
            this.productSelect.add(new Option(text, p.code), undefined);
        }

        // if new list contains same product, select it, otherwise generate new label.
        const selectedIndex = filteredProducts.findIndex(x => { return x.code === currentlySelectedProduct });
        if (selectedIndex != -1)
            this.productSelect.value = currentlySelectedProduct;
        else
            this.selectedProductChanged();
    }

    productFiltersChanged() {
        //console.log("productFiltersChanged()" + dayjs());
        // update DOM elements of the product form based on product type
        const selectedComponent = this.components.find(x => { return x.name === this.componentSelect.value });

        if (!selectedComponent) return;

        this.irradiatedIn.disabled = !selectedComponent.irradPossible;
        this.specialIn.disabled = !selectedComponent.specialPossible;
        if (!selectedComponent.irradPossible) this.irradiatedIn.checked = false;
        if (!selectedComponent.specialPossible) this.specialIn.checked = false;

        // special case, force irradiated for granulocytes but disable the button.
        if (selectedComponent.name == "G") {
            this.irradiatedIn.checked = true;
            this.irradiatedIn.disabled = true;
        }

        // update things that might have changed because product list changed.
        this.updateProductsSelect();

        // cmv/hbs  from stuff, it changes with the product, but also it isn't on the product form so maybe should be somewhere else. e.g. group form class.
        this.cmvIn.disabled = !selectedComponent.cmvPossible;
        this.hbsIn.disabled = !selectedComponent.hbsPossible;
        if (!selectedComponent.cmvPossible) this.cmvIn.checked = false;
        if (!selectedComponent.hbsPossible) this.hbsIn.checked = false;

        // this is label stuff, so should move to a different class. - currently global, but is on the group label, so move to that class when done.
        updateCmvHbsLabel(this.cmvIn.checked, this.hbsIn.checked);
    }

    selectedProductChanged() {
        setExpiryDate(); // call to global function for now
        this.productLabel.generateProductLabel(this.productSelect.value);
    }
}

class ProductsLabel {
    constructor(barcodeGenerator) {
        if (!barcodeGenerator) alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;

        this.productTextFo = document.getElementById('product_text_fo');
        this.packTextBlock = document.getElementById('packTextBlock');
        this.packTextFo = document.getElementById('pack_text_fo');
        this.productTextFoParent = document.getElementById('product_text_fo_parent');
        this.storageTextFo = document.getElementById('storage_text_fo');
        this.linearGradientFluidUrl1 = document.getElementById('linearGradientFluidUrl1');
        this.linearGradientFluidUrl2 = document.getElementById('linearGradientFluidUrl2');
        this.volumeTextFo = document.getElementById('volume_text_fo');
        this.anticoagulantText = document.getElementById('anticoagulant_info');
        this.rhPhenGroup = document.getElementById('rh_phen_group');
        this.rhcSelect = document.getElementById('rhc_select');
        this.rheSelect = document.getElementById('rhe_select');
        this.irradSticker = document.getElementById('irradiated_sticker');
        this.productBarcodeSvg = document.getElementById('product_barcode_svg');
    }

    generateProductLabel(productCode) {
        if (productCode == null || productCode == "") return;

        const selectedProduct = products.find(x => { return x.code === productCode });
        if (selectedProduct == null) return;

        const barcode = "a0" + selectedProduct.code + "3b";

        barcodeGenerator.generateBarcode(barcode, this.productBarcodeSvg, 'codabar');

        this.productTextFo.textContent = selectedProduct.text;

        // default font settings then shrink to fit if necessary
        this.productTextFo.style.fontSize = "9pt";
        this.productTextFo.style.letterSpacing = "0px";
        shrinkLetterSpacingToFitParent(this.productTextFo, this.productTextFoParent);  /// currently global, to move in here or somewhere else?

        if (selectedProduct.pack < 1) {
            this.packTextFo.textContent = "";
            this.packTextBlock.style.visibility = "hidden";
        }
        else {
            this.packTextFo.textContent = "PACK " + String(selectedProduct.pack).padStart(2, '0');
            this.packTextBlock.style.visibility = "visible";
        }

        this.storageTextFo.innerHTML = selectedProduct.component.storageText;
        this.linearGradientFluidUrl1.setAttribute("xlink:href", "#linearGradientFluid" + selectedProduct.component.color);
        this.linearGradientFluidUrl2.setAttribute("xlink:href", "#linearGradientFluid" + selectedProduct.component.color);
        this.volumeTextFo.innerHTML = "Volume<br />" + selectedProduct.volume + " mL";
        this.anticoagulantText.style.visibility = selectedProduct.component.anticoagulantTextVisibility;
        this.rhPhenGroup.style.visibility = selectedProduct.component.rhPhenVisibility;
        this.rhcSelect.disabled = (selectedProduct.component.rhPhenVisibility == "hidden");
        this.rheSelect.disabled = (selectedProduct.component.rhPhenVisibility == "hidden");
        this.irradSticker.style.visibility = selectedProduct.irr ? "visible" : "hidden";
    }
}