
import Task from "./Task";
import {  useTask } from "../contexts/TaskContext";

export default function TaskList(){
    const tasks = useTask();
    return (
        <ul>
            {
                tasks.map(task => <Task key={task.id} task = {task}/>)
            }
        </ul>
    );
}