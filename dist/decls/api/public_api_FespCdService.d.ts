export declare const specs: {
    swagger: string;
    info: {
        title: string;
        description: string;
        "x-ibm-name": string;
        version: string;
    };
    schemes: string[];
    basePath: string;
    produces: string[];
    consumes: string[];
    securityDefinitions: {
        clientID: {
            type: string;
            name: string;
            in: string;
            description: string;
        };
    };
    security: {
        clientID: any[];
    }[];
    "x-ibm-configuration": {
        type: string;
        phase: string;
        enforced: boolean;
        testable: boolean;
        gateway: string;
        cors: {
            enabled: boolean;
        };
        "wsdl-definition": {
            wsdl: string;
            service: string;
            port: string;
            "soap-version": string;
        };
        assembly: {
            execute: {
                proxy: {
                    title: string;
                    "target-url": string;
                };
            }[];
        };
    };
    paths: {
        "/cdInfoPagamento": {
            post: {
                summary: string;
                description: string;
                operationId: string;
                "x-ibm-soap": {
                    "soap-action": string;
                    "soap-operation": string;
                };
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    default: {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
            };
        };
    };
    definitions: {
        Security: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                UsernameToken: {
                    xml: {
                        namespace: string;
                        prefix: string;
                    };
                    type: string;
                    properties: {
                        Username: {
                            xml: {
                                namespace: string;
                                prefix: string;
                            };
                            type: string;
                        };
                        Password: {
                            xml: {
                                namespace: string;
                                prefix: string;
                            };
                            type: string;
                        };
                        Nonce: {
                            xml: {
                                namespace: string;
                                prefix: string;
                            };
                            type: string;
                            properties: {
                                EncodingType: {
                                    xml: {
                                        namespace: string;
                                        attribute: boolean;
                                    };
                                    type: string;
                                };
                            };
                        };
                        Created: {
                            xml: {
                                namespace: string;
                                prefix: string;
                            };
                            type: string;
                        };
                    };
                };
                Timestamp: {
                    xml: {
                        namespace: string;
                        prefix: string;
                    };
                    type: string;
                    properties: {
                        Created: {
                            xml: {
                                namespace: string;
                                prefix: string;
                            };
                            type: string;
                        };
                        Expires: {
                            xml: {
                                namespace: string;
                                prefix: string;
                            };
                            type: string;
                        };
                        Id: {
                            xml: {
                                namespace: string;
                                prefix: string;
                                attribute: boolean;
                            };
                            type: string;
                        };
                    };
                };
            };
        };
        cdInfoPagamentoInput: {
            type: string;
            properties: {
                Envelope: {
                    xml: {
                        prefix: string;
                        namespace: string;
                    };
                    type: string;
                    properties: {
                        Header: {
                            $ref: string;
                        };
                        Body: {
                            type: string;
                            properties: {
                                cdInfoPagamento: {
                                    $ref: string;
                                };
                            };
                            required: string[];
                        };
                    };
                    required: string[];
                };
            };
            required: string[];
            example: string;
        };
        cdInfoPagamentoHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        cdInfoPagamentoOutput: {
            type: string;
            properties: {
                Envelope: {
                    xml: {
                        prefix: string;
                        namespace: string;
                    };
                    type: string;
                    properties: {
                        Body: {
                            type: string;
                            properties: {
                                cdInfoPagamentoResponse: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    required: string[];
                };
            };
            required: string[];
            example: string;
        };
        cdInfoPagamento_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoDominio: {
                    $ref: string;
                };
                identificativoUnivocoVersamento: {
                    $ref: string;
                };
                codiceContestoPagamento: {
                    $ref: string;
                };
                idPagamento: {
                    type: string;
                    xml: {
                        namespace: string;
                    };
                };
            };
            required: string[];
            example: string;
        };
        cdInfoPagamentoResponse_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            allOf: ({
                $ref: string;
                xml?: undefined;
                type?: undefined;
                properties?: undefined;
            } | {
                xml: {
                    namespace: string;
                    prefix: string;
                };
                type: string;
                properties: {
                    esito: {
                        type: string;
                        xml: {
                            namespace: string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            example: string;
        };
        stText35_ppt: {
            xml: {
                namespace: string;
            };
            type: string;
            maxLength: number;
            minLength: number;
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        risposta_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                fault: {
                    $ref: string;
                };
            };
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
            "x-ibm-discriminator": boolean;
        };
        ctFaultBean_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                faultCode: {
                    type: string;
                };
                faultString: {
                    type: string;
                };
                id: {
                    type: string;
                };
                description: {
                    type: string;
                };
                serial: {
                    type: string;
                    format: string;
                };
                originalFaultCode: {
                    type: string;
                };
                originalFaultString: {
                    type: string;
                };
                originalDescription: {
                    type: string;
                };
            };
            required: string[];
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
    };
};
