import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const Edit = () => {
    const [products,setproducts]=useContext(productContext)
    const navigate=useNavigate()
    const {id}=useParams()
    const [product,setproduct]=useState({
        image:"",
        title:"",
        category:"",
        price:"",
        description:"",   
    })
    const changehandler=(e)=>{
        console.log(e.target.name,e.target.value)
        setproduct({...product,[e.target.name]:e.target.value})   
    }
    // const [title,settitle]=useState("")
    // const [image,setimage]=useState("")
    // const [category,setcategory]=useState("")
    // const [price,setprice]=useState("")
    // const [description,setdescription]=useState("")


    useEffect(()=>{
        setproduct(products.filter((p)=>p.id==id)[0])
    },[id])
    // console.log(product)

    const AddProductHandler=(e)=>{
        e.preventDefault()
        if(
            product.title.trim().length<5 ||
            product.image.trim().length<5||
            product.category.trim().length<2||
            product.price.length<1||
            product.description.trim().length<10
        ){
            alert("All fields must be filled...!")
        }else{
            // const product={
            //     id:nanoid(),
            //     title,
            //     image,
            //     category,
            //     price,
            //     description,
            // }
            // setproducts([...products,product])
            // localStorage.setItem("products",JSON.stringify([...products,product]))
            // navigate("/")
            // toast.success("New Product Added")
            // console.log(product)
            const pi=products.findIndex((p)=>p.id==id)
            const copydata=[...products]
            copydata[pi]={...products[pi],...product}
            // console.log(product,pi)
            setproducts(copydata)
            localStorage.setItem("products",JSON.stringify(copydata))
            navigate(-1)
            toast.success("Details Updated Successfully")
            // console.log(product)
        }
    }
  return (
    <form 
    onSubmit={AddProductHandler}
    className="flex flex-col items-center p-[5%] w-screen h-screen">
        <h1 className="text-3xl w-1/2 mb-5">Edit Product Details</h1>
      <input 
        type="URL" 
        placeholder="Image link" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        name="image"
        onChange={changehandler}
        value={product?.image ||""}
      />
      <input 
        type="text" 
        placeholder="title" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        name="title"
        onChange={changehandler}
        value={product?.title || ""}
      />
      <input 
        type="text" 
        placeholder="Category" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        name="category"
        onChange={changehandler}
        value={product?.category||""}
      />
      <input 
        type="number" 
        placeholder="Price" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        name="price"
        onChange={changehandler}
        value={product?.price||""}
      />
      <textarea type="text" 
        placeholder="Description" 
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
        rows={10}
        name="description"
        onChange={changehandler}
        value={product?.description||""}
        ></textarea>
        <div className="w-1/2">
            <button 
            className='hover:bg-green-100 py-2 px-5 border rounded-md border-green-300'
            >Edit Product</button>
        </div>
    </form>
  )
}

export default Edit