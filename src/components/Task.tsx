import styles from "./Task.module.css";

export interface TaskType {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: number) => void;
  onCompleteTask: (task: TaskType) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleStatusTask() {
    onCompleteTask(task);
  }

  const taskDescriptionCheckedClassname = task.isCompleted ? styles["taskDetailChecked"] : styles["taskDetail"];

  return (
    <div className={styles.tasks}>
      <div className={styles.task}>
        <div className={styles.inputDiv}>
          <input
            onChange={handleStatusTask}
            className={styles.taskCheckbox}
            type="checkbox"
            checked={task.isCompleted}
          />
        </div>
        <div>
          <span className={taskDescriptionCheckedClassname}>{task.title}</span>
        </div>
        <div className={styles.deleteTaskIcon}>
          <button onClick={handleDeleteTask}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
