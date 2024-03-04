import Button from "./Button"
import { useState } from "react"

export default function RightSection() {
    const [isAdd, setIsAdd] = useState(false)

    function newProject() {
        setIsAdd(true)
    }


    function save() {
        setIsAdd(false)
    }

    function cancel() {
        setIsAdd(false)
    }


    return (
        <div className=" flex flex-col gap-10 items-center w-screen content-center justify-center h-screen">
            {isAdd ? (<form className=" w-full pl-14 pr-36 font-mono" action="">
                <div className=" text-right flex justify-end gap-2">
                    <Button function={save} value="Cancel" />
                    <Button function={cancel} value="Save" />
                </div>
                <br />
                <label>TITLE <br /><input className=" mt-1 mb-2 w-full p-1 rounded-md pl-4 focus:outline focus:outline-0 focus:border-b-4 focus:border-slate-500 border-b-4 border-slate-500" type="text" /></label><br />
                <label>DESCRIPTION <br /><textarea className=" mt-1 mb-2 rounded-md w-full border-b-4 border-slate-500 h-16 pt-1 pl-4 focus:outline focus:outline-0 focus:border-b-4 focus:border-slate-500" type="text" /></label><br />
                <label>DUE DATE <br /><input className="w-full mt-1 p-1 rounded-md border-b-4 border-slate-500 pl-4 focus:outline focus:outline-0 focus:border-b-4 focus:border-slate-500" type="date" /></label>
            </form>) : (<><h1 className=" uppercase font-mono text-3xl font-bold">No Project Selected</h1>
                <p className=" font-mono text-gray-400">Select a project or get started with a new one</p>

                <Button function={newProject} value="Create new project" /></>)}
        </div>
    )

}