export default function TodoList({ todos, onToggle, onRemove }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)} />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: '8px' }}> 
                            {todo.text}
                        </span>
                    </label>
                    <button onClick={() => onRemove(todo.id)} style={{ marginLeft: '10px' }}>Delete</button>
                </li>
            ))}
        </ul>
    );
}