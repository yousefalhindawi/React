import logo from '../logo.svg';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
const Header = ({ onChecked, checked }) => {
    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={logo} className="App-logo" alt="logo" width="100"/>
              </Link>
              {/* <a className="navbar-brand" href="yousef">
                <img src={logo} className="App-logo" alt="logo" width="100"/>
              </a> */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link  ${checked && "yousef"}`}
                      aria-current="page"
                      to="/" onClick = {onChecked}>
                      Home
                    </NavLink>
                    {/* <a
                      className="nav-link "
                      aria-current="page"
                      href="/">
                      Home
                    </a> */}
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                    {/* <a className="nav-link" href="/about">
                      About
                    </a> */}
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                    {/* <a className="nav-link" href="/contact">
                      Contact
                    </a> */}
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/counter">
                      Counter
                    </NavLink>
                    
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
      );
}
export default Header;