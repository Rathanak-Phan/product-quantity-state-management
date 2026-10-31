import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageLayout from './layout/PageLayout'
import Home from './page/Home'
import user from './data/user'
import Product from './page/Product'
import products from './data/product'
import { useState } from 'react'
import Cart from './page/Cart'

function App() {
  const[cart, setCart] = useState([]);
  
  const Increment = (productId) => {
      setCart((currentCart) =>
          currentCart.map((item) =>
              item.id === productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
          )
      );
  };

  const Decrement = (productId) => {
      setCart((currentCart) =>
          currentCart.map((item) =>
              item.id === productId
                  ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                  : item
          )
      );
  };

  const AddToCart = (product) => {
    setCart((currentCart) => {
      const existingCart = currentCart.find((item) => item.id === product.id);

      if (existingCart) {
        return currentCart.map((item) => 
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item 
        );
      }

      return [...currentCart, {...product, quantity: 1}];
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
          <Route path='/cart' element={<Cart cart={cart} Increment={Increment} Decrement={Decrement}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
