import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Add from "./components/Add";
import TodoList from "./components/TodoList";
import "./css/style.css";

function App() {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('todo');
        if (data) {
            setTodo(JSON.parse(data));
        }
    }, []);

    const markCard = index => {
        const todoCopy = [...todo];
        todoCopy[index].done = !todoCopy[index].done;
        setTodo(prevTodo => prevTodo = todoCopy);
        localStorage.setItem('todo', JSON.stringify(todoCopy));
    }

    const deleteCard = index => {
        const todoCopy = [...todo];
        todoCopy.splice(index, 1);
        setTodo(prevTodo => prevTodo = todoCopy);
        localStorage.setItem('todo', JSON.stringify(todoCopy));
    }

    const addTodo = (inp, inputText) => {
        const todoCopy = [...todo];
        let newCard = { id: todoCopy.length + 1, msg: inp, done: false };
        todoCopy.push(newCard);
        setTodo(prevTodo => prevTodo = todoCopy);
        localStorage.setItem('todo', JSON.stringify([...todo, newCard]));
        inputText.value = '';
        const h3ContainerWidth = document.querySelector(".div-body").clientWidth;
        const h3Width = document.getElementsByTagName("h3").clientWidth;
        if(h3Width > h3ContainerWidth){
            console.log("Preveliko je");
        }
    }

    return (
        <div>
            <Header />
            <Add addTodo={addTodo} />
            <div className="todo-list">
                <TodoList todo={todo} markCard={markCard} deleteCard={deleteCard} />
            </div>
        </div>
    )
}

export default App;