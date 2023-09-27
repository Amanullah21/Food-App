import React, { useEffect, useState } from "react";
import styled from "../Style/OwnerDashboard.module.css";
import { useNavigate } from "react-router-dom";

const OwnerDashboard = () => {
  const [data, setData] = useState([]);
  const [onlinePayment, setOnlinePayment] = useState(300);
  const [cashPayment, setCashPayment] = useState(152);
  const [pendingPayment, setPendingPayment] = useState(190);
  const [onlineBuys, setOnlineBuys] = useState(30);
  const [cashBuys, setCashbuys] = useState(20);
  const [orderStatus, setOrderStatus] = useState("pending");
  const table = [1, 2, 3, 4];
  const url = "http://localhost:3000/order";
  const navigate = useNavigate();

  const getData = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setData(ele));
  };
  useEffect(() => getData(), []);

  const filterproduct =
    orderStatus === "pending"
      ? data.filter((product) => product.orderStatus === orderStatus)
      : data.filter((product) => product.orderStatus === orderStatus);

  const addProduct = () => {
    // console.log("Add Product");
    navigate("/add-product");
  };
  const addProductMenu = () => {
    navigate("/add-product-menu");
  };
  const addBuyProduct = () => {
    navigate("/add-buy-product");
  };
  console.log(orderStatus);
  console.log(data);
  return (
    <div>
      {/*  Order Summary */}
      <div className={styled.Order_Container}>
        <div className={styled.Order_Box}>
          <div>
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              Pending Order
            </span>
            <table>
              <thead>
                <th>Order No.</th>
                <th>Table.No</th>
                <th>Customer Name</th>
                <th>Cooking Time</th>
                <th>Price</th>
                <th>Payment Type</th>
                <th>Order Type</th>
                <th>Order status</th>
              </thead>
              <tbody>
                {filterproduct.map((pro) => (
                  <tr>
                    <td>{pro.orderNo}</td>
                    <td>{pro.tableNo}</td>
                    <td>{pro.customerName}</td>
                    <td>{pro.cookingTime}</td>
                    <td>{pro.price}&#8377;</td>
                    <td>{pro.orderType}</td>
                    <td>{pro.orderType}</td>
                    <td>
                      <select
                        style={{ background: "#D9D9D9" }}
                        value={pro.orderStatus}
                        onChange={(e) => setOrderStatus(e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="complete">Complete</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <div>
            {" "}
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              Complete Order
            </span>
            <table>
              <thead>
                <th>Order No.</th>
                <th>Table.No</th>
                <th>Customer Name</th>
                <th>Cooking Time</th>
                <th>Price</th>
                <th>Payment Type</th>
                <th>Order Type</th>
                <th>Order Status</th>
              </thead>
              <tbody>
                <tr>
                  <td>12</td>
                  <td>2</td>
                  <td>Vineet</td>
                  <td>30 Min</td>
                  <td>300&#8377;</td>
                  <td>Online</td>
                  <td>Daining</td>
                  <td>
                    <select
                      style={{ background: "#D9D9D9" }}
                      value={orderStatus}
                      onChange={(e) => setOrderStatus(e.target.value)}
                    >
                      <option value="complete">Complete</option>
                      <option value="pending">Pending</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>3</td>
                  <td>Rahul Singh</td>
                  <td>30 Min</td>
                  <td>152&#8377;</td>
                  <td>Cash</td>
                  <td>Parcel</td>
                  <td>
                    <select
                      style={{ background: "#D9D9D9" }}
                      value={orderStatus}
                      onChange={(e) => setOrderStatus(e.target.value)}
                    >
                      <option value="complete">Complete</option>
                      <option value="pending">Pending</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styled.payment_details}>
          <span style={{ fontSize: "22px", fontWeight: "bold" }}>
            Payment details Today
          </span>
          <p>Online Recived : {onlinePayment}&#8377;</p>
          <p>Cash Recived : {cashPayment}&#8377;</p>
          <p>Pending : table - 1, 3 = {pendingPayment} &#8377;</p>
          <hr />
          <h3>
            Total : {onlinePayment + cashPayment}&#8377; + Pending :{" "}
            {pendingPayment}&#8377;
          </h3>
        </div>
      </div>

      {/* add product  */}
      <div className={styled.add_product_container}>
        <div onClick={addProduct}>
          <h3>Add Product</h3>
        </div>
        <hr />
        <div onClick={addProductMenu}>
          <h3>Add Product Menu</h3>
        </div>
        <hr />
        <div onClick={addBuyProduct}>
          <h3>Add Buys Product</h3>
        </div>
      </div>

      {/* Today sell , today buy and today Profit details */}
      <div className={styled.profit_container}>
        <div>
          <span style={{ fontSize: "22px", fontWeight: "bold" }}>
            Today Sells
          </span>
          <p>Online Sells : {onlinePayment}&#8377;</p>
          <p>Cash Sells : {cashPayment}&#8377;</p>
          <p>Total Order : {`4`}</p>
          <hr />
          <h3>Total Sells: {onlinePayment + cashPayment}&#8377;</h3>
        </div>
        <div>
          <span style={{ fontSize: "22px", fontWeight: "bold" }}>
            Today Buys
          </span>
          <p>Online Buys : {onlineBuys}&#8377;</p>
          <p>Cash Buys : {cashBuys}&#8377;</p>
          <p>Total items buys : {`3`}</p>
          <hr />
          <h3>Total Buys: {onlineBuys + cashBuys}&#8377;</h3>
        </div>
        <div>
          <span style={{ fontSize: "22px", fontWeight: "bold" }}>
            Today Profit
          </span>
          <p>Online Profits : {onlinePayment - onlineBuys}&#8377;</p>
          <p>Cash Profits : {cashPayment - cashBuys}&#8377;</p>
          <p style={{ visibility: "hidden" }}>-</p>
          <hr />
          <h3>
            Total Profits: {onlinePayment - onlineBuys + cashPayment - cashBuys}
            &#8377;
          </h3>
        </div>
      </div>

      {/* Table Details */}
      <div className={styled.Table_container}>
        {table.map((table) => (
          <div className={styled.table_box}>
            <h3>Table - {table}</h3>
            <h2>Screen Access</h2>
            <button>Close / Open</button>
          </div>
        ))}
      </div>

      {/* Camera details */}
      <div className={styled.camera_container}>
        <div>
          <h2>Camera 1</h2>
        </div>
        <div>
          <h2>Camera 2</h2>
        </div>
        <div>
          <h2>Camera 3</h2>
        </div>
        <div>
          <h2>Camera 4</h2>
        </div>
        <div>
          <h2>Camera 5</h2>
        </div>
        <div>
          <h2>Camera 6</h2>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
