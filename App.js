import React from "react";
import ReactDOM from "react-dom/client";

const age = 25;
const jsxBody = (
    <div id = "container">
        <h1>Hello, World!</h1>
        <h2>Welcome to React</h2>
        <h3>My Age is : {age}</h3>
        <p>This is a simple React application.</p>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxBody);