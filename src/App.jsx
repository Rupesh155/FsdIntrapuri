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
// import React, { useEffect, useState } from 'react'
// import './App.css'
// const App = () => {
//   let [data,SetData]=useState([])

// useEffect(()=>{
//   fetch('https://dummyjson.com/recipes').then((res)=>{
//     return res.json()

//   }).then((data)=>{
//     console.log(data.recipes);
//     SetData(data.recipes)
//     console.log(data,"datat");

//   })

// },[])   


// function fun1(id){
//   // console.log(a,"hehehe");
//  let newA= data.filter((a,b,c)=>{
//     return a.id!=id

//   })
//   SetData(newA)

// }

//   return (
//     <div>
//       {
//         data.map((a,index)=>{
//           return(<>
//           <div id='parent'>  
//           <p>{a.id}</p>
//           <p>{a.name}</p>
//           <h5>{a.cuisine}</h5>
//           <button onClick={()=>fun1(a.id)}>delet</button>
//           {/* <img   height='150' src={a.image}/> */}
//           </div>
//           </>)

//         })
//       }
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {

//   let arr=[1,2,3,4,5,6,67,7]

//   let sum=arr.reduce((a,b)=>{
//     return a+b
//   })
//   console.log(sum,"heheh");



// let [data,SetData]=useState([])

//  useEffect(()=>{
//   fetch('https://dummyjson.com/recipes').then((D)=>{
//     return D.json()

//   }).then((d)=>{
//     SetData(d.recipes)
//     console.log('heyeye');

//   })


//  },[])

// function fun1(yewobuttonhai){
//   // console.log(id,'heheh');
//  let newD=  data.filter((value,b)=>{
//     return value.id!=yewobuttonhai

//   })
//   console.log(newD,"heheh");
//   SetData(newD)

// }

//   return (
//     <div>

// {
//   data.map((a)=>{
//     return(<>
//     <p>{a.id}</p>
  
//     <p>{a.name}</p>
//     <p>{a.cuisine}</p>
//     <button onClick={()=>fun1(a.id)}> delet</button>
//    <img   height='100' src={a.image}/>
//     </>)
// })
// }

//     </div>
//   )
// }

// export default App










// // function sum(a){

// // }
// // sum(5)



// import React, { useReducer } from 'react'

// const App = () => {
//   let reducer = (state, action) => {
//     console.log(state, action, 'd');
//     if (action.type === 'incre') {
//       return state + 1;
//     } else if (action.type === 'desc') {
//       return state - 1;
//     }
//     return state;
//   }

//   let [state, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <button onClick={() => { dispatch({ type: "incre" }) }}>increment</button>
//       <button onClick={() => { dispatch({ type: "desc" }) }}>decrement</button>
//       <p>{state}</p>
//     </div>
//   );
// }

// export default App;

import React, { useReducer } from 'react'

const App = () => {


   let reducer = (state, action) => {
    console.log(state, action, 'd');
    if (action.type === 'incre') {
      return state + 1;
    } else if (action.type === 'desc') {
      return state - 1;
    }
    else if(action.type==='reset'){
      return 0
    }
    // else if(action.type==='color'){
    // return state==='red'

    // }
    return state
  }
     let [state,dispatch]= useReducer(reducer,0)
    //  let color='red'
  return (
    <div style={{backgroundColor:state}}> 
      <p>{state}</p>
          <button onClick={() => { dispatch({ type: "incre" }) }}>increment</button>
          <button onClick={() => { dispatch({ type: "desc" }) }}>decrement</button>
          <button onClick={() => { dispatch({ type: "reset" }) }}>Reset</button>
          <button onClick={() => { dispatch({ type: "color" }) }}>change</button>




    </div>
  )
}

export default App


// import React, { useState } from 'react'

// const App = () => {
//   let [data,SetData]=useState(0)


//   function fun1(){
//     SetData(data+1)
//   }
//   function fun2(){
//     SetData(data-1)
//   }
//   return (
//     <div>
//       <p>{data}</p>
//       <button onClick={fun1}> plus</button>
//       <button onClick={fun2}> minus</button>

      

//     </div>
//   )
// }

// export default App


