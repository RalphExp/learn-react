import React from "react"
import { Link } from "react-router-dom";

export default function Home() {
    return (
      <>
        <h1>Hooks Example</h1>
        <nav>
            <Link to="checkbox">Checkbox</Link><br></br>
            <Link to="twostate">TwoStates</Link><br></br>
            <Link to="wordcount">WordCount</Link><br></br>
            <Link to="mousepos">MousePosition</Link><br></br>
        </nav>
      </>
    );
}