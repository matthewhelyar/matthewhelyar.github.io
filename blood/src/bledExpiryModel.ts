import dayjs from 'dayjs';
import { BarcodeGenerator } from './barcodeGenerator';
import { DataMatrixBarcode } from './dataMatrixBarcodeModel';
import { products } from './products'

export class DatesForm {
    datesLabel: DatesLabel;
    expiryIn: HTMLInputElement;
    bledDateIn: HTMLInputElement;
    productSelect: HTMLSelectElement;

    constructor(datesLabel: DatesLabel) {
        if (!datesLabel) alert("Dates Label undefined");
        this.datesLabel = datesLabel;

        this.expiryIn = document.querySelector('#expiry_in')!;
        this.bledDateIn = document.querySelector('#bled_date_in')!;
        this.productSelect = document.querySelector('#product_select')!; // this doesn't belong here, so should be passed in.

        this.expiryIn.addEventListener("change", this.setBledDate.bind(this));
        this.bledDateIn.addEventListener("change", this.setExpiryDate.bind(this));
        this.bledDateIn.value = dayjs().format('YYYY-MM-DD'); // default bled date is today.
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

export class DatesLabel {
    barcodeGenerator: BarcodeGenerator;
    dataMatrixBarcode: DataMatrixBarcode;
    expiryTspan: HTMLElement;
    dateBledTspan: HTMLElement;
    //expiryBarcodeSvg: HTMLElement;
    barcode: string = "";
    IsbtCode: string = "";

    constructor(barcodeGenerator: BarcodeGenerator, dataMatrixBarcode: DataMatrixBarcode) {
        if (!barcodeGenerator) alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;
        if (!dataMatrixBarcode) alert("DataMatrix Barcode Undefined");
        this.dataMatrixBarcode = dataMatrixBarcode;

        this.expiryTspan = document.querySelector('#expiry_tspan')!;
        this.dateBledTspan = document.querySelector('#date_bled_tspan')!;
        //this.expiryBarcodeSvg = document.querySelector("#expiry_barcode_svg")!;
    }

    generateExpiryLabel(expiryDate: dayjs.Dayjs, bledDate: dayjs.Dayjs) {
        // local function to get day number (1-366)
        const getDayNumber = (date: string | number | Date | dayjs.Dayjs) => {
            const date1 = dayjs(date);
            const firstDayOfYear = dayjs(date1.year() + "-01-01");
            return date1.diff(firstDayOfYear, 'day') + 1;
        }

        // generate barcodes
        const dayNumberString = String(getDayNumber(expiryDate)).padStart(3, '0');
        this.barcode = "a" + expiryDate.year() + dayNumberString + "4a";
        this.barcodeGenerator.generateBarcode(this.barcode, document.querySelector("#expiry_barcode_svg")!, 'codabar');

        const expTime = "2359"
        this.IsbtCode = "&>" + expiryDate.year().toString().slice(1) + dayNumberString + expTime;
        this.dataMatrixBarcode.setExpiryCode = this.IsbtCode;

        // generate text
        this.expiryTspan.textContent = expiryDate.format("DD MMM YYYY");
        this.dateBledTspan.textContent = bledDate.format("DD MMM YYYY");
    }
}
