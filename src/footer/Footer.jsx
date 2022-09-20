import React, { Fragment } from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer_container">
        <div className="footer">
          <div className="social_link">
            <div>
              {" "}
              <AiOutlineInstagram className="instagram" />{" "}
            </div>
            <div className="face">
              {" "}
              <TiSocialFacebook />
            </div>
            <div className="link">
              {" "}
              <FaLinkedinIn />
            </div>
          </div>
          <div className="quick_link">
            <h1>Quick Links</h1>
            <p>About</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>WTF in News</p>
            <p>Terms & Condition</p>
            <p>Refund & Cancellation</p>
          </div>
          <div className="div3">
            <div className="explore_section">
              <h1>Explore</h1>
              <p>Arenas</p>
              <p>Studios</p>
              <p>Nutrition</p>
            </div>
          </div>
          <div className="div4">
            <div className="contact_section">
              <h1>Contact</h1>
              <p>
                {" "}
                <FaMapMarkerAlt className="icon" />
                Ro : S1502, Amrapali Silicon city, Sector 76, Noida, Uttar
                Pradesh, India{" "}
              </p>
              <p>
                <FaMapMarkerAlt className="icon" /> Ho : C-86 B, Ground Floor,
                Sector 8, Noida, Uttar Pradesh, India
              </p>
              <p>
                {" "}
                <BsTelephoneFill className="icon" /> +919090639005
              </p>
              <p>
                {" "}
                <IoMdMail className="icon" /> support@wtfup.me
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
