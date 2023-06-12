import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employee-service";
import axios from "axios";

const Update = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    college: "",
    branch: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { name, email, address, college, branch } = user;

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   employeeService.update(user).then((items) => {
  //     navigate("/services");
  //   });
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/posts/${id}`, user);
    navigate("/services");
  };

  useEffect(() => {
    // eslint-disable-next-line
    loadUser();
  }, []);

  // const loadUser = () => {
  //   employeeService.get(id).then((resp) => {
  //     setUser(resp.data);
  //   });
  // };

  const loadUser = async () => {
    const resp = await axios.get(`http://localhost:8000/posts/${id}`);
    setUser(resp.data);
  };

  return (
    <>
      <div className="wrapper bg-danger pt-4 ">
        <div className="container-fluid wrapper_login  w-50  bg-warning ">
          <div className="row w-100 pt-4  pb-4">
            <h1 className="text-center mt-3 mb-3  "> &nbsp; &nbsp; Update</h1>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-5 text-center">
                <br />
                <label className="mt-4 ">Name</label> &nbsp; &nbsp; &nbsp;
                &nbsp;
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
                <label>Address</label>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => onInputChange(e)}
                />
                <br />
                <br />
                <label>College</label>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
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
                <button className="btn btn-success" >
              Update
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
