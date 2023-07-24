import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="row mt-5">
      <h4 className="text-center">Sign In</h4>
      <form className="col-12 col-md-4 col-lg-4 mx-auto">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit" className="btn btn-warning  w-100">Submit</button>

        <p>
          Not registerd? <Link to="/sign-up">sign-up here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
