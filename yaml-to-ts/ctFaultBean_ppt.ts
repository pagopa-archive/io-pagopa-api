/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";

// required attributes
const ctFaultBean_pptR = t.interface({
  faultCode: t.string,

  faultString: t.string,

  id: t.string
});

// optional attributes
const ctFaultBean_pptO = t.partial({
  description: t.string,

  serial: t.Integer,

  originalFaultCode: t.string,

  originalFaultString: t.string,

  originalDescription: t.string
});

export const ctFaultBean_ppt = t.exact(
  t.intersection([ctFaultBean_pptR, ctFaultBean_pptO], "ctFaultBean_ppt")
);

export type ctFaultBean_ppt = t.TypeOf<typeof ctFaultBean_ppt>;
