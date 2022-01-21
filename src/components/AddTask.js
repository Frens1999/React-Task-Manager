import {useState} from 'react';

function AddTask({addTask}) {
    const [name, setName] = useState('')
    const [created, setDate] = useState('')
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        addTask({name, created, reminder})
    }
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type="text"
                       placeholder='Add Task'
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time'
                       value={created}
                       onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type="checkbox"
                       value={reminder}
                       onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <button type="button" value='Save Task' className='btn btn-block' onClick={onSubmit}>Save</button>

        </form>
    );
}

export default AddTask;
