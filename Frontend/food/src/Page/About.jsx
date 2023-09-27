import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const About = () => {
  const Phonepe = () => {
    const fetch = require("node-fetch");

    const url = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
    const options = {
      method: "POST",
      mode: "no-cors",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={Phonepe}>PhonePe</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
