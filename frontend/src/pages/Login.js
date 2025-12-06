import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"; // axios instance

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });

      // Save token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Automatically redirect to first module dashboard
      if (res.data.modules && res.data.modules.length > 0) {
        const firstModule = res.data.modules[0];
        navigate(firstModule.module_path); // Redirect to user's module dashboard
      } else {
        setError("No module assigned to this user.");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={loginUser}
        className="p-4 border rounded bg-white"
        style={{ width: "350px" }}
      >
        <h3 className="text-center mb-3">Login</h3>

        {error && <p className="text-danger">{error}</p>}

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}
