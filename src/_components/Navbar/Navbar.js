import React, { useContext } from 'react'
import './Navbar.css'
import { FaCartPlus } from 'react-icons/fa'
import { GlobalContext } from '../../Provider'

const Navbar = (x) => {
  const { cartState } = useContext(GlobalContext)

  return (
    <nav>
      <div className='nav-center'>
        <h3>Shopping cart</h3>
        <div className='nav-container'>
          <FaCartPlus />
          <div className='amount-container'>
            <p className='total-amount'>{cartState.amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
