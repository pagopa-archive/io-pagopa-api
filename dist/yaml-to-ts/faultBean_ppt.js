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
const t = require("io-ts");
// required attributes
const faultBean_pptR = t.interface({
    faultCode: t.string,
    faultString: t.string,
    id: t.string
});
// optional attributes
const faultBean_pptO = t.partial({
    description: t.string,
    serial: t.Integer
});
exports.faultBean_ppt = t.exact(t.intersection([faultBean_pptR, faultBean_pptO], "faultBean_ppt"));
//# sourceMappingURL=faultBean_ppt.js.map