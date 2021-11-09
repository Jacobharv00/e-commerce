import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart } from './components'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  const [ products, setProducts ] = useState( [] )
  const [ cart, setCart ] = useState( {} )

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts( data )
  }

  const fetchCart = async () => {
    setCart( await commerce.cart.retrieve() )
  }

  const handleAddToCart = async ( productId, quantity ) => {
    const item = await commerce.cart.add( productId, quantity )
    setCart( item.cart )
  }

  useEffect( () => {
    fetchProducts()
    fetchCart()
  }, [] )

  // console.log('PRODUCTS', products )
  console.log( 'CART', cart )


  return (
    <Router>
      <div>
        <Navbar totalItems={ cart.total_items } />
        <Routes>
          <Route exact path='/'
            element={ <Products products={ products } onAddToCart={ handleAddToCart } /> } />
          <Route exact path="/cart" element={ <Cart cart={ cart } /> } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
