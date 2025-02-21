import './App.css';
import React from 'react';
import { useState } from 'react';
import GitHubUser from './GitHubUser';
import SearchForm from './SearchForm';
import Visualize from './Visualize';

export default function App() {
  const [login, setLogin] = useState("moontahoe");
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  );
}
