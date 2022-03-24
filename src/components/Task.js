import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Task = ({task, onDelete, onDClick}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onDClick(task.id)}>
        <h3>
            {task.task} <FaTimes style={{color: "red", cursor : "pointer"}}
            onClick={() => onDelete(task.id)}/>
        </h3>
        <p>{task.name}</p>
        <p>{task.date}</p>
        <p><Link to={`/task/${task.id}`}>View Details</Link></p>
    </div>
  )
}

export default Task