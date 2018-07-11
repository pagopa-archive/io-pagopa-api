import * as t from "io-ts";
export declare const ctFaultBean_ppt: t.ExactType<t.IntersectionType<[t.InterfaceType<{
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
    originalFaultCode: t.StringType;
    originalFaultString: t.StringType;
    originalDescription: t.StringType;
}, t.TypeOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
    originalFaultCode: t.StringType;
    originalFaultString: t.StringType;
    originalDescription: t.StringType;
}>, t.OutputOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
    originalFaultCode: t.StringType;
    originalFaultString: t.StringType;
    originalDescription: t.StringType;
}>, t.mixed>], t.TypeOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}> & t.TypeOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
    originalFaultCode: t.StringType;
    originalFaultString: t.StringType;
    originalDescription: t.StringType;
}>, t.OutputOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}> & t.OutputOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
    originalFaultCode: t.StringType;
    originalFaultString: t.StringType;
    originalDescription: t.StringType;
}>, t.mixed>, t.TypeOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}> & t.TypeOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
    originalFaultCode: t.StringType;
    originalFaultString: t.StringType;
    originalDescription: t.StringType;
}>, t.OutputOfProps<{
    faultCode: t.StringType;
    faultString: t.StringType;
    id: t.StringType;
}> & t.OutputOfPartialProps<{
    description: t.StringType;
    serial: t.RefinementType<t.NumberType, number, number, t.mixed>;
    originalFaultCode: t.StringType;
    originalFaultString: t.StringType;
    originalDescription: t.StringType;
}>, t.mixed>;
export declare type ctFaultBean_ppt = t.TypeOf<typeof ctFaultBean_ppt>;
