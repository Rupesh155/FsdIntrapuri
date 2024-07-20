// import React from 'react'
// import './App.css'
// import { Route,Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import NavBar from './NavBar'
// import Form from './Form'
// const App = () => {
//   return (
//  <div>
//   <Form/>
// {/* <NavBar/> */}

 


// {/* </Routes> */}
//  </div>
//   )
// }




// export default App


// import React,{useEffect, useState} from 'react'
// const App = () => {
//   let [count,Setcount]=useState(0)
//   let [city,SetCity]=useState('BHOPAL')
//   useEffect(()=>{
//     fetch('https://dummyjson.com/recipes')
//     .then(res => res.json()).then((data)=>{
//       console.log(data);
//     })

//   },[count])

//   function fun1(){
//     Setcount(count+1);
//   }

//   function fun2(){
//     SetCity('delhi');
//   }

//   return (
//     <div>
//     <p>{count}</p>
//     <button onClick={fun1}>add </button>


//     <p>{city}</p>
//     <button onClick={fun2}> city</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   let arr=[1,2,3,4,5,56,6]
//   return (
//     <div>
//       {
//         arr.filter((a,b,c)=>{
//           // console.log(a>3);
//           return(<>
//           <p></p>
//           </>)
//         })
//       }

//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// const App = () => {
//   // let count=0
//     let [count,SetCount]=  useState(0)
//   function add(){
//     SetCount(count+1)
//   }
  
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={add}> add</button>
//     </div>
//   )
// }
// export default App


// import React from 'react'
// import NavBar from './NavBar'
// import {Route,Routes}  from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route   path='/' element={<Home/>}/>
//         <Route   path='/about' element={<About/>}/>
//         <Route   path='/contact' element={<Contact/>}/>


//       </Routes>
//     </div>
//   )
// } 

// export default App

// import React, { useState } from 'react'
// const App = () => {
//   return (
//     <div>
//    <Hook/> 
//     </div>
//   )
// }
// const Hook=()=>{
//   let [count,SetCount]=useState(0)
//   function fun1(){
//     SetCount(count+5)
//   }
//   return(<>
//    <p> {count}</p>
//    <h3>sivan</h3>
//    <button> change</button>
//       <button onClick={fun1}> click</button>
//   </>)
// }

// export default App




import React from 'react'
import SignUp from './SignUp'
import { Route ,Routes} from 'react-router-dom'
import Login from './Login'



const App = () => {
  return (
    <div>


  <Routes>
  <Route   path='/'   element={<SignUp/>}/>
  <Route   path='/login'   element={<Login/>}/>

  </Routes>

      
       </div>
  )
}

export default App



