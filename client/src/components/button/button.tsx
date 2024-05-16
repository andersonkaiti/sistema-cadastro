import styles from "./button.module.css";

type ButtonProps = React.ComponentProps<"input">

export default function Button({ ...props }: ButtonProps) {
    return (
        <input
            className={styles.button}
            type="submit"
            {...props}
        />
    );
}