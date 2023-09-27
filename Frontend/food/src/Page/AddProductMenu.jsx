import React, { useState } from "react";
import styled from "../Style/OwnerDashboard.module.css";
const init = {
  productCategary: "",
  description: "",
  cookingTime: "",
  imageUrl: "",
};

const AddProductMenu = () => {
  const [input, setInput] = useState(init);
  const [productSize, setProductSize] = useState("full");

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const addProduct = () => {
    console.log(input);
    console.log(productSize);
  };

  return (
    <div className={styled.addProduct_container}>
      <div>
        <h3>Add Products Menu Slider</h3>
        <input
          type="text"
          placeholder="Product Categary"
          name="productCategary"
          value={input.productCategary}
          onChange={(e) => inputHandle(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={input.description}
          onChange={(e) => inputHandle(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Cooking Time"
          name="cookingTime"
          value={input.cookingTime}
          onChange={(e) => inputHandle(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Image Path"
          name="imageUrl"
          value={input.imageUrl}
          onChange={(e) => inputHandle(e)}
        />
        <br />
        <button className="addProduct" onClick={addProduct}>
          Add Product Menu
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <span>Show more</span> */}
      </div>
      <div>Add Extra Products</div>
    </div>
  );
};

export default AddProductMenu;
