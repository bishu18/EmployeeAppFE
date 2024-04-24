import axios from "axios";
import React, { useEffect, useState } from "react";

const Project = () => {
  const [project, setProject] = useState(null);
  const [manager, setManager] = useState(null);
  // const [employeeId, setEmployeeId] = useState();


  const role = localStorage.getItem('role');
  console.log(role);
  
  useEffect(() => {if(role =="MANAGER"){
    setManager("true");
    console.log(manager);
  }})
  
  // else{
  //   setManager("false");
  // }

  return (
    

    <div className="main-container">
      {(() => {
        if (role=="MANAGER") {
          return (
            <div className="main-container">
      <h2>Add Project</h2>
      <div className="card">
        <div className="card-body">
          <table>
            <tbody>
              <tr>
                <td>Project Name</td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                  />
                </td>
              </tr>
              <tr>
                <td>Project Description</td>
                <td>:</td>
                <td> <input
                    type="text"
                    name="description"
                  /></td>
              </tr>
            </tbody>
          </table>
          <button
           
          >
            Submit
          </button>
        </div>
      </div>
    </div>
          )
        } else {
          return (
            <div>catch all</div>
          )
        }
      })()}
      <table>
        <thead>
          
          <tr>
            <th>Project Id</th>
            <th>Project Name</th>
            <th>Project Description</th>
          </tr>
        </thead>
        <tbody>
          {/* {project.map((p, index) => {
            console.log(p);
            return (
              

              <tr key={index}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.description}</td>
              </tr>
            );
          })} */}
        </tbody>
        <tbody>
          <tr>
            <td>2</td>
            <td>Demo 2</td>
            <td>Demo Description 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Project;
