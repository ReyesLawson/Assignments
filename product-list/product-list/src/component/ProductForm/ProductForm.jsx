import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

export default function ProductForm({ products, setProducts }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [productFeature, setProductFeature] = useState(true);

  let handleAddMore = () => {
    let newProduct = {
      name: productName,
      price: productPrice,
      category: productCategory,
      featured: productFeature,
    };
    console.log(newProduct);
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1> PRODUCTS </h1>
      <Form.Control
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <Form.Control
        type="text"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(Number(e.target.value))}
      />

      <Form.Select
        aria-label="Default select example"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}>
        <option>Select Product Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Home Essentials">Home Essentials</option>
        <option value="Electronics">Electronics</option>
      </Form.Select>

      <Form.Select
        aria-label="Default select example"
        value={productFeature ? "true" : "false"}
        onChange={(e) => setProductFeature(e.target.value === "true")}>
        <option>Select Product Featured</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </Form.Select>
      <Button className="add-button" onClick={handleAddMore}>
        Add Product
      </Button>
    </div>
  );
}

/* <form>
                <input type="text" placeholder="Product Name" onChange={(e) =>setProductName(e.target.value)}/> 
                <input type="text" placeholder="Product Price" onChange={(e) =>setProductPrice(e.target.value)}/> 
                <input type="text" placeholder="Product Category" onChange={(e) =>setProductCategory(e.target.value)}/> 
                <input type="text" placeholder="Product Feature" onChange={(e) =>setProductFeature(e.target.value)}/> 
                <Button type="submit" className="add-button" onClick={(e)=>{handleAddMore(e)}}>
                Add More
               </Button>
                
            </form> */
