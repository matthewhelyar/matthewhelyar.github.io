// everything to do with DIN form and DIN on SVG. ? split into 2 different classes

class DinForm {
    constructor(errorHandler, dinLabel) {
        // DI
        if (!errorHandler) alert("Error handler undefined");
        this.error = errorHandler;

        if (!dinLabel) alert("DIN label undefined");
        this.dinLabel = dinLabel;

        // RAII
        this.fin = document.getElementById("din_fin_in");
        this.year = document.getElementById("din_year_in");
        this.seq = document.getElementById("din_seq_in");
        this.cd = document.getElementById("din_cd_in");
        this.submit = document.getElementById("din_go");

        const init = (() => {
            this.fin.value = "S0000";
            this.year.value = dayjs().format('YY');
            this.seq.value = "000000";

            this.fin.addEventListener('change', this.generateDin.bind(this));
            this.year.addEventListener('change', this.generateDin.bind(this));
            this.seq.addEventListener('change', this.generateDin.bind(this));
            this.submit.addEventListener('click', this.generateDin.bind(this));

            this.generateDin();
        })(); // IIFE
    }

    formatMasked(textSource) {
        // get form data in upper case without spaces.
        const regexSpace = /\s/g;
        return textSource.value.replace(regexSpace, '').toUpperCase();
    }

    validateInputs(finStr, yearStr, seqStr) {
        this.error.clearError(this.fin);
        this.error.clearError(this.year);
        this.error.clearError(this.seq);

        let errorSet = false;
        if (finStr.length != 5) {
            this.error.setError(this.fin, "FIN string wrong length. Must be 5 characters.");
            errorSet = true;
        };
        if (/[^A-NP-Z0-9]/g.test(finStr.slice(0, 3))) {
            this.error.setError(this.fin, "The first 3 digits of FIN can only contain A-N, P-Z or 0-9.");
            errorSet = true;
        };
        if (isNaN(finStr.slice(3))) {
            this.error.setError(this.fin, "The last 2 digits of FIN can only contain numbers.");
            errorSet = true;
        };
        if (yearStr.length != 2 || isNaN(yearStr) || yearStr < 0 || yearStr > 99) {
            this.error.setError(this.year, "Year string wrong. Must be a 2 digit number between 00 and 99.");
            errorSet = true;
        };
        if (seqStr.length != 6 || isNaN(seqStr) || yearStr < 0 || yearStr > 999999) {
            this.error.setError(this.seq, "Sequence number string wrong. Must be a 6 digit number between 000000 and 999999.");
            errorSet = true;
        };

        // concatenate string
        const dinStr = finStr + yearStr + seqStr;
        if (dinStr.length != 13) {
            this.error.setError(null, "DIN string wrong length");
            errorSet = true;
        };

        if (errorSet) return null;
        return dinStr
    }

    calculateChecksum(dinStr) {
        let dinArray = dinStr.split("");

        // calculate checksum, both eye readable and numerical
        const charArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '*'];
        let sum = 0;
        for (let i = 0; i < dinArray.length; i++) {
            // look up character in array to find equivalent int value (which is array index)
            const value = charArray.findIndex((x) => x == dinArray[i]);
            if (value < 0) {
                this.error.setError(null, "Error: Non-alphanumeric character in checksum calculation. Unable to continue.");
                return null;
            }
            const weight = Math.pow(2, 13 - i);
            const weightedValue = weight * value;
            sum += weightedValue;
        }
        // modulo to get value between 0 and 36
        const checkDigit = (38 - (sum % 37)) % 37;

        // convert back from value to character
        const checkChar = charArray[checkDigit];
        return { checkDigit, checkChar };
    }

    generateDin() {
        const finStr = this.formatMasked(this.fin);
        const yearStr = this.formatMasked(this.year);
        const seqStr = this.formatMasked(this.seq);

        // check input validity
        let dinStr = this.validateInputs(finStr, yearStr, seqStr);
        if (!dinStr) return;

        // split din into character array
        const checkSum = this.calculateChecksum(dinStr);
        if (!checkSum) return;

        // apply to form
        this.fin.value = finStr;
        this.year.value = yearStr;
        this.seq.value = seqStr;
        this.cd.value = checkSum.checkChar;

        // apply to SVG
        this.dinLabel.apply(dinStr, checkSum, seqStr);
    }
}

class DinLabel {
    constructor(barcodeGenerator) {
        if (!barcodeGenerator) alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;

        this.dinSvg = document.getElementById("din_barcode_svg");
        this.smallDinSvg = document.getElementById("din_small_barcode_svg");
        this.dinTspan = document.getElementById("din_eye_readable");
        this.dinTspan1 = document.getElementById("din_eye_readable_1");
        this.dinTspan2 = document.getElementById("din_eye_readable_2");
        this.dinTspan3 = document.getElementById("din_eye_readable_3");
        this.dinTspan4 = document.getElementById("din_eye_readable_4");
        this.dinTspan5 = document.getElementById("din_eye_readable_5");
        //this.cdBox = document.getElementById("checkdigitBox"); // not currently used.
    }

    apply(dinStr, checkSum, seqStr) {
        const barcode = "=" + dinStr + (checkSum.checkDigit + 60);
        const smallBarcode = "&a" + seqStr;
        this.barcodeGenerator.generateBarcode(barcode, this.dinSvg, 'code128');
        this.barcodeGenerator.generateBarcode(smallBarcode, this.smallDinSvg, 'code128');
		
        //this.dinTspan.textContent = `${dinStr.slice(0, 4)} ${dinStr.slice(4, 7)} ${dinStr.slice(7, 10)} ${dinStr.slice(10, 13)}  ${checkSum.checkChar}`;
        this.dinTspan1.textContent = dinStr.slice(0, 4);
        this.dinTspan2.textContent = dinStr.slice(4, 7);
        this.dinTspan3.textContent = dinStr.slice(7, 10);
        this.dinTspan4.textContent = dinStr.slice(10, 13);
        this.dinTspan5.textContent = checkSum.checkChar;
    }
}