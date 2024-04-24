import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmpLogin from "./components/EmpLogin";
import CreateEmployee from "./components/CreateEmployee";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import ForgotPassword from "./components/ForgotPassword";

import Home from "./components/Home";
import Headers from "./components/Headers";
import { BsDisplay } from "react-icons/bs";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Project from "./components/Project";
import Account from "./components/Account";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<EmpLogin />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
      </Routes> */}

      <div className="grid-container">
        <Headers OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />

        <Routes>
          <Route path="/" element={<EmpLogin />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/editProfile" element={<EditProfile />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
