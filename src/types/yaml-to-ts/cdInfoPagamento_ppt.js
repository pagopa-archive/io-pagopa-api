"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
exports.__esModule = true;
var stText35_ppt_1 = require("./stText35_ppt");
var t = require("io-ts");
// required attributes
var cdInfoPagamento_pptR = t.interface({
    identificativoDominio: stText35_ppt_1.stText35_ppt,
    identificativoUnivocoVersamento: stText35_ppt_1.stText35_ppt,
    codiceContestoPagamento: stText35_ppt_1.stText35_ppt,
    idPagamento: t.string
});
// optional attributes
var cdInfoPagamento_pptO = t.partial({});
exports.cdInfoPagamento_ppt = t.exact(t.intersection([cdInfoPagamento_pptR, cdInfoPagamento_pptO], "cdInfoPagamento_ppt"));
