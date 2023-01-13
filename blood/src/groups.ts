export class RhD {
    cssClass: string;
    rhdText: string;
    smallDText: string;

    constructor(cssClass: string, rhdText: string, smallDText: string) {
        this.cssClass = cssClass;
        this.rhdText = rhdText;
        this.smallDText = smallDText;
    }
}

export class Group {
    abo: string;
    rhd: RhD;
    text: string;
    code: string;

    constructor(abo: string, rhd: RhD, text: string, code: string) {
        this.abo = abo;
        this.rhd = rhd;
        this.text = text;
        this.code = code;
    }
};

export const rhdPos: RhD = new RhD("pos", "Rh D POSITIVE", "+");
export const rhdNeg: RhD = new RhD("neg", "Rh D NEGATIVE", "\u2013");  // en dash (–), not -.

export const groups: Group[] = [
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