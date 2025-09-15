import React, { useState } from "react";
import { signup } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup(username, email, password);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="center-layout">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
