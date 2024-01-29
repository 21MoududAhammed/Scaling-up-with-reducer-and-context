import { useState } from "react";
import { generateNextId } from "../../ultils";
import { useTask, useTasksDispatch } from "../contexts/TaskContext";

export default function AddTask() {
  const [value, setValue] = useState("");
  const tasks = useTask();
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="add a new task...."
      />
      <button
        onClick={() => {
          setValue("");
          dispatch({
            type: "added",
            task: {
              id: generateNextId(tasks),
              text: value,
              done: false,
            },
          });
        }}
      >
        Add Task
      </button>
    </>
  );
}
