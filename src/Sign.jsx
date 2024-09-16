import React, { useState } from 'react'


const Sign = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: ''
  })
  function inputHandel(e) {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value })
  }
  function signSubmit(e) {
    e.preventDefault()
    console.log(userData)
  }
  return (
    <div className='register'>
      <h1>Registeration</h1>
      <form className='inputsRegister' onSubmit={signSubmit}>
        <div>
          <p>Name</p>
          <input value={userData.name} onChange={inputHandel} id='name' type="text" placeholder='Name' />
        </div>
        <div>
          <p>Email</p>
          <input value={userData.email} onChange={inputHandel} id='email' type="text" placeholder='Phone Number' />
        </div>
        <div>
          <p>Password</p>
          <input value={userData.password} onChange={inputHandel} id='password' type="password" placeholder='Password' />
        </div>
        <div>
          <p>Confirm Password</p>
          <input value={userData.cPassword} onChange={inputHandel} id='cPassword' type="password" placeholder='Comfirm Password' />
        </div>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default Sign
