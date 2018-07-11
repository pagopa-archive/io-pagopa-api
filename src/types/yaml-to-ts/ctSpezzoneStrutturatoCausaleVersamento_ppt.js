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
var stText25_ppt_1 = require("./stText25_ppt");
var stImporto_ppt_1 = require("./stImporto_ppt");
var t = require("io-ts");
// required attributes
var ctSpezzoneStrutturatoCausaleVersamento_pptR = t.interface({
    causaleSpezzone: stText25_ppt_1.stText25_ppt,
    importoSpezzone: stImporto_ppt_1.stImporto_ppt
});
// optional attributes
var ctSpezzoneStrutturatoCausaleVersamento_pptO = t.partial({});
exports.ctSpezzoneStrutturatoCausaleVersamento_ppt = t.exact(t.intersection([
    ctSpezzoneStrutturatoCausaleVersamento_pptR,
    ctSpezzoneStrutturatoCausaleVersamento_pptO
], "ctSpezzoneStrutturatoCausaleVersamento_ppt"));
