import styles from "./modal.module.css";

export default function Modal() {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <button>X</button>
                <div className={styles.title}>
                    <h1>Tem certeza de que deseja deletar o usuário?</h1>
                </div>
                <div className={styles.footer}>
                    <button>Cancelar</button>
                    <button>Deletar</button>
                </div>
            </div>
        </div>
    )
}