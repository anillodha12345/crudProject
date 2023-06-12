import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD, DELETE, REMOVE_ITEMS_ONE } from "../../../redux/action/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id, "ahfhaf");

  const getdata = useSelector((state) => state.cardreducer.carts);
  const dispatch = useDispatch();

  const compare = () => {
    let comparedata = getdata.filter((items) => {
      return items.id == id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const Removes = (id) => {
    dispatch(DELETE(id));
    navigate("/");
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  const Decrement = (e) => {
    dispatch(REMOVE_ITEMS_ONE(e));
  };

  return (
    <>
      {data.map((items) => {
        return (
          <>
            <section className="container mt-3">
              <section className="row">
                <section className="col-md-6 items-img p-5">
                  <img src={items.imgdata} className="p-5" width="100%" />
                </section>
                <section className="col-md-6 cards">
                  <section className="cards_details">
                    <section className=" img_card_detail py-5">
                      <section className="py-5">
                        <Table>
                          <tr>
                            <td>
                              <p>
                                <strong>Restaurant : </strong>
                                {items.rname}
                              </p>
                              <p>
                                <strong>Price : </strong>
                                {items.price}
                              </p>
                              <p>
                                <strong>Dishes : </strong>
                                {items.address}
                              </p>
                              <p>
                                <strong>Total : </strong>
                                {items.price * items.qnty}
                              </p>
                              <div
                                className="mt-5 d-flex justify-content-between align-items-center  "
                                style={{ width: "100px", background: "silver" }}
                              >
                                <span
                                  style={{ fontSize: "25px" }}
                                  onClick={
                                    items.qnty <= 1
                                      ? () => Removes(items.id)
                                      : () => Decrement(items)
                                  }
                                >
                                  -
                                </span>
                                <span style={{ fontSize: "25px" }}>
                                  {items.qnty}
                                </span>
                                <span
                                  style={{ fontSize: "25px" }}
                                  onClick={() => send(items)}
                                >
                                  {" "}
                                  +
                                </span>
                              </div>
                            </td>
                            <td>
                              <p>
                                <strong>Rating : </strong>
                                <span className="bg-success text-white rounded">
                                  {items.rating}&#9733;
                                </span>
                              </p>
                              <p>
                                <strong>Order-Review : </strong>
                                {items.somedata}
                              </p>
                              <p>
                                <strong>Remove : </strong>{" "}
                                <MdDelete
                                  size="25"
                                  className="text-danger"
                                  onClick={() => Removes(items.id)}
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
              </section>
            </section>
          </>
        );
      })}
    </>
  );
};

export default CardsDetails;
