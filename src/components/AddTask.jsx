import { useState } from "react";
import { generateNextId } from "../../ultils";


export default function AddTask({dispatch, tasks}) {
  const [value, setValue] = useState("");
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
