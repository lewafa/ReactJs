import React, { Component } from 'react'

class ClassWithState extends Component {
  constructor() {
    super();      // constructor of parent Component from React

    this.state = {
      message: 'Welcome Visitor'
    };
  }

  changeMessage() {
    this.setState({   // sets the new value for state
      message: 'Thank you for subscribing'
    });
  }

  render() {
    const {message} = this.state;

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default ClassWithState
