"use client";

import styles from "./input.module.css";

type InputProps = {
    identifier: string;
    inputName: string;
    type: string;
    reference: React.RefObject<HTMLInputElement>;
}

export default function Input({
    identifier,
    inputName,
    type,
    reference
}: InputProps) {
    return (
        <div className={styles.inputBox}>
            <input
                className={styles.inputUser}
                type={type}
                id={identifier}
                ref={reference}
                required
            />
            <label
                htmlFor={identifier}
                className={styles.inputLabel}
            >{inputName}</label>
        </div>
    );
}