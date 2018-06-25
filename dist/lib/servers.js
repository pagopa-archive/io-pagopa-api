"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const soap = require("soap");
const wsdl_paths = require("./wsdl-paths");
const utils_1 = require("./utils");
// import interface for "PSP" services
const FespPspService = require("../wsdl-lib/FespPspService/PSPPort");
exports.FespPspService = FespPspService;
const AvvisiDigitaliService = require("../wsdl-lib/AvvisiDigitaliService/PPTPort");
exports.AvvisiDigitaliService = AvvisiDigitaliService;
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
function attachFespPspServer(server, path, fespPspHandlers) {
    return __awaiter(this, void 0, void 0, function* () {
        const wsdl = yield utils_1.readWsdl(wsdl_paths.FespPspService_WSDL_PATH);
        const service = {
            FespPspService: {
                PSPPort: fespPspHandlers,
            },
        };
        return (soap.listen(server, path, service, wsdl));
    });
}
exports.attachFespPspServer = attachFespPspServer;
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
function attachAvvisiDigitaliServer(server, path, avvisiDigitaliHandlers) {
    return __awaiter(this, void 0, void 0, function* () {
        const wsdl = yield utils_1.readWsdl(wsdl_paths.FespPspService_WSDL_PATH);
        const service = {
            AvvisiDigitaliService: {
                PPTPort: avvisiDigitaliHandlers,
            }
        };
        return (soap.listen(server, path, service, wsdl));
    });
}
exports.attachAvvisiDigitaliServer = attachAvvisiDigitaliServer;
//# sourceMappingURL=servers.js.map