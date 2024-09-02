import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  const [addListName, setaddListName] = useState('')

  const [name, setName] = useState([])


  function userData() {
    setaddListName('')
    if (addListName.trim() == "") {
      alert(" Please enter a name")
      return;
    }

    // const findName =  name.filter(n =>{
    //     if (n.userName.toLowerCase() == addListName.toLowerCase()) {
    //       return true
    //     }
    //     return false
    // })
    const findName = name.filter(val => val.userName.toLowerCase() == addListName.toLowerCase())
    if (findName.length > 0) {

      alert("This member is already exist")
      return
    }
    setName([...name, { userName: addListName, userAmount: 0 }])
    console.log('hello')
  }

  return (<>
    <nav className='nav'>
      <div className='amTotel'><button>00</button><button>00</button></div>
      <div className='sign'>
        <button><Link to={'/Sign'}>Sign</Link></button>
        <button><Link to={'/Login'}>Login</Link></button>
      </div>
    </nav>
    <main>
      <input className='search' type="text" placeholder='Search...' />

      <div className='add'>
        <input type="text" value={addListName} onChange={(e) => { setaddListName(e.target.value) }} placeholder='Add user...' />
        <button onClick={userData}>Add +</button>
      </div>
    </main>

    {

      name.map(({ userName, userAmount }) => {
        return (
          <div className='list' key={Math.random()}>
            <h1>{userName}</h1>
            <h1>{userAmount}</h1>
          </div>
        )
      })
    }


  </>
  )
}


export default App
