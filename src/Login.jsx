import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({
    mail: '',
    password: ''
  })
  const [data, setData] = useState([])
  const history = useHistory()

  function handleChange(e) {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  function handleLogin() {
    const storedData = JSON.parse(localStorage.getItem('userData')) || []
    const user = storedData.find(user => user.mail === input.mail && user.password === input.password)
  if(user){
    console.log('helloo jiii');
  }
    
  } 

  return (
    <div>
      <h3>Login</h3>
      <input
        type='email'
        onChange={handleChange}
        name='mail'
        value={input.mail}
        placeholder='Enter your email'
      />
      <br/>
      <input
        type='password'
        onChange={handleChange}
        name='password'
        value={input.password}
        placeholder='Enter your password'
      />
      <br/>
      <button onClick={handleLogin}>Login</button>
      <br/>
      <Link to='/'>Signup</Link>
    </div>
  )
}

export default Login
