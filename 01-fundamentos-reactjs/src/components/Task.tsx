import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  task: {
    id: string;
    task: string;
    marked: boolean;
  };
  onDeleteTask: (id: string) => void;
  onToggleCheck: (id: string) => void;
}
export function Task({ task, onDeleteTask, onToggleCheck }: TaskProps) {
  return (
    <div className={styles.content}>
      <input
        type="checkbox"
        checked={task.marked}
        onChange={() => onToggleCheck(task.id)}
      />
      <p className={task.marked ? styles.checkTrue : ""}>{task.task}</p>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
        title="Deletar tarefa"
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
