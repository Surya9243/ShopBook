import React from 'react'

const Login = () => {
    return (
        <div className='loginMain'>
        <div className='login'>
            <h1>Name</h1>
            <div className='namePass'>
               <div>
               <p>Username</p>
               <input type="text" placeholder='Username/Number' />
               </div>
              <div>
              <p>Password</p>
              <input type="text" placeholder='Password' />
              </div>
                <button>Login</button>
            </div>
        </div>
        </div>
    )
}

export default Login
