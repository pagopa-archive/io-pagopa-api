import * as http from "http";
import express from "express";
import soap from "soap";
import fs from "fs";
import fetch from "node-fetch";

import * as MockedProxyAPIApp from "../../MockedProxyAPIApp";
import * as App from "../../App";

import { CONFIG } from "../../Configuration";
import * as logger from "../utils/logger"

import { NotificationAPI } from "../NotificationApi";
import { InodoAggiornaIscrizioniAvvisaturaInput } from "../../wsdl-lib/IscrizioniAvvisaturaService/PPTPort";

let mockedProxyAPIServer: http.Server;
let server: http.Server;


beforeAll(() => {
  logger.disableConsoleLog();
  mockedProxyAPIServer = MockedProxyAPIApp.startApp();
  server = App.startApp();
});

afterAll(() => {
  App.stopServer(server);
  MockedProxyAPIApp.stopServer(mockedProxyAPIServer);
});

/*describe("From ts type to wsdl", () => {
  test("should send the right WSDL", async () => {
    let richiestaAggiornamento: InodoAggiornaIscrizioniAvvisaturaInput = {
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
    let requestOptions = await NotificationAPI.prototype.register(
      richiestaAggiornamento
    );

    expect(requestOptions.body).toBeDefined();
    expect(requestOptions.body).toMatch(
      "<identificativoPSP>CDPSP</identificativoPSP>"
    );
    expect(requestOptions.body).toMatch(
      "<identificativoCanale>123</identificativoCanale>"
    );
    expect(requestOptions.body).toMatch(
      "<identificativoIntermediarioPSP>123</identificativoIntermediarioPSP>"
    );
    expect(requestOptions.body).toMatch("<password>password</password>");
    expect(requestOptions.headers).toHaveProperty("Accept");
  });
});*/

describe("Call POST /notifications/register service proxy->API", () => {
  test("should return ok status", done => {
    fetch(
      CONFIG.PAGOPA.HOST +
        ":" +
        CONFIG.PAGOPA.PORT +
        CONFIG.PAGOPA.SERVICES.NOTIFICATION_REGISTER,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
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
        })
      }
    )
      .then(fetchRes => fetchRes.json())
      .then(response => {
        expect(response).toHaveProperty("esitoOperazione");
        expect(response.esitoOperazione).toBe("OK");
        done();
      });
  });
  test("should return ko status (WRONG PSP)", done => {
    fetch(
      CONFIG.PAGOPA.HOST +
        ":" +
        CONFIG.PAGOPA.PORT +
        CONFIG.PAGOPA.SERVICES.NOTIFICATION_REGISTER,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
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
          identificativoPSP: "WrongPSP",
          password: "password"
        })
      }
    )
      .then(fetchRes => fetchRes.json())
      .then(response => {
        expect(response).toHaveProperty("esitoOperazione");
        expect(response.esitoOperazione).toBe("KO");
        done();
      });
  });
  test("should return ko status (WRONG password)", done => {
    fetch(
      CONFIG.PAGOPA.HOST +
        ":" +
        CONFIG.PAGOPA.PORT +
        CONFIG.PAGOPA.SERVICES.NOTIFICATION_REGISTER,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
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
          password: "WrongPassword"
        })
      }
    )
      .then(fetchRes => fetchRes.json())
      .then(response => {
        expect(response).toHaveProperty("esitoOperazione");
        expect(response.esitoOperazione).toBe("KO");
        done();
      });
  });
});
