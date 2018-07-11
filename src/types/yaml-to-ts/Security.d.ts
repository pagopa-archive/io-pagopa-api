import * as t from "io-ts";
export declare const SecurityUsernameToken: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
export declare type SecurityUsernameToken = t.TypeOf<typeof SecurityUsernameToken>;
export declare const SecurityTimestamp: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
export declare type SecurityTimestamp = t.TypeOf<typeof SecurityTimestamp>;
export declare const Security: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
    UsernameToken: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
    Timestamp: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
}, t.TypeOfPartialProps<{
    UsernameToken: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
    Timestamp: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
}>, t.OutputOfPartialProps<{
    UsernameToken: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
    Timestamp: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
}>, t.mixed>], t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    UsernameToken: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
    Timestamp: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    UsernameToken: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
    Timestamp: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
}>, t.mixed>, t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    UsernameToken: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
    Timestamp: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    UsernameToken: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
    Timestamp: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
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
}>, t.mixed>;
export declare type Security = t.TypeOf<typeof Security>;
