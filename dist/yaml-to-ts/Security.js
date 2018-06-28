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
const SecurityUsernameTokenR = t.interface({});
// optional attributes
const SecurityUsernameTokenO = t.partial({
    Username: t.string,
    Password: t.string,
    Nonce: t.string,
    Created: t.string
});
exports.SecurityUsernameToken = t.exact(t.intersection([SecurityUsernameTokenR, SecurityUsernameTokenO], "SecurityUsernameToken"));
// required attributes
const SecurityTimestampR = t.interface({});
// optional attributes
const SecurityTimestampO = t.partial({
    Created: t.string,
    Expires: t.string,
    Id: t.string
});
exports.SecurityTimestamp = t.exact(t.intersection([SecurityTimestampR, SecurityTimestampO], "SecurityTimestamp"));
// required attributes
const SecurityR = t.interface({});
// optional attributes
const SecurityO = t.partial({
    UsernameToken: exports.SecurityUsernameToken,
    Timestamp: exports.SecurityTimestamp
});
exports.Security = t.exact(t.intersection([SecurityR, SecurityO], "Security"));
//# sourceMappingURL=Security.js.map