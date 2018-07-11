import "jest-xml-matcher";
import { nodoTipoCodiceIdRPT_ppt } from "../../../yaml-to-ts/nodoTipoCodiceIdRPT_ppt";
import { nodoVerificaRPT_ppt } from "../../../yaml-to-ts/nodoVerificaRPT_ppt";
import * as pptPortClient from "../PPTPortClient";

// tslint:disable:no-let no-hardcoded-credentials

const soapHost = "soapHost.test";
const pptPortEndpoint = `http://${soapHost}/pptPort/`;

const nodoVerificaRPTMocked =
  '<?xml version="1.0" encoding="utf-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:ppt="http://ws.pagamenti.telematici.gov/" xmlns:tns="http://PuntoAccessoPSP.spcoop.gov.it/servizi/PagamentiTelematiciPspNodo" xmlns:pay_i="http://www.digitpa.gov.it/schemas/2011/Pagamenti/"><soapenv:Body><ppt:nodoVerificaRPT xmlns:ppt="http://ws.pagamenti.telematici.gov/"><identificativoPSP>CDPSP</identificativoPSP><identificativoIntermediarioPSP>123</identificativoIntermediarioPSP><identificativoCanale>456</identificativoCanale><password>myPsw</password><codiceContestoPagamento>123456</codiceContestoPagamento><codificaInfrastrutturaPSP>XYZ</codificaInfrastrutturaPSP><codiceIdRPT><test>TEST</test></codiceIdRPT></ppt:nodoVerificaRPT></soapenv:Body></soapenv:Envelope>';

describe("SOAP Client for PPTPort", () => {
  it("should send the right XML", async () => {
    let requestOptions: any;
    function customReq(
      options: any,
      callback?: (error: any, res: any, body: any) => void
    ): void {
      requestOptions = options;
      if (callback) {
        callback(undefined, undefined, undefined);
      }
    }

    const clientBase = await pptPortClient.createPagamentiTelematiciPspNodoClient(
      {
        endpoint: pptPortEndpoint,
        envelopeKey: "soapenv",
        request: customReq,
        xmlnsAttributes: {
          name: "xmlns:sac",
          value: "http://ws.pagamenti.telematici.gov/"
        }
      }
    );
    clientBase.addHttpHeader("Host", soapHost);

    const input = {
      identificativoPSP: "CDPSP",
      identificativoIntermediarioPSP: "123",
      identificativoCanale: "456",
      password: "myPsw",
      codiceContestoPagamento: "123456",
      codificaInfrastrutturaPSP: "XYZ",
      codiceIdRPT: {
        test: "TEST"
      } as nodoTipoCodiceIdRPT_ppt
    } as nodoVerificaRPT_ppt;

    const nodoVerificaRptClient = new pptPortClient.PagamentiTelematiciPspNodoAsyncClient(
      clientBase
    );

    try {
      await nodoVerificaRptClient.nodoVerificaRPT(input);
    } catch {
      // call will fail since customReq returns an unparsable response (null)
      // but it's ok since we're only interester in the request object
    }

    const expectedRequest = nodoVerificaRPTMocked;

    expect(requestOptions).toBeDefined();
    if (requestOptions) {
      console.log(requestOptions.body);
      expect(requestOptions.body).toEqualXML(expectedRequest);
    }
  });
});
