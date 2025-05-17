import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.content}>
      <input type="checkbox" />
      <p>
        estudar programacão fdsaf asdfs estudar programacão fdsaf asdfs estudar
      </p>
      <button className={styles.deleteButton} title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
}
