import React, { useState, useEffect } from "react";

function HookCounterFive() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you cliked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {" "}
        Clicked {count} times
      </button>
    </div>
  );
}

export default HookCounterFive;
