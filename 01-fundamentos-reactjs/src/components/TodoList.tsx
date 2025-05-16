import { PlusCircle, ClipboardText } from "@phosphor-icons/react";
import styles from "./TodoList.module.css";

export function TodoList() {
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle className={styles.plusCircle} size={20} />
        </button>
      </form>

      <div>
        <span>Tarefas</span>
        <span>Concluidas</span>
      </div>

      <div>
        <ClipboardText />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seu itens a fazer</p>
      </div>
    </main>
  );
}
