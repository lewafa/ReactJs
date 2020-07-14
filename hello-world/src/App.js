import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import WithoutJsx from './components/WithoutJsx';
import FunctionalWithProps from './components/FunctionalWithProps';
import ClassWithProps from './components/ClassWithProps';
import ClassWithState from './components/ClassWithState';
import ClassStateCounter from './components/ClassStateCounter';
import FunctionalEventHandling from './components/FunctionalEventHandling';
import ClassEventHandling from './components/ClassEventHandling';
import EventBinding from './components/EventBinding';
import ParentComponent1 from './components/ParentComponent1';
import ConditionalRendering from './components/ConditionalRendering';

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
      <FunctionalEventHandling />
      <ClassEventHandling />

      <h1>8. Binding Event handlers in Class Components</h1>
      <EventBinding />

      <h1>9. Methods as props</h1>
      <ParentComponent1 />

      <h1>10. Conditional Rendering</h1>
      <ConditionalRendering />

      <h1>11. List Rendering</h1>
      <a href="https://www.youtube.com/watch?v=5s8Ol9uw-yM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=17">ReactJS Tutorial - 17 - List Rendering</a>

    </div> 
  );
}

export default App;
