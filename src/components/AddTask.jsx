import { useContext, useState } from "react";
import { generateNextId } from "../../ultils";
import { TaskContext, TaskDispatchContext } from "../contexts/taskContext";


export default function AddTask() {
  const [value, setValue] = useState("");
  const tasks = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);
  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="add a new task...."
      />
      <button onClick={()=>{
        setValue('');
        dispatch({
          type: 'added',
          task: {
            id: generateNextId(tasks),
            text: value,
            done: false
          }
        })
      }}>Add Task</button>
    </>
  );
}
