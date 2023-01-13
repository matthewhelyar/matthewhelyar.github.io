import { BarcodeGenerator } from './barcodeGenerator';
import { DataMatrixBarcode } from './dataMatrixBarcodeModel';
import { ErrorHandler } from './errorHandler';
import { DatesForm, DatesLabel } from './bledExpiryModel';
import { DinForm, DinLabel } from './dinModel';
import { GroupsForm, GroupsLabel } from './groupsModel';
import { ProductsForm, ProductsLabel } from './productsModel';
import { Component, redCells, platelets, ffp, cryo, granulocytes } from './products'

const barcodeGenerator = new BarcodeGenerator();

// these barcodes don't change. - cmv barcode must be before group
barcodeGenerator.generateBarcodefromId("a8738a", 'cmv_barcode_svg', 'codabar');
barcodeGenerator.generateBarcodefromId("=)0MAVXX603B", 'bag_mfg_barcode_svg', 'code128');

const dataMatrixBarcode = new DataMatrixBarcode(barcodeGenerator);

// set up DIN
const errorHandler = new ErrorHandler();
const dinLabel = new DinLabel(barcodeGenerator, dataMatrixBarcode);
const dinForm = new DinForm(errorHandler, dinLabel);

// set up groups - must be before products
const groupLabel = new GroupsLabel(barcodeGenerator, dataMatrixBarcode);
const groupForm = new GroupsForm(groupLabel);

// set up bled and expiry dates
const datesLabel = new DatesLabel(barcodeGenerator, dataMatrixBarcode);
const datesForm = new DatesForm(datesLabel);

// set up products (expiry date set inside here after initial product selected)
const components: Component[] = [redCells, platelets, ffp, cryo, granulocytes];
const productLabel = new ProductsLabel(barcodeGenerator, dataMatrixBarcode);
const productForm = new ProductsForm(productLabel, components, groupLabel, datesForm);