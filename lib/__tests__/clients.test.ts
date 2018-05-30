import * as fs from "fs";
import "jest-xml-matcher";
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
        request: customReq,
        xmlnsAttributes: {
          name: "xmlns:sac",
          value: "http://ws.pagamenti.telematici.gov/"
        }
      }
    );
    iscrizioniAvvisaturaClientBase.addHttpHeader("Host", avvisaturaHost);

    // NOTE: order of fields is IMPORTANT!!! the SOAP library WILL NOT reorder
    // the fields based on the WSDL schema!!! The order of the fields in the
    // JSON MUST be the same of the WSDL schema!!!

    const identificativoUnivocoSoggetto: clients.IscrizioniAvvisaturaService.PPTPortTypes.IidentificativoUnivocoSoggetto = {
      tipoIdentificativoUnivoco: "F",
      codiceIdentificativoUnivoco: "FISCAL_CODE"
    };

    const datiNotifica: clients.IscrizioniAvvisaturaService.PPTPortTypes.IdatiNotifica = {
      dataOraRichiesta: "2018-04-03T16:41:00",
      identificativoMessaggioRichiesta: "1",
      identificativoUnivocoSoggetto: identificativoUnivocoSoggetto,
      azioneDiAggiornamento: "A"
    };

    const input: clients.IscrizioniAvvisaturaService.InodoAggiornaIscrizioniAvvisaturaInput = {
      identificativoPSP: "CDPSP",
      identificativoIntermediarioPSP: "123",
      identificativoCanale: "456",
      password: "password",
      datiNotifica: datiNotifica
    };

    const iscrizioniAvvisaturaClient = new clients.IscrizioniAvvisaturaAsyncClient(
      iscrizioniAvvisaturaClientBase
    );

    console.log(
      iscrizioniAvvisaturaClientBase.describe().IscrizioniAvvisaturaService
        .PPTPort.nodoAggiornaIscrizioniAvvisatura
    );
    console.log(
      iscrizioniAvvisaturaClientBase.describe().IscrizioniAvvisaturaService
        .PPTPort.nodoAggiornaIscrizioniAvvisatura.input.datiNotifica
        .identificativoUnivocoSoggetto.tipoIdentificativoUnivoco
    );

    console.log(
      iscrizioniAvvisaturaClientBase.describe().IscrizioniAvvisaturaService
        .PPTPort.nodoAggiornaIscrizioniAvvisatura.input.datiNotifica
        .identificativoUnivocoSoggetto.codiceIdentificativoUnivoco
    );

    


    try {
      const output = await iscrizioniAvvisaturaClient.nodoAggiornaIscrizioniAvvisatura(
        input
      );
    } catch {
      // call will fail since customReq returns an unparsable response (null)
      // but it's ok since we're only interester in the request object
    }

    const expectedRequest = fs.readFileSync(
      `${__dirname}/fixtures/clients.test.req1.xml`,
      "UTF-8"
    );

    console.log(requestOptions.body);

    expect(requestOptions.body).toEqualXML(expectedRequest);
  });
});