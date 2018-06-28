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
const risposta_ppt_1 = require("./risposta_ppt");
const t = require("io-ts");
// required attributes
const nodoInviaFlussoRendicontazioneRisposta_ppt2R = t.interface({});
// optional attributes
const nodoInviaFlussoRendicontazioneRisposta_ppt2O = t.partial({
    esito: t.string
});
exports.nodoInviaFlussoRendicontazioneRisposta_ppt2 = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneRisposta_ppt2R,
    nodoInviaFlussoRendicontazioneRisposta_ppt2O
], "nodoInviaFlussoRendicontazioneRisposta_ppt2"));
exports.nodoInviaFlussoRendicontazioneRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.nodoInviaFlussoRendicontazioneRisposta_ppt2], "nodoInviaFlussoRendicontazioneRisposta_ppt");
//# sourceMappingURL=nodoInviaFlussoRendicontazioneRisposta_ppt.js.map