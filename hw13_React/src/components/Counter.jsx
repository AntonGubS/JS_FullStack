import React, {useState} from 'react';

const Counter=function () {
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count+1)

    }

    function Decrement() {
        setCount(count-1)
    }

    return(
        <div>
            <h1>{count}   </h1>
            <button onClick={increment}> increment</button>
            <button onClick={Decrement}>  Decrement  </button>
        </div>
    )
    }
export  default Counter;