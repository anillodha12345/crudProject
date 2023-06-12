import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import card from "./../../../asset/card-image.gif";
import "./header.css";
import { MdDelete } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";

import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../../../redux/action/action";

const Header = () => {
  const [prices, setPrice] = useState();

  const getdata = useSelector((state) => state.cardreducer.carts);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Remove = (id) => {
    dispatch(DELETE(id));
  };
  const Total = () => {
    let price = 0;
    getdata.map((items) => {
      price = items.price * items.qnty + price;
    });
    setPrice(price, "shfshfshf");
  };
  useEffect(() => {
    Total();
  }, [Total]);

  return (
    <Navbar bg="light" expand="lg" className="mt-3 mb-3 ">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="d-flex justify-content-center  navbarcollapse"
        >
          <Nav>
            <NavLink to="/" className="text-decoration-none mx-3 text-black"><AiTwotoneHome/>
              Home
            </NavLink>
            <NavLink to="/services" className="text-decoration-none mx-3 text-black">
              Services
            </NavLink>
            <NavLink to="/features" className="text-decoration-none mx-3 text-black">
              Features
            </NavLink>
            <NavLink to="/category" className="text-decoration-none mx-3 text-black">
              Category
            </NavLink>
            <NavLink to="/about" className="text-decoration-none mx-3 text-black">
              About
            </NavLink>
            <NavLink to="/contact" className="text-decoration-none mx-3 text-black">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Row>
          <Col>
          
            <div>
              <Button variant="danger">
                <Link to="/login" className="text-decoration-none text-white">
                  Login
                </Link>
              </Button>
            </div>
          </Col>
          <Col className="mx-3">
            <div>
              <Button variant="warning">
                <Link
                  to="/register"
                  className="text-decoration-none text-white"
                >
                  Register
                </Link>
              </Button>
            </div>
          </Col>

          <Col className="mx-5 my-2">
            <Badge
              badgeContent={getdata.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FaShoppingCart size={25} />
            </Badge>
          </Col>
        </Row>
      </Container>
      <Menu
        id="basic-menu"
        className="mt-3 "
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getdata.length ? (
          <div className="card_details " style={{ width: "25rem", padding: 10 }}>
            <div className="container">
              <div className="row">
                <div className="col-md-6"> <th className="px-5">Photo</th></div>
                <div className="col-md-6"> <th className="px-3">Restaurant</th></div>


              </div>

            </div>
            <Table className="text-center mt-3 ">
              <thread className="d-flex">
              </thread>
              <tbody>
                {getdata.map((product, key) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <NavLink to={`/card/${product.id}`}>
                            <img
                              src={product.imgdata}
                              style={{ width: "8rem", height: "8rem" }}
                            />
                          </NavLink>
                        </td>
                        <td>
                          
                          <p>{product.rname}</p>
                          <p>
                            {" "}
                            <b>Price : </b>
                            <span>₹ </span>
                            {product.price}
                          </p>
                          <p>Quatity : {product.qnty} </p>
                          {/* <p  onClick={() => Remove(product.id)}></p> */}
                        </td>

                        <td onClick={() => Remove(product.id)}>
                          <MdDelete size="30" className="text-danger" />
                        </td>
                      </tr>

                      <i className="fas fa-trash smalltrash"></i>
                    </>
                  );
                })}
                <p className="text-center">
                  <b>Price : </b> <span>₹ </span> {prices}
                </p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div className=" mt-3 mb-2 card_details d-flex justify-content-center  card_style " style={{width:"360px"}}>
            <AiOutlineClose
              className="smallclose  card_position"
              onClick={handleClose}
            />
            <p  className="mt-2 mx-5" style={{ fontSize: 18 }}> Your Card Is Empty</p>
            <img
              src={card}
              className="emptycart_img"
              style={{ width: "3rem", height:"3rem", }}
            />
          </div>
        )}
      </Menu>
    </Navbar>
  );
};

export default Header;
