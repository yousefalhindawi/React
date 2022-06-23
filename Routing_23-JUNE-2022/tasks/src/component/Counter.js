import { useState } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);

    const Add = ()=>{
        setCount(count+1);
    }
    const Subtract = ()=>{
        setCount(count-1);
    }

    return (
        <div className="container">
            <button onClick={Add}>Add</button>
            <h2>{count}</h2>
            <button onClick={Subtract}>Subtract</button>
        </div>
        )
};

export default Counter;