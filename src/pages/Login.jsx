

import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/style.css"; 
import { API_DUMMY } from "../utils/Baseurl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    
    document.body.classList.add('login-register-background');


    return () => {
      document.body.classList.remove('login-register-background');
    };
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(`${API_DUMMY}/api/user/login`, {
        email: email,
        password: password,
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil Login!",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/Customer");
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Periksa kembali email dan password Anda",
      });
      console.log(error);
    }
  };

  return (
    <div className="m-10 w-full max-w-xs bg-white p-8 rounded shadow-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
        </div>
      </form>
      <p className="text-center">
        Belum punya akun? <a href="/register" className="text-blue-500">Register</a>
      </p>
    </div>
  );
};

export default Login;
