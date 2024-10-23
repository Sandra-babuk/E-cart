import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Whishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/whishlist' element={<Whishlist/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      {/* : indicates which is path parameter of url, path parameter will be stored in variable id */}
      <Route path='/:id/view' element={<View/>}></Route>
      <Route path='/*' element={<Pnf/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
