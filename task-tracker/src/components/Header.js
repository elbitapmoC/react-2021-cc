import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button />
    </header>
  )
}

Header.defaultProps = {
  title: 'Bot',
  actions: 'Stand',
  emotion: 'Robot'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
// color: 'red',
// backgroundColor: 'black'
// }

export default Header
