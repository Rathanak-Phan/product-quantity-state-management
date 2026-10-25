import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageLayout from './layout/PageLayout'
import Home from './page/Home'
import user from './data/user'
import Product from './page/Product'
import products from './data/product'
import { useState } from 'react'

function App() {
  const[cart, setCart] = useState([]);

  const AddToCart = (product) => {
    setCart((currentCart) => {
      return [...currentCart, product];
    });
  }
  
  console.log(cart);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path='/' element={<PageLayout user={user} cart={cart} />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product products={products} AddToCart={AddToCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
