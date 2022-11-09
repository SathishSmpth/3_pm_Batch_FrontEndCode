import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <h3 className="navbar-brand">Assignment 2(Backend Technical Task)</h3>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"><h3>Login</h3></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;