import React from "react";
import "../css/style.css";

function TodoCard({ todo, index, markCard, deleteCard }) {

    return (
        <div className="card">
            <div className="div-header">
                <h4>To do: {index + 1}</h4>
            </div>
            <div className="div-body">
                <h3 className={todo.done ? "complete" : "incomplete"}>{todo.msg}</h3>
            </div>
            <div className="div-footer">
                <button className="mark-btn" onClick={() => { markCard(index) }}>Mark</button>
                <button className="delete-btn" onClick={() => { deleteCard(index) }}>Delete</button>
            </div>
        </div>
    )
}

export default TodoCard;