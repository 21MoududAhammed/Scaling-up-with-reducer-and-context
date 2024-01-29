import { useState } from "react";

export default function Task({ task, dispatch }) {
  const [isEdit, setIsEdit] = useState(true);
  return (
    <li>
      <input type="checkbox" />
      {isEdit ? task.text : <input type="text" />}{" "}
      <button>{isEdit ? "Edit" : "Save"}</button>
      <button>Delete</button>
    </li>
  );
}
