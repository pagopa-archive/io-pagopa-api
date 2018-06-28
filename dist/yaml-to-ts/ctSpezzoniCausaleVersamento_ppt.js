"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
Object.defineProperty(exports, "__esModule", { value: true });
const stText35_ppt_1 = require("./stText35_ppt");
const ctSpezzoneStrutturatoCausaleVersamento_ppt_1 = require("./ctSpezzoneStrutturatoCausaleVersamento_ppt");
const t = require("io-ts");
// required attributes
const ctSpezzoniCausaleVersamento_pptR = t.interface({});
// optional attributes
const ctSpezzoniCausaleVersamento_pptO = t.partial({
    spezzoneCausaleVersamento: stText35_ppt_1.stText35_ppt,
    spezzoneStrutturatoCausaleVersamento: ctSpezzoneStrutturatoCausaleVersamento_ppt_1.ctSpezzoneStrutturatoCausaleVersamento_ppt
});
exports.ctSpezzoniCausaleVersamento_ppt = t.exact(t.intersection([ctSpezzoniCausaleVersamento_pptR, ctSpezzoniCausaleVersamento_pptO], "ctSpezzoniCausaleVersamento_ppt"));
//# sourceMappingURL=ctSpezzoniCausaleVersamento_ppt.js.map