import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const LoginComponent = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // Dummy : username : om
    // Dummy : password : 123
    event.preventDefault(); //stops default redirection
    // console.log(event.target.value)
    if (username === "om" && password === "123") {
      // console.log("Logged in successfully")
      setFailedLogin(false);
      navigate("/home");
    } else {
      setFailedLogin(true);
    }
  };

  return (
    <div className="whole" id="whole">
      <div className="form-container login-container">
        {failedLogin && (
          <div className="alert alert-warning">Invalid Credentials</div>
        )}

        <form onSubmit={handleSubmit}>
          <h2 className="title">Login</h2>
          <input
            type="text"
            className="username form-control-sm"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />

          <input
            type="password"
            className="password form-control-sm"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button type="submit" className="btn btn-success form-control-sm">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
