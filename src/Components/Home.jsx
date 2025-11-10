import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import Details from "./Details";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(productContext);
  const {search}=useLocation()
  const category=decodeURIComponent(search.split("=")[1])
  // console.log(category)
  const[filteredproduct,setfilteredproduct]=useState(null)
  // let filteredproduct=products && products;

  const getproductcategory=async()=>{
    try {
      const {data}=await axios.get(`/products/category/${category}`)
      console.log(data)
      setfilteredproduct(data)
    } catch (error) {
      console.log(error)   
    }
  }
  useEffect(()=>{
    if(!filteredproduct || category=="undefined")setfilteredproduct(products);
    if(category!="undefined"){
      // getproductcategory()
      setfilteredproduct(products.filter(p=>p.category==category));
    };
  },[category,products])
  return( 
    products ? (
    <>
      <Nav />
      <div className="h-screen w-[85%] pl-10 pt-18 flex gap-3 flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredproduct&&filteredproduct.map((item,id)=>
        // console.log(item)
          <Link
            key={id}
            to={`/Details/${item.id}`}
            className="card p-5 border shadow rounded w-[15%] h-[35vh] flex flex-col justify-center"
            >
            <div
              className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  `URL(${item.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300">{item.title}</h1>
          </Link>
        )}
      </div>
    </>
  ) : (
    <Loading />
    )
  );
};

export default Home;
