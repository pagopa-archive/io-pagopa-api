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
const stText25_ppt_1 = require("./stText25_ppt");
const stImporto_ppt_1 = require("./stImporto_ppt");
const t = require("io-ts");
// required attributes
const ctSpezzoneStrutturatoCausaleVersamento_pptR = t.interface({
    causaleSpezzone: stText25_ppt_1.stText25_ppt,
    importoSpezzone: stImporto_ppt_1.stImporto_ppt
});
// optional attributes
const ctSpezzoneStrutturatoCausaleVersamento_pptO = t.partial({});
exports.ctSpezzoneStrutturatoCausaleVersamento_ppt = t.exact(t.intersection([
    ctSpezzoneStrutturatoCausaleVersamento_pptR,
    ctSpezzoneStrutturatoCausaleVersamento_pptO
], "ctSpezzoneStrutturatoCausaleVersamento_ppt"));
//# sourceMappingURL=ctSpezzoneStrutturatoCausaleVersamento_ppt.js.map