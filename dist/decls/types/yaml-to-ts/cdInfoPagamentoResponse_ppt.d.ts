import { risposta_ppt } from "./risposta_ppt";
import * as t from "io-ts";
declare const _cdInfoPagamentoResponse_ppt2: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
    esito: t.StringType;
}, t.TypeOfPartialProps<{
    esito: t.StringType;
}>, t.OutputOfPartialProps<{
    esito: t.StringType;
}>, t.mixed>], t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    esito: t.StringType;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    esito: t.StringType;
}>, t.mixed>, t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    esito: t.StringType;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    esito: t.StringType;
}>, t.mixed>;
export declare const cdInfoPagamentoResponse_ppt2: t.Type<cdInfoPagamentoResponse_ppt2, cdInfoPagamentoResponse_ppt2, t.mixed>;
export interface cdInfoPagamentoResponse_ppt2 extends t.TypeOf<typeof _cdInfoPagamentoResponse_ppt2> {
}
export declare const cdInfoPagamentoResponse_ppt: t.IntersectionType<[t.Type<risposta_ppt, risposta_ppt, t.mixed>, t.Type<cdInfoPagamentoResponse_ppt2, cdInfoPagamentoResponse_ppt2, t.mixed>], risposta_ppt & cdInfoPagamentoResponse_ppt2, risposta_ppt & cdInfoPagamentoResponse_ppt2, t.mixed>;
export interface cdInfoPagamentoResponse_ppt extends t.TypeOf<typeof cdInfoPagamentoResponse_ppt> {
}
export {};
