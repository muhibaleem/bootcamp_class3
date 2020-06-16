import React from 'react';
import './App.css';
import Child from './child.js';

function App() {
  return (
    <div className="App">
      <Child childAge="12"/>

      <hr/>

      <Child childAge="13"/>

    </div>
  );
}

export default App;
