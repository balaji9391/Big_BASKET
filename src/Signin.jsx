import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { details } from "./store"; // ✅ import action from store.js
import { useNavigate } from "react-router-dom";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedInUser = useSelector(state => state.userlogin.loggedInUser);
  const loginError = useSelector(state => state.userlogin.error);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = (data) => {
    dispatch(details({ userName: data.userName, password: data.password }));
  };

  // ✅ Redirect on successful login
  useEffect(() => {
    if (loggedInUser) {
      alert("Login successful 🎉");
      navigate("/"); // redirect to home page
    }
  }, [loggedInUser, navigate]);

  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <h2 className="signin-title">Sign In</h2>
        <form className="signin-form" onSubmit={handleSubmit(handleLogin)}>
          <input
            type="text"
            placeholder="Enter Username"
            {...register("userName", { required: "Username is required" })}
          />
          {errors.userName && <p className="error">{errors.userName.message}</p>}

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          {loginError && <p className="error">{loginError}</p>}

          <button type="submit" className="signin-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
