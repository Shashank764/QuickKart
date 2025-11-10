import React, { useContext, useState } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
    const navigate=useNavigate()
    const [title,settitle]=useState("")
    const [image,setimage]=useState("")
    const [category,setcategory]=useState("")
    const [price,setprice]=useState("")
    const [description,setdescription]=useState("")

    const [products,setproduct]=useContext(productContext)

    const AddProductHandler=(e)=>{
        e.preventDefault()
        if(title.trim().length<5 ||
            image.trim().length<5||
            category.trim().length<2||
            price.trim().length<1||
            description.trim().length<10
        ){
            // alert("All fields must be filled...!")
            toast.error("all fields must be filled")
        }else{
            const product={
                id:nanoid(),
                title,
                image,
                category,
                price,
                description,
            }
            setproduct([...products,product])
            localStorage.setItem("products",JSON.stringify([...products,product]))
            toast.success("product Added Successfully")
            navigate("/")
            // console.log(product)
        }
    }
  return (
    <form 
    onSubmit={AddProductHandler}
    className="flex flex-col items-center p-[5%] w-screen h-screen">
        <h1 className="text-3xl w-1/2 mb-5">Add New Product</h1>
      <input 
        type="URL" 
        placeholder="Image link" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        onChange={(e)=>setimage(e.target.value)}
        value={image}
      />
      <input 
        type="text" 
        placeholder="title" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        onChange={(e)=>settitle(e.target.value)}
        value={title}
      />
      <input 
        type="text" 
        placeholder="Category" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        onChange={(e)=>setcategory(e.target.value)}
        value={category}
      />
      <input 
        type="number" 
        placeholder="Price" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        onChange={(e)=>setprice(e.target.value)}
        value={price}
      />
      <textarea type="text" 
        placeholder="Description" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        rows={10}
        onChange={(e)=>setdescription(e.target.value)}
        value={description}
        ></textarea>
        <div className="w-1/2">
            <button 
            className='hover:bg-green-100 py-2 px-5 border rounded-md border-green-300'
            >Add Product</button>
        </div>
    </form>
  );
};

export default Create;
