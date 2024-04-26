import styles from "./button.module.css";

type ButtonProps = {
    value: string;
    fn?: () => void;
}

export default function Button({ value, fn }: ButtonProps) {
    return (
        <input
            className={styles.button}
            type="submit"
            value={value}
            onClick={fn}
        />
    );
}