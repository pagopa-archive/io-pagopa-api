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
var Security_1 = require("./Security");
var t = require("io-ts");
// required attributes
var nodoInviaFlussoRendicontazioneHeaderR = t.interface({});
// optional attributes
var nodoInviaFlussoRendicontazioneHeaderO = t.partial({
    Security: Security_1.Security
});
exports.nodoInviaFlussoRendicontazioneHeader = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneHeaderR,
    nodoInviaFlussoRendicontazioneHeaderO
], "nodoInviaFlussoRendicontazioneHeader"));
