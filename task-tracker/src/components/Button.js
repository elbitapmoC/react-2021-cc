import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  const onClick = () => {
    console.log('clicked..');
  }

  return (
    <button className='btn'>Add</button>
  )
}

Button.defaultProps = {
  color: 'Black',
  text: 'Stand',
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
// color: 'red',
// backgroundColor: 'black'
// }


export default Button
