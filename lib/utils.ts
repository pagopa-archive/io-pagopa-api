import * as fs from "fs";
import * as soap from "soap";

/**
 * Helper method that wraps the creation of a WSDL client within a Promise and
 * adds the typed interfaces generated by wsdl-to-ts.
 */
export function createClient<T>(wsdlUri: string, options: soap.IOptions): Promise<soap.Client & T> {
  return new Promise((resolve, reject) => {
    soap.createClient(wsdlUri, options, (err, client) => {
      if (err) {
        reject(err);
      } else {
        resolve(client as soap.Client & T);
      }
    });
  });
}

// type signature for callback based async soap methods
type SoapMethodCB<I, O> = (input: I, cb: (err: any | null, result: O, raw: string,  soapHeader: {[k: string]: any}) => any) => void;

// type signature for Promise based async soap methods
type SoapMethodPromise<I, O> = (input: I) => Promise<O>;

/**
 * Converts a SoapMethodCB into a SoapMethodPromise
 */
export function promisifySoapMethod<I, O>(f: SoapMethodCB<I, O>): SoapMethodPromise<I, O> {
  return (input: I) => new Promise((resolve, reject) => {
    f(input, (err, result) => {
      if(err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}

export async function readWsdl(path: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(path, { encoding: "UTF-8" }, (err, wsdl) => {
      if (err) {
        return reject(err);
      }
      resolve(wsdl);
    });
  });
}