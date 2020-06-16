import React from 'react';
import './App.css';
import Child from './child.js';

function App() {
  return (
    <div className="App">
      <Child childAge="10"/>

      <hr/>

      <Child childAge="17"/>

    </div>
  );
}

export default App;
