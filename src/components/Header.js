import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd} />
            {/* <h1 style = {{ color: 'red', backgroundColor: 'black'}}>{title}</h1> inline styling */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired, //assigning type to react props and making it required
}

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// } // alternative much more organized inline styling

export default Header
