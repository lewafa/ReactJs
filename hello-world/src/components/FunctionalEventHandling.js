import React from 'react'

function FunctionalEventHandling() {
  function clickHandler() {
    console.log('Button clicked from functional component');
  }

  return (
    <div>
      <button onClick={clickHandler}>Click in Functional Component</button>
    </div>
  )
}

export default FunctionalEventHandling
