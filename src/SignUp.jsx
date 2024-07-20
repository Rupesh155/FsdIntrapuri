import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  let [input, setInput] = useState({
    name: '',
    mail: '',
    password: ''
  })
  let [data, setData] = useState([])

  function fun1(e) {
    let { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  function save() {
    const newData = [...data, input]
    setData(newData)
    localStorage.setItem('userData', JSON.stringify(newData))
  }

  return (
    <div>
      <h2>Signup</h2>
      <input
        type='text'
        onChange={fun1}
        name='name'
        value={input.name}
        placeholder='Enter your name'
      />
      <br/>
      <input
        type='email'
        onChange={fun1}
        name='mail'
        value={input.mail}
        placeholder='Enter your email'
      />
      <br/>
      <input
        type='password'
        onChange={fun1}
        name='password'
        value={input.password}
        placeholder='Enter your password'
      />
      <br/>
      <button onClick={save}>Save</button>
      <br/>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default SignUp
