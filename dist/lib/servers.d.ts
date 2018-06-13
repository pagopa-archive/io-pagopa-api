import * as soap from "soap";
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
export declare function attachFespPspServer(server: any, path: string, fespPspHandlers: FespPspService.IPSPPortSoap): Promise<soap.Server>;
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
export declare function attachAvvisiDigitaliServer(server: any, path: string, avvisiDigitaliHandlers: AvvisiDigitaliService.IPPTPortSoap): Promise<soap.Server>;
