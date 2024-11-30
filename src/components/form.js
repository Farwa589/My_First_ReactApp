import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./form.css";



function Login() {
  const navigate = useNavigate();
  
  const correctCredentials = {
    email: "abc@gmail.com",
    password: "123456",
  };

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === correctCredentials.email && password === correctCredentials.password) {
      setMessage("Login successfully!");
      navigate("/Homescreen"); 

    } else {
      setMessage("Login failed!");
    }
  };

  return (
    <div className="login-container"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "250px", 
    }}
    > 

      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && (
        <p className={message === "Login successfully!" ? "success" : "failure"}>
          {message}
        </p>
      )}
       </div>
  );
}

export default Login;

