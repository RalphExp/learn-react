import React from 'react';
import { useEffect, useState } from 'react';

export default function GitHubUser() {
    const [data, setData] = useState("");
    const [error, setError] = useState();
    const [user, setUser] = useState("");
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        if (!user) return;
        fetch(`https://api.github.com/users/${user}`)
            .then(data => data.json())
            .then(setData)
            .catch(setError);
    }, [user]);

    if (error || !data) {
      return (
        <>
          <pre>{error}</pre>
          <label>UserName</label><input type="text" value={inputText}
            onChange={e => setInputText(e.target.value)}></input>
          <button onClick={()=>setUser(inputText)}>changeUser</button>
        </>
      );
    }

    return (
      <>
        <label>UserName</label><input type="text" value={inputText}
            onChange={e => setInputText(e.target.value)}></input>
        <button onClick={()=>setUser(inputText)}>changeUser</button>
        <div className="githubUser">
          <img src={data.avatar_url} alt={data.login} style={{ width: 200 }}/>
          <div>
            <h1>{data.login}</h1>
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
          </div>
        </div>
      </>
    );
}
