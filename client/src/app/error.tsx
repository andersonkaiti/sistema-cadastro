"use client";

import styles from "./home.module.css";
import { ErrorType } from "@/types/form-types";

export default function Error({ error }: ErrorType) {
    return (
        <div className={styles.mainContainer}>
            <p className={styles.error}>
                {error.message.toUpperCase()}
            </p>
        </div>
    );
}