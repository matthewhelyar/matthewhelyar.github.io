import { BarcodeGenerator } from './barcodeGenerator';
import { DataMatrixBarcode } from './dataMatrixBarcodeModel';
import { DatesForm } from './bledExpiryModel';
import { GroupsLabel } from './groupsModel';
import { Component, products } from './products'

export class ProductsForm {
	productLabel: ProductsLabel;
	groupLabel: GroupsLabel;
	components: Component[];
	datesForm: DatesForm;
	componentSelect: HTMLSelectElement;
	irradiatedIn: HTMLInputElement;
	specialIn: HTMLInputElement;
	availableIn: HTMLInputElement;
	productSelect: HTMLSelectElement;
	cmvIn: HTMLInputElement;
	hbsIn: HTMLInputElement;

	constructor(productLabel: ProductsLabel, components: Component[], groupLabel: GroupsLabel, datesForm: DatesForm) {
		if (!productLabel) alert("Product Label Undefined");
		if (!groupLabel) alert("Product Label Undefined");
		if (!datesForm) alert("Dates Form Undefined");
		this.productLabel = productLabel;
		this.groupLabel = groupLabel;
		this.components = components;
		this.datesForm = datesForm;

		this.componentSelect = document.querySelector("#product_type_select")!;
		this.irradiatedIn = document.querySelector("#irradiated_in")!;
		this.specialIn = document.querySelector("#special_in")!;
		this.availableIn = document.querySelector("#available_in")!;

		this.productSelect = document.querySelector("#product_select")!;
		this.cmvIn = document.querySelector('#cmv_in')!;
		this.hbsIn = document.querySelector('#hbs_in')!;

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

		// cmv/hbs stuff is affected by change of product, but is on group form. move to group form class?
		this.cmvIn.disabled = !selectedComponent.cmvPossible;
		this.hbsIn.disabled = !selectedComponent.hbsPossible;
		if (!selectedComponent.cmvPossible) this.cmvIn.checked = false;
		if (!selectedComponent.hbsPossible) this.hbsIn.checked = false;

		// cmv/hbs stuff is affected by change of product, but is on group label. move to group label class?
		this.groupLabel.updateCmvHbsLabel(this.cmvIn.checked, this.hbsIn.checked);
	}

	selectedProductChanged() {
		this.datesForm.setExpiryDate();
		this.productLabel.generateProductLabel(this.productSelect.value);
	}
}

export class ProductsLabel {
	barcodeGenerator: BarcodeGenerator;
	dataMatrixBarcode: DataMatrixBarcode;
	productTextFo: HTMLElement;
	packTextBlock: HTMLElement;
	packTextFo: HTMLElement;
	productTextFoParent: HTMLElement;
	storageTextFo: HTMLElement;
	linearGradientFluidUrl1: HTMLElement;
	linearGradientFluidUrl2: HTMLElement;
	volumeTextFo: HTMLElement;
	anticoagulantText: HTMLElement;
	rhPhenGroup: HTMLElement;
	rhcSelect: HTMLSelectElement;
	rheSelect: HTMLSelectElement;
	irradSticker: HTMLElement;
	//productBarcodeSvg: HTMLElement;
	barcode: string = "";
	IsbtCode: string = "";

	constructor(barcodeGenerator: BarcodeGenerator, dataMatrixBarcode: DataMatrixBarcode) {
		if (!barcodeGenerator) alert("Barcode Generator undefined");
		this.barcodeGenerator = barcodeGenerator;
		if (!dataMatrixBarcode) alert("DataMatrix Barcode Undefined");
		this.dataMatrixBarcode = dataMatrixBarcode;

		this.productTextFo = document.querySelector('#product_text_fo')!;
		this.packTextBlock = document.querySelector('#packTextBlock')!;
		this.packTextFo = document.querySelector('#pack_text_fo')!;
		this.productTextFoParent = document.querySelector('#product_text_fo_parent')!;
		this.storageTextFo = document.querySelector('#storage_text_fo')!;
		this.linearGradientFluidUrl1 = document.querySelector('#linearGradientFluidUrl1')!;
		this.linearGradientFluidUrl2 = document.querySelector('#linearGradientFluidUrl2')!;
		this.volumeTextFo = document.querySelector('#volume_text_fo')!;
		this.anticoagulantText = document.querySelector('#anticoagulant_info')!;
		this.rhPhenGroup = document.querySelector('#rh_phen_group')!;
		this.rhcSelect = document.querySelector('#rhc_select')!;
		this.rheSelect = document.querySelector('#rhe_select')!;
		this.irradSticker = document.querySelector('#irradiated_sticker')!;
		//this.productBarcodeSvg = document.querySelector('#product_barcode_svg')!;
	}

	shrinkLetterSpacingToFitParent(textElement: HTMLElement, parent: HTMLElement) {
		if (!textElement || !parent) return;

		const minimumSpacing = -1.5;
		for (let i = 0; i > minimumSpacing; i -= 0.1) {
			if (parent.scrollHeight <= parent.clientHeight + 2) break;
			textElement.style.letterSpacing = i + "px";
		}
	}

	generateProductLabel(productCode: string) {
		if (productCode == "") return;

		const selectedProduct = products.find(x => { return x.code === productCode });
		if (selectedProduct == null) return;

		this.barcode = "a0" + selectedProduct.code + "3b";
		this.IsbtCode = "=<" + selectedProduct.code;
		this.barcodeGenerator.generateBarcode(this.barcode, document.querySelector('#product_barcode_svg')!, 'codabar');
		this.dataMatrixBarcode.setProductCode = this.IsbtCode;

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

		this.productTextFo.textContent = selectedProduct.text;

		// default font settings then shrink to fit if necessary
		this.productTextFo.style.fontSize = "9pt";
		this.productTextFo.style.letterSpacing = "0px";
		this.shrinkLetterSpacingToFitParent(this.productTextFo, this.productTextFoParent);
	}
}

