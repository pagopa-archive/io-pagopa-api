/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";

// required attributes
const SecurityUsernameTokenR = t.interface({});

// optional attributes
const SecurityUsernameTokenO = t.partial({
  Username: t.string,

  Password: t.string,

  Nonce: t.string,

  Created: t.string
});

export const SecurityUsernameToken = t.exact(
  t.intersection(
    [SecurityUsernameTokenR, SecurityUsernameTokenO],
    "SecurityUsernameToken"
  )
);

export type SecurityUsernameToken = t.TypeOf<typeof SecurityUsernameToken>;

// required attributes
const SecurityTimestampR = t.interface({});

// optional attributes
const SecurityTimestampO = t.partial({
  Created: t.string,

  Expires: t.string,

  Id: t.string
});

export const SecurityTimestamp = t.exact(
  t.intersection([SecurityTimestampR, SecurityTimestampO], "SecurityTimestamp")
);

export type SecurityTimestamp = t.TypeOf<typeof SecurityTimestamp>;

// required attributes
const SecurityR = t.interface({});

// optional attributes
const SecurityO = t.partial({
  UsernameToken: SecurityUsernameToken,

  Timestamp: SecurityTimestamp
});

export const Security = t.exact(
  t.intersection([SecurityR, SecurityO], "Security")
);

export type Security = t.TypeOf<typeof Security>;
