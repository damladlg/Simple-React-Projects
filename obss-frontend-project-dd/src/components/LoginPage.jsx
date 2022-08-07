import React, { useState } from "react";
import "./../assets/css/login.css";

async function loginUser(credentials) {
  console.log(JSON.stringify({ user: credentials }));
  return fetch("https://api.realworld.io/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: credentials }),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username + password);
    const response = await loginUser({
      email: username,
      password: password,
    });
    console.log(response.user.token);
    localStorage.setItem("accessToken", response.user.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    window.location.href = "/profile";
  };

  return (
    <div className="login-wrapper">
      <h1>Sign in</h1>
      <p>Need an acount?</p>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="email" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}
