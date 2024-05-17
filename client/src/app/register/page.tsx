"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Link from "next/link";
import styles from "./register.module.css";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import { UserService } from "@/services/user-service";
import { InputType } from "@/types/form-types";
import ErrorMessage from "@/components/error-message/error-message";

export default function Register() {
    const route = useRouter();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const nameRef = useRef<HTMLInputElement>(null!);
    const emailRef = useRef<HTMLInputElement>(null!);
    const passwordRef = useRef<HTMLInputElement>(null!);

    const handleSubmit = async(event: FormEvent) => {
        event.preventDefault();

        const result = await UserService.register({
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        });

        if(result.status) {
            route.push("/");
            route.refresh();
        } else {
            setErrorMessage(result.message);
        }
    }

    const inputs: InputType[] = [
        { id: "name", name: "Nome", type: "text", ref: nameRef },
        { id: "email", name: "Email", type: "text", ref: emailRef },
        { id: "password", name: "Senha", type: "password", ref: passwordRef }
    ];

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.formContainer}
        >
            <h1 className={styles.title}>Para se cadastrar, informe os dados abaixo</h1>
            {
                inputs.map((value: InputType, index: number) => {
                    return (
                        <Input
                            key={index}
                            id={value.id}
                            name={value.name}
                            type={value.type}
                            reference={value.ref}
                        />
                    );
                })
            }
            <Button>Registrar</Button>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <p>Já possui uma conta? <Link className={styles.link} href={"/login"}>Faça o login aqui</Link></p>
        </form>
    );
}