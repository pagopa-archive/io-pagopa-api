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
const faultBean_ppt_1 = require("./faultBean_ppt");
const t = require("io-ts");
// required attributes
const risposta_pptR = t.interface({});
// optional attributes
const risposta_pptO = t.partial({
    fault: faultBean_ppt_1.faultBean_ppt
});
exports.risposta_ppt = t.exact(t.intersection([risposta_pptR, risposta_pptO], "risposta_ppt"));
//# sourceMappingURL=risposta_ppt.js.map