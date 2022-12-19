// DEPENDENCIES TO BE INCLUDED IN HTML FILE ABOVE THIS FILE:
//<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
//<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
//<script src="./groups.js"></script>
//<script src="./products.js"></script>

window.onload = startup;

function startup() {
    generateBarcode("a8738a", 'cmv_barcode_svg', 'codabar');
    generateBarcode("=)0MAVXX603B", 'bag_mfg_barcode_svg', 'code128');

    document.getElementById('bled_date_in').value = dayjs().format('YYYY-MM-DD'); // default bled date is today.
    document.getElementById('din_year_in').value = dayjs().format('YY');

    generateProductsFilter(document.getElementById("product_type_select"));
    generateGroupsForm(document.getElementById('group_select'));
    updateProductsSelectForm();

    generateDin();
    generateGroupLabel(document.getElementById('group_select').value);
    updateRhceLabel(document.getElementById('rhc_select').value, document.getElementById('rhe_select').value);
    antigensChanged();
    productFiltersChanged();

    setExpiryDate();
    generateExpiryLabel();
}

function generateBarcode(value, svgId, format) {
    // store existing size attribtues
    const s = document.getElementById(svgId);
    if (s == null) return;
    const x = s.getAttribute('x');
    const y = s.getAttribute('y');
    const h = s.getAttribute('height');
    const w = s.getAttribute('width');

    // generate new SVG
    JsBarcode('#' + svgId, value, {
        format: format,
        displayValue: false,
        margin: 0,
    });

    // set the SVG's attributes back to the stored ones.
    s.setAttribute('preserveAspectRatio', 'none')
    s.setAttribute('x', x);
    s.setAttribute('y', y);
    s.setAttribute('width', w);
    s.setAttribute('height', h);
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

function setError(errorMessage, isError, textInputElement) {
    if (isError)
        errorText.innerHTML += "<li>" + errorMessage + "</li>";
    else
        errorText.innerHTML = "";

    errorText.style.display = isError ? "block" : "none";

    if (textInputElement) {
        if (isError)
            textInputElement.classList.add("errorTextInput");
        else
            textInputElement.classList.remove("errorTextInput");
    }
}

function generateDin() {
    // get form data in upper case without spaces.
    const regexSpace = /\s/g;
    const finIn = document.getElementById('din_fin_in');
    const yearIn = document.getElementById('din_year_in');
    const seqIn = document.getElementById('din_seq_in');
    if (!finIn || !yearIn || !seqIn) return;

    const fin_str = finIn.value.replace(regexSpace, '').toUpperCase();
    const year_str = yearIn.value.replace(regexSpace, '').toUpperCase();
    const seq_str = seqIn.value.replace(regexSpace, '').toUpperCase();

    setError("", false, finIn);
    setError("", false, yearIn);
    setError("", false, seqIn);
    // check input validity
    let errorSet = false;
    if (fin_str.length != 5) {
        setError("FIN string wrong length. Must be 5 characters.", true, finIn);
        errorSet = true;
    };
    if (/[^A-NP-Z0-9]/g.test(fin_str.slice(0, 3))) {
        setError("The first 3 digits of FIN can only contain A-N, P-Z or 0-9.", true, finIn);
        errorSet = true;
    };
    if (isNaN(fin_str.slice(3))) {
        setError("The last 2 digits of FIN can only contain numbers.", true, finIn);
        errorSet = true;
    };
    if (year_str.length != 2 || isNaN(year_str) || year_str < 0 || year_str > 99) {
        setError("Year string wrong. Must be a 2 digit number between 00 and 99.", true, yearIn);
        errorSet = true;
    };
    if (seq_str.length != 6 || isNaN(seq_str) || year_str < 0 || year_str > 999999) {
        setError("Sequence number string wrong. Must be a 6 digit number between 000000 and 999999.", true, seqIn);
        errorSet = true;
    };

    // concatenate string
    const din_str = fin_str + year_str + seq_str;
    if (din_str.length != 13) {
        setError("DIN string wrong length", true, null);
        errorSet = true;
    };

    if (errorSet) return;

    // feed back corrected strings into form.
    document.getElementById('din_fin_in').value = fin_str;
    document.getElementById('din_year_in').value = year_str;
    document.getElementById('din_seq_in').value = seq_str;

    // split din into array
    let din_arr = din_str.split("");

    // calculate checksum, both eye readable and numerical
    const charArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '*'];
    let sum = 0;
    for (let i = 0; i < din_arr.length; i++) {
        // look up character in array to find equivalent int value (which is array index)
        const value = charArray.findIndex((x) => x == din_arr[i]);
        if (value < 0) {
            setError("Error: Non-alphanumeric character in checksum calculation. Unable to continue.", true);
            return;
        }
        const weight = Math.pow(2, 13 - i);
        const weightedValue = weight * value;
        sum += weightedValue;
    }
    // modulo to get value between 0 and 36
    const checkDigit = (38 - (sum % 37)) % 37;

    // convert back from value to character
    const checkChar = charArray[checkDigit];

    // write checkChar back to form
    document.getElementById('din_cd_in').value = checkChar;

    const barcode = "=" + din_str + (checkDigit + 60);
    const smallBarcode = "&a" + seq_str;
    const eyeReadableFormatted = din_str.slice(0, 4) + ' ' + din_str.slice(4, 7) + ' ' + din_str.slice(7, 10) + ' ' + din_str.slice(10, 13) + '  ' + checkChar;

    // apply code to SVG both eye reable and barcode.
    generateBarcode(barcode, 'din_barcode_svg', 'code128');
    generateBarcode(smallBarcode, 'din_small_barcode_svg', 'code128');
    document.getElementById('din_eye_readable').textContent = eyeReadableFormatted;
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

    const aboTspan = document.getElementById('abo_tspan');
    const rhdTspan = document.getElementById('rhd_tspan');
    const aboText = document.getElementById('abo_text');
    const rhdText = document.getElementById('rhd_text');
    const rhdBackground = document.getElementById('rhd_background');
    const smallDPhen = document.getElementById('D_type_tspan');

    if (!aboTspan || !rhdTspan || !aboText || !rhdText || !rhdBackground || !smallDPhen) return;

    aboTspan.textContent = group.abo;
    rhdTspan.textContent = group.rhd.rhdText;
    rhdBackground.style.fill = group.rhd.rhdBackground;
    rhdText.style.fill = group.rhd.rhdTextFill;
    rhdTspan.style.fill = group.rhd.rhdTextFill;
    aboText.style.fill = group.rhd.aboTextFill;
    aboText.style.stroke = group.rhd.aboStroke;
    smallDPhen.textContent = group.rhd.smallDText;

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
    const packTextFo = document.getElementById('pack_text_fo');
    const packBackgroundFo = document.getElementById('pack_background_fo');
    if (!productTextFo || !packTextFo || !packBackgroundFo) return;

    productTextFo.textContent = selectedProduct.text;

    // default font settings then shrink to fit if necessary
    productTextFo.style.fontSize = "9pt";
    productTextFo.style.letterSpacing = "0px";
    shrinkLetterSpacingToFitParent(productTextFo, document.getElementById('product_text_fo_parent'));

    if (selectedProduct.pack < 1) {
        packTextFo.textContent = "";
        packBackgroundFo.style.fill = "none";
    }
    else {
        packTextFo.textContent = "PACK " + String(selectedProduct.pack).padStart(2, '0');
        packBackgroundFo.style.fill = "#000000";
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