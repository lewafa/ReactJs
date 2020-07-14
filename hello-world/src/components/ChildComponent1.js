import React from 'react';

function ChildComponent1(props) {

  const {greetHandler} = props;
  
  return (
    <div>
      <button onClick={() => greetHandler('Child1')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent1
