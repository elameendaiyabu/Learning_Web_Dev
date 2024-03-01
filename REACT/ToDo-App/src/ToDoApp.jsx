import { useState } from "react"

function ToDoApp() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function createNewTask(e) {
        setNewTask(e.target.value)
    }

    function addNewTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i != index))
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] =
                [updatedTask[index - 1], updatedTask[index]];

            setTasks(updatedTask);
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] =
                [updatedTask[index + 1], updatedTask[index]];

            setTasks(updatedTask);
        }
    }

    return (
        <div className="container">
            <h1>To-Do-List</h1>

            <div className="input-container">
                <input type="text" value={newTask} placeholder="Enter a task..." onChange={createNewTask} />
                <button onClick={addNewTask}>Add</button>
            </div>

            <ul>
                {tasks.map((task, index) => <li key={index}>
                    <span className="text">{task}</span>
                    <div className="buttons">
                        <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-btn" onClick={() => moveUp(index)}>UP</button>
                        <button className="move-btn" onClick={() => moveDown(index)}>DOWN</button>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default ToDoApp