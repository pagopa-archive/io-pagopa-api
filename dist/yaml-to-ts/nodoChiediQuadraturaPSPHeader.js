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
const Security_1 = require("./Security");
const t = require("io-ts");
// required attributes
const nodoChiediQuadraturaPSPHeaderR = t.interface({});
// optional attributes
const nodoChiediQuadraturaPSPHeaderO = t.partial({
    Security: Security_1.Security
});
exports.nodoChiediQuadraturaPSPHeader = t.exact(t.intersection([nodoChiediQuadraturaPSPHeaderR, nodoChiediQuadraturaPSPHeaderO], "nodoChiediQuadraturaPSPHeader"));
//# sourceMappingURL=nodoChiediQuadraturaPSPHeader.js.map