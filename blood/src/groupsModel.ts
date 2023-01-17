import { BarcodeGenerator } from "./barcodeGenerator";
import { DataMatrixBarcode } from "./dataMatrixBarcodeModel";
import { Group, groups } from "./groups"

export class GroupsForm {
    groupLabel: GroupsLabel;
    groupSelect: HTMLSelectElement;
    rhcSelect: HTMLSelectElement;
    rheSelect: HTMLSelectElement;
    cmvIn: HTMLInputElement;
    hbsIn: HTMLInputElement;
    antigensIn: HTMLInputElement;

    constructor(groupLabel: GroupsLabel) {
        if (!groupLabel) alert("Group Label Undefined");
        this.groupLabel = groupLabel;

        this.groupSelect = document.querySelector("#group_select")!;
        this.rhcSelect = document.querySelector("#rhc_select")!;
        this.rheSelect = document.querySelector("#rhe_select")!;
        this.cmvIn = document.querySelector("#cmv_in")!;
        this.hbsIn = document.querySelector("#hbs_in")!;
        this.antigensIn = document.querySelector("#antigens_in")!;

        for (let i = 0; i < groups.length; i++) {
            this.groupSelect.add(new Option(groups[i].text, i.toString()), undefined);
        }

        this.groupSelect.addEventListener("change", this.groupSelectChanged.bind(this));
        this.rhcSelect.addEventListener("change", this.rhceChanged.bind(this));
        this.rheSelect.addEventListener("change", this.rhceChanged.bind(this));
        this.cmvIn.addEventListener("change", this.cmvHbsChanged.bind(this));
        this.hbsIn.addEventListener("change", this.cmvHbsChanged.bind(this));
        this.antigensIn.addEventListener("keyup", this.antigensChanged.bind(this));

        this.groupSelect.value = "1"; // default = O Neg.
        this.groupSelectChanged();
        this.cmvHbsChanged();
        this.rhceChanged();
        this.antigensChanged();
    }

    // I put these into local methods so that I can pass parameters (other than event) to groupLabel.
    groupSelectChanged() {
        const group = groups[parseInt(this.groupSelect.value)];
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

export class GroupsLabel {
    barcodeGenerator: BarcodeGenerator;
    dataMatrixBarcode: DataMatrixBarcode;
    //groupBarcodeSvg: HTMLElement;
    //cmvBarcodeSvg: HTMLElement;
    D: HTMLElement;
    C: HTMLElement;
    c: HTMLElement;
    E: HTMLElement;
    e: HTMLElement;
    aboTspan: HTMLElement;
    rhdTspan: HTMLElement;
    hbsCmvTspan: HTMLElement;
    antigensTspan: HTMLElement;
    groupLabel: HTMLElement;
    barcode: string = "";

    constructor(barcodeGenerator: BarcodeGenerator, dataMatrixBarcode: DataMatrixBarcode) {
        if (!barcodeGenerator) alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;
        if (!dataMatrixBarcode) alert("DataMatrix Barcode Undefined");
        this.dataMatrixBarcode = dataMatrixBarcode;

        //this.groupBarcodeSvg = document.querySelector('#group_barcode_svg')!;
        //this.cmvBarcodeSvg = document.querySelector('#cmv_barcode_svg')!;
        this.D = document.querySelector('#D_type_tspan')!;
        this.C = document.querySelector('#C_type_tspan')!;
        this.c = document.querySelector('#c_type_tspan')!;
        this.E = document.querySelector('#E_type_tspan')!;
        this.e = document.querySelector('#e_type_tspan')!;
        this.aboTspan = document.querySelector('#abo_tspan')!;
        this.rhdTspan = document.querySelector('#rhd_tspan')!;
        this.hbsCmvTspan = document.querySelector('#hbs_cmv_tspan')!;
        this.antigensTspan = document.querySelector('#antigens_tspan')!;
        this.groupLabel = document.querySelector('#group_label')!;
    }

    generateGroupLabel(group: Group) {
        if (!group) return;
        const rhdCode = '0';
        const reservedCode = '0';
        this.barcode = "=%" + group.code + rhdCode + reservedCode;
        this.barcodeGenerator.generateBarcode(this.barcode, document.querySelector('#group_barcode_svg')!, 'code128');
        this.dataMatrixBarcode.setGroupCode = this.barcode;

        this.aboTspan.textContent = group.abo;
        this.rhdTspan.textContent = group.rhd.rhdText;
        this.D.textContent = group.rhd.smallDText;

        this.groupLabel.classList.remove("pos");
        this.groupLabel.classList.remove("neg");
        this.groupLabel.classList.add(group.rhd.cssClass);
    }

    updateCmvHbsLabel(cmvChecked: boolean, hbsChecked: boolean) {
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
        const cmvBarcodeSvg: HTMLElement = document.querySelector('#cmv_barcode_svg')!;
        cmvBarcodeSvg.style.visibility = (cmvChecked) ? "visible" : "hidden";
    }

    updateRhceLabel(rhcValue: string, rheValue: string) {
        // en dash (–), not -.
        this.C.textContent = (rhcValue === "0") ? "\u2013" : "+";
        this.c.textContent = (rhcValue === "2") ? "\u2013" : "+";
        this.E.textContent = (rheValue === "0") ? "\u2013" : "+";
        this.e.textContent = (rheValue === "2") ? "\u2013" : "+";
    }

    updateAntigens(newText: string) {
        this.antigensTspan.textContent = "NEG: " + newText;
    }
}