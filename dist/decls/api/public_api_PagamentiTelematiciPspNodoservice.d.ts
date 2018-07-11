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
        "/nodoVerificaRPT": {
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
        "/nodoAttivaRPT": {
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
        "/nodoInviaRT": {
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
        "/nodoChiediInformativaPA": {
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
        "/nodoChiediTemplateInformativaPSP": {
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
        "/nodoInviaFlussoRendicontazione": {
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
        "/nodoChiediElencoQuadraturePSP": {
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
        "/nodoChiediQuadraturaPSP": {
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
        "/nodoInviaEsitoStorno": {
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
        "/nodoInviaRichiestaRevoca": {
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
        nodoVerificaRPTInput: {
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
                                nodoVerificaRPT: {
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
        nodoVerificaRPTHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoVerificaRPTOutput: {
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
                                nodoVerificaRPTRisposta: {
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
        nodoAttivaRPTInput: {
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
                                nodoAttivaRPT: {
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
        nodoAttivaRPTHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoAttivaRPTOutput: {
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
                                nodoAttivaRPTRisposta: {
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
        nodoInviaRTInput: {
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
                                nodoInviaRT: {
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
        nodoInviaRTHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoInviaRTOutput: {
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
                                nodoInviaRTRisposta: {
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
        nodoChiediInformativaPAInput: {
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
                                nodoChiediInformativaPA: {
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
        nodoChiediInformativaPAHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoChiediInformativaPAOutput: {
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
                                nodoChiediInformativaPARisposta: {
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
        nodoChiediTemplateInformativaPSPInput: {
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
                                nodoChiediTemplateInformativaPSP: {
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
        nodoChiediTemplateInformativaPSPHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoChiediTemplateInformativaPSPOutput: {
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
                                nodoChiediTemplateInformativaPSPRisposta: {
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
        nodoInviaFlussoRendicontazioneInput: {
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
                                nodoInviaFlussoRendicontazione: {
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
        nodoInviaFlussoRendicontazioneHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoInviaFlussoRendicontazioneOutput: {
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
                                nodoInviaFlussoRendicontazioneRisposta: {
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
        nodoChiediElencoQuadraturePSPInput: {
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
                                nodoChiediElencoQuadraturePSP: {
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
        nodoChiediElencoQuadraturePSPHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoChiediElencoQuadraturePSPOutput: {
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
                                nodoChiediElencoQuadraturePSPRisposta: {
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
        nodoChiediQuadraturaPSPInput: {
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
                                nodoChiediQuadraturaPSP: {
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
        nodoChiediQuadraturaPSPHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoChiediQuadraturaPSPOutput: {
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
                                nodoChiediQuadraturaPSPRisposta: {
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
        nodoInviaEsitoStornoInput: {
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
                                nodoInviaEsitoStorno: {
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
        nodoInviaEsitoStornoHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoInviaEsitoStornoOutput: {
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
                                nodoInviaEsitoStornoRisposta: {
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
        nodoInviaRichiestaRevocaInput: {
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
                                nodoInviaRichiestaRevoca: {
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
        nodoInviaRichiestaRevocaHeader: {
            type: string;
            properties: {
                Security: {
                    $ref: string;
                };
            };
        };
        nodoInviaRichiestaRevocaOutput: {
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
                                nodoInviaRichiestaRevocaRisposta: {
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
        nodoVerificaRPT_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoPSP: {
                    $ref: string;
                };
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                codiceContestoPagamento: {
                    $ref: string;
                };
                codificaInfrastrutturaPSP: {
                    type: string;
                    xml: {
                        namespace: string;
                    };
                };
                codiceIdRPT: {
                    $ref: string;
                };
            };
            required: string[];
            example: string;
        };
        nodoVerificaRPTRisposta_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                nodoVerificaRPTRisposta: {
                    $ref: string;
                };
            };
            required: string[];
            example: string;
        };
        nodoAttivaRPT_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoPSP: {
                    $ref: string;
                };
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                codiceContestoPagamento: {
                    $ref: string;
                };
                identificativoIntermediarioPSPPagamento: {
                    $ref: string;
                };
                identificativoCanalePagamento: {
                    $ref: string;
                };
                codificaInfrastrutturaPSP: {
                    type: string;
                    xml: {
                        namespace: string;
                    };
                };
                codiceIdRPT: {
                    $ref: string;
                };
                datiPagamentoPSP: {
                    $ref: string;
                };
            };
            required: string[];
            example: string;
        };
        nodoAttivaRPTRisposta_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                nodoAttivaRPTRisposta: {
                    $ref: string;
                };
            };
            required: string[];
            example: string;
        };
        nodoInviaRT_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                identificativoPSP: {
                    $ref: string;
                };
                identificativoDominio: {
                    $ref: string;
                };
                identificativoUnivocoVersamento: {
                    $ref: string;
                };
                codiceContestoPagamento: {
                    $ref: string;
                };
                tipoFirma: {
                    type: string;
                    xml: {
                        namespace: string;
                    };
                };
                rt: {
                    type: string;
                    format: string;
                    xml: {
                        namespace: string;
                    };
                };
            };
            required: string[];
            example: string;
        };
        nodoInviaRTRisposta_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                nodoInviaRTRisposta: {
                    $ref: string;
                };
            };
            required: string[];
            example: string;
        };
        nodoChiediInformativaPA_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoPSP: {
                    $ref: string;
                };
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                identificativoDominio: {
                    $ref: string;
                };
            };
            required: string[];
            example: string;
        };
        nodoChiediInformativaPARisposta_ppt: {
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
                    xmlInformativa: {
                        type: string;
                        format: string;
                        xml: {
                            namespace: string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            example: string;
        };
        nodoChiediTemplateInformativaPSP_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoPSP: {
                    $ref: string;
                };
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
            };
            required: string[];
            example: string;
        };
        nodoChiediTemplateInformativaPSPRisposta_ppt: {
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
                    xmlTemplateInformativa: {
                        type: string;
                        format: string;
                        xml: {
                            namespace: string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            example: string;
        };
        nodoInviaFlussoRendicontazione_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoPSP: {
                    $ref: string;
                };
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                identificativoDominio: {
                    $ref: string;
                };
                identificativoFlusso: {
                    type: string;
                    xml: {
                        namespace: string;
                    };
                };
                dataOraFlusso: {
                    type: string;
                    format: string;
                    xml: {
                        namespace: string;
                    };
                };
                xmlRendicontazione: {
                    type: string;
                    format: string;
                    xml: {
                        namespace: string;
                    };
                };
            };
            required: string[];
            example: string;
        };
        nodoInviaFlussoRendicontazioneRisposta_ppt: {
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
        nodoChiediElencoQuadraturePSP_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoPSP: {
                    $ref: string;
                };
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                identificativoDominio: {
                    $ref: string;
                };
            };
            required: string[];
            example: string;
        };
        nodoChiediElencoQuadraturePSPRisposta_ppt: {
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
                    listaQuadrature: {
                        $ref: string;
                    };
                };
                $ref?: undefined;
            })[];
            example: string;
        };
        nodoChiediQuadraturaPSP_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoPSP: {
                    $ref: string;
                };
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                identificativoFlusso: {
                    type: string;
                    xml: {
                        namespace: string;
                    };
                };
            };
            required: string[];
            example: string;
        };
        nodoChiediQuadraturaPSPRisposta_ppt: {
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
                    xmlQuadratura: {
                        type: string;
                        format: string;
                        xml: {
                            namespace: string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            example: string;
        };
        nodoInviaEsitoStorno_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoPSP: {
                    $ref: string;
                };
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                identificativoDominio: {
                    $ref: string;
                };
                identificativoUnivocoVersamento: {
                    $ref: string;
                };
                codiceContestoPagamento: {
                    $ref: string;
                };
                er: {
                    type: string;
                    format: string;
                    xml: {
                        namespace: string;
                    };
                };
            };
            required: string[];
            example: string;
        };
        nodoInviaEsitoStornoRisposta_ppt: {
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
        nodoInviaRichiestaRevoca_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoPSP: {
                    $ref: string;
                };
                identificativoIntermediarioPSP: {
                    $ref: string;
                };
                identificativoCanale: {
                    $ref: string;
                };
                password: {
                    $ref: string;
                };
                identificativoDominio: {
                    $ref: string;
                };
                identificativoUnivocoVersamento: {
                    $ref: string;
                };
                codiceContestoPagamento: {
                    $ref: string;
                };
                rr: {
                    type: string;
                    format: string;
                    xml: {
                        namespace: string;
                    };
                };
            };
            required: string[];
            example: string;
        };
        nodoInviaRichiestaRevocaRisposta_ppt: {
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
        stPassword_ppt: {
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
        nodoTipoCodiceIdRPT_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {};
            additionalProperties: boolean;
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        esitoNodoVerificaRPTRisposta_ppt: {
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
                    datiPagamentoPA: {
                        $ref: string;
                    };
                };
                $ref?: undefined;
            })[];
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        nodoTipoDatiPagamentoPSP_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                importoSingoloVersamento: {
                    type: string;
                    "x-ibm-fractionDigits": number;
                    "x-ibm-totalDigits": number;
                    minimum: number;
                    maximum: number;
                };
                ibanAppoggio: {
                    type: string;
                    pattern: string;
                };
                bicAppoggio: {
                    type: string;
                    pattern: string;
                };
                soggettoVersante: {
                    $ref: string;
                };
                ibanAddebito: {
                    type: string;
                    pattern: string;
                };
                bicAddebito: {
                    type: string;
                    pattern: string;
                };
                soggettoPagatore: {
                    $ref: string;
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
        esitoNodoAttivaRPTRisposta_ppt: {
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
                    datiPagamentoPA: {
                        $ref: string;
                    };
                };
                $ref?: undefined;
            })[];
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        esitoNodoInviaRTRisposta_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            allOf: ({
                $ref: string;
                xml?: undefined;
                type?: undefined;
                properties?: undefined;
                required?: undefined;
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
                required: string[];
                $ref?: undefined;
            })[];
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
        tipoListaQuadrature_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                totRestituiti: {
                    type: string;
                    format: string;
                };
                idQuadratura: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    "x-nullable": boolean;
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
        nodoTipoDatiPagamentoPA_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                importoSingoloVersamento: {
                    type: string;
                    "x-ibm-fractionDigits": number;
                    "x-ibm-totalDigits": number;
                    minimum: number;
                    maximum: number;
                };
                ibanAccredito: {
                    type: string;
                    pattern: string;
                };
                bicAccredito: {
                    type: string;
                    pattern: string;
                };
                enteBeneficiario: {
                    $ref: string;
                };
                credenzialiPagatore: {
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                causaleVersamento: {
                    $ref: string;
                };
                spezzoniCausaleVersamento: {
                    $ref: string;
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
        ctSoggettoVersante_pay_i_unqual: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoUnivocoVersante: {
                    $ref: string;
                    description: string;
                };
                anagraficaVersante: {
                    $ref: string;
                    description: string;
                };
                indirizzoVersante: {
                    $ref: string;
                    description: string;
                };
                civicoVersante: {
                    $ref: string;
                    description: string;
                };
                capVersante: {
                    $ref: string;
                    description: string;
                };
                localitaVersante: {
                    $ref: string;
                    description: string;
                };
                provinciaVersante: {
                    $ref: string;
                    description: string;
                };
                nazioneVersante: {
                    $ref: string;
                    description: string;
                };
                "e-mailVersante": {
                    $ref: string;
                    description: string;
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
        ctSoggettoPagatore_pay_i_unqual: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoUnivocoPagatore: {
                    $ref: string;
                    description: string;
                };
                anagraficaPagatore: {
                    $ref: string;
                    description: string;
                };
                indirizzoPagatore: {
                    $ref: string;
                    description: string;
                };
                civicoPagatore: {
                    $ref: string;
                    description: string;
                };
                capPagatore: {
                    $ref: string;
                    description: string;
                };
                localitaPagatore: {
                    $ref: string;
                    description: string;
                };
                provinciaPagatore: {
                    $ref: string;
                    description: string;
                };
                nazionePagatore: {
                    $ref: string;
                    description: string;
                };
                "e-mailPagatore": {
                    $ref: string;
                    description: string;
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
        faultBean_ppt: {
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
            };
            required: string[];
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        tipoIdQuadratura_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoFlusso: {
                    type: string;
                };
                dataOraFlusso: {
                    type: string;
                    format: string;
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
        ctEnteBeneficiario_pay_i_unqual: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                identificativoUnivocoBeneficiario: {
                    $ref: string;
                    description: string;
                };
                denominazioneBeneficiario: {
                    $ref: string;
                    description: string;
                };
                codiceUnitOperBeneficiario: {
                    $ref: string;
                    description: string;
                };
                denomUnitOperBeneficiario: {
                    $ref: string;
                    description: string;
                };
                indirizzoBeneficiario: {
                    $ref: string;
                    description: string;
                };
                civicoBeneficiario: {
                    $ref: string;
                    description: string;
                };
                capBeneficiario: {
                    $ref: string;
                    description: string;
                };
                localitaBeneficiario: {
                    $ref: string;
                    description: string;
                };
                provinciaBeneficiario: {
                    $ref: string;
                    description: string;
                };
                nazioneBeneficiario: {
                    $ref: string;
                    description: string;
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
        stText140_ppt: {
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
        ctSpezzoniCausaleVersamento_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                spezzoneCausaleVersamento: {
                    $ref: string;
                };
                spezzoneStrutturatoCausaleVersamento: {
                    $ref: string;
                };
            };
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        ctIdentificativoUnivocoPersonaFG_pay_i: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                tipoIdentificativoUnivoco: {
                    $ref: string;
                    description: string;
                };
                codiceIdentificativoUnivoco: {
                    $ref: string;
                    description: string;
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
        stText70_pay_i: {
            xml: {
                namespace: string;
                prefix: string;
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
        stText16_pay_i: {
            xml: {
                namespace: string;
                prefix: string;
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
        stText35_pay_i: {
            xml: {
                namespace: string;
                prefix: string;
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
        stNazioneProvincia_pay_i: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            pattern: string;
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        stEMail_pay_i: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            pattern: string;
            maxLength: number;
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        ctIdentificativoUnivocoPersonaG_pay_i: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                tipoIdentificativoUnivoco: {
                    $ref: string;
                    description: string;
                };
                codiceIdentificativoUnivoco: {
                    $ref: string;
                    description: string;
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
        ctSpezzoneStrutturatoCausaleVersamento_ppt: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            properties: {
                causaleSpezzone: {
                    $ref: string;
                };
                importoSpezzone: {
                    $ref: string;
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
        stTipoIdentificativoUnivocoPersFG_pay_i: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            minLength: number;
            maxLength: number;
            enum: string[];
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        stTipoIdentificativoUnivocoPersG_pay_i: {
            xml: {
                namespace: string;
                prefix: string;
            };
            type: string;
            minLength: number;
            maxLength: number;
            enum: string[];
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
        stText25_ppt: {
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
        stImporto_ppt: {
            xml: {
                namespace: string;
            };
            type: string;
            "x-ibm-fractionDigits": number;
            "x-ibm-totalDigits": number;
            minimum: number;
            maximum: number;
            "x-xsi-type": string;
            "x-xsi-type-xml": {
                namespace: string;
                prefix: string;
            };
            "x-xsi-type-uniquename": string;
        };
    };
};
