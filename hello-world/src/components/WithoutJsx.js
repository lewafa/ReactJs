import React from 'react';

const WithoutJsx = () => {
  // return (
  //   <div>
  //     <h2>Using JSX</h2>
  //   </div>
  // );

  return React.createElement(
      'div', 
      { id: 'idvalue', className: 'classvalue' }, 
      React.createElement(
        'h2', 
        null, 
        'Using createElement'
      )
    );
}

export default WithoutJsx; 
