import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import rocket from "./assets/rocket.svg";

import "./global.css";

export function App() {
  return (
    <>
      <Header
        titleH1="todo"
        src={rocket}
        alt="Imagem de um Foguete"
        title="Foguete"
      />
      <TodoList />
    </>
  );
}
