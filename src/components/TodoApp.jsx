import {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoApp() {
    const [todos, setTodos] = useState(() => {
        // Lấy từ localStorage khi load lần đầu
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    // Mỗi khi todos thay đổi → lưu lại vào localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const add = text => setTodos(t => [{id: Date.now().toString(), text, completed: false}, ...t]);
    const toggle = id => setTodos(t => t.map(x => x.id === id ? {...x, completed: !x.completed} : x));
    const remove = id => setTodos(t => t.filter(x => x.id !== id));
    const edit = (id, newText) =>
        setTodos(t => t.map(x => (x.id === id ? { ...x, text: newText } : x)));

    return (
        <div>
            <h2>Todo App</h2>
            <TodoForm onAdd={add}></TodoForm>
            <TodoList todos={todos} onToggle={toggle} onRemove={remove} onEdit={edit}></TodoList>
        </div>
    );
}