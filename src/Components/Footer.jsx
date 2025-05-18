import { Link } from "react-scroll";
import footerStyle from "../assets/Footer.module.css";
function Footer() {
  return (
    <footer className={`text-white pt-5 pb-4 ${footerStyle.footerCotaniner}`}>
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">AMG LEGAL SOLUTIONS</h5>
            <p>
              Trusted legal advice for individuals and businesses. Serving with
              integrity and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="">
                <Link
                  to="Home"
                  smooth={true}
                  duration={500}
                  className="text-white text-decoration-none"
                  offset={-132}
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  to="Practices"
                  smooth={true}
                  duration={500}
                  className="text-white text-decoration-none"
                >
                  Practices
                </Link>
              </li>
              <li className="">
                <Link
                  to="StandoutFeatures"
                  smooth={true}
                  duration={500}
                  className="text-white text-decoration-none"
                >
                  About us
                </Link>
              </li>
              <li className="">
                <Link
                  to="OurPeople"
                  smooth={true}
                  duration={500}
                  className="text-white text-decoration-none"
                >
                  Our people
                </Link>
              </li>
              <li className="">
                <Link
                  to="Opportunities"
                  smooth={true}
                  duration={500}
                  className="text-white text-decoration-none"
                >
                  Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>8, Akshar society, SBI
              colony, Near Taware colony, Aranyeshwar, Pune-411009
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              amglegalsolutions@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>+91 9930808005
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>+91 9175987713
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 border-top pt-3">
        <small>&copy; {new Date().getFullYear()} AMG LEGAL SOLUTIONS</small>
      </div>
    </footer>
  );
}

export default Footer;
