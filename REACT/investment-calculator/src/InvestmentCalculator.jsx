import { useState } from "react"

function InvestmentCalculator() {
    const [initialInvestment, setInitialInvestment] = useState(0)
    const [annualInvestment, setAnnualInvestment] = useState(0)
    const [expectedReturn, setExpectedReturn] = useState(0)
    const [duration, setDuration] = useState(0)

    function getInitialInvestment(event) {
        setInitialInvestment(event.target.value)
    }

    function getAnnualInvestment(event) {
        setAnnualInvestment(event.target.value)
    }

    function getExpectedReturn(event) {
        setExpectedReturn(event.target.value)
    }

    function getDuration(event) {
        setDuration(event.target.value)
    }

    return (
        <div className="container">
            <h1>Investment Calculator</h1>
            <div className="input-container">
                <div className="input">
                    <label>Initial Investment</label>
                    <br />
                    <input onChange={getInitialInvestment} value={initialInvestment} type="number" />
                </div>

                <div className="input">
                    <label>Annual Investment</label>
                    <br />
                    <input onChange={getAnnualInvestment} value={annualInvestment} type="number" />
                </div>

                <div className="input">
                    <label>Expected Return</label>
                    <br />
                    <input onChange={getExpectedReturn} value={expectedReturn} type="number" />
                </div>

                <div className="input">
                    <label>Duration</label>
                    <br />
                    <input onChange={getDuration} value={duration} type="number" />
                </div>
            </div>
            <table>
                <thead><tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr></thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>10000</td>
                        <td>18000</td>
                        <td>1300</td>
                        <td>29300</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InvestmentCalculator