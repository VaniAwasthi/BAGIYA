import './App.css';
import SignIn from "./Components/SignIn";
import Login from './Components/Login';
import { Route , Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Contact from './Components/Pages/Contact';
import Products from './Components/Pages/Products';
import Navbar from './Components/NavBar';
import Cart from './Components/Pages/Cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn/>}  />
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/Pages/Home' element={<Home/>}  />
        <Route path='/Pages/AboutUs' element={<AboutUs/>}  />
        <Route path='/Pages/Products' element={<Products/>}  />
        <Route path='/Pages/Contact' element={<Contact/>}  />
        <Route path='/Pages/Cart' element={<Cart/>} />
      </Routes>
    </div>

  );}
export default App;
