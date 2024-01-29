import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import initialTasks from "./data/initialTasks";
import { useReducer } from "react";
import taskReducer from "./reducers/taskReducer";
import { TaskContext, TaskDispatchContext } from "./contexts/taskContext";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <>
      <h1>Task Manager</h1>
      <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
          <AddTask />
          <TaskList />
        </TaskDispatchContext.Provider>
      </TaskContext.Provider>
    </>
  );
}
