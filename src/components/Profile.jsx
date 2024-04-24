import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import Headers from "./Headers";
import Home from "./Home";

const Profile = () => {
  const [emp, setEmp] = useState(null);
  const [leave, setLeave] = useState(100);
  const [project, setProject] = useState(0);

  let props = {
    leave:leave,
    project:project
    }
  const location = useLocation();
  let email = localStorage.getItem("email");
  let navigate = useNavigate();

  function editProfile() {
    navigate("/editProfile");
  }

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/getProfile?email=${email}`)
      .then((res) => {
        setEmp(res.data.data);
        console.log(res.data.data.projects.length);
        setProject(res.data.data.projects.length);
        setLeave(res.data.data.employeeLeaves[res.data.data.employeeLeaves.length-1].remainingLeave);
        console.log(res.data.data.employeeLeaves[res.data.data.employeeLeaves.length-1]);
      })
      .catch((fail) => {
        console.error(fail);
        alert(fail.response.data.message);
      });
  }, []);

  if (!emp) return null;

  return (
    <div className="main-container">
      <Home  {...props}/>
      <div className="profile">
        <h2>Personal Details</h2>
        <div className="profile-card">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{emp.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>{emp.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>:</td>
                <td>{emp.phone}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>:</td>
                <td>{emp.gender}</td>
              </tr>
              <tr>
                <td>Date of Joining</td>
                <td>:</td>
                <td>{emp.doj}</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>:</td>
                <td>{emp.dob}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
