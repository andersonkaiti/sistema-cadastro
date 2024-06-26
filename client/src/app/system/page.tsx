"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserService } from "@/services/user-service";
import styles from "./system.module.css";
import Button from "@/components/button/button";
import Loader from "@/components/loader/loader";
import { logout } from "./logout";

export default function System() {
    const route = useRouter();
    const [auth, setAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [name, setName] = useState<string | undefined>("");

    useEffect(() => {
        (async() => {
            const { status, name } = await UserService.authenticate();
            setIsLoading(false);
            if(status) {
                setAuth(true);
                setName(name);
            } else {
                route.push("/login");
            }
        })();
    }, []);

    if(isLoading) {
        return <Loader/>;
    }

    if(auth) {
        return (
            <div className={styles.systemContainer}>
                <p>Boas-vindas, {name}!</p>
                <Button
                    onClick={() => logout(route)}
                >SAIR</Button>
            </div>
        );
    }
}