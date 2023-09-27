import React, { useEffect, useState } from "react";
import styled from "../Style/Sign.module.css";
import { useNavigate } from "react-router-dom";
const init = {
  userName: "",
  shopNo: "",
  password: "",
};
const Login = () => {
  const [input, setInput] = useState(init);
  const [data, setData] = useState([]);
  const [loginCheck, setLoginCheck] = useState(false);

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const url = "http://localhost:3000/ShopName";
  const navigate = useNavigate();

  const getData = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setData(ele));
  };
  useEffect(() => getData(), [input]);
  const loginbtn = () => {
    console.log(data);
    console.log(input);
    if (input.password.length < 8) {
      alert("Password length upto 8 digit");
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].userName === input.userName &&
        data[i].password === input.password
      ) {
        navigate("/");
        setLoginCheck(false); // home
        break;
      } else {
        // alert("User Name not exist");
        setLoginCheck(true);
      }
    }
  };
  const createAccountBtn = () => {
    navigate("/sign");
  };
  const tableLoginBtn = () => {
    navigate("/table-login");
  };
  return (
    <div className={styled.Sign_container}>
      <div className={styled.Form_Box}>
        <h2>Login Account </h2>
        <div>
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            value={input.userName}
            onChange={(e) => inputHandle(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Shop No."
            name="shopNo"
            value={input.shopNo}
            onChange={(e) => inputHandle(e)}
          />
          <br />
          <input
            className="input"
            type="password"
            minLength={8}
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={(e) => inputHandle(e)}
          />
          <br />
          {loginCheck === true ? (
            <span style={{ color: "red" }}>
              Wrong User Name and Password <br />
            </span>
          ) : (
            <></>
          )}

          <button
            className="loginbtn"
            disabled={input.userName === "" || input.password === ""}
            onClick={loginbtn}
          >
            Login
          </button>
          <br />
          <button className="loginbtn" onClick={tableLoginBtn}>
            Table Login
          </button>
          <br />
          <button className="loginbtn" onClick={createAccountBtn}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
