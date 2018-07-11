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
var faultBean_ppt_1 = require("./faultBean_ppt");
var t = require("io-ts");
// required attributes
var risposta_pptR = t.interface({});
// optional attributes
var risposta_pptO = t.partial({
    fault: faultBean_ppt_1.faultBean_ppt
});
exports.risposta_ppt = t.exact(t.intersection([risposta_pptR, risposta_pptO], "risposta_ppt"));
