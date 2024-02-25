function Button() {
  let count = 0;

  const click = () => {
    count += 1;

    if (count > 2) {
      console.log("it is!!");
    }
  };

  return (
    <>
      <button onClick={click}>Click Me</button>
    </>
  );
}

export default Button;
