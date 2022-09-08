import './App.css'
import './styles/NavComp.css'
import './styles/ProductDescription.css'
import './styles/ProductData.css'
import './styles/Cart.css'
import './styles/Purchases.css'
import { Routes , Route , NavLink} from 'react-router-dom'
import Home from './components/Routes/Home'
import ProductData from './components/Routes/ProductData'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import NavComp from './components/Shared/NavComp'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './components/Shared/Cart'
import ProtectedRoutes from './components/Routes/ProtectedRoutes.jsx'
import getConfig from './utilities/GetConfig.js'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from './store/slices/cart.slice'

function App() {

  const [prodId, setProdId] = useState()

  const dispatch = useDispatch()

  const loadCart = () => {

    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`

    axios.get(URL , getConfig())
    .then (res => {
      dispatch( setCart (res.data.data.cart.products)) 
    })
    .catch (err => console.log (err))
    
  }

  // useEffect (
  //   () => {
  //     const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users`

  //     const newUser = {
  //       firstName: 'Eduardo' ,
  //       lastName: 'Muso' ,
  //       email: 'edu@ex.com' ,
  //       password: 'ex69ex69' ,
  //       phone: '0987654321' ,
  //       role: 'admin'
  //     }

  //     axios.post(URL , newUser)
  //     .then (res => console.log(res.data))
  //     .catch (err => console.log(err))
  //   } , []
  // )

  return (
    <div className="App">
      <NavComp />
      <Routes>
        <Route path='/' element={<Home 
        prodId={prodId}
        setProdId={setProdId} 
        loadCart={loadCart} />} />
        <Route path='/product/:id' element={<ProductData loadCart={loadCart} setProdId={setProdId} />} />
        <Route path='/login' element={ <Login /> } />
        <Route element={ <ProtectedRoutes /> } >
          <Route path='/cart' element={ <Cart loadCart={loadCart} /> } />
          <Route path='/purchases' element={ <Purchases /> } />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
