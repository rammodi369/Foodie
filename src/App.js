
// import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Login from "./screens/Login";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
import Myorder from "./screens/Myorder";
import Footer from "./components/Footer";


function App() {
  return (
    
    
   <CartProvider>
    
    <Router>
    <Navbar/>
      
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createUser" element={<Signup />} />
          <Route exact path="/myOrder" element={<Myorder/>}/>
        </Routes>
    <Footer/>
    </Router>
    </CartProvider>
    

  );
}

export default App;
