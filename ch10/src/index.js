import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

export default function Home() {
  return (
    <>
      <h1>Suspense Example</h1>
      <nav>
          <Link to="App1">App1</Link><br></br>
          <Link to="App2">App2</Link><br></br>
      </nav>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/App1" element={<App />} />
        <Route path="/App2" element={<App2/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
