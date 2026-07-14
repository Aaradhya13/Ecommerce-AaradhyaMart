import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Forgot Password - AaradhyaMart">
      <div className="form-container">
        <div className="auth-card">
          <div className="auth-logo">🔒</div>
          <h4 className="title">Reset Password</h4>
          <p className="auth-subtitle">Enter your details to set a new password</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Security Question: What is your favorite sport?</label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                placeholder="Your answer"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                placeholder="Enter new password"
                required
              />
            </div>

            <button type="submit" className="btn-auth">
              Reset Password
            </button>
          </form>

          <p className="auth-footer">
            Remembered it? <Link to="/login">Back to Sign In</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
