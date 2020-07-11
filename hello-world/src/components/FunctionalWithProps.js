import React from 'react'

const FunctionalWithProps = (props) => {
  // console.log('props ', props);

  const {name, greet, children} = props;

  return (
    <div>
      <h2>Hello {name}, {greet}</h2>
      {children}
    </div>
  );
}

export default FunctionalWithProps
