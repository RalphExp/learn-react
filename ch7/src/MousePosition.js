
import React, { useState, useLayoutEffect } from "react";

export default function MousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => window.removeEventListener("mousemove", setPosition);
  }, []);

  return (
    <table>
    <tr>
        <td>X:</td><td>{x}</td><td>Y:</td><td>{y}</td>
    </tr>
    </table>
  );
};