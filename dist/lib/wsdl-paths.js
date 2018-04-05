"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// base directory where to look for WSDL files
const wsdlBaseDir = `${__dirname}/../wsdl`;
// path to WSDL(s) of "PSP" service
exports.FespPspService_WSDL_PATH = `${wsdlBaseDir}/nodo/NodoPerPsp.wsdl`;
exports.AvvisiDigitaliService_WSDL_PATH = `${wsdlBaseDir}/avvisatura/PSPPerNodoAvvisiDigitali.wsdl`;
// path to WSDL(s) of "pagoPA" services (Nodo and Avvisatura)
exports.PagamentiTelematiciPspNodoService_WSDL_PATH = `${wsdlBaseDir}/nodo/PspPerNodo.wsdl`;
exports.IscrizioniAvvisaturaService_WSDL_PATH = `${wsdlBaseDir}/avvisatura/NodoPerPSPIscrizioniAvvisatura.wsdl`;
exports.NodoChiediElencoAvvisiDigitaliService_WSDL_PATH = `${wsdlBaseDir}/avvisatura/NodoPerPSPChiediElencoAvvisiDigitali.wsdl`;
//# sourceMappingURL=wsdl-paths.js.map