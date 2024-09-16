import React, { useState } from 'react'
import { dataProvider } from './context/Data'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  const { abc } = useParams()
  const { name, setName } = useContext(dataProvider)
  const filterData = name.filter((val) => val.userName == abc)

  const [amt, setAmt] = useState()
  const [amt2, setAmt2] = useState([])


  function amounts(e) {
    const selectBtn = e.target.className
    setAmt2([...amt2, { amt, selectBtn }])
  }

  return (
    <div>
      {
        filterData.map(({ userName, userAmount }) => {
          return (
            <div className='user' key={Math.random()}>
              <div className='userName'><div>
                <Link to={'/'}>
                <img  src="https://img.icons8.com/tiny-glyph/16/FFFFFF/back.png" />
                </Link>
                <p>Active </p></div>
                <div> <h1>{userName}</h1>
                  <h1>{userAmount}</h1></div>
                  </div>
            </div>
                )
              })
              }

              <div className='trans'>
                {
                  amt2.map(({amt, selectBtn }) => {
                    return (<>
                      <h1 className={selectBtn=='send'? 'red' : 'green'}> ₹{amt}</h1>
                    </>
                    )
                  })
                }
              </div>
              <div className='inputSR'>
                <input type="number" value={amt} onChange={(e) => { setAmt(e.target.value) }} placeholder='Enter Amount...' />
                <div className='inputBtns'>
                  <button onClick={amounts} className='send'>Send</button>
                  <button onClick={amounts} className='receive'>Receive</button>
                </div>
              </div>
            </div>
  )
}

export default User
