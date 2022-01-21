import Task from './Task';

function TaskList({name, tasks, onDelete, toggleReminder}) {
    return (
        <>
            {tasks.length >  0 ? tasks.map((task) => (
                <Task task={task} key={task.id} onDelete={onDelete} toggleReminder={toggleReminder}/>
            )) : 'No tasks'}
        </>

    );
}

export default TaskList;
