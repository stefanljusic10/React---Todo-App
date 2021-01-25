import React from "react";
import TodoCard from "./TodoCard";

function TodoList({ todo, markCard, deleteCard }) {

    const listOfTodosCards = todo.map((el, index) => <TodoCard todo={el} key={el.id} index={index} markCard={markCard} deleteCard={deleteCard} />);

    return (
        <div className="todo-list">
            {listOfTodosCards}
        </div>
    )
}

export default TodoList;