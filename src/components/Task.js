function Task({task, onDelete, toggleReminder}) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
             style={{display: 'flex', justifyContent: 'space-between'}}
             onDoubleClick={() => toggleReminder(task.id)}>
            <div>
                <h2>{task.name}</h2>
                <h2>{task.created}</h2>
            </div>
            <div>
                <button className='btn'
                        style={{color: 'red', background: '#f4f4f4f'}}
                        onClick={() => onDelete(task.id)}
                >
                    X
                </button>
            </div>
        </div>
    );
}

export default Task;
