import { cartConstants } from '../_constants/cart.constants'

const cartReducer = (state, action) => {
  switch (action.type) {
    case cartConstants.LOADING:
      return { ...state, loading: true }
    case cartConstants.LOADING_DONE:
      return { ...state, loading: false }
    case cartConstants.DISPLAY_ITEMS:
      return { ...state, cart: action.payload, loading: false }
    case cartConstants.CLEAR_CART:
      return { ...state, cart: [] }
    case cartConstants.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      }
    case cartConstants.INCREASE:
      let tempCartInc = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      return { ...state, cart: tempCartInc }
    case cartConstants.DECREASE:
      let tempCartDec = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
          return cartItem
        })
        .filter((cartItem) => cartItem.amount !== 0)
      return { ...state, cart: tempCartDec }
    case cartConstants.TOGGLE_AMOUNT:
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === 'inc') {
              return { ...cartItem, amount: cartItem.amount + 1 }
            }
            if (action.payload.type === 'dec') {
              return { ...cartItem, amount: cartItem.amount - 1 }
            }
          }
          return cartItem
        })
        .filter((cartItem) => cartItem.amount !== 0)
      return { ...state, cart: tempCart }
    case cartConstants.GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount

          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      total = parseFloat(total.toFixed(2))

      return { ...state, total, amount }
    default:
      return state
  }
}

export default cartReducer
