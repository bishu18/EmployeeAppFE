import { useRef, useState } from "react";
import axios from "axios";

import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./EmpLogin.css";

const EmpLogin = () => {
  let usernameOrEmail = useRef();
  let password = useRef();
  let otp = useRef();
  let [firstVerify, setFirstVerify] = useState(false);
  let navigate = useNavigate();

  function forgotPassword() {
    navigate("/forgotPassword");
  }

  async function handleLogin() {
    if (!firstVerify) {
      let data = {
        username: usernameOrEmail.current.value,
        password: password.current.value,
      };

      console.log(data.username);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8080/employeeLogin",
        headers: {
          usernameOrEmail: data.username,
          password: data.password,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          setFirstVerify(true);
          localStorage.setItem("otp", response.data.message);
          localStorage.setItem("email", response.data.data.email);
          localStorage.setItem("role", response.data.data.employee.role);
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.message);
        });
    } else {
      let storedOtp = localStorage.getItem("otp");
      if (otp.current.value == storedOtp) navigate("/login");
      else alert("invalid otp try again");
    }
  }

  return (
    <div className="main-container">
      <div className="wrapper">
        {!firstVerify && (
          <form action="">
            <h1>Employee Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username or Email"
                name="username"
                required
                ref={usernameOrEmail}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                ref={password}
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                remember me
              </label>
              <a onClick={forgotPassword}>Forgot password?</a>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              type="submit"
            >
              Login
            </button>
          </form>
        )}
        {firstVerify && (
          <form className="login-form">
            <h2>OTP Verification </h2>
            <input type="text" name="otp" placeholder="000000" ref={otp} />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmpLogin;
