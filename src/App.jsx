import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageLayout from './layout/PageLayout'
import Home from './page/Home'
import user from './data/user'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path='/' element={<PageLayout user={user} />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
