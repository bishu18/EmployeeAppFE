import axios from "axios";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  
  async function updatePassword() {
   
      const data = { username, password };
      console.log(data);

      await axios
        .put("http://127.0.0.1:8080/forgotPassword", data)
        .then((res) => {
            console.log(res.data);
            navigate("/")
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
                placeholder="Username or Email"
                name="username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="New Password"
                name="newPassword"
                required
                onChange={(e) => setPassword(e.target.value)}
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
                updatePassword();
              }}
              type="submit"
            >
              Login
            </button>
          </form>
      
        
      </div>
        
     );
}
 
export default ForgotPassword;