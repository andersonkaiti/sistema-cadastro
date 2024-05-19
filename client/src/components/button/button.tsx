import styles from "./button.module.css";
import { ButtonProps } from "@/types/form-types";

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <input
            className={styles.button}
            type="submit"
            value={children}
            {...props}
        />
    );
}