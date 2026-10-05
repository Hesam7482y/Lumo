import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import { ProductDetails } from "./pages/ProductDetails";

export default function App(){

    return (
    <>
     <nav className="nav">
       <Link to="/" className="nav a">Home</Link> {" | "}
       <Link to="/products"className="nav a">product</Link> {" | "}
       <Link to="/about"className="nav a">About us</Link> {" | "}
       
    </nav> 





<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about" element={<About />} />
    <Route path="/product/:id" element={<ProductDetails />} />
</Routes>
    </>
    )
}