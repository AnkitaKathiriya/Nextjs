import React from "react";
import "../../app/globals.css";
const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};
export default async function page() {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      <h1>Product List</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>color</th>
            <th>Company</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return(
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}
