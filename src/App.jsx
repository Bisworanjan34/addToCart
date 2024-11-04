import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './components/product/Product'
import ProductDetails from './components/pruductDetails/ProductDetails'
import Cart from './components/cart/Cart'
import { CartProvider } from './components/cart/CartContext'

function App() {
  

  return (
    <>
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </CartProvider>
    </> 
  )
}

export default App
