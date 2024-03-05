/* eslint-disable react/prop-types */
import Button from "./Button"
import { useState } from "react";

export default function SideBar({ setIsAdded, project, setItemIndex, setIsSelected }) {
    const [selectedItem, setSelectedItem] = useState(null)

    function change() {
        setIsAdded(true)
    }

    function selected(i) {
        setSelectedItem(i)
        setItemIndex(i)
        setIsSelected(true)
    }

    return (
        <div className=" w-80 overflow-auto h-screen fixed bg-slate-800 rounded-tr-lg pl-6 pt-10 text-left">
            <h1 className=" font-mono font-bold text-4xl mb-8 uppercase">Your Projects</h1>
            <Button onClick={change} value="+ Add Project" />

            <ul className=" list-none font-mono text-xl mt-3 mr-3">
                {project.map((project, index) =>
                    <li
                        onClick={() => selected(index)}
                        className={` 'w-full cursor-pointer hover:bg-slate-700 hover:rounded-md p-2 mb-2 ${selectedItem === index ? ' bg-slate-700 rounded-md border-l-4 border-slate-500' : ''}`}
                        key={index}
                    >
                        {project.title}
                    </li>
                )}
            </ul>
        </div>
    )
}