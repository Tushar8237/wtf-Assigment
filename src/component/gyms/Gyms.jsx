import React, { Fragment } from "react";
import "./Gyms.css";
import fitness3 from "../../asset/fitness3.jpg";
import Gym_card from "./gymCard/GymCard";

const Gyms = () => {
  return (
    <Fragment>
      <div className="gym_div">
        <img src={fitness3} alt="fit" />
      </div>

      <div className="gym_section">
        <input type="text" placeholder="Search" className="search_input" />

        <div className="main_container">
          <div className="filter_container">
            <h2>Filter</h2>
            <h4>Location</h4>
            <input type="text" placeholder="enter location" />
            <h4>Price</h4>
            <div className="gym_price">
              <input type="text" placeholder="Min" />
              <input type="text" placeholder="Max" />
            </div>

            <h4>Choose City</h4>
            <select id="Cities" name="Cities" className="choose_city">
              <option value="volvo">Uttar pradesh</option>
              <option value="saab">Mumbai</option>
              <option value="fiat">Delhi</option>
              <option value="audi">Haryana</option>
            </select>
          </div>

          <div className="div2">
            <Gym_card />
          </div>
        </div>
      </div>
      <div className="fitness_container">
        <div className="ftw_experience">
          <h1>WTF Fitness Experience ?</h1>
          <hr />
          <h3> @ your regular gym cost?</h3>
        </div>
        <div className="ftw_facilities">
          <div>Modern Equipments</div>
          <div> Skilled Trainer</div>
          <div> Top class Ambiance</div>
          <div> Sanitized GYMS</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gyms;
