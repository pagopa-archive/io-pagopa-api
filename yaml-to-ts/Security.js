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
// required attributes
var SecurityUsernameTokenR = t.interface({});
// optional attributes
var SecurityUsernameTokenO = t.partial({
    Username: t.string,
    Password: t.string,
    Nonce: t.string,
    Created: t.string
});
exports.SecurityUsernameToken = t.exact(t.intersection([SecurityUsernameTokenR, SecurityUsernameTokenO], "SecurityUsernameToken"));
// required attributes
var SecurityTimestampR = t.interface({});
// optional attributes
var SecurityTimestampO = t.partial({
    Created: t.string,
    Expires: t.string,
    Id: t.string
});
exports.SecurityTimestamp = t.exact(t.intersection([SecurityTimestampR, SecurityTimestampO], "SecurityTimestamp"));
// required attributes
var SecurityR = t.interface({});
// optional attributes
var SecurityO = t.partial({
    UsernameToken: exports.SecurityUsernameToken,
    Timestamp: exports.SecurityTimestamp
});
exports.Security = t.exact(t.intersection([SecurityR, SecurityO], "Security"));
