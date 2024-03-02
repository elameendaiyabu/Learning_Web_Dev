import { useState, useEffect } from "react"

function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => { setTime(new Date()) }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    function currentTime() {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const merediam = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12

        return (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${merediam}`)
    }

    function padZero(number) {
        return ((number < 10 ? "0" : "") + number)
    }

    return (<div className="container">
        <h1>{currentTime()}</h1>
    </div>
    )
}

export default DigitalClock