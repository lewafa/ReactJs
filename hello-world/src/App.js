import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import WithoutJsx from './components/WithoutJsx';
import FunctionalWithProps from './components/FunctionalWithProps';
import ClassWithProps from './components/ClassWithProps';
import ClassWithState from './components/ClassWithState';
import ClassStateCounter from './components/ClassStateCounter';

function App() {
  return (
    <div className="App">
      <h1>1. Simple Functional Component</h1>
      <FunctionalComponent />

      <h1>2. Simple Class Component</h1>
      <ClassComponent />
      
      <h1>3. Complexity without JSX</h1>
      <WithoutJsx />

      <h1>4. Functional Components with Props</h1>
      <FunctionalWithProps name="Saravana" greet="how are you?">
        <p>What are your plans today?</p>
      </FunctionalWithProps>

      <h1>5. Class Components with Props</h1>
      <ClassWithProps name="Saravana" greet="how are you?">
        <p>What are your plans today?</p>
      </ClassWithProps>

      <h1>6. Class Components with State</h1>
      <ClassWithState />
      <ClassStateCounter />

      <h1>7. Event handling</h1>

      <h1>8. </h1>

      <h1>9. </h1>

      <h1>10. </h1>
    </div> 
  );
}

export default App;
