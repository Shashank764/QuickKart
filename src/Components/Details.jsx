import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productContext } from '../utils/Context';
import axios from '../utils/axios';
import Loading from './Loading';
import { toast } from 'react-toastify';

const Details = () => {
  const [products,setproducts]=useContext(productContext)
  const navigate=useNavigate()
  const [product,setproduct]=useState(null)
  const {id}=useParams()
//   console.log(id)
//   const getsingleproduct=async()=>{
//     try {
//         const {data}=await axios.get(`/products/${id}`)
//         console.log(data)
//         setproduct(data)
//     } catch (error) {
//         console.log(error)
//     }
//   }
  useEffect(()=>{
    if(!product){
        setproduct(products.filter((p)=>p.id==id)[0])
    }
    // getsingleproduct()
  },[])
//   console.log(product)

  const productDeletHandler=(id)=>{
    const filteredProducts=products.filter((p)=>p.id!==id)
    setproducts(filteredProducts)
    localStorage.setItem("products", JSON.stringify(filteredProducts))
    navigate("/")
  }

  return (product?(
    <>
        <button onClick={()=>navigate(-1)} className='mt-2 ml-2 py-1 px-3 rounded-md border h-fit'>Go Back</button>
        <div className='w-[80%] h-full flex justify-center bg-zinc-200 m-auto p-[10%] gap-10'>
            <img className='w-[50%]' src={`${product.image}`} alt="" />
            <div className='content'>
                <h1 className='text-6xl'>{product.title}</h1>
                <h3 className='mt-2 text-1xl text-zinc-400'>{product.category}</h3>
                <h2 className='text-2xl my-5 text-green-500 font-bold'>${product.price}/-</h2>
                <p className='text-1xl text-zinc-700 mb-10'>{product.description}</p>
                <Link to={`/Edit/${product.id}`} className='rounded-md px-7 py-2 mr-10 bg-green-500 text-white'>Edit</Link>
                <button onClick={()=>(productDeletHandler(product.id), toast.success("Product Deleted Successfully"))} className='rounded-md px-7 py-2 ml-10 bg-red-500 text-white'>Delete</button>
            </div>
        </div>
    </>
  ):(<Loading/>)
  )
}

export default Details