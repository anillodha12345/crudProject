import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { AiOutlineStar } from "react-icons/ai";
import { ADD } from "../../../redux/action/action";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import Cardsdata from "./cardsdata";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { color } from "@mui/system";

const Sliders = () => {
  const [data, setData] = useState(Cardsdata);
  
  const dispatch = useDispatch();
  // const userlist = useSelector((state) => state.userList);
  // console.log(userlist);

  // useEffect(() => {
  //   dispatch(userAction());
  // }, [dispatch]);

  const send = (e) => {
    dispatch(ADD(e));
    toast.success('successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // style: { background: '#00CC00' },
      color:"white"
    
      });
     
  };

  var settings = {
    dots: false,
    infinite: false,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="mt-5 mb-5">
        <Slider {...settings}>
          {/* {userlist.users?.map((items,key) => { */}
          {data.map((items, key) => {
            return (
              <Card style={{ width: "18rem" }} className="p-5">
                <div className="preview_img_wrp">
              
                    <Card.Img variant="top" src={items.imgdata} />{" "}
               
                </div>
                <Card.Body>
                  <div className="card_title">
                    <Card.Title>
                      <h4>{items.rname}</h4>
                    </Card.Title>
                  </div>
                  {/* <Card.Text>
                    <h4>{items.category}</h4>
                  </Card.Text> */}
                  <Card.Text>
                    <h5>
                      <span>
                        <b>Price : </b>
                      </span>
                      <span>₹ &nbsp;</span>
                      {items.price}
                    </h5>
                  </Card.Text>

                  <div className="card_description">
                    {/* <Card.Text> */}
                    <Button
                      variant="contained"
                      disableElevation
                      className="col-lg-12"
                      onClick={() => send(items)}
                    >
                      Add to Card
                     
                    </Button>
                    {/* </Card.Text> */}
                  </div>
                  <Card.Text className="my-3">
                    <span className="rating">
                      {items.rating} &nbsp;{" "}
                      <AiOutlineStar style={{ color: "white" }} />{" "}
                    </span>{" "}
                    <span>{items.rating.count} Reviews</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Slider>
        <ToastContainer />
      </div>
    </Container>
  );
};

export default Sliders;
