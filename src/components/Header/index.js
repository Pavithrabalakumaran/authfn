// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <ul className="nav-items">
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/about" className="nav-link">
        <li>About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
