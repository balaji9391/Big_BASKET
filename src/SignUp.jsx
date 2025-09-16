import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./store"; // import action
import "./SignUp.css";

function SignUp() {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");

  const handleSignUp = (data) => {
    const userDetails = { userName: data.userName, password: data.password };
    dispatch(addUser(userDetails));
    alert("Signup successful ✅");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2 className="signup-title">Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit(handleSignUp)}>
          <input type="text" placeholder="Enter Username" {...register("userName", { required: "Username is required" })} />
          {errors.userName && <p className="error">{errors.userName.message}</p>}

          <input type="password" placeholder="Enter Password" {...register("password", { required: "Password is required" })} />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: "Confirm password is required", validate: value => value === password || "Passwords don't match" })} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="signin-text">
          Already have an account? <Link to="/signin" className="signin-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;




/* import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useDispatch } from "react-redux";

function SignUp() {

  const dispatch=useDispatch();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");
  
  const handleSignUp = (data) => 
    {
      const userDetails = {
      userName: data.userName,
      password: data.password,
      };
      dispatch(addUser(userDetails));
      console.log("signup Data:", data);
      alert("Signup successful");
  };



  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2 className="signup-title">Create an Account</h2>

        <form className="signup-form" onSubmit={handleSubmit(handleSignUp)}>
          <input
            type="text"
            placeholder="Enter Username"
            {...register("userName",{ required:"Username is required" })}
          />
          {errors.userName && <p className="error">{errors.userName.message}</p>}

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password",{ required:"Password is required" })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required:"Confirm password is required",
              validate:(value)=> value === password || "Passwords don't match"
            })}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="signin-text">
          Already have an account? <Link to="/Signin" className="signin-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
 */
