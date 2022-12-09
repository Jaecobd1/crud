import firebase from '../../util/firebase'
import React from 'react';


function ToDo({ todo }) {
    

    return (
        <>
            <div className="h-32 p-2 m-2 bg-cyan-200 w-fit mx-auto rounded-xl drop-shadow-lg text-white">
                <h1 className="mb-4 text-red-500 font-bold">{todo.title}</h1>
                <button className="bg-slate-400 p-2 m-2" >Delete</button>
                <button className="bg-green-400 p-2 m-2">Complete</button>
            </div>
            </>
    );
}

export default ToDo;