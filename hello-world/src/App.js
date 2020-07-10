import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import WithoutJsx from './components/WithoutJsx';

function App() {
  return (
    <div className="App">
      <h1>1. Simple Functional Component</h1>
      <FunctionalComponent />
      <h1>2. Simple Class Component</h1>
      <ClassComponent />
      <h1>3. Complexity without JSX</h1>
      <WithoutJsx />
    </div> 
  );
}

export default App;
