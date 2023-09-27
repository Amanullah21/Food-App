import React, { useEffect, useState } from "react";
import styled from "../Style/Sign.module.css";
import { useNavigate } from "react-router-dom";
const init = {
  ownerName: "",
  address: "",
  shopName: "",
  userName: "",
  mobileNo: "",
  emailId: "",
  password: "",
  againPassword: "",
};
const Sign = () => {
  const [input, setInput] = useState(init);
  const [data, setData] = useState([]);
  const [passMatch, setPassMatch] = useState(false);

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const url = "http://localhost:3000/ShopName";
  const navigate = useNavigate();

  const getData = () => {
    fetch(url)
      .then((ele) => ele.json())
      // Api data
      .then((ele) => setData(ele));
  };
  useEffect(() => getData(), [input]);
  const createAccount = () => {
    console.log(data);
    console.log(input);
    if (input.password !== input.againPassword) {
      // alert("Password Not Match");
      setPassMatch(true);
      return;
    } else if (input.password.length < 8) {
      alert("Password length upto 8 digit");
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].userName === input.userName) {
        alert("User Name aleady Exist");
        return;
      }
    }
    // send to server
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(input),
    });
    // navigate to Login page
    navigate("/login");
  };
  const LoginAccount = () => {
    navigate("/login");
  };
  return (
    <div className={styled.Sign_container}>
      <div className={styled.Form_Box}>
        <h2>Create Account </h2>
        <div>
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            value={input.userName}
            onChange={(e) => inputHandle(e)}
          />
          <input
            type="text"
            placeholder="Shop Name"
            name="shopName"
            value={input.shopName}
            onChange={(e) => inputHandle(e)}
          />
          <br />
          <input
            type="text"
            name="ownerName"
            value={input.ownerName}
            placeholder="Owner Name"
            onChange={(e) => inputHandle(e)}
          />
          <input
            type="tel"
            placeholder="Mobile No"
            name="mobileNo"
            minLength={10}
            value={input.mobileNo}
            onChange={(e) => inputHandle(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={input.address}
            onChange={(e) => inputHandle(e)}
          />
          <input
            type="email"
            placeholder="Email Id"
            name="emailId"
            value={input.emailId}
            onChange={(e) => inputHandle(e)}
          />
          <br />
          <input
            type="password"
            minLength={8}
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={(e) => inputHandle(e)}
          />
          <input
            type="password"
            minLength={8}
            placeholder="Again Password"
            name="againPassword"
            value={input.againPassword}
            onChange={(e) => inputHandle(e)}
          />

          {passMatch === true ? (
            <span style={{ color: "red" }}>
              {" "}
              <br />
              Password not Match{" "}
            </span>
          ) : (
            <></>
          )}
          <br />
          <button
            className="createAccountbtn"
            disabled={input.userName === "" || input.password === ""}
            onClick={createAccount}
          >
            Create Account
          </button>
          <button
            style={{ marginLeft: "10px" }}
            className="createAccountbtn"
            onClick={LoginAccount}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sign;
