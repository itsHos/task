import React, { useEffect, useState } from "react";

export default function Task() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const AddTask = () => {
    if (task.trim() === "") {
      setError("task can't be empty");
      return;
    }
    if (task.length < 3) {
      setError("task should be at lest 3");
    }
    setList((prevList) => [prevList, task]);
    setTask("");
    setError("")
  };
  return <div>Task</div>;
}
