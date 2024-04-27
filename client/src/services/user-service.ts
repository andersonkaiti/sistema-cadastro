import { Email } from "@/validators/email";
import { Password } from "@/validators/password";
import {
    register, getData, login, authenticate,
} from "@/repositories/user-repository";
import {
    type SubmitPromise, type UserOneData, type UserAuthentication
} from "@/types/form-types";
import { type UserData, type FormType } from "@/types/form-types";

export class UserService {
    private static validate(form: FormType) {
        if(!form.email || !form.password) return false;
        if(!Email.validate(form.email) || !Password.validate(form.password)) {
            return false;
        }
        return {
            name: form.name,
            email: form.email.trim(),
            password: form.password.trim(),
            id: form.id
        };
    }

    static async register(form: FormType): Promise<SubmitPromise> {
        const validatedForm = this.validate(form);
        if(!validatedForm) {
            return {
                status: false,
                message: "E-mail ou senha inválidos"
            }
        }
        return await register(validatedForm);
    }

    static async getData(): Promise<UserData[]> {
        return await getData();
    }

    static async login(form: FormType) {
        const result = await login(form);
        localStorage.setItem("token", result.token);
        return result;
    }

    static async authenticate(): Promise<UserAuthentication> {
        const result = await authenticate();
        if(!result.status) {
            localStorage.removeItem("token");
        }
        return result;
    }
}