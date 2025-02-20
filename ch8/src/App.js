import './App.css';
import React from 'react';
import GithubUser from './GithubUser';
import Visualize from './Visualize';

export default function App() {
    console.log("loading app")
    return (
      <>
        <GithubUser />
        {/* <Visualize /> */}
      </>
    );
}
