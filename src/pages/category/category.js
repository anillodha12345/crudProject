import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./category.css";
import { CgSearch } from "react-icons/cg";

import { ColorRing } from "react-loader-spinner";

const Category = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  let componentMounted = true;
  const getAllProduct = async () => {
    setLoading(true);
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data, "sfjsfk");

    if (componentMounted) {
      setData(result.data);
      setFilter(result.data);
      setLoading(false);
    }

    return () => {
      componentMounted = false;
    };
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="text-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const updatelist = data.filter((items) => items.category === cat);
      setFilter(updatelist);
    }, 500);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className=" col-lg-6   pt-4 pb-5 ui search ">
              <Button
                className="bg-white mx-2 border-secondary    text-black"
                onClick={loading ? <Loading /> : () => setFilter(data)}
              >
                All
              </Button>
              <Button
                className="bg-white mx-2  border-secondary text-black "
                onClick={
                  loading ? <Loading /> : () => filterProduct("men's clothing")
                }
              >
                Men's Clothing{" "}
              </Button>
              <Button
                className="bg-white mx-2  border-secondary  text-black"
                onClick={
                  loading ? (
                    <Loading />
                  ) : (
                    () => filterProduct("women's clothing")
                  )
                }
              >
                {" "}
                Women's Clothing{" "}
              </Button>
              <Button
                className="bg-white mx-2  border-secondary text-black "
                onClick={() => filterProduct("jewelery")}
              >
                {" "}
                Jewelery{" "}
              </Button>
              <Button
                className="bg-white mx-2 border-secondary text-black "
                onClick={() => filterProduct("electronics")}
              >
                Electronic
              </Button>
            </div>
            <div className="col-lg-6 mt-4 ui icon input  ">
              <div
                className="col-md-6 d-flex align-items-center "
                style={{ width: "auto" }}
              ></div>
            </div>
          </div>
        </div>

        <Row className="d-flex ">
          {filter.map((items) => {
            return (
              <Col className=" col-md-3  mb-4">
                <NavLink className="text-decoration-none ">
                  <Card
                    style={{ height: "380px" }}
                    className=" p-2 mb-3 mask flex-center"
                  >
                    <Card.Img
                      variant="top"
                      className="preview_img_wrps view overlay"
                      src={items.image}
                      width="100%"
                      height="500px"
                    />

                    <h6 className="text-black  text-center ">{items.title}</h6>

                    <p className="text-success text-center">
                      From ₹ {items.price}
                    </p>
                    <p className="text-secondary text-center ">
                      From ₹ {items.category}
                    </p>
                    <div className="text-center pt-2 pb-2">
                      <Button className="bg-white mx-2  border-secondary text-black col-md-5">
                        But Now
                      </Button>
                    </div>
                  </Card>
                </NavLink>
              </Col>
            );
          })}
        </Row>
      </>
    );
  };

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="">
            {" "}
            <h1 className="text-black text-center font-weight-bold fs-1">
              Latest Products
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 "></div>
        </div>
        <hr />
        {loading ? <Loading /> : <ShowProducts />}

        <div className="row ">
          <div className="col-md-12 "></div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Category;
