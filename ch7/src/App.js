import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from './Home'
import Checkbox from './Checkbox'
import TwoStates from './TwoStates'
import WordCount from './WorkCount';
import MousePosition from './MousePosition';
import Error404 from './Error404';

export default function App() {
  // component1: Checkbox
  // component2: TwoStates
  // component3: WordCount
  // component4: MousePosition

  const useAnyKeyToRender = () => {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener("keydown", forceRender);
        return () => window.removeEventListener("keydown", forceRender);
    }, []);
  };

  useAnyKeyToRender();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkbox" element={<Checkbox/>} />
        <Route path="/twostate" element={<TwoStates/>} />
        <Route path="/wordcount" element={<WordCount/>} />
        <Route path="/mousepos" element={<MousePosition/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>      
  );
}

