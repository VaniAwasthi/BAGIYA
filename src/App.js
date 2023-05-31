import './App.css';
import SignIn from "./Components/SignIn";
import Login from "./Components/Login"
import { Route , Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Products from './Components/Pages/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn/>}  />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Pages/Home' element={<Home/>}  />
        <Route path='/Pages/Contact' element={<Contact/>}  />
        <Route path='/Pages/Products' element={<Products/>}  />
      </Routes>
    </div>

  );}
export default App;
