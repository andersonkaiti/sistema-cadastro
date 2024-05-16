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

    useEffect(() => {
        (async() => {
            const status = await UserService.authenticate();
            setIsLoading(false);
            if(status) {
                setAuth(true);
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
                <p>Autenticado</p>
                <Button
                    onClick={() => logout(route)}
                >SAIR</Button>
            </div>
        );
    }
}