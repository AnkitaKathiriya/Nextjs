import React from "react";
import "../../app/globals.css";
import Link from "next/link";
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
  // console.log(products);
  return (
    <>
      <h1 className="font-bold text-lg">Product List</h1>
      <table className="table-auto border-separate border-spacing-2 border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">Price</th>
            <th className="border border-slate-300 p-2">Name</th>
            <th className="border border-slate-300 p-2">color</th>
            <th className="border border-slate-300 p-2">Company</th>
            <th className="border border-slate-300 p-2">Category</th>
            <th className="border border-slate-300 p-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item,i) => {
            return(
            <tr key={i}>
              <td className="border border-slate-300 p-2">{item.name}</td>
              <td className="border border-slate-300 p-2">{item.price}</td>
              <td className="border border-slate-300 p-2">{item.color}</td>
              <td className="border border-slate-300 p-2">{item.company}</td>
              <td className="border border-slate-300 p-2">{item.category}</td>
              <td className="border border-slate-300 p-2"><Link href={"products/"+ item._id}>Edit</Link></td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}
