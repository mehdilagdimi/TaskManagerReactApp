import { useState } from 'react'
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add a task')
            return
        }
        const task = text; //putting text into task because I use task varibale for task name instead of text
        onAdd({ task, date, reminder })

        setText('')
        setDate('')
        setReminder(false)
    }
    return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label>Date / Time</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Add Date" />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input className='btn btn-block' type='submit' value ='Save Task' />
    </form>
  );
};

export default AddTask;
