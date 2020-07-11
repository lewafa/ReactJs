import React, { Component } from 'react'

class ClassStateCounter extends Component {
  constructor(props) {
    super(props)      // constructor of parent Component from React
  
    this.state = {
       counter: 0
    }
  }

  // 1. directly using this.state can cause adverse results
  // incrementCounter() {    
  //   this.setState({       // sets the new value for state directly using this.state
  //     counter: this.state.counter + 1
  //   }, () => {            // callback function that executes after state is set
  //     console.log('Counter', this.state.counter);
  //   });
  // }

  // 2. if state has to be set based on previous state, use function as first arg for setState()
  incrementCounter() {    
    this.setState((prevState, props) => ({       // sets the new value for state using previous state as parameter
      counter: prevState.counter + 1
    }), () => {            // callback function that executes after state is set
      console.log('Counter', this.state.counter);
    });
  }
  
  render() {
    return (
      <div>
        <h2>Counter - {this.state.counter}</h2>
        <button onClick={() => this.incrementCounter()}>Increment</button>
      </div>
    )
  }
}

export default ClassStateCounter
