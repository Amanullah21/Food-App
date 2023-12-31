import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dryFruits from "../src/Img/dryFruits.png";
import northIndia from "../src/Img/northIndia.png";
import dosa from "../src/Img/dosa.png";
import chocolate from "../src/Img/chocolate.png";
import styled from "./Style/Home.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import CenteredModal from "./Components/CenteredModal";

const Home = () => {
  const [atc, SetAtc] = useState([]);
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/product";
  const [qunatity, setQunatity] = useState(1);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  // Api data
  const getData = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setProducts(ele));
  };
  useEffect(() => getData(), []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 15,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 10,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // atc card btn
  // let qunatity = 1;
  const AddTocard = (name, price) => {
    const cardData = {
      name: name,
      price: price,
      qty: qunatity,
    };
    SetAtc([...atc, cardData]);
    for (let i = 0; i < atc.length; i++) {
      if (atc[i].name === cardData.name) {
        atc[i].qty = atc[i].qty + 1;
      }
    }
    console.log(atc);
  };
  // let count = 2;
  let totalPrice = 0;
  const setCash = (totalPrice) => {
    navigate("/Payment");
  };
  return (
    <div>
      <div>
        <Carousel
          className="xyz"
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
        >
          <div>Apple</div>
          <div style={{ width: "max-content" }}>
            {/* <img src={""} alt="" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <g clip-path="url(#clip0_1_222)">
                <path
                  d="M40.1615 81.6562C61.6057 81.6562 78.9896 64.2723 78.9896 42.8281C78.9896 21.3839 61.6057 4 40.1615 4C18.7173 4 1.33334 21.3839 1.33334 42.8281C1.33334 64.2723 18.7173 81.6562 40.1615 81.6562Z"
                  fill="#ADC0ED"
                />
                <path
                  d="M40.1615 66.4792C53.2236 66.4792 63.8126 55.8903 63.8126 42.8281C63.8126 29.766 53.2236 19.177 40.1615 19.177C27.0993 19.177 16.5104 29.766 16.5104 42.8281C16.5104 55.8903 27.0993 66.4792 40.1615 66.4792Z"
                  fill="#85A4E4"
                />
                <path
                  d="M40.8391 4.00594C40.3155 3.99687 39.7951 4.00109 39.2763 4.01265C59.9782 5.19453 76.2243 22.5339 75.8593 43.4512C75.4941 64.3686 58.6529 81.1305 37.9222 81.5891C38.4404 81.6186 38.9604 81.6411 39.484 81.6503C60.9249 82.0245 78.6096 64.9467 78.9838 43.5058C79.3579 22.0648 62.2801 4.38015 40.8391 4.00594Z"
                  fill="#99B2E9"
                />
                <path
                  d="M40.5743 19.1806C40.0491 19.1714 39.5283 19.1814 39.0112 19.2061C51.3287 20.2258 60.9033 30.6514 60.6846 43.1864C60.4658 55.7214 50.5332 65.8064 38.1876 66.3958C38.7035 66.4384 39.2238 66.4666 39.749 66.4758C52.8091 66.7038 63.5813 56.3013 63.8093 43.2411C64.0369 30.1808 53.6344 19.4086 40.5743 19.1806Z"
                  fill="#7293DF"
                />
                <path
                  d="M19.8779 56.8127L26.4902 46.5175L21.1021 43.0853L14.4897 53.3805C12.0257 52.5189 9.0224 54.2897 9.31177 57.8591C9.31177 57.8595 9.31193 57.86 9.31208 57.8603C10.1136 60.0455 11.8588 60.9591 13.498 60.8352C14.0724 62.3691 15.6372 63.5639 17.9654 63.372C17.9658 63.372 17.9663 63.3719 17.9668 63.3717C21.3416 62.1367 21.6965 58.6791 19.8779 56.8127Z"
                  fill="#F2C7AE"
                />
                <path
                  d="M48.4361 28.4319C52.6368 21.8916 51.554 13.7306 46.0174 10.2039C40.4808 6.67718 32.5872 9.12015 28.3866 15.6605C26.6618 18.3459 25.828 21.3045 25.8276 24.1034C25.8266 29.3998 24.3283 34.2956 21.6411 38.4795L19.8091 41.3319C19.5754 41.6959 19.6819 42.1806 20.0468 42.413L27.5507 47.1928C27.9136 47.4241 28.3952 47.3181 28.6277 46.9561L30.4629 44.0989C33.1501 39.915 36.9849 36.5075 41.8127 34.2858C44.3638 33.1119 46.7113 31.1173 48.4361 28.4319Z"
                  fill="#D97C41"
                />
                <path
                  d="M58.9786 27.4852L52.3663 37.7803L57.7544 41.2125L64.3668 30.9173C66.8308 31.7789 69.8341 30.0081 69.5447 26.4388C69.5447 26.4383 69.5446 26.4378 69.5444 26.4375C68.7429 24.2523 66.9977 23.3388 65.3586 23.4627C64.7841 21.9288 63.2194 20.7339 60.8913 20.9258C60.8908 20.9258 60.8904 20.9259 60.8899 20.9261C57.5149 22.1613 57.1601 25.6188 58.9786 27.4852Z"
                  fill="#F2C7AE"
                />
                <path
                  d="M19.8779 56.8127L26.4902 46.5175L21.1021 43.0853L20.661 43.7722L24.928 46.4903L18.3157 56.7855C20.1137 58.6306 19.7852 62.0295 16.5166 63.3002C16.9601 63.3852 17.4424 63.4153 17.9655 63.3722C17.966 63.3722 17.9665 63.372 17.9669 63.3719C21.3416 62.1366 21.6965 58.6791 19.8779 56.8127Z"
                  fill="#EFB899"
                />
                <path
                  d="M62.8046 30.8902L56.6334 40.4984L57.7545 41.2125L64.249 31.1008C63.7657 31.1225 63.2752 31.0547 62.8046 30.8902Z"
                  fill="#EFB899"
                />
                <path
                  d="M69.5448 26.4387C69.5448 26.4383 69.5446 26.4378 69.5445 26.4373C68.7429 24.2522 66.9977 23.3386 65.3587 23.4625C64.7841 21.9286 63.2195 20.7337 60.8913 20.9256C60.8909 20.9256 60.8904 20.9258 60.8899 20.9259C60.8515 20.94 60.8155 20.9558 60.7779 20.9705C62.308 21.2639 63.351 22.2459 63.7965 23.4352C65.4355 23.3112 67.1807 24.225 67.9823 26.41C67.9824 26.4105 67.9826 26.4109 67.9826 26.4114C68.196 29.0425 66.6198 30.6947 64.7898 31.0372C67.1602 31.5717 69.8179 29.8064 69.5448 26.4387Z"
                  fill="#EFB899"
                />
                <path
                  d="M30.4204 55.8659C26.2197 62.4062 27.3026 70.5672 32.8391 74.0939C38.3757 77.6206 46.2693 75.1777 50.4699 68.6373C52.1947 65.9519 53.0285 62.9933 53.029 60.1944C53.0299 54.898 54.5282 50.0022 57.2154 45.8183L59.0474 42.9659C59.2811 42.6019 59.1746 42.1172 58.8097 41.8848L51.3058 37.105C50.9429 36.8738 50.4613 36.9797 50.2288 37.3417L48.3936 40.1989C45.7065 44.3828 41.8716 47.7903 37.0438 50.012C34.4927 51.1861 32.1452 53.1805 30.4204 55.8659Z"
                  fill="#D97C41"
                />
                <path
                  d="M46.0174 10.2041C43.9051 8.85843 41.4494 8.38453 38.9868 8.67297C40.3593 8.89281 41.6824 9.37843 42.8929 10.1495C48.4294 13.6762 49.5122 21.8372 45.3116 28.3775C43.5868 31.063 41.2393 33.0575 38.6882 34.2314C33.8604 36.4531 30.0257 39.8606 27.3383 44.0445L25.9649 46.183L27.5507 47.1931C27.9137 47.4244 28.3952 47.3184 28.6277 46.9564L30.4629 44.0992C33.1501 39.9153 36.9849 36.5078 41.8127 34.2861C44.364 33.112 46.7113 31.1177 48.4362 28.4322C52.6368 21.8916 51.554 13.7306 46.0174 10.2041Z"
                  fill="#C76D33"
                />
                <path
                  d="M58.8099 41.8847L51.306 37.1048C50.943 36.8736 50.4615 36.9795 50.229 37.3416L49.7672 38.0603L55.6854 41.8302C56.0502 42.0627 56.1568 42.5472 55.923 42.9113L54.091 45.7636C51.4038 49.9475 49.9054 54.8433 49.9046 60.1397C49.9041 62.9384 49.0704 65.897 47.3455 68.5827C44.7476 72.6275 40.7371 75.1028 36.7452 75.5703C41.6507 76.3563 47.1877 73.7475 50.4701 68.6372C52.1949 65.9517 53.0286 62.9931 53.0291 60.1942C53.0301 54.8978 54.5283 50.002 57.2155 45.8181L59.0476 42.9658C59.2813 42.6019 59.1747 42.1172 58.8099 41.8847Z"
                  fill="#C76D33"
                />
                <path
                  d="M39.9994 80C29.315 80 19.2702 75.8392 11.715 68.2844C4.1602 60.7294 -0.000579834 50.6844 -0.000579834 40C-0.000579834 29.3156 4.1602 19.2706 11.715 11.7156C19.27 4.16078 29.315 0 39.9994 0C50.6838 0 60.7288 4.16078 68.2838 11.7156C75.8388 19.2705 79.9994 29.3156 79.9994 40C79.9994 50.6844 75.8386 60.7294 68.2838 68.2844C60.729 75.8394 50.6836 80 39.9994 80ZM39.9994 2.34375C19.2357 2.34375 2.34317 19.2362 2.34317 40C2.34317 60.7637 19.2357 77.6562 39.9994 77.6562C60.7632 77.6562 77.6557 60.7637 77.6557 40C77.6557 19.2362 60.763 2.34375 39.9994 2.34375Z"
                  fill="black"
                />
                <path
                  d="M58.1981 26.0641C57.8619 26.0641 57.528 25.92 57.2963 25.6413C55.2663 23.1983 52.6885 21.1725 49.8414 19.783C49.2597 19.4991 49.0185 18.7973 49.3024 18.2158C49.5864 17.6344 50.2877 17.393 50.8696 17.6767C54.0125 19.2109 56.8581 21.447 59.0989 24.1433C59.5125 24.6412 59.4444 25.38 58.9466 25.7936C58.7277 25.9753 58.4622 26.0641 58.1981 26.0641Z"
                  fill="black"
                />
                <path
                  d="M28.1075 61.622C27.907 61.622 27.7041 61.5706 27.5184 61.4625C24.3811 59.6338 21.6292 57.0855 19.5603 54.0931C19.1922 53.5608 19.3255 52.8308 19.8578 52.4627C20.3902 52.0948 21.12 52.2277 21.4881 52.76C23.363 55.4716 25.8564 57.7808 28.6987 59.4375C29.258 59.7634 29.447 60.4809 29.1211 61.0402C28.9031 61.4138 28.5106 61.622 28.1075 61.622Z"
                  fill="black"
                />
                <path
                  d="M17.2663 47.7195C16.7172 47.7195 16.2563 47.3425 16.1292 46.8328C15.4964 44.6202 15.1756 42.3217 15.1756 40C15.1756 32.3623 18.6159 25.2611 24.6144 20.5169C25.1219 20.1155 25.8589 20.2012 26.2605 20.7091C26.662 21.2167 26.5759 21.9536 26.0683 22.3552C20.6353 26.652 17.5195 33.0833 17.5195 40C17.5195 42.1156 17.8133 44.2094 18.3925 46.223C18.4228 46.3283 18.4381 46.4373 18.4381 46.5469C18.4381 47.1942 17.9134 47.7195 17.2663 47.7195Z"
                  fill="black"
                />
                <path
                  d="M52.972 60.9533C52.5908 60.9533 52.2167 60.7675 51.9917 60.4248C51.6362 59.8841 51.7866 59.1575 52.3273 58.8019C58.6839 54.6241 62.4789 47.5952 62.4789 40C62.4789 37.0577 61.9194 34.1972 60.8159 31.4981C60.5711 30.8991 60.8583 30.2148 61.4572 29.97C62.0562 29.7253 62.7405 30.0123 62.9853 30.6113C64.2044 33.5931 64.8225 36.752 64.8225 40C64.8225 48.3869 60.6326 56.1478 53.6145 60.7605C53.4162 60.8908 53.1928 60.9533 52.972 60.9533Z"
                  fill="black"
                />
                <path
                  d="M17.5861 62.1295C15.5814 62.1295 13.8812 61.2272 12.932 59.6456C10.9205 59.5041 9.22937 58.2034 8.37765 56.1264C8.30015 55.9372 8.25312 55.7391 8.23749 55.5367C8.09187 53.6797 8.6953 52.0413 9.93671 50.9241C11.0241 49.9455 12.5092 49.488 13.9561 49.6752L19.5412 40.6361C20.105 39.7233 21.3081 39.4369 22.2231 39.9972L26.3381 42.5188C26.7841 42.7919 27.0966 43.2227 27.2176 43.7316C27.3389 44.2405 27.2542 44.7658 26.9792 45.2108L21.3998 54.2405C22.2159 55.4417 22.4755 56.9663 22.092 58.3708C21.6522 59.9822 20.4553 61.2598 18.722 61.9683C18.5356 62.0447 18.3381 62.0917 18.1362 62.1077C17.9505 62.1222 17.767 62.1295 17.5861 62.1295ZM10.5697 55.2936C11.1036 56.5491 12.0691 57.2847 13.2262 57.3138C13.917 57.3313 14.5498 57.7198 14.878 58.3278C15.4255 59.342 16.5203 59.8673 17.8909 59.7755C18.9042 59.3456 19.5916 58.6295 19.8309 57.7534C20.0466 56.9633 19.8787 56.1011 19.3817 55.4469C18.8851 54.7931 18.8406 53.9236 19.2683 53.2311L24.7792 44.3122L21.3305 42.1991L15.8126 51.1291C15.3862 51.8191 14.5961 52.1686 13.7994 52.0222C12.9792 51.8697 12.1217 52.1106 11.5045 52.6661C10.8295 53.2734 10.4987 54.2047 10.5697 55.2936ZM21.2622 54.4628C21.2623 54.4625 21.2626 54.462 21.2628 54.4617L21.2622 54.4628Z"
                  fill="black"
                />
                <path
                  d="M27.8703 45.8702C27.5226 45.8702 27.1712 45.7778 26.8544 45.5836L19.268 40.9352C18.822 40.662 18.5095 40.2313 18.3884 39.7223C18.2672 39.2134 18.3519 38.6881 18.6269 38.2431L20.4087 35.3592C22.9536 31.2408 24.2537 26.465 24.1689 21.5486C24.1145 18.4066 25.0089 15.2519 26.755 12.4259C31.1728 5.27609 39.7597 2.51891 45.8969 6.27906C48.5553 7.90797 50.4444 10.5905 51.2165 13.8327C52.1655 17.8175 51.3642 22.2805 49.0181 26.0773C47.2725 28.9025 44.8487 31.1186 42.0094 32.4859C37.5625 34.6272 33.8665 37.9364 31.3211 42.0558L29.5361 44.9445C29.1675 45.5412 28.5259 45.8702 27.8703 45.8702ZM20.8267 39.1417L27.7467 43.3819L29.3272 40.8241C32.1081 36.3234 36.1419 32.71 40.9925 30.3744C43.4284 29.2014 45.5142 27.2897 47.0244 24.8456C49.0453 21.5748 49.7423 17.7591 48.9365 14.3759C48.3098 11.7444 46.7954 9.57875 44.6725 8.27797C39.6328 5.19016 32.4897 7.60406 28.7487 13.6583C27.239 16.1016 26.4656 18.8161 26.5122 21.5083C26.6048 26.8747 25.1837 32.0903 22.4025 36.5914L20.8267 39.1417Z"
                  fill="black"
                />
                <path
                  d="M57.3019 38.957C56.9539 38.957 56.6022 38.8644 56.2852 38.6698L52.1705 36.1489C51.7242 35.8752 51.412 35.4444 51.2908 34.9356C51.1695 34.4269 51.2544 33.9017 51.5291 33.4569L57.1086 24.427C56.2924 23.2258 56.033 21.7012 56.4164 20.2966C56.8563 18.6852 58.0531 17.4075 59.7863 16.6992C59.9722 16.6231 60.1688 16.5761 60.3699 16.56C62.6142 16.3789 64.5413 17.2972 65.5761 19.0217C67.5875 19.1633 69.2788 20.4639 70.1305 22.5409C70.2074 22.7292 70.2544 22.9266 70.2705 23.1283C70.4163 24.9875 69.8128 26.6261 68.5714 27.7431C67.4842 28.7217 65.9992 29.1792 64.552 28.992L58.9667 38.0312C58.5989 38.628 57.9574 38.957 57.3019 38.957ZM53.7292 34.3553L57.178 36.4683L62.6958 27.5384C63.1222 26.8481 63.913 26.4977 64.7097 26.6455C65.5289 26.7978 66.3867 26.5569 67.0041 26.0013C67.6789 25.3939 68.0099 24.4628 67.9388 23.3742C67.405 22.1186 66.4394 21.3828 65.282 21.3537C64.5916 21.3362 63.9588 20.9478 63.6306 20.3402C63.0828 19.3253 61.9875 18.8011 60.618 18.8919C59.6047 19.3216 58.9167 20.0377 58.6775 20.9139C58.4619 21.7041 58.6299 22.5662 59.1269 23.2206C59.6238 23.8745 59.6681 24.7441 59.2402 25.4364L53.7292 34.3553Z"
                  fill="black"
                />
                <path
                  d="M38.6911 74.0702C36.562 74.0703 34.4742 73.5294 32.6114 72.388C29.9533 70.7592 28.0641 68.0767 27.2919 64.8347C26.3428 60.8498 27.1442 56.3869 29.4903 52.5898C31.2361 49.7645 33.6597 47.5484 36.4992 46.1812C40.9461 44.04 44.642 40.7306 47.1875 36.6114L48.9725 33.7225C49.5364 32.81 50.7395 32.5233 51.6542 33.0837L59.2406 37.7322C59.6867 38.0055 59.9991 38.4362 60.1203 38.9452C60.2416 39.4541 60.1566 39.9794 59.8817 40.4244L58.0998 43.308C55.555 47.4266 54.2549 52.2023 54.3399 57.1187C54.3942 60.2606 53.4999 63.4153 51.7536 66.2414C48.6766 71.2208 43.5766 74.0698 38.6911 74.0702ZM50.7616 35.2856L49.1813 37.8434C46.4002 42.3439 42.3666 45.9573 37.5158 48.2931C35.08 49.4658 32.9942 51.3777 31.4839 53.8219C29.4628 57.0927 28.7659 60.9086 29.5716 64.2917C30.1983 66.9233 31.7127 69.0887 33.8356 70.3894C35.3239 71.3014 36.9967 71.7336 38.7103 71.7337C42.7988 71.7341 47.1233 69.2756 49.7594 65.0094C51.2691 62.5659 52.0424 59.8514 51.9958 57.1594C51.903 51.7931 53.3242 46.5773 56.1056 42.0761L57.6814 39.5259L50.7616 35.2856Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_222">
                  <rect width="80" height="80" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <img
              src={dosa}
              alt="Dosa"
              style={{
                height: "80px",
                width: "80px",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <img
              src={dryFruits}
              alt="Dry Fruits"
              style={{
                height: "80px",
                width: "80px",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>Chicken</div>
          <div>Fruits</div>
          <div>Lunch</div>
          <div>Dinner</div>
          <div>item 7</div>
          <div>item 8 </div>
          <div>
            <img
              src={chocolate}
              alt="chocolate"
              style={{ height: "80px", width: "80px", cursor: "pointer" }}
            />
          </div>
          <div>item 10</div>
          <div>item 11</div>
          <div>item 12</div>
          <div>item 13</div>
          <div>
            <img
              src={northIndia}
              alt="North India"
              style={{
                height: "80px",
                width: "80px",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>item 15</div>
          <div>
            <img
              src={chocolate}
              alt="Chocolate"
              style={{ height: "80px", width: "80px", cursor: "pointer" }}
            />
          </div>
          <div>item 17</div>
        </Carousel>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div className={styled.Product_Container}>
          {products.map((product, index) => (
            <div className={styled.product_card} key={index}>
              <img
                src={product.image}
                alt={product.name}
                style={{ height: "70%", width: "100%" }}
              />
              <div className={styled.product_details}>
                <span>{product.name} </span>
                <span> ${product.price}</span>
                <button
                  disabled={qunatity === 1}
                  onClick={() => setQunatity(qunatity - 1)}
                >
                  -
                </button>
                <span> {qunatity} </span>
                <button onClick={() => setQunatity(qunatity + 1)}> + </button>

                <span>
                  <button
                    onClick={() => {
                      AddTocard(product.name, product.price);
                      setModalShow(true);
                    }}
                  >
                    Add to Card 1
                  </button>
                </span>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
          {/*  modal  */}
          {/* <CenteredModal show={modalShow} onHide={() => setModalShow(false)} /> */}
          {/* <CenteredModal/> */}
          {/* close modal */}
          <div>
            <button>prev</button>
            <button>next</button>
          </div>
        </div>

        <div
          style={{
            width: "23%",
            height: "450px",
            background: "red",
            padding: "5px",
          }}
        >
          <table border={"1px"} style={{ textAlign: "center" }}>
            <thead>
              <th>Sl.No.</th>
              <th>Product </th>
              <th>Qty</th>
              <th>price</th>
              <th>Sub Total</th>
            </thead>
            <tbody>
              {atc.map((product, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{product.name}</td>
                  <td>{product.qty}</td>
                  <td>{product.price}</td>
                  <td>{product.price * product.qty}</td>
                  <h3 style={{ display: "none" }}>
                    {(totalPrice += product.price * product.qty)}
                  </h3>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <span>Total price : {totalPrice}$</span>
          <hr />
          <div>
            <button>PhonePe</button>
            <button>Google Pay</button>
            <button>Paytm</button>
            <button disabled={totalPrice === 0} onClick={() => setCash()}>
              Cash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
