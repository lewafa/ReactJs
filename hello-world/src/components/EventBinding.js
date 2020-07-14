import React, { Component } from 'react'

class EventBinding extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       message: 'Hello'
    };

    this.bestClickHandler = this.bestClickHandler.bind(this);
  }

  bestClickHandler() {
    this.setState({ 
      message: 'Goodbye'
    });

    console.log(this);
  }

  clickHandler() {
    this.setState({ 
      message: 'Goodbye'
    });

    console.log(this);
  }

  clickHandlerMethod = () => {
    this.setState({ 
      message: 'Goodbye'
    });

    console.log(this);
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1. binding in render method */}
        <button onClick={this.clickHandler.bind(this)}>Click - binding in render</button>
        {/* 2. using arrow function. */}
        <button onClick={() => this.clickHandler()}>Click - using arrow function</button>   
        {/* 3. binding in constructor. */}
        <button onClick={this.bestClickHandler}>Click - binding in constructor</button>   
        {/* 4. make the handler method as arrow function */}
        <button onClick={this.clickHandlerMethod}>Click - arrow function of helper method</button>   
      </div>
    )
  }
}

export default EventBinding
