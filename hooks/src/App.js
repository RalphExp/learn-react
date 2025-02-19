import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Checkbox from './Checkbox'
import TwoStates from './TwoStates'
import WordCount from './WorkCount';

export default function App() {
  // component1: Checkbox
  // component2: TwoStates
  // component3: WordCount

  const useAnyKeyToRender = () => {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener("keydown", forceRender);
        return () => window.removeEventListener("keydown", forceRender);
    }, []);
  };

  useAnyKeyToRender();
  return (
    <>
      <h1>Open the console to see the log.</h1>
      <hr/>
      <Checkbox/>
      <hr/>
      <TwoStates/>
      <hr/>
      <WordCount/>
    </>
  );
}

