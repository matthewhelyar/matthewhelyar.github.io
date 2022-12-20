// DEPENDENCIES TO BE INCLUDED IN HTML FILE ABOVE THIS FILE:
//<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
//<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
//<script src="./groups.js"></script>
//<script src="./products.js"></script>

window.onload = startup;

// globals -> eventually use eventListeners instead of HTML to get rid of these.
const barcodeGenerator = new BarcodeGenerator();

function startup() {
    // set up objects
    const errorHandler = new ErrorHandler();
    const din = new Din(errorHandler, barcodeGenerator);

    // these barcodes don't change.
    barcodeGenerator.generateBarcodefromId("a8738a", 'cmv_barcode_svg', 'codabar');
    barcodeGenerator.generateBarcodefromId("=)0MAVXX603B", 'bag_mfg_barcode_svg', 'code128');

    // other setup stuff
    document.getElementById('bled_date_in').value = dayjs().format('YYYY-MM-DD'); // default bled date is today.
    generateProductsFilter(document.getElementById("product_type_select"));
    generateGroupsForm(document.getElementById('group_select'));
    updateProductsSelectForm();
    generateGroupLabel(document.getElementById('group_select').value);
    updateRhceLabel(document.getElementById('rhc_select').value, document.getElementById('rhe_select').value);
    antigensChanged();
    productFiltersChanged();
    setExpiryDate();
    generateExpiryLabel();
}

function generateBarcode(value, svgId, format) {
    barcodeGenerator.generateBarcodefromId(value, svgId, format);
}

function updateProductsSelectForm() {
    // get DOM elements
    const productSelect = document.getElementById('product_select');
    const productType = document.getElementById('product_type_select');
    const showIrradiated = document.getElementById('irradiated_in');
    const showSpecial = document.getElementById('special_in');
    const showAvailable = document.getElementById('available_in');
    if (!productSelect || !productType || !showIrradiated || !showSpecial || !showAvailable) return;

    // store currently selected product code:
    const currentlySelectedProduct = productSelect.value;

    // clear options from productSelect
    productSelect.length = 0;

    // this one I can possibly update to use the polymorphism.
    // filter products as per form
    const filteredProducts = products.filter(x => {
        return x.component.name === productType.value &&
            x.irr === showIrradiated.checked &&
            x.special === showSpecial.checked &&
            x.availability >= showAvailable.checked;
    });

    // add options to productSelect
    for (const p of filteredProducts) {
        let text = (p.pack > 0) ? p.text + " (" + p.pack + ")" : p.text;
        if (!p.availability) text += " [unavailable]";
        productSelect.add(new Option(text, p.code), undefined);
    }

    // if new list contains same product, select it, otherwise generate new label.
    const selectedIndex = filteredProducts.findIndex(x => { return x.code === currentlySelectedProduct });
    if (selectedIndex != -1)
        productSelect.value = currentlySelectedProduct;
    else
        selectedProductChanged(productSelect.value);
}

function generateProductsFilter(productSelect) {
    if (!productSelect) return;

    for (let c of components) {
        // skip if option already there
        let alreadyExists = false
        for (let o of productSelect.options) {
            if (c.text == o.label) {
                alreadyExists = true;
                break;
            }
        }
        if (alreadyExists) continue;

        // add options
        productSelect.add(new Option(c.text, c.name), undefined);
    }
}

function generateGroupsForm(group_select) {
    for (let i = 0; i < groups.length; i++) {
        // skip if option already there
        let alreadyExists = false
        for (let o of group_select.options) {
            if (groups[i].text == o.label) {
                alreadyExists = true;
                break;
            }
        }
        if (alreadyExists) continue;

        // add options
        group_select.add(new Option(groups[i].text, i), undefined);
    }

    // default = O Neg
    group_select.value = "1";
}

function generateGroupLabel(groupIndex) {
    const group = groups[groupIndex]; // potential index out of range bug.
    const rhdCode = '0';
    const reservedCode = '0';
    barcode = "=%" + group.code + rhdCode + reservedCode;
    generateBarcode(barcode, 'group_barcode_svg', 'code128');

    const groupLabel = document.getElementById('group_label');
    const aboTspan = document.getElementById('abo_tspan');
    const rhdTspan = document.getElementById('rhd_tspan');
    const smallDPhen = document.getElementById('D_type_tspan');

    if (!groupLabel || !aboTspan || !rhdTspan || !smallDPhen) return;

    aboTspan.textContent = group.abo;
    rhdTspan.textContent = group.rhd.rhdText;
    smallDPhen.textContent = group.rhd.smallDText;

    groupLabel.classList.remove("pos");
    groupLabel.classList.remove("neg");
    groupLabel.classList.add(group.rhd.cssClass);
}

function productFiltersChanged() {
    // get DOM elements
    const productTypeSelect = document.getElementById('product_type_select');
    const irradIn = document.getElementById('irradiated_in');
    const specialIn = document.getElementById('special_in')
    const cmvIn = document.getElementById('cmv_in');
    const hbsIn = document.getElementById('hbs_in');
    if (!productTypeSelect || !irradIn || !specialIn || !cmvIn || !hbsIn) return;

    // update DOM elements of the product form based on product type
    const selectedComponent = components.find(x => { return x.name === productTypeSelect.value });
    irradIn.disabled = !selectedComponent.irradPossible;
    specialIn.disabled = !selectedComponent.specialPossible;
    cmvIn.disabled = !selectedComponent.cmvPossible;
    hbsIn.disabled = !selectedComponent.hbsPossible;
    if (!selectedComponent.irradPossible) irradIn.checked = false;
    if (!selectedComponent.specialPossible) specialIn.checked = false;
    if (!selectedComponent.cmvPossible) cmvIn.checked = false;
    if (!selectedComponent.hbsPossible) hbsIn.checked = false;

    // special case, force irradiated for granulocytes but disable the button.
    if (selectedComponent.name == "G") {
        irradIn.checked = true;
        irradIn.disabled = true;
    }

    // update things that might have changed because product list changed.
    updateProductsSelectForm();
    updateCmvHbsLabel(cmvIn.checked, hbsIn.checked);
}

function selectedProductChanged(productCode) {
    setExpiryDate();
    generateProductLabel(productCode);
}

function updateRhceLabel(rhcValue, rheValue) {
    let C = document.getElementById('C_type_tspan');
    let c = document.getElementById('c_type_tspan');
    let E = document.getElementById('E_type_tspan');
    let e = document.getElementById('e_type_tspan');
    if (!C || !c || !E || !e) return;
    // en dash (–), not -.
    C.textContent = (rhcValue == 0) ? "\u2013" : "+";
    c.textContent = (rhcValue == 2) ? "\u2013" : "+";
    E.textContent = (rheValue == 0) ? "\u2013" : "+";
    e.textContent = (rheValue == 2) ? "\u2013" : "+";
}

function updateCmvHbsLabel(cmvChecked, hbsChecked) {
    // get DOM elements
    const hbs_cmv_tspan = document.getElementById('hbs_cmv_tspan');
    const cmv_barcode_svg = document.getElementById('cmv_barcode_svg');
    if (!hbs_cmv_tspan || !cmv_barcode_svg) return;

    // generate text
    let newText = "";
    if (hbsChecked && cmvChecked)
        newText = "HbS Neg, CMV Neg";
    else if (hbsChecked)
        newText = "HbS Neg";
    else if (cmvChecked)
        newText = "CMV Neg";

    // apply to SVG
    hbs_cmv_tspan.textContent = newText;
    cmv_barcode_svg.style.visibility = (cmvChecked) ? "visible" : "hidden";
}

function antigensChanged() {
    const antigens_in = document.getElementById('antigens_in');
    const antigens_out = document.getElementById('antigens_tspan');
    if (!antigens_in || !antigens_out) return;

    const newText = antigens_in.value.replace(/[^A-Za-z0-9,]/g, '');
    antigens_in.value = newText;
    antigens_out.textContent = "NEG: " + newText;
}

function generateProductLabel(productCode) {
    if (productCode == null || productCode == "") return;

    const selectedProduct = products.find(x => { return x.code === productCode });
    if (selectedProduct == null) return;

    const barcode = "a0" + selectedProduct.code + "3b";
    generateBarcode(barcode, 'product_barcode_svg', 'codabar');
    generateBarcode(barcode, 'product_barcode_svg_3', 'codabar');

    const productTextFo = document.getElementById('product_text_fo');
    const packTextBlock = document.getElementById('packTextBlock');
    const packTextFo = document.getElementById('pack_text_fo');
    if (!productTextFo || !packTextBlock || !packTextFo) return;

    productTextFo.textContent = selectedProduct.text;

    // default font settings then shrink to fit if necessary
    productTextFo.style.fontSize = "9pt";
    productTextFo.style.letterSpacing = "0px";
    shrinkLetterSpacingToFitParent(productTextFo, document.getElementById('product_text_fo_parent'));

    if (selectedProduct.pack < 1) {
        packTextFo.textContent = "";
        packTextBlock.style.visibility = "hidden";
    }
    else {
        packTextFo.textContent = "PACK " + String(selectedProduct.pack).padStart(2, '0');
        packTextBlock.style.visibility = "visible";
    }

    document.getElementById('storage_text_fo').innerHTML = selectedProduct.component.storageText;
    document.getElementById('linearGradientFluidUrl1').setAttribute("xlink:href", "#linearGradientFluid" + selectedProduct.component.color);
    document.getElementById('linearGradientFluidUrl2').setAttribute("xlink:href", "#linearGradientFluid" + selectedProduct.component.color);
    document.getElementById('volume_text_fo').innerHTML = "Volume<br />" + selectedProduct.volume + " mL";
    document.getElementById('anticoagulant_info').style.visibility = selectedProduct.component.anticoagulantTextVisibility;
    document.getElementById('rh_phen_group').style.visibility = selectedProduct.component.rhPhenVisibility;
    document.getElementById('rhc_select').disabled = (selectedProduct.component.rhPhenVisibility == "hidden");
    document.getElementById('rhe_select').disabled = (selectedProduct.component.rhPhenVisibility == "hidden");
    document.getElementById('irradiated_sticker').style.visibility = selectedProduct.irr ? "visible" : "hidden";
}

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
    generateBarcode(barcode, 'expiry_barcode_svg', 'codabar');

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

    // sets the bled date in the form from the expiry date.
    const selectedProduct = products.find(x => { return x.code === productSelect.value });
    if (!selectedProduct) return;
    const expiryDate = dayjs(expiryIn.value);
    bledDateIn.value = expiryDate.add(-selectedProduct.shelfLife, 'day').format('YYYY-MM-DD');

    generateExpiryLabel();
}