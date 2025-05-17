import { PlusCircle, ClipboardText } from "@phosphor-icons/react";
import styles from "./TodoList.module.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./Task";

interface TaskProps {
  id: string;
  task: string;
  marked: boolean;
}

export function TodoList() {
  const [amountOfTask, setAmountOfTask] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);
  const [taskChange, setTaskChange] = useState("");
  const [taskContent, setTaskContent] = useState<TaskProps[]>([]);

  const zeroListing = (
    <>
      <ClipboardText size={56} weight="light" color="#333333" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seu itens a fazer</p>
    </>
  );

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskChange(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const value = {
      id: uuidv4(),
      task: taskChange,
      marked: false,
    };

    setTaskContent((prev) => [...prev, value]);
    setAmountOfTask((prev) => prev + 1);
    setTaskChange("");
  }

  function handleDeleteTask(id: string) {
    const currentList = taskContent.filter((task) => task.id !== id);
    setTaskContent(currentList);
    setAmountOfTask((prev) => prev - 1);
  }

  function handleToggleTaskCheck(id: string) {
    const updatedTasks = taskContent.map((task) =>
      task.id === id
        ? { ...task, marked: !task.marked } // inverte o valor de 'marked'
        : task
    );

    setTaskContent(updatedTasks);

    const completedCount = updatedTasks.reduce((count, task) => {
      return task.marked ? count + 1 : count;
    }, 0);

    setTaskCompleted(completedCount);
  }

  const aboveZero = `${taskCompleted} - ${amountOfTask}`;
  return (
    <main className={styles.container}>
      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={taskChange}
          onChange={handleNewTaskChange}
          required
        />
        <button type="submit">
          Criar <PlusCircle className={styles.plusCircle} size={20} />
        </button>
      </form>
      <div className={styles.content}>
        <div className={styles.summary}>
          <div className={styles.task}>
            Tarefas criadas <span>{amountOfTask}</span>
          </div>
          <div className={styles.completed}>
            Concluídas <span>{taskCompleted === 0 ? 0 : aboveZero}</span>
          </div>
        </div>

        <div className={styles.list}>
          {amountOfTask === 0 ? (
            zeroListing
          ) : (
            <>
              {taskContent.map((taskList) => {
                return (
                  <Task
                    key={taskList.id}
                    task={taskList}
                    onDeleteTask={handleDeleteTask}
                    onToggleCheck={handleToggleTaskCheck}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
