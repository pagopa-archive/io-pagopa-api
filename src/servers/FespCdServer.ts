/**
 * Define FespCd SOAP Servers to expose to PagoPa
 */

import * as core from "express-serve-static-core";
import { NonEmptyString } from "italia-ts-commons/lib/strings";
import * as soap from "soap";
import { FESP_PSP_WSDL_PATH } from "../Configuration";
import { IFespCdPortTypeSoap } from "../types/IFespCdPortTypeSoap";
import { readWsdl } from "../utils/SoapUtils";

/**
 * Attach FespCd SOAP service to a server instance
 * @param {core.Express} server - The server instance to use to expose services
 * @param {NonEmptyString} path - The endpoint path
 * @param {IFespCdPortTypeSoap} fespCdHandlers - The service controller
 * @return {Promise<soap.Server>} The soap server defined and started
 */
export async function attachFespCdServer(
  server: core.Express,
  path: NonEmptyString,
  fespCdHandlers: IFespCdPortTypeSoap
): Promise<soap.Server> {
  const wsdl = await readWsdl(FESP_PSP_WSDL_PATH);
  const service = {
    FespPspService: {
      PSPPort: fespCdHandlers
    }
  };
  return soap.listen(server, path, service, wsdl);
}
