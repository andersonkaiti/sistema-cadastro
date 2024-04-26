"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./register.module.css";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import { UserService } from "@/services/user-service";
import { type InputType } from "@/types/form-types";
import ErrorMessage from "@/components/error-message/error-message";

export default function Register() {
    const route = useRouter();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result = await UserService.register({
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        });

        if(result.status) {
            route.push("/");
            route.refresh();
        } else {
            setErrorMessage(result.message);
        }
    }

    const inputs: InputType[] = [
        { identifier: "name", inputName: "Nome", type: "text", reference: nameRef },
        { identifier: "email", inputName: "Email", type: "text", reference: emailRef },
        { identifier: "password", inputName: "Senha", type: "password", reference: passwordRef }
    ];

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.formContainer}
        >
            <h1 className={styles.title}>Para se cadastrar, informe os dados abaixo</h1>
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
                value="Registrar"
            />
            <ErrorMessage
                errorMessage={errorMessage}
            />
            <p>Já possui uma conta? <Link className={styles.link} href={"/login"}>Faça o login aqui</Link></p>
        </form>
    );
}