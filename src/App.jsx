
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import initialTasks from './data/initialTasks';
import { useReducer } from "react";
import taskReducer from "./reducers/taskReducer";

export default function App(){
  const [tasks, dispatch] = useReducer(taskReducer,initialTasks);
    return (
       <>
       <h1>Task Manager</h1>
       <AddTask dispatch={dispatch} tasks={tasks}/>
       <TaskList tasks={tasks} dispatch={dispatch}/>
       </>
    );
}