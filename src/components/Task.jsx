import {  useState } from "react";
import {  useTasksDispatch } from "../contexts/TaskContext";

export default function Task({task}) {
  const [isEdit, setIsEdit] = useState(true);
  const [value, setValue] = useState(task.text);
  const dispatch = useTasksDispatch();
  
  
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={task.done}
        onClick={() => {
          dispatch({
            type: "edited",
            task: { ...task, done: !task.done },
          });
        }}
      />
      {isEdit ? (
        task.text
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}{" "}
      <button
        onClick={() => {
          setIsEdit(!isEdit);
          dispatch({
            type: "edited",
            task: {
              ...task,
              text: value,
            },
          });
        }}
      >
        {isEdit ? "Edit" : "Save"}
      </button>
      <button onClick={()=>{
        dispatch({
          type: 'deleted',
          id: task.id
        })
      }}>Delete</button>
    </li>
  );
}
