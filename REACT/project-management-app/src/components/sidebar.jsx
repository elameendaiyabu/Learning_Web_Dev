import Button from "./Button"

export default function SideBar() {

    return (
        <div className=" w-96 h-screen bg-slate-800 rounded-tr-lg pl-6 pt-10 text-left">
            <h1 className=" font-mono font-bold text-4xl mb-8 uppercase">Your Projects</h1>
            <Button onClick={newProject} value="+ Add Project" />
        </div>
    )
}