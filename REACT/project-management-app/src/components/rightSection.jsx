/* eslint-disable react/prop-types */
import Button from "./Button"
import { useState, useRef } from "react";

export default function RightSection({ isAdded, setIsAdded, project, setProject, itemIndex, isSelected, setIsSelected }) {
    const [task, setTask] = useState()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const dueDateRef = useRef()

    function newProject() {
        setIsAdded(true)
    }


    function save() {
        setIsAdded(false)

        const projectObject = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: dueDateRef.current.value,
            task: []
        }
        setProject(p => [...p, projectObject])
    }

    function getTask(e) {
        setTask(e.target.value)
    }

    function addTask() {
        project[itemIndex].task.push(task)
        setTask("")

    }

    function removeTask(index) {
        const updatedProject = [...project];
        updatedProject[itemIndex].task.splice(index, 1);
        setProject(updatedProject);
        setIsAdded(false)
    }

    function removeProject(index) {
        const updatedProject = [...project];
        updatedProject.splice(index, 1);
        setProject(updatedProject);
        setIsSelected(false)
    }

    function cancel() {
        setIsAdded(false)
    }

    return (
        <div className=" flex flex-col gap-10 items-center w-screen content-center justify-center h-screen">
            {isAdded ?
                (<form className=" w-full pl-96 pr-36 font-mono" action="">
                    <div className=" text-right flex justify-end gap-2">
                        <Button onClick={cancel} value="Cancel" />
                        <Button onClick={save} value="Save" />
                    </div>
                    <br />
                    <label>TITLE <br /><input ref={titleRef} className=" mt-1 mb-2 w-full p-1 rounded-md pl-4 focus:outline focus:outline-0 focus:border-b-4 focus:border-slate-500 border-b-4 border-slate-500" type="text" /></label><br />
                    <label>DESCRIPTION <br /><textarea ref={descriptionRef} className=" mt-1 mb-2 rounded-md w-full border-b-4 border-slate-500 h-16 pt-1 pl-4 focus:outline focus:outline-0 focus:border-b-4 focus:border-slate-500" type="text" /></label><br />
                    <label>DUE DATE <br /><input ref={dueDateRef} className="w-full mt-1 p-1 rounded-md border-b-4 border-slate-500 pl-4 focus:outline focus:outline-0 focus:border-b-4 focus:border-slate-500" type="date" /></label>
                </form>)
                :
                (<> {isSelected ?
                    (
                        <div className=" w-full h-full pl-96 m-0 pt-10 pr-10 p-6 font-mono">
                            <div className="flex justify-between mb-5 ">
                                <h1 className=" text-6xl ">{project[itemIndex].title}</h1>
                                <Button onClick={() => removeProject(itemIndex)} value="Delete" />
                            </div>
                            <p className=" text-xl mb-5 text-gray-400"> Due Date: {project[itemIndex].dueDate} </p>

                            <p className=" text-xl mb-10">{project[itemIndex].description}</p>
                            <div className=" mb-6 h-1 bg-gray-700" ></div>

                            <h2 className=" text-4xl font-extrabold mb-5">Tasks</h2>

                            <input value={task} onChange={getTask} className=" rounded-sm focus:outline-none focus:ring-2 focus:border-slate-500 focus:ring-slate-500 p-1 pl-3 w-72 mr-3" type="text" /> <button onClick={addTask} className=" text-xl hover:bg-slate-800 p-1 hover:rounded">Add Task</button>

                            <ul className=" mt-4">
                                {project[itemIndex].task.map((task, taskIndex) => (
                                    <li
                                        className=" text-lg pb-2 hover:bg-gray-700"
                                        key={taskIndex}>
                                        {task}
                                        <button onClick={() => removeTask(taskIndex)} className=" hover:bg-slate-900 float-right p-1">Clear</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                    :
                    (<div className=" flex flex-col gap-8 pl-96">
                        <h1 className=" uppercase font-mono text-3xl font-bold">No Project Selected</h1>
                        <p className=" font-mono text-gray-400">Select a project or get started with a new one</p>

                        <Button onClick={newProject} value="Create new project" />
                    </div>)}

                </>)}
        </div>
    )

}