import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("UseEffect log");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmount with event lisener");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
