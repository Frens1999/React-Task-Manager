import './App.css';
import TaskList from './components/taskList';
import {useState} from 'react';
import AddTask from './components/AddTask';

function App() {
    const name = 'Task manager';
    let [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] =
        useState([
            {id: 2, name: 'Bej dush', created: '12 May', reminder: false},
            {id: 1, name: 'Laj enet', created: '12 April', reminder: true},
            {id: 3, name: 'Laj rrobat', created: '12 March', reminder: true},
            {id: 4, name: 'Mos pi mall, Bej palester', created: '15 October', reminder: false}
        ])

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    const addTask = (task) => {
        const lastTask = tasks[tasks.length - 1];
        const newTask = {...task, id: lastTask.id + 1}
        setTasks([...tasks, newTask])
    }

    const changeAddTask = () => {
        setShowAddTask(!showAddTask)
    }
    return (
        <div className="container">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>{name}</h3>
                <button className='btn ' style={{backgroundColor: 'green'}} onClick={changeAddTask}>+ Add task</button>
            </div>
            {showAddTask && <AddTask addTask={addTask}/>}
            <TaskList tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/>
        </div>
    );
}

export default App;
