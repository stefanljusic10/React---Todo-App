import React, { useState } from "react";
import "../css/style.css";

function Add({ addTodo }) {

    const [msg, setMsg] = useState('');

    const setNewTodo = e => {
        setMsg(prevMsg => prevMsg = e.target.value);
    };

    return (
        <>
            <div className="flex-container">
                <input className="input" id="add" type="text" placeholder="What to do?" onChange={setNewTodo} maxLength="16"></input>
                <button className="search-button" onClick={() => { addTodo(msg, document.querySelector("#add")) }}>Add</button>
            </div>
        </>
    )
}

export default Add;