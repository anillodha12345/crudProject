import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="wrapper bg-success pt-4 ">
        <div className="container-fluid wrapper_login  w-50  bg-warning ">
          <div className="row w-100 pt-4  pb-4">
            <h1 className="text-center mt-2 mb-3  "> &nbsp; &nbsp; Login</h1>
            <div className="mb-5 text-center">
              <label className="mt-4 ">Email</label> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
              <input type="text" />
              <br />
              <br />
              <label className="">Password</label>&nbsp; &nbsp;
              <input type="text" />
              <br />
              <br />
              <button className="btn btn-danger" >
              Login
              </button>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
