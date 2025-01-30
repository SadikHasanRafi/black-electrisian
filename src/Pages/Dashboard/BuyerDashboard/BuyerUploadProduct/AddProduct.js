import React, { useState } from "react";
// import swal from 'sweetalert';
import "./AddProduct.css";
const AddProduct = () => {
  const [productName, setproductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!img) {
      return;
    }
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("ProductPrice", ProductPrice);
    formData.append("categories", categories);
    formData.append("description", description);
    formData.append("img", img);

    console.log(formData);

    fetch("https://black-electrisian.onrender.com/PostUploadBuyer", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Add to Cart Successfully");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  return (
    <div className="background-design">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="emails mt-5">
            ProductName:
          </label>
          <br />
          <input
            type="name"
            name="name"
            onChange={(e) => setproductName(e.target.value)}
            required
            className=" outline-none px-3 py-2 "
          />
        </div>
        <div>
          <label htmlFor="name" className="emails">
            Description:
          </label>
          <br />
          <input
            type="name"
            name="name"
            onChange={(e) => setDescription(e.target.value)}
            required
            className=" outline-none px-3 py-2 "
          />
        </div>
        <div>
          <label htmlFor="price" className="emails">
            Price:
          </label>
          <br />
          <input
            type="price"
            name="price"
            id="email"
            onChange={(e) => setProductPrice(e.target.value)}
            required
            className=" outline-none px-3 py-2 "
          />
        </div>

        <div>
          <label htmlFor="email" className="emails">
            Image:
          </label>
          <br />
          <input
            type="file"
            accept="image/*"
            //   id='email'
            onChange={(e) => setImg(e.target.files[0])}
            //   required
            className=" outline-none px-3 py-2 "
          />
        </div>

        <div className="selecteds">
          <select
            style={{ borderRadius: "30px", width: "10" }}
            onChange={(e) => setCategories(e.target.value)}
            required
            className="form-control shadow-none"
            placeholder="select"
          >
            <option>Select categories</option>
            <option value="vegetable">vegetable</option>
            <option value="food">food</option>
            <option value="fish">fish</option>
            <option value="duck">duck</option>
            <option value="truck">truck</option>
            <option value="seed">seed</option>
            <option value="fertilizer">fertilizer</option>
            <option value="medicin">medicin</option>
            <option value="cow-feed">cow-feed</option>
          </select>
        </div>
        <button className="buttontype" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
