window.onload = startup;

function startup() {
    const barcodeGenerator = new BarcodeGenerator();

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

    // set up bled and expiry dates
    const datesLabel = new DatesLabel(barcodeGenerator);
    const datesForm = new DatesForm(datesLabel);

    // set up products (expiry date set inside here after initial product selected)
    const components = [redCells, platelets, ffp, cryo, granulocytes];
    const productLabel = new ProductsLabel(barcodeGenerator);
    const productForm = new ProductsForm(productLabel, components, groupLabel, datesForm);

    barcodeGenerator.generateDataMatrix(dinLabel.barcode, groupLabel.barcode, productLabel.IsbtCode, datesLabel.IsbtCode);
    //barcodeGenerator.generateDataMatrix(dinLabel.barcode, groupLabel.barcode, productLabel.IsbtCode, datesLabel.IsbtCode, "=\999999999999999999");
}