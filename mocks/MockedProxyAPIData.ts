import {
  InodoAggiornaIscrizioniAvvisaturaOutput,
  InodoAggiornaIscrizioniAvvisaturaInput
} from "../wsdl-lib/IscrizioniAvvisaturaService/PPTPort";

export class MockedProxyAPIData {
  public getNodoAggiornaIscrizioneAvvisaturaRichiestaMocked(): InodoAggiornaIscrizioniAvvisaturaInput {
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
  public getNodoAggiornaIscrizioneAvvisaturaRispostaMocked(): InodoAggiornaIscrizioniAvvisaturaOutput {
    return {esitoOperazione: "OK"};
  }

  public getNodoAggiornaIscrizioneAvvisaturaErrorMocked(): InodoAggiornaIscrizioniAvvisaturaOutput {
    return { esitoOperazione: "KO"};
  }
}
