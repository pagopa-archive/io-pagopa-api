import { risposta_ppt } from "./risposta_ppt";
import * as t from "io-ts";
declare const _esitoNodoInviaRTRisposta_ppt2: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    esito: t.StringType;
}, t.TypeOfProps<{
    esito: t.StringType;
}>, t.OutputOfProps<{
    esito: t.StringType;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    esito: t.StringType;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    esito: t.StringType;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    esito: t.StringType;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    esito: t.StringType;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const esitoNodoInviaRTRisposta_ppt2: t.Type<esitoNodoInviaRTRisposta_ppt2, esitoNodoInviaRTRisposta_ppt2, t.mixed>;
export interface esitoNodoInviaRTRisposta_ppt2 extends t.TypeOf<typeof _esitoNodoInviaRTRisposta_ppt2> {
}
export declare const esitoNodoInviaRTRisposta_ppt: t.IntersectionType<[t.Type<risposta_ppt, risposta_ppt, t.mixed>, t.Type<esitoNodoInviaRTRisposta_ppt2, esitoNodoInviaRTRisposta_ppt2, t.mixed>], risposta_ppt & esitoNodoInviaRTRisposta_ppt2, risposta_ppt & esitoNodoInviaRTRisposta_ppt2, t.mixed>;
export interface esitoNodoInviaRTRisposta_ppt extends t.TypeOf<typeof esitoNodoInviaRTRisposta_ppt> {
}
export {};
