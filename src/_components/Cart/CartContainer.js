import React, { useContext, useEffect } from 'react'
import CartItem from './CartItem'
import { GlobalContext } from '../../Provider'
import './Cart.css'
import { cartActions } from '../../_actions/cart.actions'

const CartContainer = () => {
  const { cartState, cartDispatch } = useContext(GlobalContext)

  const clearCart = () => {
    cartActions.clearCart(cartDispatch)
  }

  const increase = (id) => {
    cartActions.increase(cartDispatch, id)
  }

  const decrease = (id) => {
    cartActions.decrease(cartDispatch, id)
  }

  const remove = (id) => {
    cartActions.remove(cartDispatch, id)
  }

  const toggleAmount = (id, type) => {
    cartActions.toggleAmount(cartDispatch, id, type)
  }

  if (cartState.cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your cart</h2>
      </header>
      {/* cart items */}
      <div>
        {cartState.cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              {...item}
              remove={remove}
              toggleAmount={toggleAmount}
            />
          )
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${cartState.total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
