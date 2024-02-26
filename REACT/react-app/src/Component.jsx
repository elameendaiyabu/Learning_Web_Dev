import React, { useState } from "react";

function Component() {
  const [delivery, setDelivery] = useState("");

  function renderDelivery(event) {
    setDelivery(event.target.value);
  }

  return (
    <>
      <p>Choose delivery mode</p>
      <label htmlFor="">
        <input
          type="radio"
          value="Home Delivery"
          checked={delivery === "Home Delivery"}
          onChange={renderDelivery}
        />
        Home Delivery
      </label>
      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Pickup"
          checked={delivery === "Pickup"}
          onChange={renderDelivery}
        />
        Pickup
      </label>

      <p>Method: {delivery}</p>
    </>
  );
}

export default Component;
