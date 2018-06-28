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
const esitoNodoInviaRTRisposta_ppt_1 = require("./esitoNodoInviaRTRisposta_ppt");
const t = require("io-ts");
// required attributes
const nodoInviaRTRisposta_pptR = t.interface({
    nodoInviaRTRisposta: esitoNodoInviaRTRisposta_ppt_1.esitoNodoInviaRTRisposta_ppt
});
// optional attributes
const nodoInviaRTRisposta_pptO = t.partial({});
exports.nodoInviaRTRisposta_ppt = t.exact(t.intersection([nodoInviaRTRisposta_pptR, nodoInviaRTRisposta_pptO], "nodoInviaRTRisposta_ppt"));
//# sourceMappingURL=nodoInviaRTRisposta_ppt.js.map