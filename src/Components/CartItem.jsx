import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { removeItem, updateQuantity } from '../Store/CartSlice';
import './CartItem.css';
import { useNavigate } from 'react-router-dom';


const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalcost = 0;
    cart.map((ele) => {
      totalcost += ele.cost * ele.quantity
    })
    return totalcost
  };
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ item, type: 'in' }))
  };
  const handleContinueShopping=()=>{
    navigate('/Products')

  }
  const handleDecrement = (item) => {
    dispatch(updateQuantity({ item, type: 'de' }))

  };
  const calculateTotalCost = (item) => {
    return item.quantity * item.cost
  };
  const handleRemove=(item)=>{
    dispatch(removeItem(item))
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }} className='Total-amount'>Total Cart Amount: ₹{calculateTotalAmount()}</h2>
      <div className='cart-items'>
        {cart.map((item, index) => (
          <div className="cart-product" key={index}>
            <div className="item-card">
                  <div className="image-section">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="content-section">
                            <div className="details">
                            <h2>{item.name}</h2>
                            <h4>&#8377;{item.cost}</h4>
                            </div>
                          <div className="quantity-section">
                            <button onClick={()=>handleDecrement(item)} disabled={item.quantity<=1}>-</button>
                                <span>{item.quantity}</span>
                            <button onClick={()=>handleIncrement(item)}>+</button>
                          </div>
                          <div className="rate-section">
                              <span style={{fontSize:"24px"}}>Total:{calculateTotalCost(item)}</span>
                              <button onClick={()=>handleRemove(item.name)}>Delete</button>
                          </div>
                  </div>
            </div>
          </div>
        ))}
      </div>
      <div className="continue_shopping">
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartItem;


