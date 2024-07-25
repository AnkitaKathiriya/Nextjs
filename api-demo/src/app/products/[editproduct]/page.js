"use client"
import { useEffect, useState } from 'react'
import '../../../app/globals.css'
import { useRouter } from 'next/navigation'
export default function (props) {
  const router = useRouter()
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  useEffect(()=>{
    // console.log(props.params.editproduct)
    getProductData()
  },[])
  const getProductData = async() => {
    let productId = props.params.editproduct
    let productData = await fetch("http://localhost:3000/api/products/"+productId) 
    productData = await productData.json();
    if(productData.success){
      let result = productData.result
      setName(result.name);
      setPrice(result.price);
      setCompany(result.company);
      setCategory(result.category);
      setColor(result.color)
    }
    // console.log(productData)
  }
  const updateProduct = async() => {
    let productId = props.params.editproduct
    let data = await fetch("http://localhost:3000/api/products/"+productId,{
      method:"PUT",
      body:JSON.stringify({name,price,color,company,category})
    }) 
    data = await data.json();
    if(data.result){
      alert("Product has been updated")
       router.push("../../products")
    }
  }
  return (
    <>
    <h1 className='font-bold text-3xl text-center mb-2'>Update Product</h1>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Product Name' className="input"/>
    <input type='text' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Product Peice'className="input"/>
    <input type='text' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter Product company' className="input"/>
    <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} placeholder='Enter Product Color' className="input"/>
    <input type='text' value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Product Category' className="input"/>
    <button className='text-center font-bold text-white bg-gray-700 border-none rounded-xl px-4 py-2 flex m-auto' onClick={updateProduct}>Update Button</button>
    <button className={"text-center font-bold text-white bg-gray-700 border-none rounded-xl px-4 py-2 flex m-auto mt-3"} type="button" onClick={() => router.back()}>
      go back
    </button>
    </>
  )
}
