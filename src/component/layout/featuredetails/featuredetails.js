import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import "../../../App.css"

const FeaturesDetail = () => {
  const [data, setData] = useState([]);

  const params = useParams();
  console.log(params, "ahkfa");
  const { id } = params;
  const navigate =  useNavigate()

  const fetchdata = () => {
    const result = axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((items) => {
        console.log(items.data, "afahjf");
        setData(items.data);
      });
  };

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  }, []);

  const Delete = () => {
    navigate("/features")
    

  }

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-6  col-md-6 col-sm-12  p-5 ">
            {/* showThumbs={true} showStatus={false} showIndicators={false} infiniteLoop useKeyboardArrows transitionTime={1000} */}
            <Carousel
              showThumbs={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              // emulateTouch
              // autoPlay
              useKeyboardArrows
              transitionTime={1000}
              // axis="vertical"
              // selectedItem={1}
            >
              {data?.images?.map((x, i) => {
                return (
                  
                    <div className="w-100 " style={{height:"500px"}}>
                  <img
                    key={i}
                    src={x}
                    alt="not-show"
                    width="100%"
                    height="100%"
                  />
                  </div>
                );
              })}
            </Carousel>
          </div>

          <section className="col-md-6 cards">
                  <section className="features_details " style={{width:"90%"}}>
                    <section className=" img_card_detail py-5 ">
                      <section className="py-5 ">
                        <Table>
                          <tr>
                            <td >
                              <p>
                                <strong>Name : </strong>
                                {data.title}
                              </p>
                              <p>
                                <strong>Price : </strong>
                                {data.price}
                              </p>
                            

                              <p>
                                <strong>Dishes : </strong>
                                {data.description}
                              </p>
                              <p>
                                <strong>Total : </strong>
                                {data.price}
                              </p>
                             
                            </td>
                            <td>
                            <p>
                                <strong>Phone : </strong>
                                {data.brand}
                              </p>
                              <p>
                                <strong>Rating : </strong>
                                <span className="bg-success text-white rounded">
                                  {data.rating}&#9733;
                                </span>
                              </p>
                              <p>
                                <strong>Order-Review : </strong>
                                {data.category}
                              </p>
                              <p>
                                <strong>Remove : </strong>{" "}
                                <MdDelete
                                  size="25"
                                  className="text-danger"
                                  onClick={() => Delete()}
                                 
                                />{" "}
                              </p>
                              <br />
                            </td>
                          </tr>
                        </Table>
                      </section>
                    </section>
                  </section>
                </section>







        
        </div>
      </div>
    </>
  );
};

export default FeaturesDetail;
