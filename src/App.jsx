import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Layout from './components/layout'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/category/:slug" element={<Shop />} />
          {/* <Route path="/:id" element={<ProductDetails />} /> */}
          <Route path='/cart' element={<Cart />} />
        </Route>
          <Route path='*' element={<h2>404 Page Not Found</h2>} />

      </Routes>
    </Router>
  
  )
}

export default App
