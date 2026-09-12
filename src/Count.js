import React, { useState } from "react";

function ClickHandlerExample() {
    const [message, setMessage] = useState("Click the button!");

    const handleClick = () => {
        setMessage("Button clicked!");
        console.log("Button was clicked");
    };

    return (
        <div>
            <h2>Button Click Event Example</h2>
            <p>{message}</p>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default ClickHandlerExample;