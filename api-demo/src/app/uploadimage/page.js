"use client"
import React, { useState } from 'react'
export default function page() {
  const [file,setFile] = useState()
  const onSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData();
    data.set('file',file);
    let  result =  await fetch("api/uploadimage",{
      method: "POST",
      body:data
    });
    result = await result.json();
    console.log(result);
    if(result.success){
      alert("file uploaded successfully")
    }
  }
  return (
    <div>
      <h1 className='font-bold text-xl' >Upload Image</h1>
      <form onSubmit={onSubmit}>
        <input
        type='file'
        name='file'
        onChange={(e)=>setFile(e.target.files?.[0])}
        />
        <button type='submit'>Upload Image</button>
      </form>
    </div>
  )
}
