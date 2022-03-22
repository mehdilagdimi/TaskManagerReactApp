import { useState } from 'react'

const GetTask = ({ onGetTask }) => {
    const [id, setId] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        if(!id){
            alert('Enter an ID');
            return;
        }
        onGetTask(id);
        
        setId('');
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
    <div className="form-control">
      <label>Task</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter ID" />
    </div>
    <input className='btn btn-block' type='submit' value ='Get Task' />
  </form>
  )
}

export default GetTask