import React, { useEffect, useState } from "react";
import AddEditTask from "../components/AddEditTask";
import Header from "../components/Header";

export default function TaskDisplays() {
  const [allTasks, setallTasks] = useState([]);
  const [showEdit, setshowEdit] = useState([]);

  //   LifeCycleHook
  //   Only at start up
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
      setshowEdit(arr);
    }
  }

  function editTask(name, desc, date, index) {
    console.log("Old", index, allTasks[index]);
    console.log("new", name, desc, date);

    let copy = [...allTasks];
    copy.splice(index, 1, { name, desc, date });

    console.log("Updated: ", copy[index]);
    window.localStorage.setItem("tasks", JSON.stringify(copy));
    setallTasks(copy);
    displayNow(index);
  }

  function deleteTask(index) {
    let copy = [...allTasks];
    copy.splice(index, 1);
    setallTasks(copy);
  }

  function displayNow(index) {
    let copy = [...showEdit];
    copy[index] = !copy[index];
    setshowEdit(copy);
  }

  return (
    <>
      <header className='App-header'>
        <Header />
      </header>
      <h2>All Tasks: </h2>
      <ol>
        {allTasks.map((entry, index) => {
          return (
            <li key={index}>
              {showEdit[index] ? (
                <AddEditTask
                  onComplete={(name, desc, date) => {
                    editTask(name, desc, date, index);
                  }}
                  type={"EDIT"}
                  defaultValue={{ name: entry.name, desc: entry.desc, date: entry.date }}
                />
              ) : (
                <>
                  {entry.name}: {entry.desc} due on {entry.date}{" "}
                  <button style={{ color: "green" }} onClick={() => displayNow(index)}>
                    {" "}
                    EDIT{" "}
                  </button>
                  <button style={{ color: "red" }} onClick={() => deleteTask(index)}>
                    {" "}
                    REMOVE{" "}
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}
