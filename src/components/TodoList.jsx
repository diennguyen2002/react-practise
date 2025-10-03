// TodoList.jsx
import { useState } from "react";

export default function TodoList({ todos, onToggle, onRemove, onEdit }) {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEdit = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };

    const handleSave = (id) => {
        if (editText.trim()) {
            onEdit(id, editText);
        }
        setEditingId(null);
        setEditText("");
    };

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {editingId === todo.id ? (
                        <>
                            <input
                                type="text"
                                value={editText}
                                onChange={e => setEditText(e.target.value)}
                                onBlur={() => handleSave(todo.id)}
                                onKeyDown={e => e.key === "Enter" && handleSave(todo.id)}
                                autoFocus
                            />
                        </>
                    ) : (
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => onToggle(todo.id)}
                            />
                            <span
                                style={{
                                    textDecoration: todo.completed ? "line-through" : "none",
                                    marginLeft: "8px",
                                }}
                            >
                                {todo.text}
                            </span>
                        </label>
                    )}

                    {editingId !== todo.id && (
                        <button onClick={() => handleEdit(todo.id, todo.text)} style={{ marginLeft: "10px" }}>
                            Edit
                        </button>
                    )}
                    <button onClick={() => onRemove(todo.id)} style={{ marginLeft: "10px" }}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}