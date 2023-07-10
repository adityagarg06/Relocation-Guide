import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const [option, setOption] = useState("Student");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "opt") {
      setOption(value);
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const field in user) {
      if (user.hasOwnProperty(field) && user[field] === "") {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }
  };

  const PostData = async (e) => {
    e.preventDefault();
  
    const { username, email, country, password, confirmPassword } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        country,
        password,
        confirmPassword,
        option,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (!data || data.error === "Email already exists") {
      window.alert("Email already exists");
      setUser({ ...user, email: "" });
    } else if (data.error === "Passwords are not matching") {
      window.alert("Passwords are not matching");
    } else if (data.error === "Please fill in all the fields") {
      window.alert("Please fill in all the fields");
    } else {
      window.alert("SUCCESSFULL");
      navigate("/login");
    }
  };

  return (
    <div className="background">
      <div className="wrapper">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your name"
              required
              name="username"
              value={user.username}
              onChange={handleInput}
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your country"
              required
              name="country"
              value={user.country}
              onChange={handleInput}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Create password"
              required
              name="password"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              required
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInput}
            />
          </div>
          <select name="opt" id="opt" onChange={handleInput} value={option}>
            <option value="Student">Student</option>
            <option value="Resident">Resident</option>
          </select>
          <div className="input-box button">
            <input type="submit" value="Register Now" onClick={PostData} />
          </div>
          <div className="text">
            <h3>
              Already have an account?
              <a href="/login">Login now</a>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;