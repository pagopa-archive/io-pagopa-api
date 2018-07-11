"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
exports.__esModule = true;
var t = require("io-ts");
var dates_1 = require("italia-ts-commons/lib/dates");
// required attributes
var tipoIdQuadratura_pptR = t.interface({
    identificativoFlusso: t.string,
    dataOraFlusso: dates_1.DateFromString
});
// optional attributes
var tipoIdQuadratura_pptO = t.partial({});
exports.tipoIdQuadratura_ppt = t.exact(t.intersection([tipoIdQuadratura_pptR, tipoIdQuadratura_pptO], "tipoIdQuadratura_ppt"));
