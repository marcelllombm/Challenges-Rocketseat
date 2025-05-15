import { PlusCircle, ClipboardText } from "@phosphor-icons/react";

export function TodoList() {
  return (
    <main>
      <form>
        <input />
        <button type="submit">
          Criar <PlusCircle />
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
