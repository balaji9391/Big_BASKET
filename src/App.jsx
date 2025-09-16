import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Drinks from "./Drinks";
import Chocolate from "./Chocolate";
import SignUp from "./SignUp";
import Signin from "./Signin";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Error from "./Error";
import { useSelector } from "react-redux";
import './Navbar.css'
import './index.css'

function App() {
     let cartItems=useSelector((global)=>global.cart);
     const cartCount=cartItems.reduce((sum,item)=>sum+item.quantity,0);
      

  return (
    <BrowserRouter>
      
      <div className="navbar" >
        <div className="logo">🛒 Big Basket</div>
        <div className="links">
          <Link to="/" >🏠 Home</Link>
          <Link to="/veg" >🥦 Veg</Link>
          <Link to="/nonveg">🍗 Non-Veg</Link>
          <Link to="/drinks">🥛 Drinks</Link>
          <Link to="/chocolate">🍫 Chocolates</Link>
          <Link to="/signup">📝 Sign Up</Link>
          <Link to="/cart">🛍️ Cart have {cartCount}-Items</Link>
          <Link to="/order">🛒 Orders</Link>
          <Link to="/aboutus">ℹ️ About Us</Link>
          <Link to="/contactus">📞 Contact Us</Link>
          <Link to="/signin">➡️ Sign-in</Link>
        </div>
      </div>

      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;

