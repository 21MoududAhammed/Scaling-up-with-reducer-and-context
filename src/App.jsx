import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TasksProvider from "./contexts/TaskContext";

export default function App() {
  return (
    <TasksProvider>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
