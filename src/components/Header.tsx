// TESTE
import styles from "./Header.module.css";

import rocketToDo from "../assets/todo-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketToDo} alt="Logo ToDo Louran Costa" />
    </header>
  );
}
