import React, { useContext } from 'react'
import { productContext } from '../utils/Context';
import { Link } from 'react-router-dom';

const Nav = () => {
      const [products] = useContext(productContext);
      const color=()=>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()})`
      }
      let dis_cat=products && products.reduce((acc,cv)=>[...acc,cv.category],[])
      dis_cat=[...new Set(dis_cat)]
    //   console.log(color())
  return (
    <nav className='w-[15%] h-screen bg-zinc-100 flex flex-col items-center pt-5'>
        <h1 className='text-red-600 text-5xl mb-10 italic font-bold underline'>QuickKart</h1>
        <a className='hover:bg-blue-100 py-2 px-5 border rounded-md border-blue-300' href="/create">Add new product</a>
        <hr className='my-2 w-[80%]' />
        <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
        <div className='w-[80%]'>
        {dis_cat.map((cat,index)=>(
            <Link             
            key={index}
            to={`/?category=${cat}`}
            className='hover:font-bold flex item-center mb-3'>
                    <span 
                    style={{backgroundColor:color()}}
                    className='mt-1 mr-2 w-[15px] h-[15px] rounded-full'
                    >{" "}</span>
                    {cat}
                </Link>
        ))}
        </div>
      </nav>
  )
}

export default Nav