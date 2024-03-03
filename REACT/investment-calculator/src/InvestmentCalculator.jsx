import React, { useState, useEffect } from "react";
import { InvestmentCalculations } from "./util/InvestmentCalculations";

function InvestmentCalculator() {
    const [result, setResult] = useState([]);
    const [initialInvestment, setInitialInvestment] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        // Calculate result only when all inputs are greater than 0
        if (initialInvestment > 0 && annualInvestment > 0 && expectedReturn > 0 && duration > 0) {
            const calculatedResult = InvestmentCalculations(initialInvestment, annualInvestment, duration);
            setResult(calculatedResult);
        }
        console.log("rendered")
    }, [initialInvestment, annualInvestment, duration]);

    function getInitialInvestment(event) {
        setInitialInvestment(event.target.value);
    }

    function getAnnualInvestment(event) {
        setAnnualInvestment(event.target.value);
    }

    function getExpectedReturn(event) {
        setExpectedReturn(event.target.value);
    }

    function getDuration(event) {
        setDuration(event.target.value);
    }

    return (
        <div className="container">
            <h1>Investment Calculator</h1>
            <div className="input-container">
                <div className="input">
                    <label>Initial Investment</label>
                    <br />
                    <input onChange={getInitialInvestment} placeholder={initialInvestment} type="number" />
                </div>

                <div className="input">
                    <label>Annual Investment</label>
                    <br />
                    <input onChange={getAnnualInvestment} placeholder={annualInvestment} type="number" />
                </div>

                <div className="input">
                    <label>Expected Return</label>
                    <br />
                    <input onChange={getExpectedReturn} placeholder={expectedReturn} type="number" />
                </div>

                <div className="input">
                    <label>Duration</label>
                    <br />
                    <input onChange={getDuration} placeholder={duration} type="number" />
                </div>
            </div>
            {/* Display the result */}
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, index) => (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>${item.investmentValue}</td>
                            <td>${item.interest}</td>
                            <td>${item.totalInterest}</td>
                            <td>${item.investedCapital}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InvestmentCalculator;
