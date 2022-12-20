class DatesForm {
    constructor(datesLabel) {
        if (!datesLabel) alert("Dates Label undefined");
        this.datesLabel = datesLabel;

        this.expiryIn = document.getElementById('expiry_in');
        this.bledDateIn = document.getElementById('bled_date_in');
        this.productSelect = document.getElementById('product_select'); // this doesn't belong here, so should be passed in.

        const init = (() => {
            this.expiryIn.addEventListener("change", this.setBledDate.bind(this));
            this.bledDateIn.addEventListener("change", this.setExpiryDate.bind(this));
            this.bledDateIn.value = dayjs().format('YYYY-MM-DD'); // default bled date is today.
        })();
    }

    setExpiryDate() {
        // sets the expiry date in the form from the bled date.
        if (this.bledDateIn.value === "") return;

        const selectedProduct = products.find(x => { return x.code === this.productSelect.value });
        if (!selectedProduct) return;
        const bledDate = dayjs(this.bledDateIn.value);
        this.expiryIn.value = bledDate.add(selectedProduct.shelfLife, 'day').format('YYYY-MM-DD');

        this.datesLabel.generateExpiryLabel(dayjs(this.expiryIn.value), dayjs(this.bledDateIn.value));
    }

    setBledDate() {
        // sets the bled date in the form from the expiry date.
        if (this.expiryIn.value === "") return;

        const selectedProduct = products.find(x => { return x.code === this.productSelect.value });
        if (!selectedProduct) return;
        const expiryDate = dayjs(this.expiryIn.value);
        this.bledDateIn.value = expiryDate.add(-selectedProduct.shelfLife, 'day').format('YYYY-MM-DD');

        this.datesLabel.generateExpiryLabel(dayjs(this.expiryIn.value), dayjs(this.bledDateIn.value));
    }
}

class DatesLabel {
    constructor(barcodeGenerator) {
        if (!barcodeGenerator) alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;

        this.expiryTspan = document.getElementById('expiry_tspan');
        this.dateBledTspan = document.getElementById('date_bled_tspan');
        this.expiryBarcodeSvg = document.getElementById("expiry_barcode_svg");
    }

    generateExpiryLabel(expiryDate, bledDate) {
        // local function to get day number (1-366)
        const getDayNumber = (date) => {
            const date1 = dayjs(date);
            const firstDayOfYear = dayjs(date1.year() + "-01-01");
            return date1.diff(firstDayOfYear, 'day') + 1;
        }

        // generate barcode
        const dayNumberString = String(getDayNumber(expiryDate)).padStart(3, '0');
        const barcode = "a" + expiryDate.year() + dayNumberString + "a";
        this.barcodeGenerator.generateBarcode(barcode, this.expiryBarcodeSvg, 'codabar');

        // generate text
        this.expiryTspan.textContent = expiryDate.format("DD MMM YYYY");
        this.dateBledTspan.textContent = bledDate.format("DD MMM YYYY");
    }
}