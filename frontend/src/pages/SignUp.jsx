import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api_base_url } from "../helper";
import logo from "../assets/logo.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    fetch(api_base_url + "/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/login");
        } else {
          setError(data.msg);
        }
      })
      .catch((err) => {
        console.log("Fetch error:", err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#070707]">
      <form
        onSubmit={submitForm}
        className="w-[26vw] bg-[#0f0f0f] rounded-2xl p-5 flex flex-col items-center"
      >
        <img
          src={logo}
          alt="logo"
          className="w-[240px] h-[100px] object-contain mb-4"
        />

        <div className="w-full">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <p className="text-gray-400 text-[14px] mt-3">Username</p>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-[#2a2a2a] text-white outline-none"
          />

          <p className="text-gray-400 text-[14px] mt-3">Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-[#2a2a2a] text-white outline-none"
          />

          <p className="text-gray-400 text-[14px] mt-3">Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-[#2a2a2a] text-white outline-none"
          />

          <p className="text-gray-400 text-[14px] mt-3">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-[#2a2a2a] text-white outline-none"
          />

          <p className="text-[14px] text-gray-400 mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600">
              Login
            </Link>
          </p>

          <button type="submit" className="btnNormal mt-3 w-full">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;