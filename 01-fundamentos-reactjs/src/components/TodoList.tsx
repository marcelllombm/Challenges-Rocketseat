import { PlusCircle, ClipboardText } from "@phosphor-icons/react";
import styles from "./TodoList.module.css";

export function TodoList() {
  const zeroListing = (
    <>
      <ClipboardText size={56} weight="light" color="#333333" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seu itens a fazer</p>
    </>
  );

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle className={styles.plusCircle} size={20} />
        </button>
      </form>
      <div className={styles.content}>
        <div className={styles.summary}>
          <div className={styles.task}>
            Tarefas criadas <span>0</span>
          </div>
          <div className={styles.completed}>
            Concluídas <span>0</span>
          </div>
        </div>

        <div className={styles.list}>{zeroListing}</div>
      </div>
    </main>
  );
}
