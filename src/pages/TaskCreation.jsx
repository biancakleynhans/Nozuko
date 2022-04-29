import React, { useEffect, useState } from "react";
import AddEditTask from "../components/AddEditTask";
import Header from "../components/Header";

export default function TaskCreation() {
  const [allTasks, setallTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  useEffect(() => {}, [allTasks]);

  function getAllTasks() {
    let storage = window.localStorage.getItem("tasks");
    if (storage) {
      let arr = [];
      let data = JSON.parse(storage);
      console.log("Data: ", data);

      data.forEach(() => arr.push(false));

      setallTasks(data);
    }
  }

  function addTask(name, desc, date) {
    console.log("submit values: ", name, desc, date);

    let taskArray = [...allTasks];
    let newTask = { name, desc, date };

    taskArray.push(newTask);
    window.localStorage.setItem("tasks", JSON.stringify(taskArray));
  }

  return (
    <>
      <header className='App-header'>
        <Header />
      </header>
      <AddEditTask
        onComplete={(name, desc, date) => {
          addTask(name, desc, date);
        }}
        type={"ADD"}
        defaultValue={{ name: "", desc: "", date: "" }}
      />
    </>
  );
}
