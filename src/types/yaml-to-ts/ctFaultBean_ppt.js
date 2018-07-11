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
var ctFaultBean_pptR = t.interface({
    faultCode: t.string,
    faultString: t.string,
    id: t.string
});
// optional attributes
var ctFaultBean_pptO = t.partial({
    description: t.string,
    serial: t.Integer,
    originalFaultCode: t.string,
    originalFaultString: t.string,
    originalDescription: t.string
});
exports.ctFaultBean_ppt = t.exact(t.intersection([ctFaultBean_pptR, ctFaultBean_pptO], "ctFaultBean_ppt"));
