import { BarcodeGenerator } from './barcodeGenerator';

export class DataMatrixBarcode {
	barcodeGenerator: BarcodeGenerator;
	barcodeParent: HTMLElement;
	phenotypeCode: string = "";
	dinCode: string = "";
	expiryCode: string = "";
	groupCode: string = "";
	productCode: string = "";

	constructor(barcodeGenerator: BarcodeGenerator) {
		if (!barcodeGenerator) alert("Barcode Generator undefined");
		this.barcodeGenerator = barcodeGenerator;

		this.barcodeParent = document.querySelector("#blood_unit")!;
		this.phenotypeCode = "=\\999999999999999999"; // one of the \ is an escape character.
	}

	set setDinCode(str: string) {
		this.dinCode = str;
		this.apply();
	}

	set setExpiryCode(str: string) {
		this.expiryCode = str;
		this.apply();
	}

	set setGroupCode(str: string) {
		this.groupCode = str;
		this.apply();
	}

	set setProductCode(str: string) {
		this.productCode = str;
		this.apply();
	}

	set setPhenotypeCode(str: string) {
		this.phenotypeCode = str;
		this.apply();
	}

	apply() {
		this.barcodeGenerator.generateDataMatrix(this.dinCode, this.groupCode, this.productCode, this.expiryCode, this.phenotypeCode)
	}
}