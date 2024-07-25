"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
export default function DeleteProduct(props) {
  const router = useRouter()
  const deleteProduct = async() => {
    let response = await fetch("http://localhost:3000/api/products/"+props.id,{
      method:"delete"
    });
    response = await response.json();
    if(response.success){
      alert("Product deleted")
      router.push('/products')
    }
  }
  return (
    <div>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  )
}
