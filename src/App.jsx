import React from 'react'
import Home from './Components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './Components/Details'
import Create from './Components/Create'
import Edit from './Components/Edit'

const App = () => {
  const {search,pathname}=useLocation()
  return (
    <div className='h-screen w-screen flex'>
      {(pathname!='/'||search.length>0)&&(
        <Link 
        to={"/"} 
        className='hover:bg-red-100 text-red-400 font-bold absolute left-[18%] top-[3%] border rounded-md px-4 py-1'
        >Home</Link>
      )}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Create' element={<Create/>}></Route>
        <Route path='/Edit/:id' element={<Edit/>}></Route>
        <Route path='/Details/:id' element={<Details/>}></Route>
      </Routes>
    </div>
  )
}

export default App