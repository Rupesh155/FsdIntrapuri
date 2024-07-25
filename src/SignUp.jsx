import React, { useState } from 'react'
const SignUp = () => {
  let [input,SetInput]=useState({
    name:"",
    email:"",
    password:""
  })


  // localStorage.setItem('key','coding sidugcs78fg87gr')

 function fun1(e){ 
  // console.log(e.target,"hhehehe");
  let {name,value}=   e.target
  // console.log(e.target.value);
  SetInput({...input,[name]:value})
  console.log(input);


 }

 function done(){
  localStorage.setItem('user',JSON.stringify(input))

   let data=  localStorage.getItem('user')
   console.log(  JSON.parse(data));

 }

  return (
    <div>
      <input  type='text' name='name' value={input.name} onChange={fun1} placeholder='Enter your name'/>
      <br/>
      <br/>

      <input  type='email' name='email' value={input.email}  onChange={fun1} placeholder='Enter your email'/>
      <br/>
      <br/>

      <input   type='password'  name='password' value={input.password} onChange={fun1} placeholder='Enter your password'/>
<button onClick={done}>save </button>

    </div>
  )
}

export default SignUp