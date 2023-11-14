import "./App.css";
import Home from "./Components/Pages/home/index";
// import SignIn from "./Components/auth/signup/container/SignIn";
// import Login from "./Components/auth/login/container/Login";
// import { Route, Routes } from "react-router-dom";
// import AboutUs from "./Components/Pages/aboutUs/AboutUs";
// import Contact from "./Components/Pages/contactUs/Contact";
// import Products from "./Components/Pages/products/index";
// import Cart from "./Components/Pages/Cart";

const App = () => {
  return (
    <div className="App">
      <Home />
      {/* <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Routes> */}
      {/* <Route path="/Pages/Home" element={<Home />} /> */}
      {/* <Route path="/Pages/AboutUs" element={<AboutUs />} />
        <Route path="/Pages/Products" element={<Products />} />
        <Route path="/Pages/Contact" element={<Contact />} />
        <Route path="/Pages/Cart" element={<Cart />} />
      </Routes> */}
    </div>
  );
};
export default App;
