import React from 'react'
import "./TaskItem.css"

const TaskItem = ({task,deleteTask,handleComplete}) => {
    //   task= { id: 0, todo: "Learn HTML", isDone: true },
    return (
        <div>
            <p className={task.isDone ===true ? "done" : "" }>{task.todo}</p>
            <div>
                <button onClick={() => deleteTask(task.id)}>delete</button>
                <button onClick={() => handleComplete(task.id)}>{task.isDone ? "Undo" : "complete" }</button>
            </div>
        </div>
    )
}

export default TaskItem
