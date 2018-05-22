"use-strict"
import fetch from "node-fetch";
import { CONFIG } from "../Configuration";
import * as clients from "../lib/clients";
import * as http from "http";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as soap from "soap";
import * as fs from "fs";

import { InodoAggiornaIscrizioniAvvisaturaInput } from "../wsdl-lib/IscrizioniAvvisaturaService/PPTPort";
import { InodoAggiornaIscrizioniAvvisaturaOutput } from "../wsdl-lib/IscrizioniAvvisaturaService/PPTPort";
import { request } from "https";

// Notification Service for PagoPA communications
export class NotificationAPI {
  // Retrieve wallet containing payment methods
  public async register(
    richiestaAggiornamento: InodoAggiornaIscrizioniAvvisaturaInput
  ) {
    const url =
      CONFIG.PAGOPA.HOST +
      ":" +
      CONFIG.PAGOPA.PORT +
      CONFIG.PAGOPA.SERVICES.NOTIFICATION_REGISTER;
    /*TRASFORMARE IL BODY IN WSDL*/

    let requestOptions;
    //THE FOLLOWING COMMENTED BLOCK IS ONLY FOR STAND-ALONE TESTING
    /*function customReq(
      options: any,
      callback?: (error: any, res: any, body: any) => void
    ): void {
      requestOptions = options;
      callback(null, null, null);
    }*/
    let iscrizioniAvvisaturaClientBase = await clients.createIscrizioniAvvisaturaClient(
      {
        endpoint: url,
        envelopeKey: "soapenv",
        //request: customReq
      }
    );

    // iscrizioniAvvisaturaClientBase.addHttpHeader("Host", url);

    let iscrizioniAvvisaturaClient = new clients.IscrizioniAvvisaturaAsyncClient(
      iscrizioniAvvisaturaClientBase
    );

    let input: clients.IscrizioniAvvisaturaService.InodoAggiornaIscrizioniAvvisaturaInput = {
      identificativoCanale: richiestaAggiornamento.identificativoCanale,
      identificativoIntermediarioPSP:
        richiestaAggiornamento.identificativoIntermediarioPSP,
      identificativoPSP: richiestaAggiornamento.identificativoPSP,
      password: richiestaAggiornamento.password
    };
    let output;
    try {
      output = await iscrizioniAvvisaturaClient.nodoAggiornaIscrizioniAvvisatura(
        input
      );
    } catch {}
    return requestOptions;
  }
}
