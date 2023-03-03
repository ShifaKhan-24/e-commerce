import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./signin.css";

export const Signin = () => {
  const navigate = useNavigate();
  return (
    <form action="" className="sign-in-form">
      <h3>Sign in</h3>

      <div className="input-field">
        <FontAwesomeIcon className="icon" icon={faUser} />
        <input type="text" placeholder="Username" />
      </div>

      <div className="input-field">
        <FontAwesomeIcon
          className="icon"
          icon={faLock}
          color="#acacac"
          fontSize={"1.1rem"}
        />
        <input type="password" placeholder="Password" />
      </div>

      <input type="submit" className="btn solid" />

      <p classname="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </form>
  );
};
