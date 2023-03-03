import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Signin } from "./signin";
import "./loginregister.css";
import { Signup } from "./Signup";
export const LoginRegister = (props) => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="sigin-signup">
          <Signin />
          <Signup />
        </div>
      </div>

      {/* <div className="panels-container">
        <div className="panel left-plane">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              veniam similique minima!
            </p>
            <button classname="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>

        
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="image/img1.png" class="image" alt="" />
        </div>
      </div> */}
    </div>
  );
};
