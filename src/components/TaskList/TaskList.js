import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({tasks,deleteTask,handleComplete}) => {
    return (
        <div>
            {
                tasks.map((task) => <TaskItem key={task.id} task={task} deleteTask={deleteTask} handleComplete={handleComplete}/>)
            }
        </div>
    )
}

export default TaskList
