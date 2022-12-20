class GroupsForm {
    constructor(groupLabel) {
        if (!groupLabel) alert("Group Label Undefined");
        this.groupLabel = groupLabel;

        this.groupSelect = document.getElementById("group_select");
        this.rhcSelect = document.getElementById("rhc_select");
        this.rheSelect = document.getElementById("rhe_select");
        this.cmvIn = document.getElementById("cmv_in");
        this.hbsIn = document.getElementById("hbs_in");
        this.antigensIn = document.getElementById('antigens_in');

        const init = (() => {
            for (let i = 0; i < groups.length; i++) {
                group_select.add(new Option(groups[i].text, i), undefined);
            }

            this.groupSelect.addEventListener("change", this.groupSelectChanged.bind(this));
            this.rhcSelect.addEventListener("change", this.rhceChanged.bind(this));
            this.rheSelect.addEventListener("change", this.rhceChanged.bind(this));
            this.cmvIn.addEventListener("change", this.cmvHbsChanged.bind(this));
            this.hbsIn.addEventListener("change", this.cmvHbsChanged.bind(this));
            this.antigensIn.addEventListener("keyup", this.antigensChanged.bind(this));

            this.groupSelect.value = 1; // default = O Neg.
            this.groupSelectChanged();
            this.cmvHbsChanged();
            this.rhceChanged();
            this.antigensChanged();
        })();
    }

    // I put these into local methods so that I can pass parameters (other than event) to groupLabel.
    groupSelectChanged() {
        const group = groups[this.groupSelect.value];
        if (group) this.groupLabel.generateGroupLabel(group);
    }

    cmvHbsChanged() {
        this.groupLabel.updateCmvHbsLabel(this.cmvIn.checked, this.hbsIn.checked);
    }

    rhceChanged() {
        this.groupLabel.updateRhceLabel(this.rhcSelect.value, this.rheSelect.value);
    }

    antigensChanged() {
        const newText = this.antigensIn.value.replace(/[^A-Za-z0-9,]/g, '');
        this.antigensIn.value = newText;
        this.groupLabel.updateAntigens(newText);
    }
}

class GroupsLabel {
    constructor(barcodeGenerator) {
        if (!barcodeGenerator) alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;

        this.groupBarcodeSvg = document.getElementById('group_barcode_svg');
        this.cmvBarcodeSvg = document.getElementById('cmv_barcode_svg');
        this.D = document.getElementById('D_type_tspan');
        this.C = document.getElementById('C_type_tspan');
        this.c = document.getElementById('c_type_tspan');
        this.E = document.getElementById('E_type_tspan');
        this.e = document.getElementById('e_type_tspan');
        this.aboTspan = document.getElementById('abo_tspan');
        this.rhdTspan = document.getElementById('rhd_tspan');
        this.hbsCmvTspan = document.getElementById('hbs_cmv_tspan');
        this.antigensTspan = document.getElementById('antigens_tspan');
        this.groupLabel = document.getElementById('group_label');
    }

    generateGroupLabel(group) {
        if (!group) return;
        const rhdCode = '0';
        const reservedCode = '0';
        const barcode = "=%" + group.code + rhdCode + reservedCode;
        this.barcodeGenerator.generateBarcode(barcode, this.groupBarcodeSvg, 'code128');

        this.aboTspan.textContent = group.abo;
        this.rhdTspan.textContent = group.rhd.rhdText;
        this.D.textContent = group.rhd.smallDText;

        this.groupLabel.classList.remove("pos");
        this.groupLabel.classList.remove("neg");
        this.groupLabel.classList.add(group.rhd.cssClass);
    }

    updateCmvHbsLabel(cmvChecked, hbsChecked) {
        // generate text
        let newText = "";
        if (hbsChecked && cmvChecked)
            newText = "HbS Neg, CMV Neg";
        else if (hbsChecked)
            newText = "HbS Neg";
        else if (cmvChecked)
            newText = "CMV Neg";

        // apply to SVG
        this.hbsCmvTspan.textContent = newText;
        this.cmvBarcodeSvg.style.visibility = (cmvChecked) ? "visible" : "hidden";
    }

    updateRhceLabel(rhcValue, rheValue) {
        // en dash (–), not -.
        this.C.textContent = (rhcValue == 0) ? "\u2013" : "+";
        this.c.textContent = (rhcValue == 2) ? "\u2013" : "+";
        this.E.textContent = (rheValue == 0) ? "\u2013" : "+";
        this.e.textContent = (rheValue == 2) ? "\u2013" : "+";
    }

    updateAntigens(newText) {
        this.antigensTspan.textContent = "NEG: " + newText;
    }
}