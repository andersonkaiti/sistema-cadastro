import {
    SubmitPromise,
    UserAuthentication,
    FormType,
    UserData,
    LoginType
} from "@/types/form-types";

const baseUrl = `https://ws-trabalho-mantovani.vercel.app`;
// const baseUrl = `http://localhost:15761`;

const handleFetchError = (error: unknown, defaultMessage: string): string => {
    if(error instanceof Error) {
        console.error(error.message);
        return error.message;
    } else {
        console.error(error);
        return defaultMessage;
    }
}

export const register = async(form: FormType): Promise<SubmitPromise> => {
    try {
        const result = await fetch(baseUrl + "/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        if(!result.ok) {
            throw new Error("Erro ao registrar usuário");
        }
    
        return await result.json() as SubmitPromise;
    } catch(error) {
        const errorMessage = handleFetchError(error, "Erro ao registrar usuário");
        return {
            status: false,
            message: errorMessage
        } as SubmitPromise;
    }
}

export const getData = async(): Promise<UserData[]> => {
    try {
        const result = await fetch(baseUrl + "/users", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!result.ok) {
            throw new Error("Erro ao obter dados dos usuários");
        }
    
        return await result.json() as UserData[];
    } catch(error) {
        handleFetchError(error, "Erro ao obter dados dos usuários");
        return [];
    }
}

export const login = async(form: FormType): Promise<LoginType> => {
    try {
        const result = await fetch(baseUrl + "/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const data: LoginType = await result.json();

        if(!result.ok) {
            throw new Error(data.message);
        }
    
        return data;
    } catch(error) {
        const errorMessage = handleFetchError(error, "Erro ao realizar o login");
        return {
            status: false,
            message: errorMessage
        } as LoginType;
    }
}

export const authenticate = async(): Promise<UserAuthentication> => {
    try {
        const result = await fetch(baseUrl + "/users/auth", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "token": `${localStorage.getItem("token")}`
            }
        });

        const data: UserAuthentication = await result.json();

        if(!result.ok) {
            throw new Error(data.message);
        }
        
        return data;
    } catch(error) {
        handleFetchError(error, "Erro ao autenticar usuário");
        return {
            status: false,
        } as UserAuthentication;
    }
}