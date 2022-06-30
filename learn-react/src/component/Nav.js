import '../App.css';
import logo from '../logo.svg'
import { Link } from 'react-router-dom';
const Nav = () => {
    return(
        <nav className = 'nav-element'>
      {/* <h1>Heading</h1> */}
      <img src={logo} width="100" alt="logo" className="App-logo"/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
)};

export default Nav;
