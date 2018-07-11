import * as t from "io-ts";
export declare const faultBean_ppt: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}, t.TypeOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}>, t.OutputOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}>, t.mixed>, t.PartialType<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
}, t.TypeOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
}>, t.OutputOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}> & t.TypeOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
}>, t.OutputOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}> & t.OutputOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}> & t.TypeOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
}>, t.OutputOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}> & t.OutputOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
}>, t.mixed>;
export declare type faultBean_ppt = t.TypeOf<typeof faultBean_ppt>;
