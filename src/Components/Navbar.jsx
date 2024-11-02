import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const cartItems=useSelector(state =>state.cart.items)
  const navigate=useNavigate()
  const handleCartClick=()=>{
    console.log("cart clicked")
    console.log(cartItems)
    navigate('/cart')
  }
  return (
 <>
    <nav>
        <span className='logo'>Plant Nursery Home</span>
        <div className="cart-item">
            {cartItems.length>0 && <div className="cart-item-num">{cartItems.length}</div>}
           <div className='cart-logo'> <i className="fas fa-shopping-cart" onClick={handleCartClick}></i></div>
        </div>
    </nav>
 </>
  )
}

export default Navbar
