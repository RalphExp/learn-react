import React, { useState, useEffect } from "react";

export default function SearchForm({value, onSearch}) {
    const [inputValue, setInputValue] = useState(value);

    return (
        <>
          <input type="text" value={inputValue} 
            onChange={e => setInputValue(e.target.value)}></input>
          <button onClick={() => onSearch(inputValue)}>Search</button>
        </>
    );
}