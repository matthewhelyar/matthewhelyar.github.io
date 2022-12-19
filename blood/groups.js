class RhD {
    constructor(name, rhdText, smallDText, rhdBackground, rhdTextFill, aboStroke, aboTextFill) {
        this.name = name;
        this.rhdText = rhdText;
        this.smallDText = smallDText;

        // the following should be done in CSS.
        this.rhdBackground = rhdBackground;
        this.rhdTextFill = rhdTextFill;
        this.aboStroke = aboStroke;
        this.aboTextFill = aboTextFill;
    }
}

const rhdPos = new RhD("+", "Rh D POSITIVE", "+", "white", "black", "none", "black");
const rhdNeg = new RhD("-", "Rh D NEGATIVE", "\u2013", "black", "white", "black", "none");  // en dash (–), not -.


//class Group {
//    constructor(abo, rhd, text, code) {
//        this.abo = abo;
//        this.rhd = rhd;
//        this.text = text;
//        this.code = code;
//    }
//};

const groups = [
    {
        "abo": "O",
        "rhd": rhdPos,
        "text": "O Pos",
        "code": "51"
    },
    {
        "abo": "O",
        "rhd": rhdNeg,
        "text": "O Neg",
        "code": "95"
    },
    {
        "abo": "A",
        "rhd": rhdPos,
        "text": "A Pos",
        "code": "62"
    },
    {
        "abo": "A",
        "rhd": rhdNeg,
        "text": "A Neg",
        "code": "06"
    },
    {
        "abo": "B",
        "rhd": rhdPos,
        "text": "B Pos",
        "code": "73"
    },
    {
        "abo": "B",
        "rhd": rhdNeg,
        "text": "B Neg",
        "code": "17"
    },
    {
        "abo": "AB",
        "rhd": rhdPos,
        "text": "AB Pos",
        "code": "84"
    },
    {
        "abo": "AB",
        "rhd": rhdNeg,
        "text": "AB Neg",
        "code": "28"
    }
]


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