/* Teste */
import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.container}>
      {/* <img src="/clipboard.png" alt="ícone de prancheta" /> */}
      <p>
        <strong>You don't have tasks created.</strong>
        Creata a new task and roganize your ToDo list.
      </p>
    </div>
  );
}
