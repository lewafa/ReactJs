import React, { Component } from 'react'

class ClassWithProps extends Component {
  render() {
    const {name, greet, children} = this.props;

    return (
      <div>
        <h2>Hello {name}, {greet}</h2>
        {children}
      </div>
    )
  }
}

export default ClassWithProps
