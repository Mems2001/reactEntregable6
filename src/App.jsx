import './App.css'
import './styles/NavComp.css'
import './styles/ProductDetails.css'
import './styles/ProductDescription.css'
import { Routes , Route , NavLink} from 'react-router-dom'
import Home from './components/Routes/Home'
import ProductData from './components/Routes/ProductData'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import NavComp from './components/Shared/NavComp'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [showDetails, setShowDetails] = useState(false)

  const [prodId, setProdId] = useState()

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
        showDetails={showDetails} 
        setShowDetails={setShowDetails}
        prodId={prodId}
        setProdId={setProdId} />} />
        <Route path='/product/:id' element={<ProductData />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/purchases' element={ <Purchases /> } />
        
      </Routes>
    </div>
  )
}

export default App
