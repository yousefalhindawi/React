import "../App.css";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-element">
      <div>
      <img src={logo} width="100" alt="logo" className="App-logo" />
      <span style={{ color:'#61dafb' }}>React Movies</span></div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
