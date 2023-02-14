/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./src/barcodeGenerator.ts":
/*!*********************************!*\
  !*** ./src/barcodeGenerator.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BarcodeGenerator = void 0;
const datamatrix_js_1 = __webpack_require__(/*! ./lib/datamatrix.js */ "./src/lib/datamatrix.js");
const codabar_js_1 = __webpack_require__(/*! ./lib/codabar.js */ "./src/lib/codabar.js");
const code128_js_1 = __webpack_require__(/*! ./lib/code128.js */ "./src/lib/code128.js");
class BarcodeGenerator {
    generateBarcodefromId(value, svgId, format) {
        this.generateBarcode(value, document.getElementById(svgId), format);
    }
    generateBarcode(text, oldSvg, format) {
        const x = oldSvg.getAttribute('x');
        const y = oldSvg.getAttribute('y');
        const h = oldSvg.getAttribute('height');
        const w = oldSvg.getAttribute('width');
        const parent = oldSvg.parentNode;
        const id = oldSvg.getAttribute("id");
        oldSvg.remove();
        let newSvg;
        if (format == "code128") {
            newSvg = (0, code128_js_1.Code128)({
                msg: text,
                dim: [parseFloat(w), parseFloat(h)],
                pad: [0, 0],
                pal: ["#000", "#fff"]
            });
        }
        else if (format == "codabar") {
            newSvg = (0, codabar_js_1.Codabar)({
                msg: text,
                dim: [parseFloat(w), parseFloat(h)],
                pad: [0, 0],
                pal: ["#000", "#fff"],
                ratio: 2.25
            });
        }
        newSvg.setAttribute("id", id);
        newSvg.setAttribute('title', text);
        newSvg.setAttribute('preserveAspectRatio', 'none');
        newSvg.setAttribute('x', x);
        newSvg.setAttribute('y', y);
        newSvg.setAttribute('width', w);
        newSvg.setAttribute('height', h);
        parent.appendChild(newSvg);
    }
    generateDataMatrix(din, group, product, expiry, phenotype) {
        if (!din || !group || !product || !expiry)
            return;
        const parent = document.getElementById("blood_unit");
        if (!parent)
            return;
        // concatenate string in one of 2 formats. Either RT017-ICCBBA format 10 or 3.
        // don't know which NHSBT will use. Could also conceivably use format 9.
        let text = "";
        if (phenotype) {
            const numberOfStructures = 5;
            const messageCode = 10;
            const leader = "=+" + String(numberOfStructures).padStart(2, '0') + String(messageCode).padStart(3, '0');
            text = leader + din + group + product + expiry + phenotype;
        }
        else {
            const numberOfStructures = 4;
            const messageCode = 3;
            const leader = "=+" + String(numberOfStructures).padStart(2, '0') + String(messageCode).padStart(3, '0');
            text = leader + din + group + product + expiry;
        }
        // remove old element with this id
        const id = "dmSvg";
        let oldSvg = document.getElementById(id);
        if (oldSvg)
            oldSvg.remove();
        // make a new svg element and append it to parent.
        let svg = (0, datamatrix_js_1.DATAMatrix)({
            msg: text,
            dim: 10,
            // max size in specification is 13mm square. Typical size in example for blood label is 8mm square.
            pad: 0,
            pal: ["#000", "#fff"],
        });
        svg.setAttribute("id", id);
        svg.setAttribute('title', text);
        parent.appendChild(svg);
    }
}
exports.BarcodeGenerator = BarcodeGenerator;


/***/ }),

/***/ "./src/bledExpiryModel.ts":
/*!********************************!*\
  !*** ./src/bledExpiryModel.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatesLabel = exports.DatesForm = void 0;
const dayjs_1 = __importDefault(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js"));
const products_1 = __webpack_require__(/*! ./products */ "./src/products.ts");
class DatesForm {
    constructor(datesLabel) {
        if (!datesLabel)
            alert("Dates Label undefined");
        this.datesLabel = datesLabel;
        this.expiryIn = document.querySelector('#expiry_in');
        this.bledDateIn = document.querySelector('#bled_date_in');
        this.productSelect = document.querySelector('#product_select'); // this doesn't belong here, so should be passed in.
        this.expiryIn.addEventListener("change", this.setBledDate.bind(this));
        this.bledDateIn.addEventListener("change", this.setExpiryDate.bind(this));
        this.bledDateIn.value = (0, dayjs_1.default)().format('YYYY-MM-DD'); // default bled date is today.
    }
    setExpiryDate() {
        // sets the expiry date in the form from the bled date.
        if (this.bledDateIn.value === "")
            return;
        const selectedProduct = products_1.products.find(x => { return x.code === this.productSelect.value; });
        if (!selectedProduct)
            return;
        const bledDate = (0, dayjs_1.default)(this.bledDateIn.value);
        this.expiryIn.value = bledDate.add(selectedProduct.shelfLife, 'day').format('YYYY-MM-DD');
        this.datesLabel.generateExpiryLabel((0, dayjs_1.default)(this.expiryIn.value), (0, dayjs_1.default)(this.bledDateIn.value));
    }
    setBledDate() {
        // sets the bled date in the form from the expiry date.
        if (this.expiryIn.value === "")
            return;
        const selectedProduct = products_1.products.find(x => { return x.code === this.productSelect.value; });
        if (!selectedProduct)
            return;
        const expiryDate = (0, dayjs_1.default)(this.expiryIn.value);
        this.bledDateIn.value = expiryDate.add(-selectedProduct.shelfLife, 'day').format('YYYY-MM-DD');
        this.datesLabel.generateExpiryLabel((0, dayjs_1.default)(this.expiryIn.value), (0, dayjs_1.default)(this.bledDateIn.value));
    }
}
exports.DatesForm = DatesForm;
class DatesLabel {
    constructor(barcodeGenerator, dataMatrixBarcode) {
        //expiryBarcodeSvg: HTMLElement;
        this.barcode = "";
        this.IsbtCode = "";
        if (!barcodeGenerator)
            alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;
        if (!dataMatrixBarcode)
            alert("DataMatrix Barcode Undefined");
        this.dataMatrixBarcode = dataMatrixBarcode;
        this.expiryTspan = document.querySelector('#expiry_tspan');
        this.dateBledTspan = document.querySelector('#date_bled_tspan');
        //this.expiryBarcodeSvg = document.querySelector("#expiry_barcode_svg")!;
    }
    generateExpiryLabel(expiryDate, bledDate) {
        // local function to get day number (1-366)
        const getDayNumber = (date) => {
            const date1 = (0, dayjs_1.default)(date);
            const firstDayOfYear = (0, dayjs_1.default)(date1.year() + "-01-01");
            return date1.diff(firstDayOfYear, 'day') + 1;
        };
        // generate barcodes
        const dayNumberString = String(getDayNumber(expiryDate)).padStart(3, '0');
        this.barcode = "a" + expiryDate.year() + dayNumberString + "4a";
        this.barcodeGenerator.generateBarcode(this.barcode, document.querySelector("#expiry_barcode_svg"), 'codabar');
        const expTime = "2359";
        this.IsbtCode = "&>" + expiryDate.year().toString().slice(1) + dayNumberString + expTime;
        this.dataMatrixBarcode.setExpiryCode = this.IsbtCode;
        // generate text
        this.expiryTspan.textContent = expiryDate.format("DD MMM YYYY");
        this.dateBledTspan.textContent = bledDate.format("DD MMM YYYY");
    }
}
exports.DatesLabel = DatesLabel;


/***/ }),

/***/ "./src/dataMatrixBarcodeModel.ts":
/*!***************************************!*\
  !*** ./src/dataMatrixBarcodeModel.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataMatrixBarcode = void 0;
class DataMatrixBarcode {
    constructor(barcodeGenerator) {
        this.phenotypeCode = "";
        this.dinCode = "";
        this.expiryCode = "";
        this.groupCode = "";
        this.productCode = "";
        if (!barcodeGenerator)
            alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;
        this.barcodeParent = document.querySelector("#blood_unit");
        this.phenotypeCode = "=\\999999999999999999"; // one of the \ is an escape character.
    }
    set setDinCode(str) {
        this.dinCode = str;
        this.apply();
    }
    set setExpiryCode(str) {
        this.expiryCode = str;
        this.apply();
    }
    set setGroupCode(str) {
        this.groupCode = str;
        this.apply();
    }
    set setProductCode(str) {
        this.productCode = str;
        this.apply();
    }
    set setPhenotypeCode(str) {
        this.phenotypeCode = str;
        this.apply();
    }
    apply() {
        this.barcodeGenerator.generateDataMatrix(this.dinCode, this.groupCode, this.productCode, this.expiryCode, this.phenotypeCode);
    }
}
exports.DataMatrixBarcode = DataMatrixBarcode;


/***/ }),

/***/ "./src/dinModel.ts":
/*!*************************!*\
  !*** ./src/dinModel.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DinLabel = exports.DinForm = void 0;
const dayjs_1 = __importDefault(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js"));
class DinForm {
    constructor(errorHandler, dinLabel) {
        if (!errorHandler)
            alert("Error handler undefined");
        this.error = errorHandler;
        if (!dinLabel)
            alert("DIN label undefined");
        this.dinLabel = dinLabel;
        this.fin = document.querySelector("#din_fin_in");
        this.year = document.querySelector("#din_year_in");
        this.seq = document.querySelector("#din_seq_in");
        this.cd = document.querySelector("#din_cd_in");
        this.submit = document.querySelector("#din_go");
        this.fin.value = "G0000";
        this.year.value = (0, dayjs_1.default)().format('YY');
        this.seq.value = "000000";
        this.fin.addEventListener('change', this.generateDin.bind(this));
        this.year.addEventListener('change', this.generateDin.bind(this));
        this.seq.addEventListener('change', this.generateDin.bind(this));
        this.submit.addEventListener('click', this.generateDin.bind(this));
        this.generateDin();
    }
    formatMasked(textSource) {
        // get form data in upper case without spaces.
        return textSource.value.replace(/\s/g, '').toUpperCase();
    }
    validateInputs(finStr, yearStr, seqStr) {
        this.error.clearError(this.fin);
        this.error.clearError(this.year);
        this.error.clearError(this.seq);
        let errorSet = false;
        if (finStr.length != 5) {
            this.error.setError(this.fin, "FIN string wrong length. Must be 5 characters.");
            errorSet = true;
        }
        ;
        if (/[^A-NP-Z0-9]/g.test(finStr.slice(0, 3))) {
            this.error.setError(this.fin, "The first 3 digits of FIN can only contain A-N, P-Z or 0-9.");
            errorSet = true;
        }
        ;
        if (/[^0-9]/g.test(finStr.slice(3))) {
            this.error.setError(this.fin, "The last 2 digits of FIN can only contain numbers.");
            errorSet = true;
        }
        ;
        if (yearStr.length != 2 || /[^0-9]/g.test(yearStr)) {
            this.error.setError(this.year, "Year string wrong. Must be a 2 digit number between 00 and 99.");
            errorSet = true;
        }
        ;
        if (seqStr.length != 6 || /[^0-9]/g.test(seqStr)) {
            this.error.setError(this.seq, "Sequence number string wrong. Must be a 6 digit number between 000000 and 999999.");
            errorSet = true;
        }
        ;
        // concatenate string
        const dinStr = finStr + yearStr + seqStr;
        if (dinStr.length != 13) {
            this.error.setError(null, "DIN string wrong length");
            errorSet = true;
        }
        ;
        if (errorSet)
            return null;
        return dinStr;
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
        if (!dinStr)
            return;
        // split din into character array
        const checkSum = this.calculateChecksum(dinStr);
        if (!checkSum)
            return;
        // apply to form
        this.fin.value = finStr;
        this.year.value = yearStr;
        this.seq.value = seqStr;
        this.cd.value = checkSum.checkChar;
        // apply to SVG
        this.dinLabel.apply(dinStr, checkSum, seqStr);
    }
}
exports.DinForm = DinForm;
class DinLabel {
    constructor(barcodeGenerator, dataMatrixBarcode) {
        this.barcode = "";
        this.smallBarcode = "";
        if (!barcodeGenerator)
            alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;
        if (!dataMatrixBarcode)
            alert("DataMatrix Barcode Undefined");
        this.dataMatrixBarcode = dataMatrixBarcode;
        //this.dinSvg = document.querySelector("#din_barcode_svg")!;
        //this.smallDinSvg = document.querySelector("#din_small_barcode_svg")!;
        this.dinTspan = document.querySelector("#din_eye_readable");
        this.dinTspan1 = document.querySelector("#din_eye_readable_1");
        this.dinTspan2 = document.querySelector("#din_eye_readable_2");
        this.dinTspan3 = document.querySelector("#din_eye_readable_3");
        this.dinTspan4 = document.querySelector("#din_eye_readable_4");
        this.dinTspan5 = document.querySelector("#din_eye_readable_5");
        //this.cdBox = document.querySelector("#checkdigitBox"); // not currently used.
    }
    apply(dinStr, checkSum, seqStr) {
        this.barcode = "=" + dinStr + (checkSum.checkDigit + 60);
        this.smallBarcode = "&a" + seqStr;
        this.barcodeGenerator.generateBarcode(this.barcode, document.querySelector("#din_barcode_svg"), 'code128');
        this.barcodeGenerator.generateBarcode(this.smallBarcode, document.querySelector("#din_small_barcode_svg"), 'code128');
        this.dataMatrixBarcode.setDinCode = this.barcode;
        //this.dinTspan.textContent = `${dinStr.slice(0, 4)} ${dinStr.slice(4, 7)} ${dinStr.slice(7, 10)} ${dinStr.slice(10, 13)}  ${checkSum.checkChar}`;
        this.dinTspan1.textContent = dinStr.slice(0, 4);
        this.dinTspan2.textContent = dinStr.slice(4, 7);
        this.dinTspan3.textContent = dinStr.slice(7, 10);
        this.dinTspan4.textContent = dinStr.slice(10, 13);
        this.dinTspan5.textContent = checkSum.checkChar;
    }
}
exports.DinLabel = DinLabel;


/***/ }),

/***/ "./src/errorHandler.ts":
/*!*****************************!*\
  !*** ./src/errorHandler.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorHandler = void 0;
class ErrorHandler {
    constructor() {
        this.errorText = document.querySelector("#errorText");
        this.clearError(null);
    }
    setError(textInputElement, errorMessage) {
        this.errorText.innerHTML += "<li>" + errorMessage + "</li>";
        this.errorText.style.display = "block";
        if (textInputElement)
            textInputElement.classList.add("errorTextInput");
    }
    clearError(textInputElement) {
        this.errorText.innerHTML = "";
        this.errorText.style.display = "none";
        if (textInputElement)
            textInputElement.classList.remove("errorTextInput");
    }
}
exports.ErrorHandler = ErrorHandler;


/***/ }),

/***/ "./src/groups.ts":
/*!***********************!*\
  !*** ./src/groups.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.groups = exports.rhdNeg = exports.rhdPos = exports.Group = exports.RhD = void 0;
class RhD {
    constructor(cssClass, rhdText, smallDText) {
        this.cssClass = cssClass;
        this.rhdText = rhdText;
        this.smallDText = smallDText;
    }
}
exports.RhD = RhD;
class Group {
    constructor(abo, rhd, text, code) {
        this.abo = abo;
        this.rhd = rhd;
        this.text = text;
        this.code = code;
    }
}
exports.Group = Group;
;
exports.rhdPos = new RhD("pos", "Rh D POSITIVE", "+");
exports.rhdNeg = new RhD("neg", "Rh D NEGATIVE", "\u2013"); // en dash (�), not -.
exports.groups = [
    {
        "abo": "O",
        "rhd": exports.rhdPos,
        "text": "O Pos",
        "code": "51"
    },
    {
        "abo": "O",
        "rhd": exports.rhdNeg,
        "text": "O Neg",
        "code": "95"
    },
    {
        "abo": "A",
        "rhd": exports.rhdPos,
        "text": "A Pos",
        "code": "62"
    },
    {
        "abo": "A",
        "rhd": exports.rhdNeg,
        "text": "A Neg",
        "code": "06"
    },
    {
        "abo": "B",
        "rhd": exports.rhdPos,
        "text": "B Pos",
        "code": "73"
    },
    {
        "abo": "B",
        "rhd": exports.rhdNeg,
        "text": "B Neg",
        "code": "17"
    },
    {
        "abo": "AB",
        "rhd": exports.rhdPos,
        "text": "AB Pos",
        "code": "84"
    },
    {
        "abo": "AB",
        "rhd": exports.rhdNeg,
        "text": "AB Neg",
        "code": "28"
    }
];
//if (groups.length == 0) {
//    groups.push(new Group('O', '+', 'O Pos', '51'));
//    groups.push(new Group('O', '-', 'O Neg', '95'));
//    groups.push(new Group('A', '+', 'A Pos', '62'));
//    groups.push(new Group('A', '-', 'A Neg', '06'));
//    groups.push(new Group('B', '+', 'B Pos', '73'));
//    groups.push(new Group('B', '-', 'B Neg', '17'));
//    groups.push(new Group('AB', '+', 'AB Pos', '84'));
//    groups.push(new Group('AB', '-', 'AB Neg', '28'));
//}


/***/ }),

/***/ "./src/groupsModel.ts":
/*!****************************!*\
  !*** ./src/groupsModel.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupsLabel = exports.GroupsForm = void 0;
const groups_1 = __webpack_require__(/*! ./groups */ "./src/groups.ts");
class GroupsForm {
    constructor(groupLabel) {
        if (!groupLabel)
            alert("Group Label Undefined");
        this.groupLabel = groupLabel;
        this.groupSelect = document.querySelector("#group_select");
        this.rhcSelect = document.querySelector("#rhc_select");
        this.rheSelect = document.querySelector("#rhe_select");
        this.cmvIn = document.querySelector("#cmv_in");
        this.hbsIn = document.querySelector("#hbs_in");
        this.antigensIn = document.querySelector("#antigens_in");
        for (let i = 0; i < groups_1.groups.length; i++) {
            this.groupSelect.add(new Option(groups_1.groups[i].text, i.toString()), undefined);
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
        const group = groups_1.groups[parseInt(this.groupSelect.value)];
        if (group)
            this.groupLabel.generateGroupLabel(group);
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
exports.GroupsForm = GroupsForm;
class GroupsLabel {
    constructor(barcodeGenerator, dataMatrixBarcode) {
        this.barcode = "";
        if (!barcodeGenerator)
            alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;
        if (!dataMatrixBarcode)
            alert("DataMatrix Barcode Undefined");
        this.dataMatrixBarcode = dataMatrixBarcode;
        //this.groupBarcodeSvg = document.querySelector('#group_barcode_svg')!;
        //this.cmvBarcodeSvg = document.querySelector('#cmv_barcode_svg')!;
        this.D = document.querySelector('#D_type_tspan');
        this.C = document.querySelector('#C_type_tspan');
        this.c = document.querySelector('#c_type_tspan');
        this.E = document.querySelector('#E_type_tspan');
        this.e = document.querySelector('#e_type_tspan');
        this.aboTspan = document.querySelector('#abo_tspan');
        this.rhdTspan = document.querySelector('#rhd_tspan');
        this.hbsCmvTspan = document.querySelector('#hbs_cmv_tspan');
        this.antigensTspan = document.querySelector('#antigens_tspan');
        this.groupLabel = document.querySelector('#group_label');
    }
    generateGroupLabel(group) {
        if (!group)
            return;
        const rhdCode = '0';
        const reservedCode = '0';
        this.barcode = "=%" + group.code + rhdCode + reservedCode;
        this.barcodeGenerator.generateBarcode(this.barcode, document.querySelector('#group_barcode_svg'), 'code128');
        this.dataMatrixBarcode.setGroupCode = this.barcode;
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
        const cmvBarcodeSvg = document.querySelector('#cmv_barcode_svg');
        cmvBarcodeSvg.style.visibility = (cmvChecked) ? "visible" : "hidden";
    }
    updateRhceLabel(rhcValue, rheValue) {
        // en dash (�), not -.
        this.C.textContent = (rhcValue === "0") ? "\u2013" : "+";
        this.c.textContent = (rhcValue === "2") ? "\u2013" : "+";
        this.E.textContent = (rheValue === "0") ? "\u2013" : "+";
        this.e.textContent = (rheValue === "2") ? "\u2013" : "+";
    }
    updateAntigens(newText) {
        this.antigensTspan.textContent = "NEG: " + newText;
    }
}
exports.GroupsLabel = GroupsLabel;


/***/ }),

/***/ "./src/lib/Code128Barcode.ts":
/*!***********************************!*\
  !*** ./src/lib/Code128Barcode.ts ***!
  \***********************************/
/***/ (function(module, exports) {

"use strict";

/*
 *  MIT License
 *
 *  Copyright (c) 2023 Matthew Helyar (modifications only)
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 *      Based on:
 *      https://github.com/datalog/barcode-svg
 *      under MIT license
 *      # barcode.js has no dependencies
 *      Copyright (c) 2020 Constantine
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Code128Barcode_instances, _Code128Barcode_testField, _Code128Barcode_w, _Code128Barcode_h, _Code128Barcode_px, _Code128Barcode_py, _Code128Barcode_fg, _Code128Barcode_bg, _Code128Barcode_dir, _Code128Barcode_l, _Code128Barcode_sx, _Code128Barcode_sy, _Code128Barcode_er, _Code128Barcode_createElement, _Code128Barcode_generateSvg, _Code128Barcode_tryC, _Code128Barcode_chooseEncoding, _Code128Barcode_checkSum, _Code128Barcode_getValueArray, _Code128Barcode_def, _Code128Barcode_bin;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Code128Barcode = void 0;
var direction;
(function (direction) {
    direction[direction["h"] = 0] = "h";
    direction[direction["v"] = 1] = "v";
})(direction || (direction = {}));
;
class Code128Barcode {
    constructor(B) {
        _Code128Barcode_instances.add(this);
        _Code128Barcode_testField.set(this, 'privateText');
        this.msg = '';
        this.encoded = [];
        this.dim = [320, 80];
        _Code128Barcode_w.set(this, void 0);
        _Code128Barcode_h.set(this, void 0);
        this.pad = [20, 16];
        _Code128Barcode_px.set(this, void 0);
        _Code128Barcode_py.set(this, void 0);
        this.pal = ['#000', '#FFF'];
        _Code128Barcode_fg.set(this, void 0);
        _Code128Barcode_bg.set(this, void 0);
        _Code128Barcode_dir.set(this, direction.h);
        _Code128Barcode_l.set(this, void 0);
        _Code128Barcode_sx.set(this, 1);
        _Code128Barcode_sy.set(this, 1);
        _Code128Barcode_er.set(this, 0);
        this.valueArray = [];
        if (typeof B === 'string')
            this.msg = B;
        else {
            if (B.msg)
                this.msg = B.msg;
            if (B.dim)
                this.dim = B.dim;
            if (B.pad)
                this.pad = B.pad;
            if (B.pal)
                this.pal = B.pal;
        }
        __classPrivateFieldSet(this, _Code128Barcode_l, 0, "f");
        __classPrivateFieldSet(this, _Code128Barcode_w, Math.abs(this.dim[0]), "f");
        __classPrivateFieldSet(this, _Code128Barcode_h, Math.abs(this.dim[1]), "f");
        __classPrivateFieldSet(this, _Code128Barcode_px, Math.abs(this.pad[0]), "f");
        __classPrivateFieldSet(this, _Code128Barcode_py, Math.abs(this.pad[1]), "f");
        __classPrivateFieldSet(this, _Code128Barcode_fg, this.pal[0], "f");
        __classPrivateFieldSet(this, _Code128Barcode_bg, this.pal[1], "f");
        // convert string message to bar/space pattern
        this.encoded = this.encode(this.msg);
        __classPrivateFieldSet(this, _Code128Barcode_l, this.encoded.length, "f");
        /* ecc: reset to default values and relative width */
        if (0 == __classPrivateFieldGet(this, _Code128Barcode_w, "f") && 0 == __classPrivateFieldGet(this, _Code128Barcode_h, "f")) {
            __classPrivateFieldSet(this, _Code128Barcode_px, 20, "f");
            __classPrivateFieldSet(this, _Code128Barcode_py, 16, "f");
            __classPrivateFieldSet(this, _Code128Barcode_w, 2 * (__classPrivateFieldGet(this, _Code128Barcode_l, "f") + __classPrivateFieldGet(this, _Code128Barcode_px, "f")), "f");
            __classPrivateFieldSet(this, _Code128Barcode_h, 80, "f");
        }
        __classPrivateFieldSet(this, _Code128Barcode_dir, __classPrivateFieldGet(this, _Code128Barcode_h, "f") > __classPrivateFieldGet(this, _Code128Barcode_w, "f") ? direction.v : direction.h, "f");
        /* deal with auto width or height */
        if (0 == __classPrivateFieldGet(this, _Code128Barcode_w, "f")) {
            __classPrivateFieldSet(this, _Code128Barcode_w, 2 * (__classPrivateFieldGet(this, _Code128Barcode_l, "f") + __classPrivateFieldGet(this, _Code128Barcode_px, "f")), "f");
            __classPrivateFieldSet(this, _Code128Barcode_dir, direction.h, "f");
        }
        if (0 == __classPrivateFieldGet(this, _Code128Barcode_h, "f")) {
            __classPrivateFieldSet(this, _Code128Barcode_h, 2 * (__classPrivateFieldGet(this, _Code128Barcode_l, "f") + __classPrivateFieldGet(this, _Code128Barcode_py, "f")), "f");
            __classPrivateFieldSet(this, _Code128Barcode_dir, direction.v, "f");
        }
        if (__classPrivateFieldGet(this, _Code128Barcode_w, "f") < __classPrivateFieldGet(this, _Code128Barcode_px, "f")) {
            __classPrivateFieldSet(this, _Code128Barcode_px, __classPrivateFieldGet(this, _Code128Barcode_w, "f"), "f");
            console.warn('Code128: Expected {pad} value could not be bigger than {dim} value', this.pad, this.dim);
        }
        if (__classPrivateFieldGet(this, _Code128Barcode_h, "f") < __classPrivateFieldGet(this, _Code128Barcode_py, "f")) {
            __classPrivateFieldSet(this, _Code128Barcode_py, __classPrivateFieldGet(this, _Code128Barcode_h, "f"), "f");
            console.warn('Code128: Expected {pad} value could not be bigger than {dim} value', this.pad, this.dim);
        }
        if (__classPrivateFieldGet(this, _Code128Barcode_dir, "f"))
            __classPrivateFieldSet(this, _Code128Barcode_sy, __classPrivateFieldGet(this, _Code128Barcode_l, "f"), "f");
        else
            __classPrivateFieldSet(this, _Code128Barcode_sx, __classPrivateFieldGet(this, _Code128Barcode_l, "f"), "f");
        __classPrivateFieldSet(this, _Code128Barcode_sx, parseFloat(((__classPrivateFieldGet(this, _Code128Barcode_w, "f") - (2 * __classPrivateFieldGet(this, _Code128Barcode_px, "f"))) / __classPrivateFieldGet(this, _Code128Barcode_sx, "f")).toFixed(4)), "f");
        __classPrivateFieldSet(this, _Code128Barcode_sy, parseFloat(((__classPrivateFieldGet(this, _Code128Barcode_h, "f") - (2 * __classPrivateFieldGet(this, _Code128Barcode_py, "f"))) / __classPrivateFieldGet(this, _Code128Barcode_sy, "f")).toFixed(4)), "f");
        if (__classPrivateFieldGet(this, _Code128Barcode_er, "f") || !ishex(__classPrivateFieldGet(this, _Code128Barcode_fg, "f")) || __classPrivateFieldGet(this, _Code128Barcode_bg, "f") && !ishex(__classPrivateFieldGet(this, _Code128Barcode_bg, "f"))) {
            __classPrivateFieldSet(this, _Code128Barcode_fg, '#b11', "f");
            __classPrivateFieldSet(this, _Code128Barcode_bg, '#fee', "f");
            console.warn('Code128: Please double check barcode params');
        }
        // helper just for handling config object
        function ishex(c) {
            return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(c);
        }
    }
    get svg() { return __classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_generateSvg).call(this); }
    get128Avalue(str) {
        let char = str.charCodeAt(0);
        // char codes 0-31, value = charcode + 64 (i.e. 64-95)
        if (char < 32)
            return char + 64;
        // char codes 32-127, value = charcode - 32 (i.e. 0-95).
        else if (char < 127)
            return char - 32;
        // common/uncommon/Barcodesoft -> value
        // FNC1 202/207/247 -> 102 in A,B,C
        // FNC2 197/202/242 -> 97  in A,B
        // FNC3 196/201/241 -> 96  in A,B
        // FNC4 201/206/246 -> 101 in A
        // FNC4 200/205/245 -> 100 in B
        // commmon used here:
        else if (char == 196 || char == 197 || char == 201 || char == 202)
            return char - 100;
        else {
            console.error('illegal character in barcode could not be converted to Code128A:' + str);
            return NaN;
        }
    }
    get128Bvalue(str) {
        let char = str.charCodeAt(0);
        // char codes 0-31, not in 128B.
        if (char < 32)
            return NaN;
        // char codes 32-127, value = charcode - 32 (i.e. 0-95).
        else if (char < 127)
            return char - 32;
        // common/uncommon/Barcodesoft -> value
        // FNC1 202/207/247 -> 102 in A,B,C
        // FNC2 197/202/242 -> 97  in A,B
        // FNC3 196/201/241 -> 96  in A,B
        // FNC4 201/206/246 -> 101 in A
        // FNC4 200/205/245 -> 100 in B
        // commmon used here:
        else if (char == 195 || char == 196 || char == 197 || char == 200 || char == 202)
            return char - 100;
        else {
            console.error('illegal character in barcode could not be converted to Code128B:' + str);
            return NaN;
        }
    }
    encode(o) {
        // encodes message as an array of 1 and 0 for a bar/space pattern.
        // 1. split into numbers, exclusive A, exclusive B, and A&B!C (AB overlap, not C).
        const splitMsg = o.match(/[0-9]+|[\x00-\x1F\xC9]+|[\x60-\x7F\xC3\xC8]+|[\x20-\x2F\x3A-\x5F\xC4\xC5\xCA]+/g);
        if (!splitMsg)
            return [];
        // 2. test each to see which encodings are possible. (differnt tests to exclusive)
        // and asign each array element into an object of data and encoding
        let msgBlocks = [];
        for (let m of splitMsg) {
            let encoding = "";
            if (/[0-9]+/g.test(m))
                encoding += "C";
            if (/[\x20-\x7F\xC3\xC4\xC5\xC8\xCA]+/g.test(m))
                encoding += "B";
            if (/[\x00-\x5F\xC4\xC5\xC9\xCA]+/g.test(m))
                encoding += "A";
            msgBlocks.push({ data: m, enc: encoding });
        }
        // 3. choose optimal encoding pattern 
        for (let i = 0; i < msgBlocks.length; i++) {
            __classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_chooseEncoding).call(this, msgBlocks, i);
        }
        // 4. insert Start and Change code values, convert data to values, add checksum and End code.
        // 5. convert to bar/space pattern.
        let r = [];
        this.valueArray = __classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_getValueArray).call(this, msgBlocks);
        for (let val of this.valueArray) {
            r.push(__classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_def).call(this, val));
        }
        return __classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_bin).call(this, r.join(''));
    }
}
exports.Code128Barcode = Code128Barcode;
_Code128Barcode_testField = new WeakMap(), _Code128Barcode_w = new WeakMap(), _Code128Barcode_h = new WeakMap(), _Code128Barcode_px = new WeakMap(), _Code128Barcode_py = new WeakMap(), _Code128Barcode_fg = new WeakMap(), _Code128Barcode_bg = new WeakMap(), _Code128Barcode_dir = new WeakMap(), _Code128Barcode_l = new WeakMap(), _Code128Barcode_sx = new WeakMap(), _Code128Barcode_sy = new WeakMap(), _Code128Barcode_er = new WeakMap(), _Code128Barcode_instances = new WeakSet(), _Code128Barcode_createElement = function _Code128Barcode_createElement(tag, namespace, attributes) {
    const n = document.createElementNS(namespace, tag);
    //let key: keyof typeof attributes;
    for (let key in attributes) {
        n.setAttribute(key, attributes[key]);
    }
    return n;
}, _Code128Barcode_generateSvg = function _Code128Barcode_generateSvg() {
    // write outout as SVG
    const namespace = 'http://www.w3.org/2000/svg';
    let path = '';
    // here's the real magic, making a very efficient single path barcode.
    // c is the horizontal position, literally just comes from the remaining length of the message
    // d is the bar thickness.
    let d = 0;
    let c = __classPrivateFieldGet(this, _Code128Barcode_l, "f");
    while (c) {
        this.encoded[--c] && ++d && !this.encoded[c - 1] && (path += (__classPrivateFieldGet(this, _Code128Barcode_dir, "f") == direction.v) ?
            'M1,' + c + 'H0v' + d + 'h1v-' + d + 'z' :
            'M' + c + ',1h' + d + 'V0h-' + d + 'v1z', d = 0);
    }
    // set up svg tag
    const r = __classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_createElement).call(this, 'svg', namespace, {
        'viewBox': [0, 0, __classPrivateFieldGet(this, _Code128Barcode_w, "f"), __classPrivateFieldGet(this, _Code128Barcode_h, "f")].join(' '),
        'width': __classPrivateFieldGet(this, _Code128Barcode_w, "f"),
        'height': __classPrivateFieldGet(this, _Code128Barcode_h, "f"),
        'fill': __classPrivateFieldGet(this, _Code128Barcode_fg, "f"),
        'shape-rendering': 'crispEdges',
        'xmlns': namespace,
        'version': '1.1'
    });
    // add background path to svg
    if (__classPrivateFieldGet(this, _Code128Barcode_bg, "f"))
        r.appendChild(__classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_createElement).call(this, 'path', namespace, {
            'fill': __classPrivateFieldGet(this, _Code128Barcode_bg, "f"),
            'd': 'M0,0V' + __classPrivateFieldGet(this, _Code128Barcode_h, "f") + 'H' + __classPrivateFieldGet(this, _Code128Barcode_w, "f") + 'V0H0Z'
        }));
    // apply transform and add path tag to svg
    r.appendChild(__classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_createElement).call(this, 'path', namespace, {
        'transform': 'matrix(' + [__classPrivateFieldGet(this, _Code128Barcode_sx, "f"), 0, 0, __classPrivateFieldGet(this, _Code128Barcode_sy, "f"), __classPrivateFieldGet(this, _Code128Barcode_px, "f"), __classPrivateFieldGet(this, _Code128Barcode_py, "f")] + ')',
        'd': path
    }));
    return r;
}, _Code128Barcode_tryC = function _Code128Barcode_tryC(array, arrayIndex) {
    // collapses CBA encoding into either C or AB
    // returns true if C chosen, false if C rejected.
    const block = array[arrayIndex];
    const isFirstBlock = arrayIndex === 0;
    const isLastBlock = arrayIndex === array.length - 1;
    // test length of numerical block to see if it's worth it to encode as 128C
    const longEnoughForC = block.data.length >= 2 + (isFirstBlock ? 0 : 2) + (isLastBlock ? 0 : 2);
    //console.log(block, "trying C...");
    if (!longEnoughForC) {
        // remove C from enc and try again
        block.enc = block.enc.replace(/C/g, "");
        //console.log("C rejected, trying: " + n.enc);
        return false;
    }
    block.enc = "C";
    //console.log("C chosen");
    if (block.data.length % 2 === 0)
        return true;
    if (isFirstBlock && isLastBlock) {
        // if block is whole message, make a new block encoding B at end
        //console.log("whole message, odd length, push last char to new block");
        array.push({ data: block.data.slice(-1), enc: "B" });
        block.data = block.data.slice(0, -1);
    }
    else if (isLastBlock) {
        // if at end, push off first character to previous
        //console.log("last block, odd length, push first char to prev block")
        array[arrayIndex - 1].data += block.data.slice(0, 1);
        block.data = block.data.slice(1);
    }
    else {
        // else push off last character.
        //console.log("not last block, odd length, push last char to next block")
        array[arrayIndex + 1].data = block.data.slice(-1) + array[arrayIndex + 1].data;
        block.data = block.data.slice(0, -1);
    }
    return true;
}, _Code128Barcode_chooseEncoding = function _Code128Barcode_chooseEncoding(array, arrayIndex) {
    // for each, determine what encoding should be, removing from encoding until everything is just 1 encoding
    /* - for CBA, test if C, move either extra odd first/last char to preceding/subsequent item,
    * then encoding either becomes C or BA.
    * - for BA, look forward and backward to see if either end is framed with either A or B and use that;
    * if both sides are start/end or C, then just use B as default, so change encoding or A or B.
    * - now everythig is C or B or A.
    */
    const block = array[arrayIndex];
    //console.log(n, i, isFirstBlock, isLastBlock);
    //if (block.enc.length == 0) {
    //	console.error(block, "ERROR: NOT POSSIBLE TO ENCODE");
    //	return;
    //}
    //if (block.enc.length == 1) {
    //	//console.log(n, `encoding chosen: ${n.enc}`);
    //	return;
    //}
    while (block.enc.length > 1) {
        // chose an encoding.
        //console.log(n, "need to choose encoding.");
        if (block.enc.includes("C") && __classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_tryC).call(this, array, arrayIndex))
            break;
        //console.log(block, "trying B|A...");
        //console.log("look backward");
        for (let j = arrayIndex - 1; j >= 0; j--) {
            if (array[j].enc.includes("C")) {
                //console.log("ran into a previous C, can't set A|B encoding based on previous");
                break;
            }
            if (array[j].enc == "A" || array[j].enc == "B") {
                block.enc = array[j].enc;
                //console.log(`found a ${n.enc}, set encoding to that.`)
                return;
            }
            //console.log(`previous encoding = ${array[j].enc}, continuing to look backwards`);
        }
        if (arrayIndex == array.length - 1) {
            // at end of array, break out of recursion, don't try to look forwards.
            block.enc = "B";
            return;
        }
        //console.log("look forward");
        for (let j = arrayIndex + 1; j < array.length; j++) {
            //if (array[j].enc.includes("C")) {
            if (array[j].enc.includes("C")) {
                // look ahead and just determine whether that collapses to C or A|B.
                __classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_tryC).call(this, array, j);
            }
            if (array[j].enc == "C") {
                block.enc = "B";
                //console.log("ran into a following C, can't set A|B encoding based on next, default to B");
                return;
            }
            if (array[j].enc == "A" || array[j].enc == "B") {
                block.enc = array[j].enc;
                //console.log(`found a ${n.enc}, set encoding to that.`)
                return;
            }
            //console.log(`next encoding = ${array[j].enc}, continuing to look forwards`);
        }
        if (block.enc.length > 1) {
            // if still not found, recurse to work backwards from the end.
            // sholdn't ever need to do this.#
            //console.log(array);
            //console.log("*********** RECURSE FORWARDS ***********");
            __classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_chooseEncoding).call(this, array, arrayIndex + 1);
        }
    }
}, _Code128Barcode_checkSum = function _Code128Barcode_checkSum(valArr) {
    var sum = 0;
    for (let i = valArr.length - 1; i > 0; --i)
        sum += i * valArr[i];
    return (sum + valArr[0]) % 103;
}, _Code128Barcode_getValueArray = function _Code128Barcode_getValueArray(blockArray) {
    // converts an array of {string data+encoding} blocks into a decimal value array
    let lastEnc = "", valueArray = [];
    for (let i = 0; i < blockArray.length; i++) {
        const block = blockArray[i];
        // handle Start and Change codes and data
        switch (block.enc) {
            case "A":
                if (block.enc != lastEnc) {
                    valueArray.push((i == 0) ? 103 : 101);
                    lastEnc = block.enc;
                }
                for (let char of block.data) {
                    const v = this.get128Avalue(char);
                    if (!isNaN(v))
                        valueArray.push(v);
                }
                break;
            case "B":
                if (block.enc != lastEnc) {
                    valueArray.push((i == 0) ? 104 : 100);
                    lastEnc = block.enc;
                }
                for (let char of block.data) {
                    const v = this.get128Bvalue(char);
                    if (!isNaN(v))
                        valueArray.push(v);
                }
                break;
            case "C":
                if (block.enc != lastEnc) {
                    valueArray.push((i == 0) ? 105 : 99);
                    lastEnc = block.enc;
                }
                for (let j = 0; j < block.data.length; j += 2) {
                    valueArray.push(parseInt(block.data[j] + block.data[j + 1]));
                }
                break;
            default:
                console.error("message block encoding unknown");
        }
    }
    // insert checksum
    valueArray.push(__classPrivateFieldGet(this, _Code128Barcode_instances, "m", _Code128Barcode_checkSum).call(this, valueArray));
    // insert end code
    valueArray.push(106);
    return valueArray;
}, _Code128Barcode_def = function _Code128Barcode_def(n) {
    // return bar/space pattern as a binary string from an index into array. e.g. def(0) = "11011001100"
    if (106 < n)
        console.warn(`Code128: {bad char} (${n}) was used and it was replaced by X`), n = 56, __classPrivateFieldSet(this, _Code128Barcode_er, 1, "f");
    return [1740, 1644, 1638, 1176, 1164, 1100, 1224, 1220, 1124, 1608, 1604, 1572, 1436, 1244, 1230, 1484, 1260, 1254, 1650, 1628, 1614,
        1764, 1652, 1902, 1868, 1836, 1830, 1892, 1844, 1842, 1752, 1734, 1590, 1304, 1112, 1094, 1416, 1128, 1122, 1672, 1576, 1570, 1464,
        1422, 1134, 1496, 1478, 1142, 1910, 1678, 1582, 1768, 1762, 1774, 1880, 1862, 1814, 1896, 1890, 1818, 1914, 1602, 1930, 1328, 1292,
        1200, 1158, 1068, 1062, 1424, 1412, 1232, 1218, 1076, 1074, 1554, 1616, 1978, 1556, 1146, 1340, 1212, 1182, 1508, 1268, 1266, 1956,
        1940, 1938, 1758, 1782, 1974, 1400, 1310, 1118, 1512, 1506, 1960, 1954, 1502, 1518, 1886, 1966, 1668, 1680, 1692, 6379][n].toString(2);
}, _Code128Barcode_bin = function _Code128Barcode_bin(o) {
    // converts a number string to an array of single digit numbers. I think the input would be only base 2 anyway. e.g. 00111 -> [0,0,1,1,1)
    var r = [], c = o.length;
    while (c)
        r[--c] = parseInt(o[c]);
    return r;
};
//exports.Code128Barcode = Code128Barcode;
// for jest testing framework. Means imports have to be in the require() syntax even outside of test.
module.exports = Code128Barcode;


/***/ }),

/***/ "./src/products.ts":
/*!*************************!*\
  !*** ./src/products.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.products = exports.granulocytes = exports.cryo = exports.ffp = exports.platelets = exports.redCells = exports.Component = void 0;
class Component {
    constructor(name, text, irradPossible, specialPossible, cmvPossible, hbsPossible, storageText, color, anticoagulantTextVisibility, rhPhenVisibility) {
        this.name = name;
        this.text = text;
        this.irradPossible = irradPossible;
        this.specialPossible = specialPossible;
        this.cmvPossible = cmvPossible;
        this.hbsPossible = hbsPossible;
        this.storageText = storageText;
        this.color = color;
        this.anticoagulantTextVisibility = anticoagulantTextVisibility;
        this.rhPhenVisibility = rhPhenVisibility;
    }
}
exports.Component = Component;
exports.redCells = new Component("R", "Red Cells", true, true, true, true, "STORE AT 4\u00B0C \u00B1 2\u00B0C", "Red", "visible", "visible");
exports.platelets = new Component("P", "Platelets", true, true, true, false, "STORE AT 22\u00B0C \u00B1 2\u00B0C EXTENDED LIFE<br />AGITATE GENTLY THROUGHOUT STORAGE", "Yellow", "hidden", "hidden");
exports.ffp = new Component("F", "Fresh Frozen Plasma", false, false, false, false, "STORE FROZEN AT -25\u00B0C OR BELOW<br />TIME THAWED _______ DATE _______", "Yellow", "hidden", "hidden");
exports.cryo = new Component("C", "Cryoprecipitate", false, false, false, false, "STORE FROZEN AT -25\u00B0C OR BELOW<br />USE WITHIN 4 HOURS OF THAWING<br />TIME THAWED _______ DATE _______", "Yellow", "hidden", "hidden");
// Granulocytes should have the irradiated button disabled but also always be irradiated.
exports.granulocytes = new Component("G", "Granulocytes", true, true, true, true, "DO NOT AGITATE<br />STORE AT 22\u00B0C \u00B1 2\u00B0C", "Red", "hidden", "hidden");
class Product {
    constructor(component, pack, irr, special, availability, code, volume, shelfLife, text) {
        this.component = component;
        this.pack = pack;
        this.irr = irr;
        this.special = special;
        this.availability = availability;
        this.code = code;
        this.volume = volume;
        this.shelfLife = shelfLife;
        this.text = text;
    }
}
;
exports.products = [
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "04333",
        "volume": 289,
        "shelfLife": 35,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "44333",
        "volume": 289,
        "shelfLife": 14,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": false,
        "special": true,
        "availability": true,
        "code": "06460",
        "volume": 292,
        "shelfLife": 1,
        "text": "RED CELLS THAWED AND WASHED, LD MANUAL PREPARATION"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": false,
        "special": true,
        "availability": true,
        "code": "54263",
        "volume": 295,
        "shelfLife": 3,
        "text": "RED CELLS THAWED AND WASHED, LD CLOSED SYSTEM PREPARATION"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": false,
        "special": true,
        "availability": true,
        "code": "46531",
        "volume": 278,
        "shelfLife": 14,
        "text": "RED CELLS WASHED, LD. MANUAL WASH IN SAGM"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": true,
        "special": true,
        "availability": true,
        "code": "46532",
        "volume": 278,
        "shelfLife": 2,
        "text": "RED CELLS WASHED, LD, IRRADIATED. MANUAL WASH IN SAGM"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "54288",
        "volume": 217,
        "shelfLife": 7,
        "text": "PLATELETS, APHERESIS, LD"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "54289",
        "volume": 217,
        "shelfLife": 7,
        "text": "PLATELETS, APHERESIS, LD"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "54290",
        "volume": 217,
        "shelfLife": 7,
        "text": "PLATELETS, APHERESIS, LD"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "54291",
        "volume": 217,
        "shelfLife": 7,
        "text": "PLATELETS, APHERESIS, LD"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "54292",
        "volume": 217,
        "shelfLife": 7,
        "text": "PLATELETS, APHERESIS, LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "54293",
        "volume": 217,
        "shelfLife": 7,
        "text": "PLATELETS, APHERESIS, LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "54294",
        "volume": 217,
        "shelfLife": 7,
        "text": "PLATELETS, APHERESIS, LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "54295",
        "volume": 217,
        "shelfLife": 7,
        "text": "PLATELETS, APHERESIS, LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": false,
        "special": true,
        "availability": true,
        "code": "54243",
        "volume": 207,
        "shelfLife": 1,
        "text": "PLATELETS, APHERESIS IN ADDITIVE SOLUTION PACK 1 LD"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": false,
        "special": true,
        "availability": true,
        "code": "54244",
        "volume": 207,
        "shelfLife": 1,
        "text": "PLATELETS, APHERESIS IN ADDITIVE SOLUTION PACK 2 LD"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": false,
        "special": true,
        "availability": true,
        "code": "54245",
        "volume": 207,
        "shelfLife": 1,
        "text": "PLATELETS, APHERESIS IN ADDITIVE SOLUTION PACK 3 LD"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": false,
        "special": true,
        "availability": true,
        "code": "54246",
        "volume": 207,
        "shelfLife": 1,
        "text": "PLATELETS, APHERESIS IN ADDITIVE SOLUTION LD"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": true,
        "special": true,
        "availability": true,
        "code": "54233",
        "volume": 207,
        "shelfLife": 1,
        "text": "PLATELETS, APHERESIS IN ADDITIVE SOLUTION, IRRADIATED, PACK 1 LD"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": true,
        "special": true,
        "availability": true,
        "code": "54234",
        "volume": 207,
        "shelfLife": 1,
        "text": "PLATELETS, APHERESIS IN ADDITIVE SOLUTION, IRRADIATED, PACK 2 LD"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": true,
        "special": true,
        "availability": true,
        "code": "54235",
        "volume": 207,
        "shelfLife": 1,
        "text": "PLATELETS, APHERESIS IN ADDITIVE SOLUTION, IRRADIATED, PACK 3 LD"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": true,
        "special": true,
        "availability": true,
        "code": "54236",
        "volume": 207,
        "shelfLife": 1,
        "text": "PLATELETS APHERESIS IN ADDITIVE SOLUTION, IRRADIATED, LD"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "54477",
        "volume": 294,
        "shelfLife": 7,
        "text": "PLATELETS POOLED IN ADDITIVE SOLUTION AND PLASMA, LD"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "54478",
        "volume": 294,
        "shelfLife": 7,
        "text": "PLATELETS POOLED IN ADDITIVE SOLUTION AND PLASMA, IRRADIATED, LD"
    },
    {
        "component": exports.ffp,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "18300",
        "volume": 264,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD"
    },
    {
        "component": exports.ffp,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "18320",
        "volume": 264,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD"
    },
    {
        "component": exports.ffp,
        "pack": 1,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "18321",
        "volume": 264,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD"
    },
    {
        "component": exports.ffp,
        "pack": 2,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "18322",
        "volume": 264,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD"
    },
    {
        "component": exports.cryo,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "10190",
        "volume": 229,
        "shelfLife": 1095,
        "text": "CRYOPRECIPITATE, POOLED, LD"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": true,
        "special": true,
        "availability": true,
        "code": "40018",
        "volume": 251,
        "shelfLife": 1,
        "text": "RED CELLS, CPD, LD, IRRADIATED, FOR INTRAUTERINE TRANSFUSION"
    },
    {
        "component": exports.redCells,
        "pack": 1,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "56830",
        "volume": 47,
        "shelfLife": 35,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 2,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "56831",
        "volume": 47,
        "shelfLife": 35,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 3,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "56832",
        "volume": 47,
        "shelfLife": 35,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 4,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "56833",
        "volume": 47,
        "shelfLife": 35,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 5,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "56834",
        "volume": 47,
        "shelfLife": 35,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 6,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "56835",
        "volume": 47,
        "shelfLife": 35,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 1,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "46830",
        "volume": 47,
        "shelfLife": 14,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 2,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "46831",
        "volume": 47,
        "shelfLife": 14,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 3,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "46832",
        "volume": 47,
        "shelfLife": 14,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 4,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "46833",
        "volume": 47,
        "shelfLife": 14,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 5,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "46834",
        "volume": 47,
        "shelfLife": 14,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 6,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "46835",
        "volume": 47,
        "shelfLife": 14,
        "text": "RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": true,
        "special": true,
        "availability": true,
        "code": "40350",
        "volume": 362,
        "shelfLife": 1,
        "text": "RED CELLS (CPD), LD, IRRADIATED FOR EXCHANGE TRANSFUSION"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "54481",
        "volume": 289,
        "shelfLife": 35,
        "text": "RED CELLS IN ADDITIVE SOLUTION, LD FOR NEONATES AND INFANTS"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "54482",
        "volume": 289,
        "shelfLife": 14,
        "text": "RED CELLS IN ADDITIVE SOLUTION, LD FOR NEONATES AND INFANTS, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": true,
        "special": true,
        "availability": true,
        "code": "42964",
        "volume": 96,
        "shelfLife": 1,
        "text": "PLATELETS, HYPERCONCENTRATED, IRRADIATED, FOR INTRAUTERINE TRANSFUSION"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "30031",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "30032",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "30033",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 4,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "30034",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 5,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "30035",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 6,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "30036",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 7,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "30037",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 8,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "30038",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "30051",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "30052",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "30053",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 4,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "30054",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 5,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "30055",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 6,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "30056",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 7,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "30057",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 8,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "30058",
        "volume": 63,
        "shelfLife": 7,
        "text": "PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 1,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "69601",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 2,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "69602",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 3,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "69603",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 4,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "69604",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 5,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "59711",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 6,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "59712",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 7,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "59713",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 8,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "59714",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 9,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "59715",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 10,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "59716",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 11,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "59717",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.ffp,
        "pack": 12,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "59718",
        "volume": 65,
        "shelfLife": 1095,
        "text": "FRESH FROZEN PLASMA, LD FOR NEONATAL USE"
    },
    {
        "component": exports.cryo,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "29981",
        "volume": 53,
        "shelfLife": 1095,
        "text": "CRYOPRECIPITATE, LD FOR NEONATAL USE"
    },
    {
        "component": exports.granulocytes,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "54395",
        "volume": 222,
        "shelfLife": 0,
        "text": "GRANULOCYTES, POOLED, IN ADDITIVE SOLUTION / PLASMA MIX, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "12030",
        "volume": 199,
        "shelfLife": 5,
        "text": "PLATELETS APHERESIS LD"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58340",
        "volume": 199,
        "shelfLife": 5,
        "text": "PLATELETS APHERESIS LD"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58341",
        "volume": 199,
        "shelfLife": 5,
        "text": "PLATELETS APHERESIS LD"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58342",
        "volume": 199,
        "shelfLife": 5,
        "text": "PLATELETS APHERESIS LD"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "42030",
        "volume": 199,
        "shelfLife": 5,
        "text": "PLATELETS APHERESIS LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48340",
        "volume": 199,
        "shelfLife": 5,
        "text": "PLATELETS APHERESIS LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48341",
        "volume": 199,
        "shelfLife": 5,
        "text": "PLATELETS APHERESIS LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48342",
        "volume": 199,
        "shelfLife": 5,
        "text": "PLATELETS APHERESIS LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": true,
        "code": "54232",
        "volume": 294,
        "shelfLife": 5,
        "text": "PLATELETS POOLED IN PLASMA/ADDITIVE MIXTURE LD"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": true,
        "code": "54242",
        "volume": 294,
        "shelfLife": 5,
        "text": "PLATELETS POOLED IN PLASMA/ADDITIVE MIX LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "12769",
        "volume": 298,
        "shelfLife": 5,
        "text": "PLATELETS POOLED, LD"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "12789",
        "volume": 298,
        "shelfLife": 7,
        "text": "PLATELETS POOLED, LD, EXTENDED LIFE"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "54296",
        "volume": 298,
        "shelfLife": 7,
        "text": "PLATELETS POOLED, LD, EXTENDED LIFE, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "54247",
        "volume": 298,
        "shelfLife": 1,
        "text": "PLATELETS POOLED IN ADDITIVE SOLUTION"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "54237",
        "volume": 298,
        "shelfLife": 1,
        "text": "PLATELETS POOLED IN ADDITIVE SOLUTION, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 0,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "42769",
        "volume": 298,
        "shelfLife": 5,
        "text": "PLATELETS POOLED, LD, IRRADIATED"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58231",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 01 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58232",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 02 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58233",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 03 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 4,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58234",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 04 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 5,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58235",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 05 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 6,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58236",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 06 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 7,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58237",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 07 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 8,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "58238",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 08 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 9,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "50778",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 09 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 10,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "50779",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 10 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 11,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "50780",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 11 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 12,
        "irr": false,
        "special": false,
        "availability": false,
        "code": "50781",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 12 LD FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 1,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48231",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 01 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 2,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48232",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 02 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 3,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48233",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 03 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 4,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48234",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 04 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 5,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48235",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 05 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 6,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48236",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 06 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 7,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48237",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 07 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 8,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "48238",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 08 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 9,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "40778",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 09 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 10,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "40779",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 10 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 11,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "40780",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 11 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.platelets,
        "pack": 12,
        "irr": true,
        "special": false,
        "availability": false,
        "code": "40781",
        "volume": 50,
        "shelfLife": 5,
        "text": "PLATELETS, APHERESIS, PACK 12 LD, IRRADIATED FOR NEONATAL USE"
    },
    {
        "component": exports.granulocytes,
        "pack": 0,
        "irr": true,
        "special": true,
        "availability": false,
        "code": "46460",
        "volume": 56,
        "shelfLife": 0,
        "text": "LEUCOCYTES, BUFFY COAT, IRRADIATED"
    },
    {
        "component": exports.redCells,
        "pack": 0,
        "irr": false,
        "special": true,
        "availability": false,
        "code": "30002",
        "volume": 451,
        "shelfLife": 35,
        "text": "WHOLE BLOOD (CPDA1) AUTOLOGOUS"
    }
];
//function generateProductsArray() {
// N.B. THIS IS NO LONGER USED. PRODUCTS IS JUST DEFINED IN A DIFFERENT JAVASCRIPT FILE.
/*

if (products.length == 0) {
    // SPN223/11.1 (2022)
    //                component, pack, irrad, special, avail, code, volume, life, text
    products.push(new Product('R', 0, false, false, true, '04333', 289, 35, 'RED CELLS IN ADDITIVE SOLUTION LD'));
    products.push(new Product('R', 0, true, false, true, '44333', 289, 14, 'RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED'));
    products.push(new Product('R', 0, false, true, true, '06460', 292, 1, 'RED CELLS THAWED AND WASHED, LD MANUAL PREPARATION'));
    products.push(new Product('R', 0, false, true, true, '54263', 295, 3, 'RED CELLS THAWED AND WASHED, LD CLOSED SYSTEM PREPARATION'));
    products.push(new Product('R', 0, false, true, true, '46531', 278, 14, 'RED CELLS WASHED, LD. MANUAL WASH IN SAGM'));
    products.push(new Product('R', 0, true, true, true, '46532', 278, 2, 'RED CELLS WASHED, LD, IRRADIATED. MANUAL WASH IN SAGM'));
    products.push(new Product('P', 0, false, false, true, '54288', 217, 7, 'PLATELETS, APHERESIS, LD'));
    products.push(new Product('P', 1, false, false, true, '54289', 217, 7, 'PLATELETS, APHERESIS, LD'));
    products.push(new Product('P', 2, false, false, true, '54290', 217, 7, 'PLATELETS, APHERESIS, LD'));
    products.push(new Product('P', 3, false, false, true, '54291', 217, 7, 'PLATELETS, APHERESIS, LD'));
    products.push(new Product('P', 0, true, false, true, '54292', 217, 7, 'PLATELETS, APHERESIS, LD, IRRADIATED'));
    products.push(new Product('P', 1, true, false, true, '54293', 217, 7, 'PLATELETS, APHERESIS, LD, IRRADIATED'));
    products.push(new Product('P', 2, true, false, true, '54294', 217, 7, 'PLATELETS, APHERESIS, LD, IRRADIATED'));
    products.push(new Product('P', 3, true, false, true, '54295', 217, 7, 'PLATELETS, APHERESIS, LD, IRRADIATED'));
    products.push(new Product('P', 1, false, true, true, '54243', 207, 1, 'PLATELETS, APHERESIS IN ADDITIVE SOLUTION PACK 1 LD')); // "Washed" platelets
    products.push(new Product('P', 2, false, true, true, '54244', 207, 1, 'PLATELETS, APHERESIS IN ADDITIVE SOLUTION PACK 2 LD')); // "Washed" platelets
    products.push(new Product('P', 3, false, true, true, '54245', 207, 1, 'PLATELETS, APHERESIS IN ADDITIVE SOLUTION PACK 3 LD')); // "Washed" platelets
    products.push(new Product('P', 0, false, true, true, '54246', 207, 1, 'PLATELETS, APHERESIS IN ADDITIVE SOLUTION LD')); // "Washed" platelets
    products.push(new Product('P', 1, true, true, true, '54233', 207, 1, 'PLATELETS, APHERESIS IN ADDITIVE SOLUTION, IRRADIATED, PACK 1 LD')); // "Washed" platelets
    products.push(new Product('P', 2, true, true, true, '54234', 207, 1, 'PLATELETS, APHERESIS IN ADDITIVE SOLUTION, IRRADIATED, PACK 2 LD')); // "Washed" platelets
    products.push(new Product('P', 3, true, true, true, '54235', 207, 1, 'PLATELETS, APHERESIS IN ADDITIVE SOLUTION, IRRADIATED, PACK 3 LD')); // "Washed" platelets
    products.push(new Product('P', 0, true, true, true, '54236', 207, 1, 'PLATELETS APHERESIS IN ADDITIVE SOLUTION, IRRADIATED, LD')); // "Washed" platelets
    products.push(new Product('P', 0, false, false, true, '54477', 294, 7, 'PLATELETS POOLED IN ADDITIVE SOLUTION AND PLASMA, LD'));
    products.push(new Product('P', 0, true, false, true, '54478', 294, 7, 'PLATELETS POOLED IN ADDITIVE SOLUTION AND PLASMA, IRRADIATED, LD'));
    products.push(new Product('F', 0, false, false, true, '18300', 264, 1095, 'FRESH FROZEN PLASMA, LD'));
    products.push(new Product('F', 0, false, false, true, '18320', 264, 1095, 'FRESH FROZEN PLASMA, LD'));
    products.push(new Product('F', 1, false, false, true, '18321', 264, 1095, 'FRESH FROZEN PLASMA, LD'));
    products.push(new Product('F', 2, false, false, true, '18322', 264, 1095, 'FRESH FROZEN PLASMA, LD'));
    products.push(new Product('C', 0, false, false, true, '10190', 229, 1095, 'CRYOPRECIPITATE, POOLED, LD'));

    products.push(new Product('R', 0, true, true, true, '40018', 251, 1, 'RED CELLS, CPD, LD, IRRADIATED, FOR INTRAUTERINE TRANSFUSION'));
    products.push(new Product('R', 1, false, false, true, '56830', 47, 35, 'RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE'));
    products.push(new Product('R', 2, false, false, true, '56831', 47, 35, 'RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE'));
    products.push(new Product('R', 3, false, false, true, '56832', 47, 35, 'RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE'));
    products.push(new Product('R', 4, false, false, true, '56833', 47, 35, 'RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE'));
    products.push(new Product('R', 5, false, false, true, '56834', 47, 35, 'RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE'));
    products.push(new Product('R', 6, false, false, true, '56835', 47, 35, 'RED CELLS IN ADDITIVE SOLUTION LD FOR NEONATAL USE'));
    products.push(new Product('R', 1, true, false, true, '46830', 47, 14, 'RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('R', 2, true, false, true, '46831', 47, 14, 'RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('R', 3, true, false, true, '46832', 47, 14, 'RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('R', 4, true, false, true, '46833', 47, 14, 'RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('R', 4, true, false, true, '46834', 47, 14, 'RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('R', 6, true, false, true, '46835', 47, 14, 'RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('R', 0, true, true, true, '40350', 362, 1, 'RED CELLS (CPD), LD, IRRADIATED FOR EXCHANGE TRANSFUSION'));
    products.push(new Product('R', 0, false, false, true, '54481', 289, 35, 'RED CELLS IN ADDITIVE SOLUTION, LD FOR NEONATES AND INFANTS')); // LVT
    products.push(new Product('R', 0, true, false, true, '54482', 289, 14, 'RED CELLS IN ADDITIVE SOLUTION, LD FOR NEONATES AND INFANTS, IRRADIATED')); // LVT
    products.push(new Product('P', 0, true, true, true, '42964', 96, 1, 'PLATELETS, HYPERCONCENTRATED, IRRADIATED, FOR INTRAUTERINE TRANSFUSION'));
    products.push(new Product('P', 1, false, false, true, '30031', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE'));
    products.push(new Product('P', 2, false, false, true, '30032', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE'));
    products.push(new Product('P', 3, false, false, true, '30033', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE'));
    products.push(new Product('P', 4, false, false, true, '30034', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE'));
    products.push(new Product('P', 5, false, false, true, '30035', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE'));
    products.push(new Product('P', 6, false, false, true, '30036', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE'));
    products.push(new Product('P', 7, false, false, true, '30037', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE'));
    products.push(new Product('P', 8, false, false, true, '30038', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD FOR NEONATAL USE'));
    products.push(new Product('P', 1, true, false, true, '30051', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 2, true, false, true, '30052', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 3, true, false, true, '30053', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 4, true, false, true, '30054', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 5, true, false, true, '30055', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 6, true, false, true, '30056', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 7, true, false, true, '30057', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 8, true, false, true, '30058', 63, 7, 'PLATELETS IN PLASMA AND ADDITIVE SOLUTION, LD IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('F', 1, false, false, true, '69601', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 2, false, false, true, '69602', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 3, false, false, true, '69603', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 4, false, false, true, '69604', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 5, false, false, true, '59711', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 6, false, false, true, '59712', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 7, false, false, true, '59713', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 8, false, false, true, '59714', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 9, false, false, true, '59715', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 10, false, false, true, '59716', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 11, false, false, true, '59717', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('F', 12, false, false, true, '59718', 65, 1095, 'FRESH FROZEN PLASMA, LD FOR NEONATAL USE'));
    products.push(new Product('C', 0, false, false, true, '29981', 53, 1095, 'CRYOPRECIPITATE, LD FOR NEONATAL USE'));
    products.push(new Product('G', 0, true, false, true, '54395', 222, 0, 'GRANULOCYTES, POOLED, IN ADDITIVE SOLUTION / PLASMA MIX, IRRADIATED'));

    // non-routine products:
    products.push(new Product('P', 0, false, false, false, '12030', 199, 5, 'PLATELETS APHERESIS LD'));
    products.push(new Product('P', 1, false, false, false, '58340', 199, 5, 'PLATELETS APHERESIS LD'));
    products.push(new Product('P', 2, false, false, false, '58341', 199, 5, 'PLATELETS APHERESIS LD'));
    products.push(new Product('P', 3, false, false, false, '58342', 199, 5, 'PLATELETS APHERESIS LD'));
    products.push(new Product('P', 0, true, false, false, '42030', 199, 5, 'PLATELETS APHERESIS LD, IRRADIATED'));
    products.push(new Product('P', 1, true, false, false, '48340', 199, 5, 'PLATELETS APHERESIS LD, IRRADIATED'));
    products.push(new Product('P', 2, true, false, false, '48341', 199, 5, 'PLATELETS APHERESIS LD, IRRADIATED'));
    products.push(new Product('P', 3, true, false, false, '48342', 199, 5, 'PLATELETS APHERESIS LD, IRRADIATED'));
    products.push(new Product('P', 0, false, false, true, '54232', 294, 5, 'PLATELETS POOLED IN PLASMA/ADDITIVE MIXTURE')); // 5 days, but routinely available
    products.push(new Product('P', 0, true, false, true, '54242', 294, 5, 'PLATELETS POOLED IN PLASMA/ADDITIVE MIX, IRRADIATED')); // 5 days, but routinely available
    products.push(new Product('P', 0, false, false, false, '12769', 298, 5, 'PLATELETS POOLED, LD'));
    products.push(new Product('P', 0, false, false, false, '12789', 298, 7, 'PLATELETS POOLED, LD, EXTENDED LIFE')); // 7 days but not routinely available
    products.push(new Product('P', 0, true, false, false, '54296', 298, 7, 'PLATELETS POOLED, LD, EXTENDED LIFE, IRRADIATED')); // "Usually available at times potential national platelet shortages"
    products.push(new Product('P', 0, false, false, false, '54247', 298, 1, 'PLATELETS POOLED IN ADDITIVE SOLUTION')); // NO DETAILED SPEC, NO VOLUME, SHELF LIFE OR AVAILABILITY,
    products.push(new Product('P', 0, true, false, false, '54237', 298, 1, 'PLATELETS POOLED IN ADDITIVE SOLUTION, IRRADIATED')); // NO DETAILED SPEC, NO VOLUME, SHELF LIFE OR AVAILABILITY,
    products.push(new Product('P', 0, true, false, false, '42769', 298, 5, 'PLATELETS POOLED, LD, IRRADIATED'));
    products.push(new Product('P', 1, false, false, false, '58231', 50, 5, 'PLATELETS, APHERESIS, PACK 01 LD FOR NEONATAL USE'));
    products.push(new Product('P', 2, false, false, false, '58232', 50, 5, 'PLATELETS, APHERESIS, PACK 02 LD FOR NEONATAL USE'));
    products.push(new Product('P', 3, false, false, false, '58233', 50, 5, 'PLATELETS, APHERESIS, PACK 03 LD FOR NEONATAL USE'));
    products.push(new Product('P', 4, false, false, false, '58234', 50, 5, 'PLATELETS, APHERESIS, PACK 04 LD FOR NEONATAL USE'));
    products.push(new Product('P', 5, false, false, false, '58235', 50, 5, 'PLATELETS, APHERESIS, PACK 05 LD FOR NEONATAL USE'));
    products.push(new Product('P', 6, false, false, false, '58236', 50, 5, 'PLATELETS, APHERESIS, PACK 06 LD FOR NEONATAL USE'));
    products.push(new Product('P', 7, false, false, false, '58237', 50, 5, 'PLATELETS, APHERESIS, PACK 07 LD FOR NEONATAL USE'));
    products.push(new Product('P', 8, false, false, false, '58238', 50, 5, 'PLATELETS, APHERESIS, PACK 08 LD FOR NEONATAL USE'));
    products.push(new Product('P', 9, false, false, false, '50778', 50, 5, 'PLATELETS, APHERESIS, PACK 09 LD FOR NEONATAL USE'));
    products.push(new Product('P', 10, false, false, false, '50779', 50, 5, 'PLATELETS, APHERESIS, PACK 10 LD FOR NEONATAL USE'));
    products.push(new Product('P', 11, false, false, false, '50780', 50, 5, 'PLATELETS, APHERESIS, PACK 11 LD FOR NEONATAL USE'));
    products.push(new Product('P', 12, false, false, false, '50781', 50, 5, 'PLATELETS, APHERESIS, PACK 12 LD FOR NEONATAL USE'));
    products.push(new Product('P', 1, true, false, false, '48231', 50, 5, 'PLATELETS, APHERESIS, PACK 01 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 2, true, false, false, '48232', 50, 5, 'PLATELETS, APHERESIS, PACK 02 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 3, true, false, false, '48233', 50, 5, 'PLATELETS, APHERESIS, PACK 03 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 4, true, false, false, '48234', 50, 5, 'PLATELETS, APHERESIS, PACK 04 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 5, true, false, false, '48235', 50, 5, 'PLATELETS, APHERESIS, PACK 05 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 6, true, false, false, '48236', 50, 5, 'PLATELETS, APHERESIS, PACK 06 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 7, true, false, false, '48237', 50, 5, 'PLATELETS, APHERESIS, PACK 07 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 8, true, false, false, '48238', 50, 5, 'PLATELETS, APHERESIS, PACK 08 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 9, true, false, false, '40778', 50, 5, 'PLATELETS, APHERESIS, PACK 09 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 10, true, false, false, '40779', 50, 5, 'PLATELETS, APHERESIS, PACK 10 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 11, true, false, false, '40780', 50, 5, 'PLATELETS, APHERESIS, PACK 11 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('P', 12, true, false, false, '40781', 50, 5, 'PLATELETS, APHERESIS, PACK 12 LD, IRRADIATED FOR NEONATAL USE'));
    products.push(new Product('G', 0, true, true, false, '46460', 56, 0, 'LEUCOCYTES, BUFFY COAT, IRRADIATED')); // not routinely available
    products.push(new Product('R', 0, false, true, false, '30002', 451, 35, 'WHOLE BLOOD (CPDA1) AUTOLOGOUS'));


    // need to add:
    // buffy coats
    // apheresis granulocytes
    // non-MB neonatal and paed plasma
    // SPN223/10 (2019) removed items:
    //products.push(new Product('R', 1, false, false, '04216', 'RED CELLS IN ADDITIVE SOLUTION LD PACK 1'));
    //products.push(new Product('R', 2, false, false, '04217', 'RED CELLS IN ADDITIVE SOLUTION LD PACK 2'));
    //products.push(new Product('R', 1, true, false, '04316', 'RED CELLS IN ADDITIVE SOLUTION PK1 LD IRRADIATED'));
    //products.push(new Product('R', 2, true, false, '04417', 'RED CELLS IN ADDITIVE SOLUTION PK2 LD IRRADIATED'));
    //products.push(new Product('F', 1, false, false, '18281', 'FRESH FROZEN PLASMA, LD'));
    //products.push(new Product('F', 2, false, false, '18282', 'FRESH FROZEN PLASMA, LD'));
    //products.push(new Product('C', 0, false, false, '10170', 'CRYOPRECIPITATE, LD'));
    //products.push(new Product('F', 0, false, false, '54271', 'FRESH FROZEN PLASMA PAED USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 1, false, false, '54272', 'FRESH FROZEN PLASMA PAED USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 2, false, false, '54273', 'FRESH FROZEN PLASMA PAED USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 3, false, false, '54274', 'FRESH FROZEN PLASMA PAED USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 1, false, false, '54275', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 2, false, false, '54276', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 3, false, false, '54277', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 4, false, false, '54278', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 5, false, false, '54279', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 6, false, false, '54280', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 7, false, false, '54281', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 8, false, false, '54282', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 9, false, false, '54283', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 10, false, false, '54284', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 11, false, false, '54285', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('F', 12, false, false, '54286', 'FRESH FROZEN PLASMA NEONATAL USE MB TREATED AND REMOVED'));
    //products.push(new Product('C', 0, false, false, '54260', 'CRYOPRECIPITATE, METHYLENE BLUE TREATED AND REMOVED, LD'));
    //products.push(new Product('C', 1, false, false, '54487', 'CRYOPRECIPITATE, METHYLENE BLUE TREATED AND REMOVED, LD'));
    //products.push(new Product('C', 2, false, false, '54488', 'CRYOPRECIPITATE, METHYLENE BLUE TREATED AND REMOVED, LD'));
    //products.push(new Product('C', 3, false, false, '54489', 'CRYOPRECIPITATE, METHYLENE BLUE TREATED AND REMOVED, LD'));
    //products.push(new Product('P', 1, false, false, '54397', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 2, false, false, '54398', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 3, false, false, '54399', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 4, false, false, '54000', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 5, false, false, '54001', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 6, false, false, '54002', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 7, false, false, '54003', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 8, false, false, '54004', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 9, false, false, '54005', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 10, false, false, '54006', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 11, false, false, '54007', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 12, false, false, '54008', 'PLATELETS, APHERESIS, LD FOR NEONATAL USE'));
    //products.push(new Product('P', 1, true, false, '54409', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 2, true, false, '54410', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 3, true, false, '54411', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 4, true, false, '54412', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 5, true, false, '54413', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 6, true, false, '54414', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 7, true, false, '54415', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 8, true, false, '54416', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 9, true, false, '54417', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 10, true, false, '54418', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 11, true, false, '54419', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('P', 12, true, false, '54420', 'PLATELETS, APHERESIS, LD IRRADIATED FOR NEONATAL USE'));
    //products.push(new Product('R', 0, false, true, '04454', 'RED CELLS (CPD) LD'));
    //products.push(new Product('R', 0, true, true, '44454', 'RED CELLS (CPD) LD, IRRADIATED'));
    //products.push(new Product('P', 1, false, true, '29921', 'PLATELETS APHERESIS, EXTENDED LIFE, PATHOGEN INACTIVATED, PACK 1, IN ADDITIVE SOLUTION AND PLASMA'));
    //products.push(new Product('P', 2, false, true, '29922', 'PLATELETS APHERESIS, EXTENDED LIFE, PATHOGEN INACTIVATED, PACK 2, IN ADDITIVE SOLUTION AND PLASMA'));
    //products.push(new Product('P', 3, false, true, '29923', 'PLATELETS APHERESIS, EXTENDED LIFE, PATHOGEN INACTIVATED, PACK 3, IN ADDITIVE SOLUTION AND PLASMA'));
    //products.push(new Product('P', 0, false, true, '29920', 'PLATELETS APHERESIS, EXTENDED LIFE, PATHOGEN INACTIVATED, IN ADDITIVE SOLUTION AND PLASMA'));
    //products.push(new Product('P', 1, true, true, '29931', 'PLATELETS APHERESIS, EXTENDED LIFE, PATHOGEN INACTIVATED, IRRADIATED, PACK 1, IN ADDITIVE SOLUTION AND PLASMA'));
    //products.push(new Product('P', 2, true, true, '29932', 'PLATELETS APHERESIS, EXTENDED LIFE, PATHOGEN INACTIVATED, IRRADIATED, PACK 2, IN ADDITIVE SOLUTION AND PLASMA'));
    //products.push(new Product('P', 3, true, true, '29933', 'PLATELETS APHERESIS, EXTENDED LIFE, PATHOGEN INACTIVATED, IRRADIATED, PACK 3, IN ADDITIVE SOLUTION AND PLASMA'));
    //products.push(new Product('P', 0, true, true, '29930', 'PLATELETS APHERESIS, EXTENDED LIFE, PATHOGEN INACTIVATED, IRRADIATED, IN ADDITIVE SOLUTION AND PLASMA'));
    //products.push(new Product('P', 0, false, true, '29924', 'PLATELETS POOLED, EXTENDED LIFE, PATHOGEN INACTIVATED, IN ADDITIVE SOLUTION AND PLASMA'));
    //products.push(new Product('P', 0, true, true, '29934', 'PLATELETS POOLED, EXTENDED LIFE, PATHOGEN INACTIVATED, IRRADIATED, IN ADDITIVE SOLUTION AND PLASMA'));
}
*/
// N.B. THIS IS NO LONGER USED. PRODUCTS IS JUST DEFINED IN A DIFFERENT JAVASCRIPT FILE.
//}


/***/ }),

/***/ "./src/productsModel.ts":
/*!******************************!*\
  !*** ./src/productsModel.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsLabel = exports.ProductsForm = void 0;
const products_1 = __webpack_require__(/*! ./products */ "./src/products.ts");
class ProductsForm {
    constructor(productLabel, components, groupLabel, datesForm) {
        if (!productLabel)
            alert("Product Label Undefined");
        if (!groupLabel)
            alert("Product Label Undefined");
        if (!datesForm)
            alert("Dates Form Undefined");
        this.productLabel = productLabel;
        this.groupLabel = groupLabel;
        this.components = components;
        this.datesForm = datesForm;
        this.componentSelect = document.querySelector("#product_type_select");
        this.irradiatedIn = document.querySelector("#irradiated_in");
        this.specialIn = document.querySelector("#special_in");
        this.availableIn = document.querySelector("#available_in");
        this.productSelect = document.querySelector("#product_select");
        this.cmvIn = document.querySelector('#cmv_in');
        this.hbsIn = document.querySelector('#hbs_in');
        for (let c of this.components) {
            this.componentSelect.add(new Option(c.text, c.name), undefined);
        }
        this.componentSelect.addEventListener("change", this.productFiltersChanged.bind(this));
        this.irradiatedIn.addEventListener("change", this.productFiltersChanged.bind(this));
        this.specialIn.addEventListener("change", this.productFiltersChanged.bind(this));
        this.availableIn.addEventListener("change", this.productFiltersChanged.bind(this));
        this.productSelect.addEventListener("change", this.selectedProductChanged.bind(this));
        this.updateProductsSelect();
        this.productFiltersChanged();
    }
    updateProductsSelect() {
        // store currently selected product code:
        const currentlySelectedProduct = this.productSelect.value;
        // clear options from this.productSelect
        while (this.productSelect.length > 0) {
            this.productSelect.remove(0);
        }
        // filter products as per form
        const filteredProducts = products_1.products.filter(x => {
            return x.component.name === this.componentSelect.value &&
                x.irr === this.irradiatedIn.checked &&
                x.special === this.specialIn.checked &&
                x.availability >= this.availableIn.checked;
        });
        // add options to this.productSelect
        for (const p of filteredProducts) {
            let text = (p.pack > 0) ? p.text + " (" + p.pack + ")" : p.text;
            if (!p.availability)
                text += " [unavailable]";
            this.productSelect.add(new Option(text, p.code), undefined);
        }
        // if new list contains same product, select it, otherwise generate new label.
        const selectedIndex = filteredProducts.findIndex(x => { return x.code === currentlySelectedProduct; });
        if (selectedIndex != -1)
            this.productSelect.value = currentlySelectedProduct;
        else
            this.selectedProductChanged();
    }
    productFiltersChanged() {
        // update DOM elements of the product form based on product type
        const selectedComponent = this.components.find(x => { return x.name === this.componentSelect.value; });
        if (!selectedComponent)
            return;
        this.irradiatedIn.disabled = !selectedComponent.irradPossible;
        this.specialIn.disabled = !selectedComponent.specialPossible;
        if (!selectedComponent.irradPossible)
            this.irradiatedIn.checked = false;
        if (!selectedComponent.specialPossible)
            this.specialIn.checked = false;
        // special case, force irradiated for granulocytes but disable the button.
        if (selectedComponent.name == "G") {
            this.irradiatedIn.checked = true;
            this.irradiatedIn.disabled = true;
        }
        // update things that might have changed because product list changed.
        this.updateProductsSelect();
        // cmv/hbs stuff is affected by change of product, but is on group form. move to group form class?
        this.cmvIn.disabled = !selectedComponent.cmvPossible;
        this.hbsIn.disabled = !selectedComponent.hbsPossible;
        if (!selectedComponent.cmvPossible)
            this.cmvIn.checked = false;
        if (!selectedComponent.hbsPossible)
            this.hbsIn.checked = false;
        // cmv/hbs stuff is affected by change of product, but is on group label. move to group label class?
        this.groupLabel.updateCmvHbsLabel(this.cmvIn.checked, this.hbsIn.checked);
    }
    selectedProductChanged() {
        this.datesForm.setExpiryDate();
        this.productLabel.generateProductLabel(this.productSelect.value);
    }
}
exports.ProductsForm = ProductsForm;
class ProductsLabel {
    constructor(barcodeGenerator, dataMatrixBarcode) {
        //productBarcodeSvg: HTMLElement;
        this.barcode = "";
        this.IsbtCode = "";
        if (!barcodeGenerator)
            alert("Barcode Generator undefined");
        this.barcodeGenerator = barcodeGenerator;
        if (!dataMatrixBarcode)
            alert("DataMatrix Barcode Undefined");
        this.dataMatrixBarcode = dataMatrixBarcode;
        this.productTextFo = document.querySelector('#product_text_fo');
        this.packTextBlock = document.querySelector('#packTextBlock');
        this.packTextFo = document.querySelector('#pack_text_fo');
        this.productTextFoParent = document.querySelector('#product_text_fo_parent');
        this.storageTextFo = document.querySelector('#storage_text_fo');
        this.linearGradientFluidUrl1 = document.querySelector('#linearGradientFluidUrl1');
        this.linearGradientFluidUrl2 = document.querySelector('#linearGradientFluidUrl2');
        this.volumeTextFo = document.querySelector('#volume_text_fo');
        this.anticoagulantText = document.querySelector('#anticoagulant_info');
        this.rhPhenGroup = document.querySelector('#rh_phen_group');
        this.rhcSelect = document.querySelector('#rhc_select');
        this.rheSelect = document.querySelector('#rhe_select');
        this.irradSticker = document.querySelector('#irradiated_sticker');
        //this.productBarcodeSvg = document.querySelector('#product_barcode_svg')!;
    }
    shrinkLetterSpacingToFitParent(textElement, parent) {
        if (!textElement || !parent)
            return;
        const minimumSpacing = -1.5;
        for (let i = 0; i > minimumSpacing; i -= 0.1) {
            if (parent.scrollHeight <= parent.clientHeight + 2)
                break;
            textElement.style.letterSpacing = i + "px";
        }
    }
    generateProductLabel(productCode) {
        if (productCode == "")
            return;
        const selectedProduct = products_1.products.find(x => { return x.code === productCode; });
        if (selectedProduct == null)
            return;
        this.barcode = "a0" + selectedProduct.code + "3b";
        this.IsbtCode = "=<" + selectedProduct.code;
        this.barcodeGenerator.generateBarcode(this.barcode, document.querySelector('#product_barcode_svg'), 'codabar');
        this.dataMatrixBarcode.setProductCode = this.IsbtCode;
        if (selectedProduct.pack < 1) {
            this.packTextFo.textContent = "";
            this.packTextBlock.style.visibility = "hidden";
        }
        else {
            this.packTextFo.textContent = "PACK " + String(selectedProduct.pack).padStart(2, '0');
            this.packTextBlock.style.visibility = "visible";
        }
        this.storageTextFo.innerHTML = selectedProduct.component.storageText;
        this.linearGradientFluidUrl1.setAttribute("xlink:href", "#linearGradientFluid" + selectedProduct.component.color);
        this.linearGradientFluidUrl2.setAttribute("xlink:href", "#linearGradientFluid" + selectedProduct.component.color);
        this.volumeTextFo.innerHTML = "Volume<br />" + selectedProduct.volume + " mL";
        this.anticoagulantText.style.visibility = selectedProduct.component.anticoagulantTextVisibility;
        this.rhPhenGroup.style.visibility = selectedProduct.component.rhPhenVisibility;
        this.rhcSelect.disabled = (selectedProduct.component.rhPhenVisibility == "hidden");
        this.rheSelect.disabled = (selectedProduct.component.rhPhenVisibility == "hidden");
        this.irradSticker.style.visibility = selectedProduct.irr ? "visible" : "hidden";
        this.productTextFo.textContent = selectedProduct.text;
        // default font settings then shrink to fit if necessary
        this.productTextFo.style.fontSize = "9pt";
        this.productTextFo.style.letterSpacing = "0px";
        this.shrinkLetterSpacingToFitParent(this.productTextFo, this.productTextFoParent);
    }
}
exports.ProductsLabel = ProductsLabel;


/***/ }),

/***/ "./src/lib/codabar.js":
/*!****************************!*\
  !*** ./src/lib/codabar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Codabar": () => (/* binding */ Codabar)
/* harmony export */ });
/*
 *  MIT License
 *
 *  Copyright (c) 2023 Matthew Helyar (modifications only)
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *  
 *      Modified from: 
 *      https://github.com/datalog/barcode-svg
 *      under MIT license
 *      # barcode.js has no dependencies
 *      Copyright (c) 2020 Constantine
 */


function Codabar(B) {

	// return thick/thin pattern as a binary string
	function pattern(char) {
		const patterns = {	//BSBSBSB
			'0': 3,			//0000011
			'1': 6,			//0000110
			'2': 9,			//0001001
			'3': 96,		//1100000
			'4': 18,		//0010010
			'5': 66,		//1000010
			'6': 33,		//0100001
			'7': 36,		//0100100
			'8': 48,		//0110000
			'9': 72,		//1001000
			'-': 12,		//0001100
			'$': 24,		//0011000
			':': 69,		//1000101
			'/': 81,		//1010001
			'.': 84,		//1010100
			'+': 21,		//0010101
			'A': 26,		//0011010
			'B': 41,		//0101001
			'C': 11,		//0001011
			'D': 14,		//0001110
			'T': 26,		//0011010
			'N': 41,		//0101001
			'*': 11,		//0001011
			'E': 14,		//0001110
		}
		if (!patterns[char]) { console.warn(`Codabar: Invalid character for Codabar: ${char}`); return; }
		return patterns[char].toString(2).padStart(7, '0');
	}

	// encodes message as an array of 1 and 0 for a thick/thin pattern.
	function encode(msg) {
		var out = [],
			i = msg.length;
		while (i)
			out[--i] = pattern(msg[i]);

		return out.join('0'); // add a narrow space in between each symbol.
	}

	// helper just for handling config object
	function abs(n) {
		return Math.abs(parseInt(n)) || 0;
	}

	// helper just for handling config object
	function ishex(color) {
		return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(color);
	}

	// handle input config object
	var b = ('string' == typeof B) ? {
		msg: B
	} : B || {},
		msg = b.msg.toUpperCase(),
		dir = 0,
		len = 0,
		dim = b.dim || [320, 80],
		pad = b.pad || [20, 16],
		pal = b.pal || ["#000", "#fff"],
		w = abs(dim[0]),
		h = abs(dim[1]),
		px = abs(pad[0]),
		py = abs(pad[1]),
		fg = pal[0],
		bg = pal[1],
		sx = 1,
		sy = 1,
		er = 0,
		// thick:thin ratio valid from 2.25:1 - 3:1.
		ratio = Math.min(Math.max(parseFloat(b.ratio), 2.25), 3.0) || 3;

	// validate input
	if (!msg || 'string' !== typeof msg) {
		console.warn('Codabar: Expected {msg} should be not empty string!');
		msg = '';
		er = 1;
	}
	if (/[^-$:/.+*ABCDNET0-9]/g.test(msg)) {
		console.warn('Codabar: Expected {msg} contains characters not encodable in Codabar!');
		msg = '';
		er = 1;
	}
	if (/^[^*ABCDNET]|[^*ABCDNET]$/g.test(msg)) {
		console.warn('Codabar: First and last characters of Codabar {msg} must be one of either: *ABCDNET');
		msg = '';
		er = 1;
	}
	if (/[^-$:/.+0-9]/g.test(msg.substring(1, msg.length - 1))) {
		console.warn('Codabar: Inner characters of Codabar {msg} must be either: -$:/.+0-9');
		msg = '';
		er = 1;
	}

	const thin = 1, thick = thin * ratio;

	// convert string message to thick/thin pattern
	msg = encode(msg);

	// calculate length of barcode
	len = 0;
	for (let i = 0; i < msg.length; i++) {
		len += (msg[i] == '1') ? thick : thin;
	}

	/* ecc: reset to default values and relative width */
	if (0 == w && 0 == h) px = 20, py = 16, w = 2 * (len + px), h = 80;
	dir = h > w;

	/* deal with auto width or height */
	if (0 == w) w = 2 * (len + px), dir = 0;
	if (0 == h) h = 2 * (len + py), dir = 1;
	if (w < px) {
		px = w;
		console.warn('Codabar: Expected {pad} value could not be bigger than {dim} value');
	}
	if (h < py) {
		py = h;
		console.warn('Codabar: Expected {pad} value could not be bigger than {dim} value');
	}
	if (dir) sy = len;
	else sx = len;
	sx = ((w - (2 * px)) / sx).toFixed(4);
	sy = ((h - (2 * py)) / sy).toFixed(4);
	if (er || !ishex(fg) || bg && !ishex(bg)) {
		fg = '#b11', bg = '#fee';
		console.warn('Codabar: Please, double check barcode params');
	}

	return (function () {
		// write outout as SVG
		function svg(n, a) {
			n = document.createElementNS(ns, n);
			for (var o in a || {}) {
				n.setAttribute(o, a[o]);
			}
			return n;
		}

		var ns = 'http://www.w3.org/2000/svg';

		// generate path for barcode from encoded msg.
		let pos = 0,
			path = (dir) ? 'M1,0' : 'M0,';
		for (let i = 0; i < msg.length; i++) {
			const step = (msg[i] == '1') ? thick : thin;
			pos += step;
			if (i % 2 == 0) {
				// bar
				path += (dir) ?
					`H0v${step}h1v-${step}z` : // vertical
					`1h${step}V0h-${step}v1z`; // horizontal
			}
			else {
				// space
				path += (dir) ?
					`M1,${pos}` : // vertical
					`M${pos},`;   // horizontal
			}
		}

		// set up svg tag
		var r = svg('svg', {
			'viewBox': [0, 0, w, h].join(' '),
			'width': w,
			'height': h,
			'fill': fg,
			'shape-rendering': 'crispEdges',
			'xmlns': ns,
			'version': '1.1'
		});
		// add background path to svg
		if (bg) r.appendChild(svg('path', {
			'fill': bg,
			'd': 'M0,0V' + h + 'H' + w + 'V0H0Z'
		}));
		// apply transform and add barcode path to svg
		r.appendChild(svg('path', {
			'transform': 'matrix(' + [sx, 0, 0, sy, px, py] + ')',
			'd': path
		}));
		return r;
	})();
}

/***/ }),

/***/ "./src/lib/code128.js":
/*!****************************!*\
  !*** ./src/lib/code128.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Code128": () => (/* binding */ Code128)
/* harmony export */ });
/*
 *  MIT License
 *
 *  Copyright (c) 2023 Matthew Helyar (modifications only)
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *  
 *      Modified from: 
 *      https://github.com/datalog/barcode-svg
 *      under MIT license
 *      # barcode.js has no dependencies
 *      Copyright (c) 2020 Constantine
 */


function Code128(B) {

	// collapses CBA encoding into either C or AB
	// returns true if C chosen, false if C rejected.
	function tryC(array, arrayIndex) {
		const block = array[arrayIndex];
		const isFirstBlock = arrayIndex === 0;
		const isLastBlock = arrayIndex === array.length - 1;

		// test length of numerical block to see if it's worth it to encode as 128C
		const longEnoughForC = block.data.length >= 2 + (isFirstBlock ? 0 : 2) + (isLastBlock ? 0 : 2);
	
		//console.log(block, "trying C...");
		if (!longEnoughForC) {
			// remove C from enc and try again
			block.enc = block.enc.replace(/C/g, "");
			//console.log("C rejected, trying: " + n.enc);
			return false;
		}

		block.enc = "C";
		//console.log("C chosen");

		if (block.data.length % 2 === 0)
			return true;

		if (isFirstBlock && isLastBlock) {
			// if block is whole message, make a new block encoding B at end
			//console.log("whole message, odd length, push last char to new block");
			array.push({ data: block.data.slice(-1), enc: "B" });
			block.data = block.data.slice(0, -1);
		}
		else if (isLastBlock) {
			// if at end, push off first character to previous
			//console.log("last block, odd length, push first char to prev block")
			array[arrayIndex - 1].data += block.data.slice(0, 1);
			block.data = block.data.slice(1);
		}
		else {
			// else push off last character.
			//console.log("not last block, odd length, push last char to next block")
			array[arrayIndex + 1].data = block.data.slice(-1) + array[arrayIndex + 1].data;
			block.data = block.data.slice(0, -1);
		}
		return true;
	}

	// for each, determine what encoding should be, removing from encoding until everything is just 1 encoding
	function chooseEncoding(array, arrayIndex) {
		/* - for CBA, test if C, move either extra odd first/last char to preceding/subsequent item,
		* then encoding either becomes C or BA.
		* - for BA, look forward and backward to see if either end is framed with either A or B and use that;
		* if both sides are start/end or C, then just use B as default, so change encoding or A or B.
		* - now everythig is C or B or A.
		*/

		const block = array[arrayIndex];
		//console.log(n, i, isFirstBlock, isLastBlock);

		//if (block.enc.length == 0) {
		//	console.error(block, "ERROR: NOT POSSIBLE TO ENCODE");
		//	return;
		//}

		//if (block.enc.length == 1) {
		//	//console.log(n, `encoding chosen: ${n.enc}`);
		//	return;
		//}

		while (block.enc.length > 1) {
			// chose an encoding.
			//console.log(n, "need to choose encoding.");

			if (block.enc.includes("C") && tryC(array, arrayIndex))
				break;

			//console.log(block, "trying B|A...");
			//console.log("look backward");
			for (let j = arrayIndex - 1; j >= 0; j--) {
				if (array[j].enc.includes("C")) {
					//console.log("ran into a previous C, can't set A|B encoding based on previous");
					break;
				}
				if (array[j].enc == "A" || array[j].enc == "B") {
					block.enc = array[j].enc;
					//console.log(`found a ${n.enc}, set encoding to that.`)
					return;
				}
				//console.log(`previous encoding = ${array[j].enc}, continuing to look backwards`);
			}

			if (arrayIndex == array.length - 1) {
				// at end of array, break out of recursion, don't try to look forwards.
				block.enc = "B";
				return;
			}

			//console.log("look forward");
			for (let j = arrayIndex + 1; j < array.length; j++) {
				//if (array[j].enc.includes("C")) {
				if (array[j].enc.includes("C")) {
					// look ahead and just determine whether that collapses to C or A|B.
					tryC(array, j);
				}
				if (array[j].enc == "C") {
					block.enc = "B";
					//console.log("ran into a following C, can't set A|B encoding based on next, default to B");
					return;
				}
				if (array[j].enc == "A" || array[j].enc == "B") {
					block.enc = array[j].enc;
					//console.log(`found a ${n.enc}, set encoding to that.`)
					return;
				}
				//console.log(`next encoding = ${array[j].enc}, continuing to look forwards`);
			}

			if (block.enc.length > 1) {
				// if still not found, recurse to work backwards from the end.
				// sholdn't ever need to do this.
				//console.log(array);
				//console.log("*********** RECURSE FORWARDS ***********");
				chooseEncoding(array, arrayIndex + 1);
			}
		}
	}

	// converts an array of {string data+encoding} blocks into a decimal value array
	function getValueArray(blockArray) {
		function get128Avalue(char) {
			char = char.charCodeAt(0);
			// char codes 0-31, value = charcode + 64 (i.e. 64-95)
			// char codes 32-127, value = charcode - 32 (i.e. 0-95).

			// control codes have values from 96-106, but no ascii equivalent,
			// so I don't see how this formula can work.
			// implementation here is charcode-50 or zero.
			return (char > 126) ?
				(128 == char) ? 0 : char - 50 :
				(char > 32) ? char - 32 : char + 64;
		}

		function get128Bvalue(char) {
			char = char.charCodeAt(0);
			// char codes 0-31 not in 128B (this returns 0)
			// char codes 32-127, value = charcode - 32 (i.e. 0-95).

			// control codes have values from 96-106, but no ascii equivalent,
			// so I don't see how this formula can work.
			// implementation here is charcode-50 or zero.
			return (char > 126) ?
				(128 == char) ? 0 : char - 50 :
				(char > 32) ? char - 32 : 0;
		}

		function checkSum(valArr) {
			var sum = 0;
			for (let i = valArr.length - 1; i > 0; --i)
				sum += i * valArr[i];
			return (sum + valArr[0]) % 103;
		}

		let lastEnc = "", valueArray = [];
		for (let i = 0; i < blockArray.length; i++) {
			const block = blockArray[i];

			// handle Start and Change codes and data
			switch (block.enc) {
				case "A":
					if (block.enc != lastEnc) {
						valueArray.push((i == 0) ? 103 : 101);
						lastEnc = block.enc;
					}
					for (let char of block.data) {
						valueArray.push(get128Avalue(char));
					}
					break;
				case "B":
					if (block.enc != lastEnc) {
						valueArray.push((i == 0) ? 104 : 100);
						lastEnc = block.enc;
					}
					for (let char of block.data) {
						valueArray.push(get128Bvalue(char));
					}
					break;
				case "C":
					if (block.enc != lastEnc) {
						valueArray.push((i == 0) ? 105 : 99);
						lastEnc = block.enc;
					}
					for (let j = 0; j < block.data.length; j += 2) {
						valueArray.push(parseInt(block.data[j] + block.data[j + 1]));
					}
					break;
				default:
					console.error("message block encoding unknown");
			}
		}
		// insert checksum
		valueArray.push(checkSum(valueArray));

		// insert end code
		valueArray.push(106);

		return valueArray;
	}

	// encodes message as an array of 1 and 0 for a bar/space pattern.
	function encode(o) {
		// 1. split into exclusive A, exclusive B, numbers, and A&B!C (AB overlap, not C).
		const splitMsg = o.match(/[0-9]+|[\x00-\x1F]+|[\x60-\x7F]+|[\x20-\x2F\x3A-\x5F]+/g);

		// 2. test each to see which encodings are possible. (differnt tests to exclusive)
		// and asign each array element into an object of data and encoding
		let msgBlocks = [];
		for (let m of splitMsg) {
			let encoding = "";
			if (/[0-9]+/g.test(m)) encoding += "C";
			if (/[\x20-\x7F]+/g.test(m)) encoding += "B";
			if (/[\x00-\x5F]+/g.test(m)) encoding += "A";
			msgBlocks.push({ data: m, enc: encoding });
		}

		// 3. choose optimal encoding pattern 
		for (let i = 0; i < msgBlocks.length; i++) {
			chooseEncoding(msgBlocks, i);
		}

		// 4. insert Start and Change code values, convert data to values, add checksum and End code.
		// 5. convert to bar/space pattern.
		let r = [];
		for (let val of getValueArray(msgBlocks)) {
			r.push(def(val));
		}
		return bin(r.join(''));
	}

	/********* everything below here is Copyright (c) 2020 Constantine *********/

	// return bar/space pattern as a binary string from an index into array. e.g. def(0) = "11011001100"
	function def(i) {
		if (106 < i) console.warn(`Code128: {bad char} (${i}) was used and it was replaced by X`), i = 56, er = 1;
		return [1740, 1644, 1638, 1176, 1164, 1100, 1224, 1220, 1124, 1608, 1604, 1572, 1436, 1244, 1230, 1484, 1260, 1254, 1650, 1628, 1614,
			1764, 1652, 1902, 1868, 1836, 1830, 1892, 1844, 1842, 1752, 1734, 1590, 1304, 1112, 1094, 1416, 1128, 1122, 1672, 1576, 1570, 1464,
			1422, 1134, 1496, 1478, 1142, 1910, 1678, 1582, 1768, 1762, 1774, 1880, 1862, 1814, 1896, 1890, 1818, 1914, 1602, 1930, 1328, 1292,
			1200, 1158, 1068, 1062, 1424, 1412, 1232, 1218, 1076, 1074, 1554, 1616, 1978, 1556, 1146, 1340, 1212, 1182, 1508, 1268, 1266, 1956,
			1940, 1938, 1758, 1782, 1974, 1400, 1310, 1118, 1512, 1506, 1960, 1954, 1502, 1518, 1886, 1966, 1668, 1680, 1692, 6379][i].toString(2);
	}

	// seems to just convert a number to an array of single digit numbers. I think the input would be only base 2 anyway. e.g. 00111 -> [0,0,1,1,1)
	function bin(o) {
		var r = [],
			c = o.length;
		while (c) r[--c] = parseInt(o[c]);
		return r;
	}

	// helper just for handling config object
	function abs(o) {
		return Math.abs(parseInt(o)) || 0;
	}

	// helper just for handling config object
	function ishex(c) {
		return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(c);
	}

	// handle input config object
	var b = ('string' == typeof B) ? {
		msg: B
	} : B || {},
		msg = b.msg,
		dir = 0,
		l = 0,
		dim = b.dim || [320, 80],
		pad = b.pad || [20, 16],
		pal = b.pal || ['#000'],
		w = abs(dim[0]),
		h = abs(dim[1]),
		px = abs(pad[0]),
		py = abs(pad[1]),
		fg = pal[0],
		bg = pal[1],
		sx = 1,
		sy = 1,
		er = 0;
	if (!msg || 'string' !== typeof msg) {
		console.warn('Code128: Expected {msg} should be not empty string!');
		msg = 'error!';
		er = 1;
	}
	// convert string message to bar/space pattern
	msg = encode(msg);
	l = msg.length;
	/* ecc: reset to default values and relative width */
	if (0 == w && 0 == h) px = 20, py = 16, w = 2 * (l + px), h = 80;
	dir = h > w;
	/* deal with auto width or height */
	if (0 == w) w = 2 * (l + px), dir = 0;
	if (0 == h) h = 2 * (l + py), dir = 1;
	if (w < px) {
		px = w;
		console.warn('Code128: Expected {pad} value could not be bigger than {dim} value', pad, dim);
	}
	if (h < py) {
		py = h;
		console.warn('Code128: Expected {pad} value could not be bigger than {dim} value', pad, dim);
	}
	if (dir) sy = l;
	else sx = l;
	sx = ((w - (2 * px)) / sx).toFixed(4);
	sy = ((h - (2 * py)) / sy).toFixed(4);
	if (er || !ishex(fg) || bg && !ishex(bg)) {
		fg = '#b11',
			bg = '#fee';
		console.warn('Code128: Please, double check barcode params');
	}
	return (function () {
		// write outout as SVG
		function svg(n, a) {
			n = document.createElementNS(ns, n);
			for (var o in a || {}) {
				n.setAttribute(o, a[o]);
			}
			return n;
		}
		var r,
			ns = 'http://www.w3.org/2000/svg',
			path = '',
			c = l,
			d = 0;

		// here's the real magic, making a very efficient single path barcode.
		// c is the horizontal position, literally just comes from the remaining length of the message
		// d is the bar thickness.
		while (c) {
			msg[--c] && ++d && !msg[c - 1] && (path += (dir) ?
				'M1,' + c + 'H0v' + d + 'h1v-' + d + 'z' :
				'M' + c + ',1h' + d + 'V0h-' + d + 'v1z', d = 0);
		}
		// set up svg tag
		r = svg('svg', {
			'viewBox': [0, 0, w, h].join(' '),
			'width': w,
			'height': h,
			'fill': fg,
			'shape-rendering': 'crispEdges',
			'xmlns': ns,
			'version': '1.1'
		});
		// add background path to svg
		if (bg) r.appendChild(svg('path', {
			'fill': bg,
			'd': 'M0,0V' + h + 'H' + w + 'V0H0Z'
		}));
		// apply transform and add path tag to svg
		r.appendChild(svg('path', {
			'transform': 'matrix(' + [sx, 0, 0, sy, px, py] + ')',
			'd': path
		}));
		return r;
	})();
}

/***/ }),

/***/ "./src/lib/datamatrix.js":
/*!*******************************!*\
  !*** ./src/lib/datamatrix.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATAMatrix": () => (/* binding */ DATAMatrix)
/* harmony export */ });
/**
	https://github.com/datalog/datamatrix-svg
	under MIT license
	# datamatrix.js has no dependencies
	Copyright (c) 2020 Constantine
*/



function DATAMatrix( Q ) {

	var
	 M = []
	,xx = 0
	,yy = 0

	,bit = function( x, y ) {

			M[ y ] = M[ y ] || [],
			M[ y ][ x ] = 1;
		}

	,toAscii = function( t ) {

		var
		r = [],
		l = t.length;

		for( var i = 0; i < l; i++ ) {

			var
			c = t.charCodeAt( i ),
			c1 = ( i + 1 < l ) ? t.charCodeAt( i + 1 ) : 0;

			if( c > 47 && c < 58 && c1 > 47 && c1 < 58 ) { /* 2 digits */

				r.push( ( c - 48 ) * 10 + c1 + 82 ), /* - 48 + 130 = 82 */
				i++;

			} else if( c > 127 ) { /* extended char */

				r.push( 235 ),
				r.push( ( c - 127 ) & 255 );

			} else r.push( c + 1 ); /* char */
		}

		return r;
	}

	,toBase = function( t ) {

		var
		r = [ 231 ], /* switch to Base 256 */
		l = t.length;

		if( 250 < l ) {

			r.push( 37 + ( l / 250 | 0 ) & 255 ); /* length high byte (in 255 state algo) */
		}

			r.push( l % 250 + 149 * ( r.length + 1 ) % 255 + 1 & 255 ); /* length low byte (in 255 state algo) */

		for( var i = 0; i < l; i++ ) {

			r.push( t.charCodeAt( i ) + 149 * ( r.length + 1 ) % 255 + 1 & 255 ); /* data in 255 state algo */
		}

		return r;
	}

	,toEdifact = function( t ) {

		var
		n = t.length,
		l = ( n + 1 ) & -4, cw = 0, ch,
		r = ( l > 0 ) ? [ 240 ] : []; /* switch to Edifact */

		for( var i = 0; i < l; i++ ) {

			if( i < l - 1 ) {

				/* encode char */
				ch = t.charCodeAt( i );
				if( ch < 32 || ch > 94 ) return []; /* not in set */

			} else ch = 31; /* return to ASCII */

			cw = cw * 64 + ( ch & 63 );

			if(( i & 3 ) == 3 ) {

				/* 4 data in 3 words */
				r.push( cw >> 16 ), 
				r.push( cw >> 8& 255 ),
				r.push( cw & 255 ),
				cw = 0;
			}
		};

		return l > n ? r : r.concat( toAscii( t.substr( l == 0 ? 0 : l - 1 ) ) ); /* last chars*/
	}

	,toText = function( t, s ) {

		var
		i, j,
		cc = 0,
		cw = 0,
		l = t.length,
		r = [ s[ 0 ] ], /* start switch */
		push = function( v ) { 

			/* pack 3 chars in 2 codes */
			cw = 40 * cw + v;

			/* add code */
			if( cc++ == 2 ) { 

				r.push( ++cw >> 8 ),
				r.push( cw & 255 ),
				cc = cw = 0;
			}
		};

		for( i = 0; i < l; i++ ) {

			/* last char in ASCII is shorter */
			if( 0 == cc && i == l - 1 ) break;

			var
			ch = t.charCodeAt(i);

			if( ch > 127 && 238 != r[ 0 ] ) { /* extended char */

				push( 1 ),
				push( 30 ),
				ch -= 128; /* hi bit in C40 & TEXT */
			}

			for( j = 1; ch > s[ j ]; j += 3 ); /* select char set */

			var
			x = s[ j + 1 ]; /* shift */

			
			if( 8 == x || ( 9 == x && 0 == cc && i == l - 1 ) ) return []; /* char not in set or padding fails */

			if( x < 5 && cc == 2 && i == l-1) break; /* last char in ASCII */
			if( x < 5 ) push( x ); /* shift */

			push( ch - s[ j + 2 ] ); /* char offset */
		}

		if(2 == cc && 238 !== r[ 0 ] ) { /* add pad */

			 push( 0 ); 
		}

		r.push( 254 ); /* return to ASCII */
	
		if( cc > 0 || i < l ) r = r.concat( toAscii( t.substr( i - cc ) ) ); /* last chars */

		return r;
	}

	,encodeMsg = function( text, rct ) {

		text = unescape( encodeURI( text ) );

		var
		M = [];

		var
		enc = toAscii( text ),
		el = enc.length,

		k = toText( text, [	/* C40 */
					230,
					 31, 0,  0,
					 32, 9, 29,
					 47, 1, 33,
					 57, 9, 44,
					 64, 1, 43,
					 90, 9, 51,
					 95, 1, 69,
					127, 2, 96,
					255, 1,  0
				]),
		l = k.length;
		if( l > 0 && l < el ) enc = k, el = l;


		k = toText( text, [	/* TEXT */
					239,
					 31, 0,  0,
					 32, 9, 29,
					 47, 1, 33,
					 57, 9, 44,
					 64, 1, 43,
					 90, 2, 64,
					 95, 1, 69,
					122, 9, 83,
					127, 2, 96,
					255, 1,  0
				]); 
		l = k.length;
		if( l > 0 && l < el ) enc = k, el = l;

		k = toText( text, [	/* X12*/
					238,
					 12, 8,  0,
					 13, 9, 13,
					 31, 8,  0,
					 32, 9, 29,
					 41, 8,  0,
					 42, 9, 41,
					 47, 8,  0,
					 57, 9, 44,
					 64, 8,  0,
					 90, 9, 51,
					255, 8,  0
				]); 
		l = k.length;
		if( l > 0 && l < el ) enc = k, el = l;

		k = toEdifact( text ); l = k.length;
		if( l > 0 && l < el ) enc = k, el = l;

		k = toBase( text ); l = k.length;
		if( l > 0 && l < el ) enc = k, el = l;


		var
		h, w, nc = 1, nr = 1, fw, fh, /* symbol size, regions, region size */
		i, j = - 1, c, r, s, b = 1, /* compute symbol size */

		rs = new Array(  70 ), /* reed / solomon code */
		rc = new Array(  70 ),
		lg = new Array( 256 ), /* log / exp table for multiplication */
		ex = new Array( 255 );

		if( rct && el < 50 ) { 

			/* rect */

			k = [	/* symbol width, checkwords */
				16,  7,
				28, 11,
				24, 14,
				32, 18,
				32, 24,
				44, 28
			];

			do {
				w = k[ ++j ]; /* width */
				h = 6 + ( j & 12 ); /* height */
				l = w * h / 8; /* bytes count in symbol */

			} while( l - k[ ++j ] < el ); /* could we fill the rect? */

			/* column regions */
			if( w > 25 ) nc = 2;

		} else { 

			/* square */

			w = h = 6;
			i = 2; /* size increment */
			k = [ 5, 7, 10, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 68, 84, 112, 144, 192, 224, 272, 336, 408, 496, 620 ]; /* rs checkwords */

			do {
				if( ++j == k.length ) return [ 0, 0 ]; /* msg is too long */

				if( w > 11 * i ) i = 4 + i & 12; /* advance increment */

				w = h += i;
				l = ( w * h ) >> 3;

			} while( l - k[ j ] < el );

			if( w > 27 ) nr = nc = 2 * ( w / 54 | 0 ) + 2; /* regions */
			if( l > 255 ) b = 2 * ( l >> 9 ) + 2; /* blocks */
		}


		s = k[ j ], /* rs checkwords */
		fw = w / nc, /* region size */
		fh = h / nr;

		/* first padding */
		if( el < l - s ) enc[ el++ ] = 129;

		/* more padding */
		while( el < l - s ) {

			enc[ el++ ] = ( ( ( 149 * el ) % 253 ) + 130 ) % 254;
		}


		/* Reed Solomon error detection and correction */
		s /= b;

		/* log / exp table of Galois field */
		for( j = 1, i = 0; i < 255; i++ ) { 

			ex[ i ] = j,
			lg[ j ] = i,
			j += j;

			if( j > 255 ) j ^= 301; /* 301 == a^8 + a^5 + a^3 + a^2 + 1 */
		}

		/* RS generator polynomial */
		for( rs[ s ] = 0, i = 1; i <= s; i++ ) 
			for( j = s - i, rs[ j ] = 1; j < s; j++ )
				rs[ j ] = rs[ j + 1 ] ^ ex[ ( lg[ rs[ j ] ] + i ) % 255 ];

		/* RS correction data for each block */
		for( c = 0; c < b; c++ ) { 
			for( i = 0; i <= s; i++ ) rc[ i ] = 0;
			for( i = c; i < el; i += b )
				for( j = 0, x = rc[ 0 ] ^ enc[ i ]; j < s; j++ )
					rc[ j ] = rc[ j + 1 ] ^ ( x ? ex[ ( lg[ rs[ j ] ] + lg[ x ] ) % 255 ] : 0 );

			/* interleaved correction data */
			for( i = 0; i < s; i++ ) 
				enc[ el + c + i * b ] = rc[ i ];
		}

		/* layout perimeter finder pattern */
		/* horizontal */
		for( i = 0; i < h + 2 * nr; i += fh + 2 )
			for( j = 0; j < w + 2 * nc; j++ ) {
				bit( j, i + fh + 1 );
				if( ( j & 1 ) == 0 ) bit( j, i );
			}

		/* vertical */
		for( i = 0; i < w + 2 * nc; i += fw + 2 )
			for( j = 0; j < h; j++ ) {
	 			bit( i, j + ( j / fh | 0 ) * 2 + 1 );
				if( ( j & 1 ) == 1 ) bit( i + fw + 1, j + ( j / fh | 0 ) * 2 );
			}

		s = 2, /* step */
		c = 0, /* column */
		r = 4, /* row */
		b = [ /* nominal byte layout */
			 0,  0,
			-1,  0,
			-2,  0,
			 0, -1,
			-1, -1,
			-2, -1,
			-1, -2,
			-2, -2
		];

		/* diagonal steps */
		for( i = 0; i < l; r -= s, c += s ) { 

			if( r == h - 3 && c == - 1 )

				k = [ /* corner A layout */
					    w, 6 - h,
					    w, 5 - h,
					    w, 4 - h,
					    w, 3 - h,
					w - 1, 3 - h,
					    3,     2,
					    2,     2,
					    1,     2
				];

			else if( r == h + 1 && c == 1 && ( w & 7 ) == 0 && ( h & 7 ) == 6 )

				k = [ /* corner D layout */
					w - 2,     -h,
					w - 3,     -h,
					w - 4,     -h,
					w - 2, -1 - h,
					w - 3, -1 - h,
					w - 4, -1 - h,
					w - 2, -2,
					   -1,     -2
				];
			else {
				if( r == 0 && c == w - 2 && ( w & 3 ) ) continue; /* corner B: omit upper left */
				if( r < 0 || c >= w || r >= h || c < 0 ) { /* outside */

					s  = -s, /* turn around */
					r += 2 + s / 2,
					c += 2 - s / 2;

					while( r < 0 || c >= w || r >= h || c < 0 ) {

						r -= s,
						c += s;
					}
				}
				if( r == h - 2 && c == 0 && ( w & 3 ) )

					k = [ /* corner B layout */
						w - 1, 3 - h,
						w - 1, 2 - h,
						w - 2, 2 - h,
						w - 3, 2 - h,
						w - 4, 2 - h,
						    0,     1,
						    0,     0,
						    0,    -1
					];

				else if( r == h - 2 && c == 0 && ( w & 7 ) == 4 )

					k = [ /* corner C layout */
						w - 1, 5 - h,
						w - 1, 4 - h,
						w - 1, 3 - h,
						w - 1, 2 - h,
						w - 2, 2 - h,
						    0,     1,
						    0,     0,
						    0,    -1
					];

				else if( r == 1 && c == w - 1 && ( w & 7 ) == 0 && ( h & 7 ) == 6 ) continue; /* omit corner D */
				else k = b; /* nominal L - shape layout */
			}

 			/* layout each bit */
			for( el = enc[ i++ ], j = 0; el > 0; j += 2, el >>= 1 ) {

				if( el & 1 ) {

					var
					x = c + k[ j ],
					y = r + k[ j + 1 ];

 					/* wrap around */
					if( x < 0 ) x += w, y += 4 - ( ( w + 4 ) & 7 );
					if( y < 0 ) y += h, x += 4 - ( ( h + 4 ) & 7 );

					/* region gap */
					bit( x + 2 * ( x / fw | 0 ) + 1, y + 2 * ( y / fh | 0 ) + 1 );
				}
			}
		}



		/* unfilled corner */
		for( i = w; i & 3; i-- ) {

			bit( i, i ); 
		}

		xx = w + 2 * nc,
		yy = h + 2 * nr;
	}

	return ( function() {

		function ishex( c ) {

			return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test( c );
		}

		function svg( n, a ) {

			n = document.createElementNS( ns, n );

			for( var o in a || {} ) {

				n.setAttribute( o, a[ o ] );
			}

			return n;
		}

		var
		 abs = Math.abs,
		r, x, y, d, sx, sy,

		  ns = 'http://www.w3.org/2000/svg',
		path = '',

		   q = ('string' == typeof Q ) ? { msg: Q } : Q || {},
		   p = q.pal || ['#000'],
		  dm = abs( q.dim ) || 256,
		  pd = abs( q.pad ), pd = ( pd > -1 ) ? pd : 2,
		  mx = [ 1, 0, 0, 1, pd, pd ],

		  fg = p[ 0 ], fg = ishex( fg ) ? fg : '#000',
		  bg = p[ 1 ], bg = ishex( bg ) ? bg :  0,

		/* render optimized or verbose svg */
		optimized = ( q.vrb ) ? 0 : 1;

		encodeMsg( q.msg || '', q.rct );

		sx = xx + pd * 2,
		sy = yy + pd * 2;

		y = yy;

		while( y-- ) {

			d = 0, x = xx;

			while( x-- ) {

				if( M[ y ][ x ] ) {

					if( optimized ) {

						d++;

						if( !M[ y ][ x - 1 ] )

							path += 'M' + x + ',' + y + 'h' + d +'v1h-' + d + 'v-1z', d = 0;

					} else path += 'M' + x + ',' + y + 'h1v1h-1v-1z';
				}
			}
		}


		r = svg('svg', {

					 'viewBox'		: [ 0, 0, sx, sy ].join(' ')
					,'width'		:  dm / sy * sx | 0
					,'height'		:  dm
					,'fill'			:  fg
					,'shape-rendering'	: 'crispEdges'
					,'xmlns'		:  ns 
					,'version'		: '1.1'
				} );

		if( bg ) r.appendChild( svg('path', {

					 'fill'			:  bg
					,'d'			: 'M0,0v' + sy + 'h' + sx + 'V0H0Z'
				} ) );

		r.appendChild( svg('path', {

					 'transform'		: 'matrix(' + mx + ')'
					,'d'			:  path
				} ) );

		return r;

	} )();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const barcodeGenerator_1 = __webpack_require__(/*! ./barcodeGenerator */ "./src/barcodeGenerator.ts");
const dataMatrixBarcodeModel_1 = __webpack_require__(/*! ./dataMatrixBarcodeModel */ "./src/dataMatrixBarcodeModel.ts");
const errorHandler_1 = __webpack_require__(/*! ./errorHandler */ "./src/errorHandler.ts");
const bledExpiryModel_1 = __webpack_require__(/*! ./bledExpiryModel */ "./src/bledExpiryModel.ts");
const dinModel_1 = __webpack_require__(/*! ./dinModel */ "./src/dinModel.ts");
const groupsModel_1 = __webpack_require__(/*! ./groupsModel */ "./src/groupsModel.ts");
const productsModel_1 = __webpack_require__(/*! ./productsModel */ "./src/productsModel.ts");
const products_1 = __webpack_require__(/*! ./products */ "./src/products.ts");
//import { Code128Barcode } from './lib/Code128Barcode';
const Code128Barcode = __webpack_require__(/*! ./lib/Code128Barcode */ "./src/lib/Code128Barcode.ts");
const barcodeGenerator = new barcodeGenerator_1.BarcodeGenerator();
// these barcodes don't change. - cmv barcode must be before group
barcodeGenerator.generateBarcodefromId("a8738a", 'cmv_barcode_svg', 'codabar');
barcodeGenerator.generateBarcodefromId("=)0MAVXX603B", 'bag_mfg_barcode_svg', 'code128');
const dataMatrixBarcode = new dataMatrixBarcodeModel_1.DataMatrixBarcode(barcodeGenerator);
// set up DIN
const errorHandler = new errorHandler_1.ErrorHandler();
const dinLabel = new dinModel_1.DinLabel(barcodeGenerator, dataMatrixBarcode);
const dinForm = new dinModel_1.DinForm(errorHandler, dinLabel);
// set up groups - must be before products
const groupLabel = new groupsModel_1.GroupsLabel(barcodeGenerator, dataMatrixBarcode);
const groupForm = new groupsModel_1.GroupsForm(groupLabel);
// set up bled and expiry dates
const datesLabel = new bledExpiryModel_1.DatesLabel(barcodeGenerator, dataMatrixBarcode);
const datesForm = new bledExpiryModel_1.DatesForm(datesLabel);
// set up products (expiry date set inside here after initial product selected)
const components = [products_1.redCells, products_1.platelets, products_1.ffp, products_1.cryo, products_1.granulocytes];
const productLabel = new productsModel_1.ProductsLabel(barcodeGenerator, dataMatrixBarcode);
const productForm = new productsModel_1.ProductsForm(productLabel, components, groupLabel, datesForm);
const testBarcode = new Code128Barcode('test');
document.querySelector('body').appendChild(testBarcode.svg);

})();

/******/ })()
;