import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import employeeService from "../services/employee-service";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    branch: "",
    college: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { name, email, address, branch, college } = user;

  const navigate = useNavigate();

  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  //   employeeService.create(user)
  //   .then((response) => {
  //     navigate("/services");
  //   })
  // };

  const handlesubmit = async (e) => {
    e.preventDefault();
    // const obj = { name, email, address, college, branch };
    const result = await axios.post("http://localhost:8000/posts", user);
    console.log(result.data);
    navigate("/services");
  };

  return (
    <>
      <div className="wrapper bg-danger pt-4 ">
        <div className="container-fluid wrapper_login  w-50  bg-warning ">
          <div className="row w-100 pt-4  pb-4">
            <h1 className="text-center mt-3 mb-3  "> &nbsp; &nbsp; Register</h1>

            <div className="mb-5 text-center">
              <label className="mt-4 ">Name</label> &nbsp; &nbsp; &nbsp; &nbsp;
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />
              <label>Email</label>&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />
              <label>Add</label>&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />
              <label>college</label>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                name="college"
                value={college}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />
              <label>Branch</label>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                name="branch"
                value={branch}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />
              <button className="btn btn-success" onClick={handlesubmit}>
                Save
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/" className="btn btn-danger">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
