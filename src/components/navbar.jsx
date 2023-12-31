import React from "react";

const Navbar = () => {
  return (
    <div className="my-2">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand fw_500 fs_18" href="#">
          Milton
        </a>
        <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto fs_18 fw_500  text-secondary">
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto fs_18 fw_500">
            <li className="nav-item  mb-3 mb-lg-0">
              <a
                className="nav-link bg_gray text-dark px-3 py-2 rounded-3 mx-2 "
                href="#"
              >
                Log In
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link bg-dark text-light px-3 py-2 rounded-3 mx-1 "
                href="#"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
