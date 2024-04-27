import {
    type SubmitPromise,
    type UserAuthentication,
    type FormType,
    type UserData
} from "@/types/form-types";

const baseUrl = `https://ws-trabalho-mantovani.vercel.app`;
// const baseUrl = `http://localhost:15761`;

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
    
        return result.json();
    } catch(error) {
        console.log("Erro ao registrar usuário");
        return {
            status: false,
            message: "Erro ao registrar usuário"
        }
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
    
        return result.json();
    } catch(error) {
        console.log("Erro ao obter dados dos usuários");
        return [];
    }
}

export const login = async(form: FormType) => {
    try {
        const result = await fetch(baseUrl + "/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        if(!result.ok) {
            throw new Error("Erro ao realizar o login");
        }
    
        return result.json();
    } catch(error) {
        console.error("Erro ao realizar o login");
        return {
            status: false,
            message: "Erro ao realizar o login"
        }
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

        if(!result.ok) {
            throw new Error("Erro ao autenticar usuário");
        }
        
        return result.json();
    } catch(error) {
        console.error("Erro ao autenticar usuário");
        return {
            status: false,
        }
    }
}