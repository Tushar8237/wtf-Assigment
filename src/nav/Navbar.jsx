import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <div className="left_section">
          <Link to="/" className="nav_component home_logo">
            WTF
          </Link>
        </div>
        <div className="mid_section">
          <Link to="/fitness" className="nav_component">
            Fitness
          </Link>
          <Link to="/nutrition" className="nav_component">
            Nutrition
          </Link>
          <Link to="/gyms" className="nav_component">
            Gyms
          </Link>
          <Link to="/partner" className="nav_component">
            Partner
          </Link>
          <Link to="/aboutus" className="nav_component">
            AboutUs
          </Link>
          <Link to="/login" className="nav_component">
            <button className="login_btn">Log In</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
