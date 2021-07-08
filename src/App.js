import React, { useContext } from 'react'

import Navbar from './_components/Navbar/Navbar'
import CartContainer from './_components/Cart/CartContainer'
import Loading from './_components/Loading/Loading'
import { GlobalContext } from './Provider'

function App() {
  const { cartState } = useContext(GlobalContext)

  if (cartState.loading) {
    return <Loading />
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
