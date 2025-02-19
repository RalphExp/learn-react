/* Example of dependency array */

import React, { useState, useEffect } from "react";

export default function TwoStates() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  /* one-shot effect */
  useEffect(() => {
    console.log("only once after initial render");
    }, []);

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  useEffect(() => {
    console.log("either val or phrase has changed");
    }, [val, phrase]);

  return (
    <>
      <label>Favorite phrase:</label>
      <input value={val} placeholder={phrase} onChange={e => set(e.target.value)} />
      <button onClick={createPhrase}>send</button>
    </>
  );
}