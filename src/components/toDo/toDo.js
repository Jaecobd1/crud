import firebase from '../../util/firebase'
import React from 'react';


function ToDo({ todo }) {
    const completeTodo = () => {
        const todoRef = firebase.database().ref("crud-todo").child(todo.id)

        todoRef.update( {
            complete: !todo.complete
        })
    }

    const deleteTodo = () => {
        const todoRef = firebase.database().ref("crud-todo").child(todo.id);

        todoRef.remove();
    }
    return (
        <>
            <div className={todo.complete ? "h-32 p-2 m-2 bg-orange-200 w-fit mx-auto rounded-xl drop-shadow-lg text-white": "h-32 p-2 m-2 bg-cyan-200 w-fit mx-auto rounded-xl drop-shadow-lg text-white"}>
                <h1 className={todo.complete ? 'line-through mb-4 text-red-500 font-bold': "mb-4 text-red-500 font-bold"}>{todo.title}</h1>
                <button onClick={deleteTodo} className="bg-slate-400 p-2 m-2" >Delete</button>
                <button className="bg-green-400 p-2 m-2" onClick={completeTodo}>{todo.complete ? 'Undo' : 'Complete' }</button>
            </div>
            </>
    );
}

export default ToDo;