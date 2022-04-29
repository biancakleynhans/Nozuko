import Home from "../pages/Home";
import TaskCreation from "../pages/TaskCreation";
import TaskDisplays from "../pages/TaskDisplays";

export const AllRoutesObj = {
  home: { path: "/", exact: true, comp: <Home />, name: "Home Page" },
  tasks: { path: "/tasks", exact: true, comp: <TaskDisplays />, name: "All Tasks" },
  creator: { path: "/creator", exact: true, comp: <TaskCreation />, name: "Task Creator" }
};

export const AllRoutesArray = Object.values(AllRoutesObj);
