"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MockedProxyAPIData {
    getNodoAggiornaIscrizioneAvvisaturaRichiestaMocked() {
        return {
            datiNotifica: {
                azioneDiAggiornamento: "A",
                dataOraRichiesta: "2018-04-03T16:41:00",
                identificativoMessaggioRichiesta: "1",
                identificativoUnivocoSoggetto: {
                    codiceIdentificativoUnivoco: "FISCAL_CODE",
                    tipoIdentificativoUnivoco: "F"
                }
            },
            identificativoCanale: "123",
            identificativoIntermediarioPSP: "123",
            identificativoPSP: "CDPSP",
            password: "password"
        };
    }
    getNodoAggiornaIscrizioneAvvisaturaRispostaMocked() {
        return { esitoOperazione: "OK" };
    }
    getNodoAggiornaIscrizioneAvvisaturaErrorMocked() {
        return { esitoOperazione: "KO" };
    }
}
exports.MockedProxyAPIData = MockedProxyAPIData;
//# sourceMappingURL=MockedProxyAPIData.js.map