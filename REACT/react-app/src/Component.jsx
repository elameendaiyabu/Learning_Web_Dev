import React, { useState } from "react";

function Component() {

  const [cars, setCars] = useState([])
  const [year, setYear] = useState(2024)
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")

  function addCar() {
    const newCar = {
      carYear: year,
      carMake: make,
      carModel: model
    }

    setCars(c => [...c, `${newCar.carYear} ${newCar.carMake} ${newCar.carModel}`])

    setYear(2024);
    setMake("");
    setModel("");
  }


  function yearFn(event) {
    setYear(event.target.value)
  }

  function makeFn(event) {
    setMake(event.target.value)
  }

  function modelFn(event) {
    setModel(event.target.value)
  }


  return (
    <>
      <h1>List of Car Objetcs</h1>
      <ul>
        {cars.map((car, index) => <li key={index}>{car}</li>)}
      </ul>
      <input type="number" value={year} onChange={yearFn} placeholder="Enter Year" />
      <input type="text" value={make} onChange={makeFn} placeholder="Enter Make" />
      <input type="text" value={model} onChange={modelFn} placeholder="Enter Model" />
      <br />
      <button onClick={addCar}>Add Car</button>
    </>
  );
}

export default Component;
