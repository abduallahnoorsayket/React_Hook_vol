import React, { useState, useEffect } from "react";

function HookCounterFive() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("UseEffect - Updating Document title. ");
    document.title = `you cliked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>
        {" "}
        Clicked {count} times
      </button>
    </div>
  );
}

export default HookCounterFive;
