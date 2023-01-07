class DataMatrixBarcode {
    constructor(barcodeGenerator) {
        if (!barcodeGenerator) alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;

        this.barcodeParent = document.getElementById("blood_unit");
        //this.phenotypeCode = "=\\999999999999999999"; // one of the \ is an escape character.
    }

    set setDinCode(str) {
        this.dinCode = str;
        this.apply();
    }

    set setExpiryCode(str) {
        this.expiryCode = str;
        this.apply();
    }

    set setGroupCode(str) {
        this.groupCode = str;
        this.apply();
    }

    set setProductCode(str) {
        this.productCode = str;
        this.apply();
    }

    set setPhenotypeCode(str) {
        this.phenotypeCode = str;
        this.apply();
    }

    apply() {
        this.barcodeGenerator.generateDataMatrix(this.dinCode, this.groupCode, this.productCode, this.expiryCode, this.phenotypeCode)
    }
}