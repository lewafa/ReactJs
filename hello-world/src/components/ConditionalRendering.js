import React, { Component } from 'react'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       isLoggedIn: true
    };
  }
  
  render() {
    // 1. using if- else statements
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome Saravana</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>      
    //     </div>
    //   );
    // }

    // 2. using local variable
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Saravana</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;

    // 3. using terinary operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Saravana</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // 4. short circuit operator
    return this.state.isLoggedIn && <div>Welcome Saravana</div>;

  }
}

export default ConditionalRendering
