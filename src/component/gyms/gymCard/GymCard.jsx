import React, { Fragment } from "react";
import "./GymCard.css";
import { data } from "../../../data";

const Gym_card = () => {
  return (
    <Fragment>
      {data.map((x) => (
        <a href="" className="gym_card">
          <div className="gym_container">
            <div className="gym_image"></div>

            <div className="gym_info">
              <div className="top">
                <h3 key={x.id}>{x.gymName}</h3>
                <h3>{x.rating}</h3>
                <h3>{x.address}</h3>
                <h3>{x.distance}</h3>
              </div>
              <div className="bottom">
                <span>{x.price}</span>
              </div>
            </div>

            <div className="book_btn">
              <button>Book Now</button>
            </div>
          </div>
        </a>
      ))}
    </Fragment>
  );
};

export default Gym_card;
