import React, {createContext, useState, ReactNode} from 'react'

interface UserData {
    name: string;
    age : string;
    email : string;
    address : string;
    state : string;
    phone : string;
    Image: string| null;
}


interface UserContextType {
    user: UserData;
    setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

const defaultData: UserData = {
    name: '',
    age: '',
    email: '',
    address: '',
    state: '',
    phone: '',
    Image: null,
};
const defaultContext: UserContextType = {
    user: defaultData,
    setUser: () => {},
}

export const userContext = createContext<UserContextType>(defaultContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<UserData>({
        name: '',
        age: '',
        email: '',
        address: '',
        state: '',
        phone: '',
        Image: null,
    });

    return(
        <userContext.Provider value = {{user, setUser}}>
            {children}
        </userContext.Provider>
    );
};
