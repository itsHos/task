import { useState } from "react";

function TaskA() {
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");
    const [error, setError] = useState("");

    function handleAddTask() {
        if (task.trim() === "") {
            setError("task can't be empty");
            return;
        }

        if (task.length < 3) {
            setError("task should be at least 3");
            return;
        }

        setList(prevList => [...prevList, task]);
        setTask("");
        setError("");
    }

    function deleteTask(chosenTask) {
        const newList = list.filter((ele) => ele !== chosenTask);
        setList(newList);
    }

    return (
        <div>
            <h1>list count is: {list.length}</h1>

            <input
                type="text"
                placeholder="enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button
                onClick={handleAddTask}
                disabled={task.trim() === "" || task.length < 3}
            >
                add task
            </button>

            {error && <p>{error}</p>}

            {list.map((ele, index) => (
                <ul key={index}>
                    <li>
                        {ele}
                        <button onClick={() => deleteTask(ele)}>delete</button>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default TaskA;