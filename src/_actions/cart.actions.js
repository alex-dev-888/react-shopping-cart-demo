import { cartConstants } from '../_constants/cart.constants'
import data from '../data'

const url = ''

export const cartActions = {
  clearCart,
  remove,
  increase,
  decrease,
  fetchData,
  toggleAmount,
  getTotal,
}

function clearCart(dispatch) {
  dispatch({ type: cartConstants.CLEAR_CART })
}

function remove(dispatch, id) {
  dispatch({ type: cartConstants.REMOVE, payload: id })
}

function increase(dispatch, id) {
  dispatch({ type: cartConstants.INCREASE, payload: id })
}

function decrease(dispatch, id) {
  dispatch({ type: cartConstants.DECREASE, payload: id })
}

async function fetchData(dispatch) {
  dispatch({ type: cartConstants.LOADING })
  var cart = []

  if (url !== '') {
    const response = await fetch(url)
    cart = await response.json()
    dispatch({ type: cartConstants.DISPLAY_ITEMS, payload: cart })
  } else {
    // fake get Response from server
    setTimeout(() => {
      cart = data
      dispatch({ type: cartConstants.DISPLAY_ITEMS, payload: cart })
    }, 500)
  }
}

function toggleAmount(dispatch, id, type) {
  dispatch({ type: cartConstants.TOGGLE_AMOUNT, payload: { id, type } })
}

function getTotal(dispatch) {
  dispatch({ type: cartConstants.GET_TOTALS })
}
