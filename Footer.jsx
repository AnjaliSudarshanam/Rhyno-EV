// import React from 'react';
import {Link,NavLink} from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="bg-[#131313] text-white text-center text-lg-start font-poppins">
      <div className="container p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center p-3">
          <div className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Policies</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Refund policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Website policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <NavLink to="/contact" className="text-white hover:text-gray-400">
                  Contact us
                </NavLink>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-400">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/company/rhyno-ev"
                  className="text-white hover:text-gray-400"
                >
                  Career
                </Link>
              </li>
              <li>
                <NavLink to="/rentals" className="text-white hover:text-gray-400">
                  Rentals
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Social</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link
                  to="https://www.instagram.com/rhyno_ev"
                  className="text-white hover:text-gray-400"
                >
                  <i
                    className="fab fa-instagram"
                    style={{ color: "#E4405F" }}
                  ></i>{" "}
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/company/rhyno-ev"
                  className="text-white hover:text-gray-400"
                >
                  <i
                    className="fab fa-linkedin-in"
                    style={{ color: "#0077B5" }}
                  ></i>{" "}
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        &copy; 2024 Rhyno EV
      </div>
    </footer>
  );
}
