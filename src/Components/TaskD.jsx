import { useEffect, useState } from "react";

function TaskD() {
    const items = [
        { id: 1, name: "iphone1" },
        { id: 2, name: "iphone2" },
        { id: 3, name: "iphone3" },
    ];

    const [input, setInput] = useState("");
    const [debouncedInput, setDebouncedInput] = useState("");
    const [filteredItems, setFilteredItems] = useState(items);

    // waits until user stops typing for 500ms So filtering happens only once, not many times.
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedInput(input);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [input]);

    // 🔥 Filter Effect
    useEffect(() => {
        const result = items.filter((item) =>
            item.name.toLowerCase().includes(debouncedInput.toLowerCase())
        );

        setFilteredItems(result);
    }, [debouncedInput]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search item..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskD;