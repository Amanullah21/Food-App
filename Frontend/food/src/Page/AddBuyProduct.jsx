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
const AddBuyProduct = () => {
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
        <h3>Add Buys Products Details</h3>
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
          placeholder="Price"
          name="price"
          value={input.price}
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
        <button className="addProduct" onClick={addProduct}>
          Add Product
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
        <br />
        <br />
      </div>
      <div>Add Extra Products</div>
    </div>
  );
};

export default AddBuyProduct;
