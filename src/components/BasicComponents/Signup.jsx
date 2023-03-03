import { library } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";
import {
  faLock,
  faMailBulk,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signup.css";
import { useState } from "react";
import { faContactBook } from "@fortawesome/free-regular-svg-icons";

export const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const options = [
    { label: "--Select Role--", value: "", disabled: true },
    {
      label: "Admin",
      value: "admin",
    },
    {
      label: "User",
      value: "user",
    },
  ];
  return (
    <form action="" className="sign-up-form">
      <h3>Sign up</h3>

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
      <div className="input-field">
        <FontAwesomeIcon className="icon" icon={faPhone} />
        <input type="number" placeholder="Contact" />
      </div>

      <div className="input-field">
        <FontAwesomeIcon className="icon" icon={faMailBulk} />
        <input type="email" placeholder="Email" />
      </div>

      <div className="input-field role">
        <select
          className="role"
          value={role}
          name="roles"
          id="roles"
          onChange={(e) => setRole(e.target.value)}
        >
          {options.map((option) => {
            return (
              <option disabled={option.disabled} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>

      <input type="submit" className="btn solid" />
    </form>
  );
};
