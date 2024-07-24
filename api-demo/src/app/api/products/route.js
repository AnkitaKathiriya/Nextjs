import mongoose from "mongoose";
import { connectionStr } from "../../lib/db";
import { NextResponse } from "next/server";
import { Product } from "../../lib/model/product";
const {username,password } = process.env;

export async function GET(){
let data = []
let success = true
try {
    await mongoose.connect(connectionStr)
     data = await Product.find();
} catch (error) {
    // data = {success:false}
    data = {result:"error"}
    success = false
}
   return NextResponse.json({result:data, success})
}

// export async function POST(){
//     await mongoose.connect(connectionStr)
//     let product = new Product({
//         name:"Not 10",
//         price:"30000",
//         company:"One plus",
//         color:"C green",
//         category:"mobile"
//     })
//     const resultData = await product.save();
//    return NextResponse.json({resultData,success:true})
// }

//give a object data in postmen with using post method and check db data inserted. 
export async function POST(request){
    const payload = await request.json()
    await mongoose.connect(connectionStr)
    let product = new Product(payload)
    const resultData = await product.save();
   return NextResponse.json({resultData,success:true})
}