import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageLayout from './layout/PageLayout'
import Home from './page/Home'
import user from './data/user'
import Product from './page/Product'
import products from './data/product'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path='/' element={<PageLayout user={user} />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product products={products} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
