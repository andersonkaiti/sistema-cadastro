import {
    type SubmitPromise,
    type UserAuthentication,
    type UserOneData,
    type FormType,
    type UserData
} from "@/types/form-types";

const baseUrl = `https://ws-trabalho-mantovani.vercel.app`;
// const baseUrl = `http://localhost:15761`;

export const register = async(form: FormType): Promise<SubmitPromise> => {
    const result = await fetch(baseUrl + "/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    });

    return result.json();
}

export const getData = async(): Promise<UserData[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = await fetch(baseUrl + "/users", {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return result.json();
}

export const getOne = async(id: string): Promise<UserOneData> => {
    const result = await fetch(baseUrl + "/users/get-one", {
        cache: "no-store",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
    });

    return result.json();
}

export const login = async(form: FormType) => {
    const result = await fetch(baseUrl + "/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    });

    return result.json();
}

export const authenticate = async(): Promise<UserAuthentication> => {
    const result = await fetch(baseUrl + "/users/auth", {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            "token": `${localStorage.getItem("token")}`
        }
    });
    
    return result.json();
}