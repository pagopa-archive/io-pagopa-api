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
var t = require("io-ts");
// required attributes
var faultBean_pptR = t.interface({
    faultCode: t.string,
    faultString: t.string,
    id: t.string
});
// optional attributes
var faultBean_pptO = t.partial({
    description: t.string,
    serial: t.Integer
});
exports.faultBean_ppt = t.exact(t.intersection([faultBean_pptR, faultBean_pptO], "faultBean_ppt"));
