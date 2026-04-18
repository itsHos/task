import { useState } from "react";

function TaskC() {
    const [users, setUsers] = useState([]);

    const addUserHandler = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h2>User Form</h2>

            <UserForm onAddUser={addUserHandler} />

            <h3>Users List</h3>
            <ul style={{ listStyle: "none" }}>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TaskC;



import { useState } from "react";

function UserForm({ onAddUser }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        // Validation
        if (name.trim() === "") {
            setError("Name is required");
            return;
        }

        if (isNaN(age) || age <= 18) {
            setError("Age must be a number greater than 18");
            return;
        }

        // Send data to parent
        onAddUser({
            name,
            age: Number(age),
        });

        // Reset form
        setName("");
        setAge("");
        setError("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div style={{ marginTop: "10px" }}>
                <input
                    type="text"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <button style={{ marginTop: "10px" }} type="submit">
                Add User
            </button>

            {error && (
                <p style={{ color: "red", marginTop: "10px" }}>
                    {error}
                </p>
            )}
        </form>
    );
}