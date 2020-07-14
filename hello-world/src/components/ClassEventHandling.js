import React, { Component } from 'react'

class ClassEventHandling extends Component {
  clickHandler() {
    console.log('Button clicked from class component');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click in Class Component</button> 
      </div>
    )
  }
}

export default ClassEventHandling
