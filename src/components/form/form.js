import React, { useState } from "react";
import firebase from '../../util/firebase'
function Form() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const createTodo = () => {
        const todoRef = firebase.database().ref('crud-todo');
        const todo = {
            title,
            complete: false
        }

        todoRef.push(todo)
        title = ""
    }

    

    return (
        <>
            <div >
                <input type="text" onChange={handleOnChange} value={title} className="bg-slate-300 p-2 m-2 " placeholder="Item" />
                <button onClick={createTodo} > Add Todo</button>
            </div>
        </>
    )
}

export default Form
