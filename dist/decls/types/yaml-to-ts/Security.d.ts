import * as t from "io-ts";
declare const _SecurityUsernameToken: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
    Username: t.StringType;
    Password: t.StringType;
    Nonce: t.StringType;
    Created: t.StringType;
}, t.TypeOfPartialProps<{
    Username: t.StringType;
    Password: t.StringType;
    Nonce: t.StringType;
    Created: t.StringType;
}>, t.OutputOfPartialProps<{
    Username: t.StringType;
    Password: t.StringType;
    Nonce: t.StringType;
    Created: t.StringType;
}>, t.mixed>], t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    Username: t.StringType;
    Password: t.StringType;
    Nonce: t.StringType;
    Created: t.StringType;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    Username: t.StringType;
    Password: t.StringType;
    Nonce: t.StringType;
    Created: t.StringType;
}>, t.mixed>, t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    Username: t.StringType;
    Password: t.StringType;
    Nonce: t.StringType;
    Created: t.StringType;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    Username: t.StringType;
    Password: t.StringType;
    Nonce: t.StringType;
    Created: t.StringType;
}>, t.mixed>;
export declare const SecurityUsernameToken: t.Type<SecurityUsernameToken, SecurityUsernameToken, t.mixed>;
export interface SecurityUsernameToken extends t.TypeOf<typeof _SecurityUsernameToken> {
}
declare const _SecurityTimestamp: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
    Created: t.StringType;
    Expires: t.StringType;
    Id: t.StringType;
}, t.TypeOfPartialProps<{
    Created: t.StringType;
    Expires: t.StringType;
    Id: t.StringType;
}>, t.OutputOfPartialProps<{
    Created: t.StringType;
    Expires: t.StringType;
    Id: t.StringType;
}>, t.mixed>], t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    Created: t.StringType;
    Expires: t.StringType;
    Id: t.StringType;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    Created: t.StringType;
    Expires: t.StringType;
    Id: t.StringType;
}>, t.mixed>, t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    Created: t.StringType;
    Expires: t.StringType;
    Id: t.StringType;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    Created: t.StringType;
    Expires: t.StringType;
    Id: t.StringType;
}>, t.mixed>;
export declare const SecurityTimestamp: t.Type<SecurityTimestamp, SecurityTimestamp, t.mixed>;
export interface SecurityTimestamp extends t.TypeOf<typeof _SecurityTimestamp> {
}
declare const _Security: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
    UsernameToken: t.Type<SecurityUsernameToken, SecurityUsernameToken, t.mixed>;
    Timestamp: t.Type<SecurityTimestamp, SecurityTimestamp, t.mixed>;
}, t.TypeOfPartialProps<{
    UsernameToken: t.Type<SecurityUsernameToken, SecurityUsernameToken, t.mixed>;
    Timestamp: t.Type<SecurityTimestamp, SecurityTimestamp, t.mixed>;
}>, t.OutputOfPartialProps<{
    UsernameToken: t.Type<SecurityUsernameToken, SecurityUsernameToken, t.mixed>;
    Timestamp: t.Type<SecurityTimestamp, SecurityTimestamp, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    UsernameToken: t.Type<SecurityUsernameToken, SecurityUsernameToken, t.mixed>;
    Timestamp: t.Type<SecurityTimestamp, SecurityTimestamp, t.mixed>;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    UsernameToken: t.Type<SecurityUsernameToken, SecurityUsernameToken, t.mixed>;
    Timestamp: t.Type<SecurityTimestamp, SecurityTimestamp, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    UsernameToken: t.Type<SecurityUsernameToken, SecurityUsernameToken, t.mixed>;
    Timestamp: t.Type<SecurityTimestamp, SecurityTimestamp, t.mixed>;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    UsernameToken: t.Type<SecurityUsernameToken, SecurityUsernameToken, t.mixed>;
    Timestamp: t.Type<SecurityTimestamp, SecurityTimestamp, t.mixed>;
}>, t.mixed>;
export declare const Security: t.Type<Security, Security, t.mixed>;
export interface Security extends t.TypeOf<typeof _Security> {
}
export {};
