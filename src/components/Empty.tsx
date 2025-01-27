import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.container}>
      {/* <img src="/clipboard.png" alt="ícone de prancheta" /> */}
      <p>
        <strong>You don't have any tasks yet.</strong>
        Create a new task and organize your To-Do list.
      </p>
    </div>
  );
}
