"use client";

import styles from "./input.module.css";

type InputProps = {
    reference: React.RefObject<HTMLInputElement>
} & React.ComponentProps<"input">;

export default function Input({ id, name, type, reference }: InputProps) {
    return (
        <div className={styles.inputBox}>
            <input
                className={styles.inputUser}
                id={id}
                type={type}
                ref={reference}
                required
            />
            <label
                htmlFor={id}
                className={styles.inputLabel}
            >{name}</label>
        </div>
    );
}