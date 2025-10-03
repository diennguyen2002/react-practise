import {useState} from 'react';

export default function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(c=>c+1)}>+</button>
            <button onClick={()=>setCount(c=>c-1)}>-</button>
        </div>
    );
}
