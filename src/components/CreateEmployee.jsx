import React from "react";
import { useRef, useState } from "react";
import axios from "axios";

import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./EmpLogin.css";

const CreateEmployee = () => {
  let username = useRef();
  let password = useRef();
  let email = useRef();
  let navigate = useNavigate();

  async function handleLogin() {
    
      let data = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        
      };

      await axios
        .post(`http://127.0.0.1:8080/createEmployeeAccount`, data)
        .then((res) => {
          console.log(res);
          navigate("/profile")
        })
        .catch((fail) => {
          console.error(fail.response.data.message);
          alert(fail.response.data.message);
        });
    
  }

  return (
    <div className="wrapper">
      <form action="">
        <h1>Employee Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="username"
            name="username"
            required
            ref={username}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="email"
            name="email"
            required
            ref={email}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="password"
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
          <a href="#">Forgot password?</a>
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
    </div>
  );
};

export default CreateEmployee;
