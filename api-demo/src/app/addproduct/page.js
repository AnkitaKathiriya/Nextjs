"use client"
import { useState } from 'react'
import '../../app/globals.css'
import { useRouter } from 'next/navigation'
export default function () {
  const router = useRouter()
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const handleAddProduct = async() => {
    console.log(name,price,company,color,category)
    let result = await fetch("http://localhost:3000/api/products",{
      method:"POST",
      body:JSON.stringify({name,price,company,color,category})
    });
    result = await result.json();
    
    if(result.success){
      alert("new product added")
      setName("");
      setPrice("");
      setCategory("");
      setColor("");
      setCompany("");
    }
    if(name.length == 0){
      alert("Name can not be empty!")
    }
    if(price.length == 0){
      alert("Price can not be empty!")
    }
    if(company.length == 0){
      alert("company can not be empty!")
    }
    if(color.length == 0){
      alert("color can not be empty!")
    }
    if(category.length == 0){
      alert("category can not be empty!")
    }
  }
  return (
    <>
    <h1 className='font-bold text-3xl text-center mb-2'>Add Product</h1>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Product Name' className="input"/>
    <input type='text' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Product Peice'className="input"/>
    <input type='text' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter Product company' className="input"/>
    <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} placeholder='Enter Product Color' className="input"/>
    <input type='text' value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Product Category' className="input"/>
    <button className='text-center font-bold text-white bg-gray-700 border-none rounded-xl px-4 py-2 flex m-auto' onClick={handleAddProduct}>Add Button</button>
    <button className={"text-center font-bold text-white bg-gray-700 border-none rounded-xl px-4 py-2 flex m-auto mt-3"} type="button" onClick={() => router.back()}>
      go back
    </button>
    </>
  )
}
