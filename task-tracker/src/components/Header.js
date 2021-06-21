//Importing react used to be required for every component.
// It's actually no longer required. :)

//By adding in the {}, we destructure the object which was passed in, so we're now able to directly use the key, compared to before when we called the object then the key..(props.name)
const Header = ({ name }) => {

  return (
    <div>
      <h1>Hey! {name}, did you know about this?</h1>
    </div>
  )
}

Header.defaultProps = {
  name: 'Bot',
  actions: 'Stand',
  emotion: 'Robot'
}

export default Header
