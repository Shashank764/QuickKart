<h1>1.state hook</h1>

```jsx
//app
import React, { useState } from "react";
import Card from "./Components/Card";
function app() {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvGQ-mdTE8X1iFE2HEwmSEBcUve1HME698YA&s",
      name: "rohan",
      description: "artist",
      friends: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQu8uWSJrxVnu7DuTTRa5vGTCFbRTcQa1VQ&s",
      name: "sohan",
      description: "painter",
      friends: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iI_Nshu2x5taM7zZchxjuRSdgMu5WDo_fg&s",
      name: "mohan",
      description: "engineer",
      friends: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHKAHnxWeY0fkI_sxtMKzSIoXbLSRy2vkMQ&s",
      name: "subham",
      description: "data analyst",
      friends: false,
    },
  ];
  const [val, setval] = useState(data);
  const handleFriend = (indexes)=>{
   setval((prevState)=>{
    // return alert("heloo")
    return prevState.map((item,index)=>{
      if(index===indexes){
        return {...item, friends:!item.friends}
        // return alert("heloo")
      }
      return item; 
    })
   })
  }
  return (
    <>
      <div className="w=full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {val.map((item, index) => (
          <Card key={index} index={index} handleClick={handleFriend} values={item} />
        ))}
      </div>
    </>
  );
}

export default app;
```
```jsx
//card
import React from "react";

function Card({values, handleClick,index}){
    const {image,name,description,friends}=values;

    return (
        <div className="w-60 h-60 bg-white ronded-md overflow-hidden">
            <div className="w-full h-32 bg-gray-200">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            {/* <div className="pb-5"></div> */}
            <div className="w-full px-3 py-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-xs mt-2 pb-2">{description}</p>
                <button onClick={()=>handleClick(index)} className={`mt- px-3 py-1 text-xs text-white ${friends?"bg-green-500":"bg-blue-500"} font-semibold rounded-md`}>{friends?"friends":"Add friends"}</button>
            </div> 
        </div>
    )
}

export default Card;
```

<hr>
<h1>2. props and state</h1>

```jsx
//app
import React, { useState } from "react";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
function app() {
  const data=[
  {"image":"https://f4.bcbits.com/img/0038841058_10.jpg","songname":"Evangelic Girl is a Gun","artist":"yeule","favouritised":false},
  {"image":"https://cdn.shopify.com/s/files/1/0867/1120/6219/files/Oklou_BEC5615147.png","songname":"choke enough","artist":"Oklou","favouritised":false},
  {"image":"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/cf/f6/18cff6df-c7b6-0ca1-8067-83743f6c1f8a/193436418720_coverGriffinMcMahon.jpg/1200x1200bf-60.jpg","songname":"Revengeseekerz","artist":"Jane Remover","favouritised":false},
  {"image":"https://loudpizza.com/cdn/shop/files/ADKq_NaboJimW359uUDBGUuiNjNJPC7DoB95Di_YxsqVAdUcPuaci3Yl74yOweDLPsw-Nk_oLEdo2oa5GX-Zc8FkeIro636cP0uQEGM_RTdnq-U_pb6wF67CcwVKrJXuI3mOwRA5y8USswK0EBhDWRRx9jeEjFVUxTMkjXU_s0-d-e1-ft_1024x1024.jpg","songname":"SALVATION","artist":"Rebecca Black","favouritised":false},
  {"image":"https://best-fit.transforms.svdcdn.com/production/images/Rose-Gray-Louder-Please.jpg","songname":"Louder, Please","artist":"Rose Gray","favouritised":false},
  {"image":"https://recordstore.co.uk/cdn/shop/files/lg1_1.png","songname":"Who Let the Dogs Out","artist":"Lambrini Girls","favouritised":false},
  {"image":"https://static1.srcdn.com/wordpress/wp-content/uploads/2025/04/miley-cyrus-something-beautiful-album-cover.jpg","songname":"Something Beautiful","artist":"Miley Cyrus","favouritised":false},
  {"image":"https://cdn.albumoftheyear.org/album/1264184-fancy-that_183908.jpg","songname":"Fancy That","artist":"PinkPantheress","favouritised":false},
  {"image":"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/45/eb/8a/45eb8acb-03b6-f826-12d8-674d60f21218/764656238728_cover.jpg/1200x630bf-60.jpg","songname":"E.M.O. (EVIL MOTION OVERLOAD)","artist":"Cortisa Star","favouritised":false},
  {"image":"https://media.wonderlandmagazine.com/uploads/2025/04/BIIG-PIIG-4-extra-960x1200.jpg","songname":"11:11","artist":"Biig Piig","favouritised":false},
  {"image":"https://www.flyingnun.co.nz/cdn/shop/files/I_MONLYF__KINGMYSELF_THEPUNCHINGBAGEDITION_INDIEVINYL_1445x.png","songname":"I'm Only F**king Myself","artist":"Lola Young","favouritised":false},
  {"image":"https://thatgrapejuice.net/wp-content/uploads/2024/09/the-weeknd-hurry-up-tomorrow-tgj.jpeg","songname":"Hurry Up Tomorrow","artist":"The Weeknd","favouritised":false},
  {"image":"https://media.pitchfork.com/photos/66e4442b4f5254c605161ff1/master/w_1280%2Cc_limit/FKA-twigs-Eusexua.jpg","songname":"EUSEXUA","artist":"FKA twigs","favouritised":false},
  {"image":"https://hit-channel.com/wp-content/uploads/2025/01/mayhem.webp","songname":"MAYHEM","artist":"Lady Gaga","favouritised":false},
  {"image":"https://www.nme.com/wp-content/uploads/2024/11/banks-album@2000x2000.jpg","songname":"Off With Her Head","artist":"Banks","favouritised":false},
  {"image":"https://media.pitchfork.com/photos/64f1ea3162097041dd8c6405/master/w_1280%2Cc_limit/Doja-Cat-Scarlet.jpg","songname":"Scarlet","artist":"Doja Cat","favouritised":false},
  {"image":"https://hips.hearstapps.com/hmg-prod/images/sza-lana-3-green-leaves-index-67699a8eb3dd4.jpg","songname":"LANA","artist":"SZA","favouritised":false},
  {"image":"https://uproxx.com/wp-content/uploads/2024/03/Dua-Lipa-Radical-Optimism.jpg","songname":"Radical Optimism","artist":"Dua Lipa","favouritised":false},
  {"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Charli_XCX_-_Brat_(album_cover).png/1200px-Charli_XCX_-_Brat_(album_cover).png","songname":"Brat","artist":"Charli XCX","favouritised":false},
  {"image":"https://a0.cdn.hhv.de/items/images/generated/970x970/01197/1197800/4-billie-eilish-hit-me-hard-and-soft.webp","songname":"Hit Me Hard and Soft","artist":"Billie Eilish","favouritised":false}
]
const [val, setVal] = useState(data);
const handleFav = (itemindex) =>{
  setVal((prev)=>{
    // return alert("heloo")
    return prev.map((item,index)=>{
      if(index===itemindex){
        // return alert("heloo")
        return {...item, favouritised:!item.favouritised};
      }
      return item; 
    })
   })
}
  return (
    <>
      <div className="w=full h-screen bg-zinc-300">
        <NavBar data={val} />
        <div className="flex item-center justify-center flex-wrap gap-5 mt-20">
          {val.map((item,index)=>{return <Card key={index} handleFav={handleFav} data={item} index={index}/>})}
        </div>
      </div>
    </>
  );
}

export default app;
```

```jsx
//card
import React from 'react'

function Card({data,index,handleFav}) {
    const { songname, artist, image, favouritised } = data
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-3'>
        <div className='w-20 h-20 bg-orange-600 rounded-md'>
            <img className='w-full h-full object-cover' src={image} alt={songname} />
        </div>
        <div className=''>
            <h3 className='text-2xl'>{`${songname}`}</h3>
            <h6 className='text-sm'>{`${artist}`}</h6>
            <button onClick={()=>handleFav(index)} className={`px-3 ${favouritised?" bg-orange-200":" bg-green-400"} rounded-full text-sm`}>{`${favouritised?"favourite":"Add to favourite"}`}</button>
        </div>
    </div>
  )
}

export default Card
```
```jsx
//navbar
import React from 'react'

function NavBar({data}) {
    // const {favouritised} = data
    // let items = data.map((item)=>{item.favouritised = });
  return (
    <div className='w-full px-20 py-2 flex justify-between items-center font-bold'>
        <h3>Orange</h3>  
        <div className='flex p-2 bg-orange-600 text-white rounded-md text-sm gap-3'>
            {/* <h3>{`Favourites: `}</h3> */}
            <h3>{`Favourites: ${data.filter(item=>item.favouritised).length}`}</h3>
        </div>
    </div>
  )
}

export default NavBar
```
<hr>
<h1>3. form handiling</h1>

A.useRef
```jsx
  import React, { useRef } from 'react'

function App() {
  const name =useRef(null)
  const age =useRef(null)
  const email =useRef(null)
  const handleSubmit = (datails)=>{
    datails.preventDefault();
    console.log(name.current.value)
    console.log(age.current.value)
    console.log(email.current.value)
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input ref={name} type="text" placeholder='name' />
      <input ref={age} type="text" placeholder='age' />
      <input ref={email} type="text" placeholder='email' />
      <input className='bg-red-300 rounded-md px-3 py-2' type="submit" />
    </form>
  )
}

export default App
```

B.controlled components
```jsx
import React, { useState } from 'react'

function App() {
  const[val,setval] = useState({name: '', email: ''})
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(val)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={(event)=>setval({...val, name:event.target.value})} type="text" placeholder='name'/>
        <input onChange={(event)=>setval({...val, email:event.target.value})} type="text" placeholder='email'/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
```

C. React hook

```jsx
import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const{register, handleSubmit}=useForm();
  console.log(register())
  return (
    <div>
      <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register('name')} type="text" placeholder='name' />
        <input {...register('email')} type="email" placeholder='email' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
```
<hr>
<h1>3. form handiling exercise</h1>

```jsx
//App
import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form1 from './Components/Form1'

function App() {
  const [users,setusers]=useState([]);

  const handelFormSubmitData=(data)=>{
     setusers([...users,data  ])
  }

  const handleRemove=(id)=>{
    setusers(()=>users.filter((item,index)=>index!=id))
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
        <Cards handleRemove={handleRemove} users={users}/>
        <Form1 handelFormSubmitData={handelFormSubmitData}/>
      </div>
    </div>
  )
}

export default App
```
```jsx
//Navbar
import React from 'react'

function NavBar({data}) {
    // const {favouritised} = data
    // let items = data.map((item)=>{item.favouritised = });
  return (
    <div className='w-full px-20 py-2 flex justify-between items-center font-bold'>
        <h3>Orange</h3>  
        <div className='flex p-2 bg-orange-600 text-white rounded-md text-sm gap-3'>
            {/* <h3>{`Favourites: `}</h3> */}
            <h3>{`Favourites: ${data.filter(item=>item.favouritised).length}`}</h3>
        </div>
    </div>
  )
}

export default NavBar
```
```jsx
//Form1
import React from 'react'
import { useForm } from 'react-hook-form'

function Form1({handelFormSubmitData}) {
  const{register, handleSubmit,reset}=useForm()
  const handelFormSubmit=(data)=>{
    handelFormSubmitData(data);
    reset();
  }
  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form className='flex gap-10' onSubmit={handleSubmit(handelFormSubmit)}>
        <input {...register('name')} className='rounded-md px-2 py-1 bg-zinc-100 font-semibold outline-none text-base' type="text" placeholder='name' />
        <input {...register('email')} className='rounded-md px-2 py-1 bg-zinc-100 font-semibold outline-none text-base' type="text" placeholder='Email' />
        <input {...register('about')} className='rounded-md px-2 py-1 bg-zinc-100 font-semibold outline-none text-base' type="text" placeholder='about' />
        <input {...register('image')} className='rounded-md px-2 py-1 bg-zinc-100 font-semibold outline-none text-base' type="text" placeholder='pic url' />
        <input className='rounded-md px-5  py-1 bg-red-600 text-white' type="submit" />
      </form>
    </div>
  )
}

export default Form1
```
```jsx
//Cards
import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className='w-full h-96 max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
      {users.map((item,index)=>{
       return <Card handleRemove={handleRemove} user={item} id={index} key={index}/>
      })}
    </div>
  )
}

export default Cards
```
```jsx
// Card
import React from 'react'

function Card({user,handleRemove,id}) {
  return (
    <>
        <div className='w-32 h-fit bg-sky-200 rounded-lg flex flex-col items-center p-2'>
          <div className='image w-10 h-10 rounded-full bg-blue-700 overflow-hidden'>
              <img className='h-full w-full  object-cover' src={user.image} alt="" />
          </div>
          <h1 className='text-xl font-bold text-center leading-none'>{user.name}</h1>
          <h1 className='opacity-50 text-xs font-semibold'>{user.email}</h1>
          <p className='text-center text-xs font-semibold leading-none tracking-tight'>{user.about}</p>
          <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-500 text-xs rounded-lg font-semibold text-white mt-4'>Remove it</button>
      </div>
    </>
  )
}

export default Card
```

<hr>
<h1>4.Routing</h1>

npm i  react-router-dom 

```jsx
//main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>,
)
```
```jsx
// app
import React from 'react'
import NavBar from './Components/NavBar'
import Routing from './utils/Routing'


function App() {
  return (
    <>  
      <NavBar/>
      <Routing/>
    </>
  )
}

export default App
```
```jsx
// NavBar
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='mt-10 flex justify-center gap-10  '>

        <NavLink style={(e)=>{
          return{
            color:e.isActive?"red":"",
            fontWeight:e.isActive?"bold":"",
            textDecoration:e.isActive?"underline":"",
          }
        }} to="/">Home</NavLink>
        <NavLink style={(e)=>{
          return{
            color:e.isActive?"red":"",
            fontWeight:e.isActive?"bold":"",
            textDecoration:e.isActive?"underline":"",
          }
        }} to="/Users">Users</NavLink>
        <NavLink style={(e)=>{
          return{
            color:e.isActive?"red":"",
            fontWeight:e.isActive?"bold":"",
            textDecoration:e.isActive?"underline":"",
          }
        }} to="/About">About</NavLink>
      </nav>
  )
}

export default NavBar
```
```jsx
// /utils/Routing
import React from 'react'
import Home from '../Components/Home'
import Users from '../Components/Users'
import About from '../Components/About'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
  )
}

export default Routing
```
```jsx
// Home
import React from 'react'

const Home = () => {
  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-5xl mb-2'>Home</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, cupiditate. Earum dignissimos dolorem, laborum, excepturi dolor deleniti non ipsa autem veniam libero sequi at molestias vel omnis impedit ab possimus modi corrupti quidem eum debitis facere iure quibusdam beatae? Tenetur odit error omnis, placeat id temporibus asperiores distinctio cumque voluptatibus. Placeat, fugit ipsa vitae molestias ut fuga facilis odio. Ducimus dolorem est architecto harum sunt autem assumenda quae vitae repellendus ea necessitatibus provident minus iure nesciunt eius, a quia! Iure tenetur, vitae fuga ex nesciunt magni necessitatibus corrupti at animi illum voluptatibus ut reiciendis nulla rerum a rem porro voluptate deleniti ipsum suscipit alias odit tempora! Iusto dolorum ab beatae eos perspiciatis? Vel, quibusdam officiis nisi nostrum nam quasi itaque! Cupiditate nostrum provident aperiam in illo repellat ea quam, laudantium modi, natus dignissimos id distinctio facilis quia porro similique delectus aut eius? Accusantium, odio non! Modi neque libero perspiciatis rem voluptatibus, praesentium ipsam temporibus deserunt eius inventore repudiandae necessitatibus consequatur dolorem nobis in nihil reiciendis quaerat officiis cum sunt maxime deleniti quibusdam. Nulla mollitia blanditiis eligendi fugit minima ullam architecto repellat sunt voluptates dicta. Velit, ad sit vero quisquam sint sed, quod voluptatum cumque incidunt dolores, ab quos atque quaerat hic libero ea! Voluptas, sapiente omnis. Officiis sapiente possimus accusantium quia autem ea sit totam voluptate, excepturi saepe quis iste eligendi corrupti iure eum adipisci quisquam unde tempora? Iure mollitia odio possimus dolore quis labore eveniet, est blanditiis eius itaque modi temporibus deleniti error! Autem, quia quas dicta facere nesciunt dolores eos, perferendis nemo numquam fugiat incidunt earum suscipit voluptatum! Sit, sunt distinctio magnam quia non libero quas nostrum minima, nam unde maiores, temporibus blanditiis labore inventore ratione suscipit. Dignissimos nobis sunt cum, perspiciatis dicta fugiat earum ipsam neque accusamus repellat expedita quas officia. Mollitia quibusdam dolore at ea minima.</p>
      <button className='px-2 py-1 rounded-md bg-zinc-200 mt-5'>Explore more</button>
    </div>
  )
}

export default Home
```
```jsx
// Users
import React from 'react'

const Users = () => {
  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-5xl mb-2'>Users</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur veritatis, assumenda iure ratione explicabo facere sit qui magni quibusdam fugiat ipsa est dolor beatae necessitatibus consequuntur culpa recusandae sequi similique ullam placeat commodi, vitae eum? Dignissimos impedit, similique porro magnam sunt dolor nemo, accusantium voluptas aliquid quia libero, quo molestias aliquam? Non voluptas dicta architecto fugit porro, iusto eum, voluptatum sunt ea consequatur nulla placeat, error eligendi quisquam assumenda voluptates? Officiis, expedita fuga illum, quaerat debitis labore non asperiores dolore facilis aut, et fugit? Commodi veniam voluptas adipisci placeat qui. Dolorum doloremque illum, temporibus harum, fuga distinctio veniam saepe fugit ab ipsum nihil velit assumenda ratione nisi possimus vitae? Commodi facilis voluptas distinctio. Ullam dolor perferendis nam tempore alias officia molestias. Laudantium incidunt numquam nesciunt vel, doloremque iusto et eaque reiciendis veniam, asperiores molestias atque necessitatibus, eveniet sed doloribus! Possimus, adipisci perspiciatis nihil dolorum fugit magni nisi ipsa libero quasi deleniti. Porro quae earum hic eligendi quis numquam error dolorem voluptates at, cumque consequuntur nesciunt in ab ipsam magni facilis iusto quos maxime iste pariatur deserunt animi exercitationem molestias! Cumque voluptates fugit facilis nihil repellat architecto sint veritatis suscipit ipsa blanditiis dolorum deserunt laboriosam incidunt id porro placeat, eos praesentium?</p>
      <button className='px-2 py-1 rounded-md bg-zinc-200 mt-5'>Explore more</button>
    </div>
  )
}

export default Users
```

```jsx
// About
import React from 'react'

const About = () => {
  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-5xl mb-2'>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta minus voluptates quisquam rerum porro adipisci delectus! Necessitatibus, quidem! Labore quae id eius deleniti doloribus velit, excepturi inventore placeat sint, enim perferendis tempora assumenda magnam impedit! Dolor corrupti laborum ipsa necessitatibus itaque explicabo ipsam nostrum, laboriosam odio. Veniam magni odit omnis odio. Dolor necessitatibus voluptas a in nobis rerum qui.</p>
      <button className='px-2 py-1 rounded-md bg-zinc-200 mt-5'>Explore more</button>
    </div>
  )
}

export default About
```
<hr>

<h1>5. How to integrate API in React JS and useEffect() on stateChange</h1>

```jsx
// App
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Show from './Components/Show'
import Home from './Components/Home'
import Services from './Components/Services'

const App = () => {

  return (
    <div>
      <nav className='mt-10 flex justify-center gap-10'>
        <Link to={"/"}>Home</Link>
        <Link to={"/Show"}>Show</Link>
        <Link to={"/Services"}>Services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Show' element={<Show/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
      </Routes>
    </div>

  )
}

export default App
```

```jsx
// Home
import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
```
```jsx
// Show
import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
const Show = () => {
  const [product, setProduct] =useState([])

  const getProducts=()=>{
    const api="/products"

    axios.get(api).then(products=>{
      // console.log(products)
      setProduct(products.data)
    }).catch(err=>console.log(err))

  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
      <button onClick={()=>getProducts()} className='px-4 py-1 bg-red-500 mt-10 ml-10 rounded-md text-white'>Get API Data</button>
      <ul>
          {product.length>0?(
            product.map((p)=>(
            <li key={p.id} className='rounded-md bg-red-200 mt-2'>{p.title}</li>
          ))):("Loading...")
        }
      </ul>
    </>
  )
}

export default Show
```
```jsx
// Services
import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'

const Services = () => {
    const[first,setfirst]= useState("this is normal data")
    const[second,setsecond]= useState("this is very large data")

    const getusers=()=>{
        const api="/users"
        axios.get(api).then((users)=>{
            console.log(users)
        }).catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getusers()
        console.log("Services component is created.")

        return ()=>{
            console.log("Services component is deleted.")
        }
    },[second])  //square braces controlles the rrrendring of the page. jiska bhi naam iske ander lika lika hoga uske change hone pe page rerender hoga baki saare changes pe bs wo particular component update hoga

  return ( 
    <div className='mt-10 ml-10'>
        <h1 className='mt-5'>{first}</h1>
        <button onClick={()=>setfirst("Normal data has been changed")} className='py-1 px-4 rounded-md bg-zinc-200'>Change normal data</button>

        <h1 className='mt-5'>{second}</h1>
        <button onClick={()=>setsecond ("Larger data has been changed")} className='py-1 px-4 rounded-md bg-zinc-200'>Change large data</button>
    </div>
  )
}

export default Services
```

```jsx
// /uitls/axios
import axios from "axios";

const instance=axios.create({
    baseURL:"https://fakestoreapi.com/",
});

export default instance;
```
<hr>

<h1>6. React context api</h1>


```jsx
// main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Context from './utils/Context.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
  //  </StrictMode>,
) 

```

```jsx
// App
import React from 'react'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import User from './Components/User'
import About from './Components/About'
import UserDetails from './Components/UserDetails'

const App = () => {


  return (
    <div className='p-10'>
      <nav className='flex gap-10 justify-center mt-10'>
        <Link to={"/"}>Home</Link>
        <Link to={"/User"}>User</Link>
        <Link to={"/About"}>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/User/:id' element={<UserDetails/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
    </div>
  )
}  

export default App
```

```jsx
// /utils/Context
import React, { createContext, useState } from 'react'

export const UserContext=createContext()

const Context = (props) => {
  const [users,setusers]=useState([
    {id:0, username:"abc", city:"patna"},
    {id:1, username:"rohan", city:"delhi"},
    {id:2, username:"shiv", city:"mumbai"},
    {id:3, username:"ram", city:"pune"},
  ])
    console.log(props)
  return (
    // <UserContext>{props.children}</UserContext>
    <UserContext.Provider value={{users,setusers}}>{props.children}</UserContext.Provider>  
    // props.children
  )
}

export default Context
```

```jsx
// Component
import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
```

```jsx
// User
import React, { useContext } from 'react'
import UserDetails from './UserDetails'
import { Link } from 'react-router-dom'
import { UserContext } from '../utils/Context'

const User = () => {
  const users= useContext(UserContext);
  console.log(users.users)
  return (
    <div>
        <h1 className='text-4xl'>user list</h1>
        <div className='mt-10 flex flex-col'>
          {users.users.map((x)=>(
            <Link className='bg-red-100 mt-10 w-1/5 py-2' key={x.id} to={`/User/${x.id}`}>{x.username}</Link>
          ))}
          
        </div>
    </div>
  )
}

export default User
```

```jsx
// UserDetails
import React, { useContext } from 'react'
import { UserContext } from '../utils/Context'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const {users}= useContext(UserContext)
  console.log(users[id])
  return (
    <>
    <h1 className='text-xl font-bold text-red-600'>{users[id].username }</h1>
    <h1>{users[id].city }</h1>
    <button onClick={()=>navigate(-1)} className='py-1 px-2 mt-10 bg-green-200 rounded-md'>go back</button>
    </>
  )
}

export default UserDetails
```

```jsx
// About
import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About
```

<hr>
<hr>