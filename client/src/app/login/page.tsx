"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./login.module.css";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import { UserService } from "@/services/user-service";
import { type InputType } from "@/types/form-types";
import ErrorMessage from "@/components/error-message/error-message";

export default function Login() {
    const route = useRouter();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    const login = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result = await UserService.login({
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        });

        if(result.status) {
            route.push("/system");
            route.refresh();
        } else {
            setErrorMessage(result.message);
        }
    }

    const inputs: InputType[] = [
        { identifier: "email", inputName: "E-mail", type: "text", reference: emailRef },
        { identifier: "password", inputName: "Senha", type: "password", reference: passwordRef },
    ];
    
    return (
        <form
            onSubmit={login}
            className={styles.formContainer}
        >
            <h1 className={styles.title}>Para logar no sistema, preencha com os seus dados</h1>
            {inputs.map((value: InputType, index: number) => {
                return (
                    <Input
                        key={index}
                        identifier={value.identifier}
                        inputName={value.inputName}
                        type={value.type}
                        reference={value.reference}
                    />
                )
            })}
            <Button
                value="Logar"
            />
            <ErrorMessage
                errorMessage={errorMessage}
            />
            <p>Não possui uma conta? <Link className={styles.link} href={"/register"}>Cadastre-se aqui</Link></p>
        </form>
    )
}