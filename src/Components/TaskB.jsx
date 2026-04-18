import { useEffect, useState } from "react";

function TaskB() {
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (text.length < 10) {
            setMessage("Too short");
        } else if (text.length <= 20) {
            setMessage("Good");
        } else {
            setMessage("Too long");
        }
    }, [text]);

    return (
        <div>
            <input
                type="text"
                placeholder="enter text"
                value={text}
                onChange={(e) => {
                    if (e.target.value.length <= 30) {
                        setText(e.target.value);
                    }
                }}
            />

            <p>chars count: {text.length}</p>
            <p>{message}</p>
        </div>
    );
}

export default TaskB;