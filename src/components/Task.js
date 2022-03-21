import { FaTimes } from "react-icons/fa"

const Task = ({task, onDelete, onDClick}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onDClick(task.id)}>
        <h3>
            {task.task} <FaTimes style={{color: "red", cursor : "pointer"}}
            onClick={() => onDelete(task.id)}/>
        </h3>
        <p>{task.name}</p>
        <p>{task.date}</p>
    </div>
  )
}

export default Task