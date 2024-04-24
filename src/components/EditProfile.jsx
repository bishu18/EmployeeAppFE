import React, { useRef, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./Home";

const EditProfile = () => {
  let email = localStorage.getItem("email");
  let role = localStorage.getItem("role");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  let navigate = useNavigate();
  const profileData = {
    name,
    email,
    phone,
    gender,
    dob,
  };
  console.log(profileData);

  async function saveProfile() {
    await axios
      .put("http://127.0.0.1:8080/updateProfile", profileData)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("role", res.data.data.role);
        navigate("/profile");
      })
      .catch((fail) => {
        console.error(fail.response.data.message);
        alert(fail.response.data.message);
      });
  }

  return (
    <div className="main-container">
      <h2>Edit Profile</h2>
      <div className="card">
        <div className="card-body">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>:</td>
                <td>
                  <input
                    type="tel"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Date of Joining</td>
                <td>:</td>
                {/* <td><input type="text" value={doj} /></td> */}
              </tr>
              <tr>
                <td>DOB</td>
                <td>:</td>
                <td>
                  <input
                    type="date"
                    name="dob"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={(e) => {
              e.preventDefault();
              saveProfile();
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
