import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductList.css";
import { Button, Form, Container, Table } from "react-bootstrap";

export default function ProductList({ products, setProducts }) {

  const handleDelete = (pindex) => {
   console.log = ("delete product at index", pindex);

    let newProductList = products.filter((_,index) => index !== pindex);
    setProducts(newProductList);
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Category</th>
            <th>Product Featured</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.featured ? "True" : "False"}</td>
              <td>
                <Button
                  onClick={() => handleDelete(index)}>
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
