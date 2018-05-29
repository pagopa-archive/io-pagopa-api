import * as clients from "../clients";
import * as http from "http";
import express from "express";
import bodyParser from "body-parser"
import soap from "soap"
import fs from "fs"


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

    let iscrizioniAvvisaturaClientBase = await clients.createIscrizioniAvvisaturaClient(
      {
        endpoint: avvisaturaEndpoint,
        envelopeKey: "soapenv",
        request: customReq
      }
    );
    iscrizioniAvvisaturaClientBase.addHttpHeader("Host", avvisaturaHost);

    let iscrizioniAvvisaturaClient = new clients.IscrizioniAvvisaturaAsyncClient(
      iscrizioniAvvisaturaClientBase
    );

    let input: clients.IscrizioniAvvisaturaService.InodoAggiornaIscrizioniAvvisaturaInput = {
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
      let output = await iscrizioniAvvisaturaClient.nodoAggiornaIscrizioniAvvisatura(
        input
      );
    } catch {
      // call will fail since customReq returns an unparsable response (null)
      // but it's ok since we're only interester in the request object
    }
    expect(requestOptions.body).toBeDefined();
    expect(requestOptions.body).toMatch(
      "<identificativoPSP>CDPSP</identificativoPSP>"
    );
    expect(requestOptions.body).toMatch(
      "<azioneDiAggiornamento>A</azioneDiAggiornamento>"
    );
    expect(requestOptions.body).toMatch(
      "<codiceIdentificativoUnivoco>FISCAL_CODE</codiceIdentificativoUnivoco>"
    );
    expect(requestOptions.body).toMatch("<password>password</password>");
  });
});
