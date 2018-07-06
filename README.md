[![CircleCI](https://circleci.com/gh/teamdigitale/italia-pagopa-api.svg?style=svg)](https://circleci.com/gh/teamdigitale/italia-pagopa-api)

# PagoPA API

## What is this?

This is a library to support communication with PagoPa SOAP WebServices.
It contains data types and utils to make SOAP client and server.

This project is part of the [digital citizenship initiative](https://teamdigitale.governo.it/en/projects/digital-citizenship.htm).

## NOTES

This project includes @types/bluebird because it's necessary for node-soap.
It will be removed when this dependency will be fixed into soap:
https://github.com/vpulim/node-soap/pull/1009


### Release

The release process is based on [npm version](https://docs.npmjs.com/cli/version):

```
$ npm version [patch|minor|major]
```

## How to install

1. yarn install