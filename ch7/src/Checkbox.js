/* example of useEffect hook */

import React, { useReducer, useEffect } from "react";

export default function Checkbox() {
  // const [checked, setChecked] = useState(false);

  // function toggle() {
  //   setChecked(checked => !checked);
  // }

  // use useReducer instead of useState
  const [checked, toggle] = useReducer(checked => !checked, false);

  useEffect(() => {
    console.log(`checked: ${checked.toString()}`);
  }, [checked]);

  return (
    <>
      <input type="checkbox" value={checked}
        onChange={() => toggle()} />
      {checked ? "checked" : "not checked"}
    </>
  );
};