import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Task, TaskType } from "./components/Task";
import { useState } from "react";
import { Empty } from "./components/Empty";

import tasksDB from "../tasksDB.json";

const responseTasks: TaskType[] = tasksDB.tasks;

export function App() {
  const [tasks, setTasks] = useState(responseTasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [totalTasks, setTotalTasks] = useState(responseTasks.length);

  function handleCreateNewTask() {
    event?.preventDefault();

    setTasks([
      {
        id: tasks.length + 1,
        title: newTaskText,
        isCompleted: false,
      },
      ...tasks,
    ]);

    setTotalTasks((currentState: number) => {
      return currentState + 1;
    });

    setNewTaskText("");
  }

  function handleNewTaskChange() {
    setNewTaskText(event.target.value);
  }

  function handleDeleteTask(taskToDelete: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
    setTotalTasks(totalTasks - 1);
  }

  function handleCompleteTask(taskToUpdate: TaskType) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskToUpdate.id) {
        return {
          id: taskToUpdate.id,
          title: taskToUpdate.title,
          isCompleted: !taskToUpdate.isCompleted,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  const completedTasksCounter = tasks.reduce((prevValue: number, currentTask: TaskType) => {
    if (currentTask.isCompleted) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  return (
    <main>
      <Header />

      <div className={styles.wrapper}>
        <section className={styles.taskForm}>
          <form onSubmit={handleCreateNewTask} className="" action="submit">
            <div className={styles.formFields}>
              <div className={styles.formInput}>
                <input
                  type="text"
                  placeholder="Add a new task"
                  name="newTask"
                  className={styles.formInput}
                  value={newTaskText}
                  onChange={handleNewTaskChange}
                  required
                />
              </div>
              <div className="formButton">
                <button className={styles.button}>Add +</button>
              </div>
            </div>
          </form>
        </section>

        <section className={styles.tasksList}>
          <div className={styles.counters}>
            <div>
              <span className={styles.counterLabelCreated}>Created</span>
              <span className={styles.tasksQuantities}>{totalTasks}</span>
            </div>

            <div>
              <span className={styles.counterLabelCompleted}>Done</span>
              <span className={styles.tasksQuantities}>
                {completedTasksCounter} of {totalTasks}
              </span>
            </div>
          </div>

          {tasks.length > 0 ? (
            <div className={styles.tasks}>
              {tasks.map((task) => {
                return (
                  <Task key={task.id} task={task} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} />
                );
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      </div>
    </main>
  );
}
