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
const t = require("io-ts");
// required attributes
const cdInfoPagamento_pptR = t.interface({
    identificativoDominio: stText35_ppt_1.stText35_ppt,
    identificativoUnivocoVersamento: stText35_ppt_1.stText35_ppt,
    codiceContestoPagamento: stText35_ppt_1.stText35_ppt,
    idPagamento: t.string
});
// optional attributes
const cdInfoPagamento_pptO = t.partial({});
exports.cdInfoPagamento_ppt = t.exact(t.intersection([cdInfoPagamento_pptR, cdInfoPagamento_pptO], "cdInfoPagamento_ppt"));
//# sourceMappingURL=cdInfoPagamento_ppt.js.map