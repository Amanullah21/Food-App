import React, { useState } from "react";
import styled from "../Style/OwnerDashboard.module.css";
const init = {
  productName: "",
  productCategary: "",
  price: "",
  description: "",
  cookingTime: "",
  imageUrl: "",
  productSize: "",
};
const AddProduct = () => {
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
        <h3>Add Products Details</h3>
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          value={input.productName}
          onChange={(e) => inputHandle(e)}
        />
        <br />
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
          placeholder="Price"
          name="price"
          value={input.price}
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
          placeholder="Description"
          name="description"
          value={input.description}
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
        <select
          className="select"
          style={{
            background: "white",
            color: "black",
            border: "none",
            boxShadow: "2px 7px #e3dada",
          }}
          value={input.productName}
          onChange={(e) => setProductSize(e.target.value)}
        >
          <option value="full">Full</option>
          <option value="half">Half</option>
          <option value="family">Family Pack</option>
          <option value="cambo">Cambo Pack</option>
          <option value="double">Double Pack</option>
        </select>
        <br />
        <button className="addProduct" onClick={addProduct}>
          Add Product
        </button>
      </div>
      <div>Add Extra Products</div>
    </div>
  );
};

export default AddProduct;
