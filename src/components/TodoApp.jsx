import {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const add = text => setTodos(t => [{id: Date.now().toString(), text, completed: false}, ...t]);
    const toggle = id => setTodos(t => t.map(x => x.id === id ? {...x, completed: !x.completed} : x));
    const remove = id => setTodos(t => t.filter(x => x.id !== id));

    return (
        <div>
            <h2>Todo App</h2>
            <TodoForm onAdd={add}></TodoForm>
            <TodoList todos={todos} onToggle={toggle} onRemove={remove}></TodoList>
        </div>
    );
}