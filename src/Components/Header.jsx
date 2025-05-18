import { Link } from "react-scroll";
import headerStyle from "../assets/Header.module.css";
function Header() {
  return (
    <div className={`${headerStyle.navigation}`}>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light py-3 px-3 px-md-5 shadow-sm ${headerStyle.nav}`}
      >
        <div className="container-fluid p-0">
          <a className={`navbar-brand ${headerStyle.brandHeader}`} href="#">
            AMG LEGAL SOLUTIONS
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="Home"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  offset={-132}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Practices"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Practices
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="StandoutFeatures"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="OurPeople"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Our people
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Opportunities"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Opportunities
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
