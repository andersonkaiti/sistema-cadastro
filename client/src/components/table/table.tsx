import { type UserData } from "@/types/form-types";
import { UserService } from "@/services/user-service";
import styles from "./table.module.css";

export default async function Table() {
    const data: UserData[] = await UserService.getData();

    if(data.length < 1) {
        return <p>Nenhum registro encontrado</p>
    }

    return (
        <div className={styles.tableContainer}>  
        <h1>Usuários cadastrados</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>E-MAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data: UserData) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
