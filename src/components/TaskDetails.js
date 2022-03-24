import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Button from './Button'

const TaskDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [task, setTask] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
      const data = await res.json()
      setTask(data)
      console.log(data)
    }
    
    fetchTask()
    setLoading(false)
    // console.log(task)
  }, [])
  // console.log(task)
  return loading ? (<h3>Loading</h3> ) : (
    <>
    <div>TaskDetails id : {params.id}</div>
    <p>{task.task}</p>
    <p>{task.date}</p>
    {/* <p><Button onClick={() => navigate('/')} /></p> */}
    <p><Button onClick={() => navigate(-1)} /></p>
    </>
  )
}

export default TaskDetails