import Task from "./Task";
// const MyComponent = ( props ) => <div>{props.data}</div>
const Tasks = ({ tasks, onDelete, onDClick }) => {
  return (
    <div>
      <h1>Saved Tasks</h1>

      {/* {{tasks.map((task) => {return <h3>{task.task}</h3>})}  */}
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onDClick={onDClick}
        />
      ))}
      {/* {tasks.map((task) => (
          <h3 key={task.id}> Task : {task.task} <br /> Date : {task.date}</h3>
        ))} */}
      {/* {tasks.map((task) => (<h3 key={task.id}> Date : {task.date}</h3>))} */}
    </div>
  );
};

export default Tasks;
