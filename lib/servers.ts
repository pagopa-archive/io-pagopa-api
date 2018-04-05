import * as soap from "soap";

import * as wsdl_paths from "./wsdl-paths";
import { readWsdl } from "./utils";

// import interface for "PSP" services
import * as FespPspService from "../wsdl-lib/FespPspService/PSPPort";
import * as AvvisiDigitaliService from "../wsdl-lib/AvvisiDigitaliService/PPTPort";

export { FespPspService };
export { AvvisiDigitaliService };

/**
 * Creates a server for the FespPsp service.
 *
 * This function mostly wraps the `soap.listen(...)` method.
 * @see https://github.com/vpulim/node-soap#soaplistenserver-path-services-wsdl---create-a-new-soap-server-that-listens-on-path-and-provides-services
 *
 * @param server    See soap.listen documentation
 * @param path      See soap.listen documentation
 * @param fespPspHandlers  An object that implements the IPSPPortSoap interface
 */
export async function attachFespPspServer(
  server: any,
  path: string,
  fespPspHandlers: FespPspService.IPSPPortSoap
): Promise<soap.Server> {
  const wsdl = await readWsdl(wsdl_paths.FespPspService_WSDL_PATH);

  const service = {
    FespPspService: {
      PSPPort: fespPspHandlers,
    },
  };

  return(soap.listen(server, path, service, wsdl));
}

/**
 * Creates a server for the AvvisiDigitali service.
 *
 * This function mostly wraps the `soap.listen(...)` method.
 * @see https://github.com/vpulim/node-soap#soaplistenserver-path-services-wsdl---create-a-new-soap-server-that-listens-on-path-and-provides-services
 *
 * @param server    See soap.listen documentation
 * @param path      See soap.listen documentation
 * @param fespPspHandlers  An object that implements the IPSPPortSoap interface
 */
export async function attachAvvisiDigitaliServer(
  server: any,
  path: string,
  avvisiDigitaliHandlers: AvvisiDigitaliService.IPPTPortSoap
): Promise<soap.Server> {
  const wsdl = await readWsdl(wsdl_paths.FespPspService_WSDL_PATH);

  const service = {
    AvvisiDigitaliService: {
      PPTPort: avvisiDigitaliHandlers,
    }
  };

  return(soap.listen(server, path, service, wsdl));
}
