import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, buttonText, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      className='btn' >
      {buttonText}
    </button>
  )
}

Button.defaultProps = {
  color: 'black'
}

Button.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

// CSS in JS
// const headingStyle = {
// color: 'red',
// backgroundColor: 'black'
// }


export default Button
