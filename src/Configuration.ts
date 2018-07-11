import { NonEmptyString } from "italia-ts-commons/lib/strings";

// Path related to wsdl files
export const PAGAMENTI_TELEMATICI_WSDL_PATH = `${__dirname}/../wsdl/nodo/NodoPerPsp.wsdl` as NonEmptyString;
export const FESP_PSP_WSDL_PATH = `${__dirname}/../wsdl/nodo/CdPerNodo.wsdl` as NonEmptyString;
