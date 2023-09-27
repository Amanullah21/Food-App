import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
        Back
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        {" "}
        <Link to="/login">Login</Link>
      </div>
      <div>
        {" "}
        <Link to="/sign">Sign In</Link>
      </div>
      <div>
        {" "}
        <Link to="/payment">Payment</Link>
      </div>
      <div>
        {" "}
        <Link to="/table-login">Table Login</Link>
      </div>
      <div>
        <Link to="/owner-dashboard">Onwer Dashboard</Link>
      </div>
      <div>
        <Link to="/add-product"> Add Product</Link>
      </div>
      <div>
        <Link to="/add-product-menu"> Add Product Menu</Link>
      </div>
      <div>
        <Link to="/add-buy-product"> Add Buy Product</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
