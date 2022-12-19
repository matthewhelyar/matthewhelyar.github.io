class Component {
    constructor(name, irradPossible, specialPossible, cmvPossible, hbsPossible,
        storageText, color, anticoagulantTextVisibility, rhPhenVisibility) {
        this.name = name;
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

const redCells = new Component("R", true, true, true, true,
    "STORE AT 4\u00B0C \u00B1 2\u00B0C", "Red", true, true);
const platelets = new Component("P", true, true, true, false,
    "STORE AT 22\u00B0C \u00B1 2\u00B0C EXTENDED LIFE<br />AGITATE GENTLY THROUGHOUT STORAGE", "Yellow", false, false);
const ffp = new Component("F", false, false, false, false,
    "STORE FROZEN AT -25\u00B0C OR BELOW<br />TIME THAWED _______ DATE _______", "Yellow", false, false);
const cryo = new Component("C", false, false, false, false,
    "STORE FROZEN AT -25\u00B0C OR BELOW<br />USE WITHIN 4 HOURS OF THAWING<br />TIME THAWED _______ DATE _______", "Yellow", false, false);
// Granulocytes should have the irradiated button disabled but also always be irradiated.
const granulocytes = new Component("G", true, true, true, true,
    "DO NOT AGITATE<br />STORE AT 22\u00B0C \u00B1 2\u00B0C", "Red", false, false);

const componentList = [redCells, platelets, ffp, cryo, granulocytes];




//class Product {
//    constructor(component, pack, irr, special, availability, code, volume, shelfLife, text) {
//        this.component = component;
//        this.pack = pack;
//        this.irr = irr;
//        this.special = special;
//        this.availability = availability;
//        this.code = code;
//        this.volume = volume;
//        this.shelfLife = shelfLife;
//        this.text = text;
//    }
//};

const products = [
  {
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": cryo,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
    "pack": 4,
    "irr": true,
    "special": false,
    "availability": true,
    "code": "46834",
    "volume": 47,
    "shelfLife": 14,
    "text": "RED CELLS IN ADDITIVE SOLUTION LD, IRRADIATED FOR NEONATAL USE"
  },
  {
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": redCells,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": ffp,
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
    "component": cryo,
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
    "component": granulocytes,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
    "pack": 0,
    "irr": false,
    "special": false,
    "availability": true,
    "code": "54232",
    "volume": 294,
    "shelfLife": 5,
    "text": "PLATELETS POOLED IN PLASMA/ADDITIVE MIXTURE"
  },
  {
    "component": platelets,
    "pack": 0,
    "irr": true,
    "special": false,
    "availability": true,
    "code": "54242",
    "volume": 294,
    "shelfLife": 5,
    "text": "PLATELETS POOLED IN PLASMA/ADDITIVE MIX, IRRADIATED"
  },
  {
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": platelets,
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
    "component": granulocytes,
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
    "component": redCells,
    "pack": 0,
    "irr": false,
    "special": true,
    "availability": false,
    "code": "30002",
    "volume": 451,
    "shelfLife": 35,
    "text": "WHOLE BLOOD (CPDA1) AUTOLOGOUS"
  }
]


function generateProductsArray() {
    return;
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
}
