import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  let [resourceType, setResourceType] = useState('posts')
  let [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json));
  }, [resourceType])

  return (
    <>
      <h1>Fake API json placeholder</h1>
      <nav>
        <ul>
          <li onClick = {() => setResourceType('comments')}>Comments</li>
          <li onClick = {() => setResourceType('users')}>Users</li>
          <li onClick = {() => setResourceType('posts')}>Posts</li>
        </ul>
        <h1>{resourceType}</h1>
        {items.map( item => {
          return <span>{JSON.stringify(item)}</span>
        })}
      </nav>
    </>
  );

}

export default App;
