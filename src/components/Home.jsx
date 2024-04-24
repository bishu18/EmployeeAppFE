import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Headers from "./Headers";
import Profile from "./Profile";
import {
  BsCalendar2,
  BsFillBellFill,
  BsFillGrid3X3GapFill,
  BsListTask,
} from "react-icons/bs";

const Home = (props) => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      {/* {console.log(project.project)} */}

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>TASKS</h3>
            <BsListTask className="card_icon" />
          </div>
          <h1>15</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>PROJECTS</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{props.project}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>LEAVES</h3>
            <BsCalendar2 className="card_icon" />
          </div>
          <h1>{props.leave}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>10</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
