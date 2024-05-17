import styles from "./button.module.css";

type ButtonProps = {
    children: string;
} & React.ComponentProps<"input">;

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