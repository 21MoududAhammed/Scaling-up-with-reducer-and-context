import Task from "./Task";

export default function TaskList({tasks, dispatch}){
    return (
        <ul>
            {
                tasks.map(task => <Task key={task.id} task = {task} dispatch={dispatch}/>)
            }
        </ul>
    );
}