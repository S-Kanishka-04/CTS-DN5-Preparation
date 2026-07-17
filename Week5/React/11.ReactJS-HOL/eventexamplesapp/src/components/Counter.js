import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const sayHello = () => {
        alert("Hello! Member");
    };

    const handleIncrement = () => {
        increment();
        sayHello();
    };

    const sayWelcome = (msg) => {
        alert(msg);
    };

    const handleClick = () => {
        alert("I was clicked");
    };

    return (
        <div>

            <h2>{count}</h2>

            <button onClick={handleIncrement}>
                Increment
            </button>

            <br /><br />

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={handleClick}>
                Click on me
            </button>

        </div>
    );

}

export default Counter;