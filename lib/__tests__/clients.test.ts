import * as clients from "../clients";

const avvisaturaHost = "avvisatura.test";
const avvisaturaEndpoint = `http://${avvisaturaHost}/avvisatura/`;

describe("createIscrizioniAvvisaturaClient#nodoAggiornaIscrizioniAvvisatura", () => {

  it("should send the right XML", async () => {

    let requestOptions;

    function customReq(
      options: any,
      callback?: (error: any, res: any, body: any) => void
    ): void {
      requestOptions = options;
      callback(null, null, null);
    }

    const iscrizioniAvvisaturaClientBase = await clients.createIscrizioniAvvisaturaClient(
      {
        endpoint: avvisaturaEndpoint,
        envelopeKey: "soapenv",
        request: customReq
      }
    );
    iscrizioniAvvisaturaClientBase.addHttpHeader("Host", avvisaturaHost);

    const iscrizioniAvvisaturaClient = new clients.IscrizioniAvvisaturaAsyncClient(
      iscrizioniAvvisaturaClientBase
    );

    const input: clients.IscrizioniAvvisaturaService.InodoAggiornaIscrizioniAvvisaturaInput = {
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

    try {
      const output = await iscrizioniAvvisaturaClient.nodoAggiornaIscrizioniAvvisatura(
        input
      );
    } catch {
      // call will fail since customReq returns an unparsable response (null)
      // but it's ok since we're only interester in the request object
    }
    expect(requestOptions.body).toEqual("xyz");

  });

});