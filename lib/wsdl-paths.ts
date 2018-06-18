// base directory where to look for WSDL files
const wsdlBaseDir = `${__dirname}/../wsdl`;

// path to WSDL(s) of "PSP" service
export const FespPspService_WSDL_PATH = `${wsdlBaseDir}/nodo/NodoPerPsp.wsdl`;
export const AvvisiDigitaliService_WSDL_PATH = `${wsdlBaseDir}/avvisatura/PSPPerNodoAvvisiDigitali.wsdl`;

// path to WSDL(s) of "pagoPA" services (Nodo and Avvisatura)
export const PagamentiTelematiciPspNodoService_WSDL_PATH = `${wsdlBaseDir}/nodo/PspPerNodo.wsdl`;
export const IscrizioniAvvisaturaService_WSDL_PATH = `${wsdlBaseDir}/avvisatura/NodoPerPSPIscrizioniAvvisatura.wsdl`;
export const NodoChiediElencoAvvisiDigitaliService_WSDL_PATH = `${wsdlBaseDir}/avvisatura/NodoPerPSPChiediElencoAvvisiDigitali.wsdl`;
export const FespCdService_WSDL_PATH = `${wsdlBaseDir}/nodo/CdPerNodo.wsdl`;
