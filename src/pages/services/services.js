import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Services = () => {
  const [user, setUser] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const getServices = async () => {
    const result = await axios.get("http://localhost:8000/posts");
    setUser(result.data);
  };

  useEffect(() => {
    getServices();
  }, []);

  //Ger Current Data
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = user.slice(firstIndex, lastIndex);
  const npage = Math.ceil(user.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleDelete = async (id) => {
    const result = await axios.delete(`http://localhost:8000/posts/${id}`);
    alert("delete successfully");
    getServices();
  };

  function previewPages() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changePages(id) {
    console.log(id, "ahahfakjhnf");
    setCurrentPage(id);
  }
  function nextPages() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <Table
        size="sm"
        variant="dark"
        striped
        bordered
        hover
        className="text-center"
      >
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>College</th>
            <th>Branch</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((items, i) => {
            return (
              <tr key={i}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.address}</td>
                <td>{items.college}</td>
                <td>{items.branch}</td>

                <td>
                  <Button variant="success">
                    <Link
                      className="text-decoration-none text-white"
                      to={`/edit/${items.id}`}
                    >
                      Edit
                    </Link>
                  </Button>
                </td>
                <td>
                  <Button variant="info" className="text-white">
                    <Link
                      className="text-decoration-none text-white"
                      onClick={() => handleDelete(items.id)}
                    >
                      Delete
                    </Link>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <nav className="d-flex justify-content-center pt-4">
        <ul className="pagination">
          <li className="page-item  " > 
            <Link href="/" className="page-link   "   onClick={previewPages} >
              Previous
            </Link>
          </li>

          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : " "}`}
              key={i}
              
            >
              <Link
                href="/"
                className="page-link"
                onClick={() => changePages(n)}
              >
                {n}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <Link href="/" className="page-link   " onClick={nextPages}>
              Previous
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Services;
