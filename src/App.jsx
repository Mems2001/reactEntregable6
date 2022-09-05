import './App.css'
import { Routes , Route , NavLink} from 'react-router-dom'
import Home from './components/Routes/Home'
import ProductData from './components/Routes/ProductData'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import NavComp from './components/Shared/NavComp'

function App() {

  return (
    <div className="App">
      <NavComp />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductData />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/purchases' element={ <Purchases /> } />
        
      </Routes>
    </div>
  )
}

export default App
