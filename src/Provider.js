import React, { createContext, useReducer, useEffect } from 'react'
import cartReducer from './_reducers/cart.reducer'
import { cartInitialState } from './_initialStages/cart.states'
import { cartActions } from './_actions/cart.actions'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState)

  useEffect(() => {
    cartActions.fetchData(cartDispatch)
  }, [])

  useEffect(() => {
    cartActions.getTotal(cartDispatch)
  }, [cartState.cart])

  return (
    <GlobalContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
