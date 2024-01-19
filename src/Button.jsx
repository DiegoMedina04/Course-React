import PropTypes from 'prop-types'

function x () {
  console.log('hola mundo')
}

export function Button ({ text, name }) {
  return (
    <button onClick={x}>
      {text}- {name}
    </button>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired
}
Button.defaultProps = {
  name: 'without user'
}
