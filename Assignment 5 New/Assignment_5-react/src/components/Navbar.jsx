import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{ backgroundColor: '#333', padding: '10px 20px' }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/events" style={linkStyle}>Events</Link>
            <Link to="/clubs" style={linkStyle}>Clubs</Link>
            <Link to="/about" style={linkStyle}>About</Link>
        </nav>
    )
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '20px',
    fontSize: '16px',
}

export default Navbar
