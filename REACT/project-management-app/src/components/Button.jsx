export default function Button(props) {

    return (
        <>
            <button onClick={props.function} className=" bg-slate-500 p-3 rounded-lg hover:bg-slate-700 font-bold font-mono">{props.value}</button>
        </>
    )
}