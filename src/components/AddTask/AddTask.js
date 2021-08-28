import React, { useState } from 'react'

const AddTask = ({handleAdd}) => {
    const [text, setText] = useState("")
    const add = () => {
        
        if(text){
            const newTask = {id:Math.random(),todo:text,isDone:false}
            handleAdd(newTask)
            setText("")
        }
        else alert("Enter new task")
        
    }
    
    return (
        <div className="add">
            <input type="text" onChange={e => setText(e.target.value)} value={text}/>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default AddTask
