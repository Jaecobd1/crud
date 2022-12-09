import React, { useState, useEffect } from 'react'
import firebase from '../../util/firebase'
import ToDo from '../toDo/toDo'
function ToDoList() {
    const [todoList, setTodoList] = useState();
    useEffect(() => {
        const todoRef = firebase.database().ref('crud-todo');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setTodoList(todoList);
        });
    }, [])
    return (
        <>
            <ul>
                <li>
                    {todoList ? todoList.map((todo, index) => <ToDo todo={todo} key={index} /> ) : '' }
                </li>
            </ul>
            </>
    );
}

export default ToDoList;