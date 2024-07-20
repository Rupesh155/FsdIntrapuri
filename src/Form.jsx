// import React, { useState } from 'react'

// const Form = () => {
//     let [input,SetInput]=useState({
//       firstName:'',
//       lastName:'',
//       email:'',
//       passWord:''
//       })


//       let [data,SetData]=useState('')
//     function fun1(e){
//     let {name,value}=    e.target
//         SetInput({...input,[name]:value})
//         console.log(input);
//     }

//     function done(){
//       localStorage.setItem('name',JSON.stringify(input))
//        let new1= JSON.parse(localStorage.getItem('name')) 

//        SetData(new1)

//       //  console.log(new1,"koi mil gyaa");
//     }


//   return (
//     <div>
//         <fieldset> 
//             <legend>  form</legend>
//             <h2>{data.firstName}</h2>
  
//         <input  type='text'  name='firstName' value={input.firstName}   onChange={fun1}  placeholder='Enter your name'/>
//         <br/>
//         <br/>

//         <input  type='text'  name='lastName'  onChange={fun1}  value={input.lastName}  placeholder='Enter your lastname'/>
//         <br/>
//         <br/>
//         <input  type='email'  onChange={fun1}  value={input.email} name='email' placeholder='Enter your email'/>
//         <br/>
//         <br/>
//         <input  type='password'  onChange={fun1}  value={input.passWord}  name='passWord' placeholder='Enter your password'/>
//         <br/>
//         <br/>

    
//         <button  onClick={done}> sumbit</button>
//         </fieldset>

      

//     </div>
//   )
// }

// export default Form



// let obbj={
//   id:1,
//   name:"helllo"
// }
// let {id}=obbj



// import React, { useState } from 'react'
// const Form = () => {
//    let [input,SetInput]= useState('')
//    let [data,SetData]=useState([])
//   function fun1(e){
//     // console.log(a.target.value);
//     SetInput(e.target.value)

//   }
//   function fun2(){
//     SetData([...data,input])
//     SetInput('')
//   //  console.log(input,"hehehe");

//   }
//   return (
//     <div>
// <p>{data}</p>
//    <fieldset> 

// <input   type='text' placeholder='Enter your name'   value={input}  onChange={fun1}/>
// <br/>
// <br/>

// {/* <input   type='email' placeholder='Email'   onChange={fun1}/> */}
// <br/>
// <br/>
// <button onClick={fun2}>add</button>
// </fieldset>

//     </div>
//   )
// }

// export default Form