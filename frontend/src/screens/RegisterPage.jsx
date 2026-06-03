import React from "react";
import "./RegisterPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useRegisterUserMutation} from "../slices/userApiSlice"

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser] = useRegisterUserMutation()

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      let data = await registerUser({name,email,password}).unwrap()
      navigate('/login')
    } catch (error) {

    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-card">
          <h2>Create Account</h2>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
             Register
            </button>
          </form>

          <p className="register-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;