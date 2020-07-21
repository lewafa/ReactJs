import React from 'react'
import '../styles/Stylesheet.css'
import styles from '../styles/Stylesheet.module.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : '';
  
  const heading = {
    fontSize: '16px',
    color: 'blue'
  };

  return (
    <div>
      <h2 className={`${className} font-xs`}>Using CSS Stylesheets</h2>
      <h2 style={heading}>Using inline styling</h2>
      <h2 className={styles.success}>Using CSS modules</h2>
    </div>
  )
}

export default Stylesheet
