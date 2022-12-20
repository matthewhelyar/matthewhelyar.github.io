// DEPENDENCIES TO BE INCLUDED IN HTML FILE ABOVE THIS FILE:
//<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
//<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
//<script src="./groups.js"></script>
//<script src="./products.js"></script>

window.onload = startup;

// globals -> eventually use eventListeners instead of HTML to get rid of these.
const barcodeGenerator = new BarcodeGenerator();

function startup() {
    // these barcodes don't change. - cmv barcode must be before group
    barcodeGenerator.generateBarcodefromId("a8738a", 'cmv_barcode_svg', 'codabar');
    barcodeGenerator.generateBarcodefromId("=)0MAVXX603B", 'bag_mfg_barcode_svg', 'code128');

    // set up DIN
    const errorHandler = new ErrorHandler();
    const dinLabel = new DinLabel(barcodeGenerator);
    const dinForm = new DinForm(errorHandler, dinLabel);

    // set up groups - must be before products
    const groupLabel = new GroupsLabel(barcodeGenerator);
    const groupForm = new GroupsForm(groupLabel);

    
    // set up products
    const components = [redCells, platelets, ffp, cryo, granulocytes];
    const productLabel = new ProductsLabel(barcodeGenerator);
    const productForm = new ProductsForm(productLabel, components, groupLabel);

    // set up bled - must be before products (updateProductSelect -> setExpiryDate -> reads bledDate)
    document.getElementById('bled_date_in').value = dayjs().format('YYYY-MM-DD'); // default bled date is today.

    // set up expiry - must be after products (setExpiryDate -> reads productSelect)
    setExpiryDate();
}

// this is on the group label, but set by changing product form. ? where to put it.

function shrinkLetterSpacingToFitParent(textElement, parent) {
    if (!textElement || !parent) return;

    const minimumSpacing = -1;
    for (let i = 0; i > minimumSpacing; i -= 0.1) {
        if (parent.scrollHeight <= parent.clientHeight + 2) break;
        textElement.style.letterSpacing = i + "px";
    }
    //console.log("final letter spacing: " + textElement.style.letterSpacing);
}

function generateExpiryLabel() {
    // get DOM elements
    const expiryIn = document.getElementById('expiry_in');
    const bledDateIn = document.getElementById('bled_date_in');
    const expiryTspan = document.getElementById('expiry_tspan');
    const dateBledTspan = document.getElementById('date_bled_tspan');
    if (!expiryIn || !bledDateIn || !expiryTspan || !dateBledTspan) return;

    // get dates
    const expiryDate = dayjs(expiryIn.value);
    const bledDate = dayjs(bledDateIn.value);

    // local function to get day number (1-366)
    const getDayNumber = (date) => {
        const date1 = dayjs(date);
        const firstDayOfYear = dayjs(date1.year() + "-01-01");
        return date1.diff(firstDayOfYear, 'day') + 1;
    }

    // generate barcode
    const dayNumberString = String(getDayNumber(expiryDate)).padStart(3, '0');
    const barcode = "a" + expiryDate.year() + dayNumberString + "a";
    barcodeGenerator.generateBarcodefromId(barcode, 'expiry_barcode_svg', 'codabar');

    // generate text
    expiryTspan.textContent = expiryDate.format("DD MMM YYYY");
    dateBledTspan.textContent = bledDate.format("DD MMM YYYY");
}

function setExpiryDate() {
    // get DOM elements
    const bledDateIn = document.getElementById('bled_date_in');

    const productSelect = document.getElementById('product_select');
    const expiryIn = document.getElementById('expiry_in');
    if (!bledDateIn || !productSelect || !expiryIn) return;
    if (bledDateIn.value === "") return;

    // sets the expiry date in the form from the bled date.
    const selectedProduct = products.find(x => { return x.code === productSelect.value });
    if (!selectedProduct) return;
    const bledDate = dayjs(bledDateIn.value);
    expiryIn.value = bledDate.add(selectedProduct.shelfLife, 'day').format('YYYY-MM-DD');

    generateExpiryLabel();
}

function setBledDate() {
    // get DOM elements
    const bledDateIn = document.getElementById('bled_date_in');
    const productSelect = document.getElementById('product_select');
    const expiryIn = document.getElementById('expiry_in');
    if (!bledDateIn || !productSelect || !expiryIn) return;
    if (expiryIn.value === "") return;

    // sets the bled date in the form from the expiry date.
    const selectedProduct = products.find(x => { return x.code === productSelect.value });
    if (!selectedProduct) return;
    const expiryDate = dayjs(expiryIn.value);
    bledDateIn.value = expiryDate.add(-selectedProduct.shelfLife, 'day').format('YYYY-MM-DD');

    generateExpiryLabel();
}