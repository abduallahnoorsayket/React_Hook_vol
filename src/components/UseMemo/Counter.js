import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const incrementOne = () => {
    setcounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 == 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Counter One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"} </span>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
