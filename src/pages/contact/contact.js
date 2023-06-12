import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";

const Contact = () => {
  const [userdata, setUserdata] = useState([]);
  const [id, setId] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [college, setCollege] = useState();
  const [branch, setBranch] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [eshow, esetShow] = useState(false);
  const ehandleClose = () => esetShow(false);

  const ehandleShow = (id) => {
    console.log(userdata[id].id, "jdhsajfh");
    setId(userdata[id].id);
    setName(userdata[id].name);
    setEmail(userdata[id].email);
    setAddress(userdata[id].address);
    setCollege(userdata[id].college);
    setBranch(userdata[id].branch);
    esetShow(true);
  };

  const navigate = useNavigate();

  const getData = async () => {
    const result = await axios.get("http://localhost:8000/posts");
    console.log(result.data, "jkljlhjl");
    setUserdata(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const results = await axios.delete(`http://localhost:8000/posts/${id}`);
    alert("Delete successfully");
    getData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = { name, email, address, branch, college };
    const result = await axios.post("http://localhost:8000/posts", obj);
    console.log(result.data, "sgshg");
    setShow(false);
    getData();
  };

  const obj = { name, email, address, branch, college, id };

  const handleUpdateSubmit = async () => {
    const result = await axios.put(`http://localhost:8000/posts/${id}`, obj);
    console.log(result.data, "skfjskfj");
    esetShow(false);
    getData();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            <h3>User Registration</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>College</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setCollege(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={(e) => setBranch(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={eshow} onHide={ehandleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            <h3>edit Registration</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>College</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ehandleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={(e) => handleUpdateSubmit(e)}>
            edit User
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover variant="dark" className="text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>college</th>
            <th>branch</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((items, index) => {
            return (
              <>
                <tr>
                  <th>{items.id}</th>
                  <th>{items.name}</th>
                  <th>{items.email}</th>
                  <th>{items.address}</th>
                  <td>{items.college}</td>
                  <td>{items.branch}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(items.id)}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => ehandleShow(items.id)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button variant="success" onClick={handleShow}>
                      Add User
                    </Button>

                    {/* () => handleDelete(items.id) */}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Contact;


