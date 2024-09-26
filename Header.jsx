// import React from 'react';

// import { FaInstagram } from "react-icons/fa";
import {Link,NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div className="bg-[#131313] text-white font-poppins">
      <nav className="fixed top-0 w-full bg-[#131313] shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a className="text-white" href="#">
            <img src="./assets/RhynoLogo.png" alt="Logo" className="h-10" />
          </a>
          <button
            className="lg:hidden text-white"
            onClick={() => {
              const nav = document.getElementById('mobile-menu');
              nav.classList.toggle('hidden');
            }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ul className="flex flex-col lg:flex-row lg:space-x-4">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-white" href="#">
                  About us
                </NavLink>
              </li>
              <li className="nav-item dropdown relative">
                <a
                  className="nav-link cursor-pointer text-white"
                  onClick={() => {
                    const dropdown = document.getElementById('dropdown');
                    dropdown.classList.toggle('hidden');
                  }}
                >
                  Products
                </a>
                <ul className="dropdown-menu absolute hidden bg-[#131313] text-white shadow-lg" id="dropdown">
                  <li>
                    <NavLink to="/SE03lite" className="dropdown-item block px-4 py-2 hover:bg-gray-700" href="#">
                      SE03 Lite
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/SE03" className="dropdown-item block px-4 py-2 hover:bg-gray-700" href="#">
                      SE03
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/SE03max" className="dropdown-item block px-4 py-2 hover:bg-gray-700" href="#">
                      SE03 Max
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/compare"className="dropdown-item block px-4 py-2 hover:bg-gray-700" href="#">
                      Compare all
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-white" href="#">
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/payment" className="nav-link text-white" href="#">
                  Pre-book now
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  to="https://www.instagram.com/yourcompany"
                  className="nav-link text-white"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" style={{ color: "#E4405F" }}></i> Instagram
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="https://www.linkedin.com/company/company-name"
                  className="nav-link text-white"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" style={{ color: "#0077B5" }}></i> LinkedIn
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
