import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css'
import { Home } from "./pages/Home"
import { Navbar } from "./pages/Navbar"
// import { DetailsItem } from "./pages/D/etailsItem"
import { SingleMobile } from "./pages/Mobile_unit/SingleMobile"
import { Product_Mobile } from "./pages/Mobile_unit/Product_Mobile"
import { Cart } from "./pages/Cart"
import { Product_Television } from "./pages/Television_unit/Product_Television"
import { Television } from "./pages/Television_unit/Television"
import { SingleTelevision } from "./pages/Television_unit/SingleTelevision"
import { Product_menshirt } from "./pages/Men_shirt_unit/Product_menshirt"
import { Single_menshirts } from "./pages/Men_shirt_unit/Single_menshirt"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Logout } from "./pages/Logout"
import { Product_womenfrock } from "./pages/Women_frock_unit/Product_womenfrock"
import { SingleWomenFrock } from "./pages/Women_frock_unit/SingleWomenfrock"
import { Footer } from "./pages/Footer"
import ScrollToTop from "./pages/ScrollToTop"
import BackToTopButton from "./pages/BackToTopButton"
import { Buying } from "./pages/Buying"
import {Sample} from "./pages/Sample" 
function App() {

  return (
    <>
      <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/sample" element={<Sample/>}></Route>

        <Route path="/mobile" element={<Product_Mobile/>}></Route>
        <Route path="/detailsmobileitem/:id" element={<SingleMobile/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/tv" element={<Product_Television/>}></Route>
        <Route path="/detailstelevisionitem/:id" element={<SingleTelevision/>}></Route>
        <Route path="/mensshirt" element={<Product_menshirt/>}></Route>
        <Route path="/detailsmenshirt/:id" element={<Single_menshirts/>}></Route>
        <Route path="/womenfrock" element={<Product_womenfrock/>}></Route>
        <Route path="/detailswomenfrock/:id" element={<SingleWomenFrock/>}></Route>
        <Route path="/buying" element={<Buying/>}></Route>

      </Routes>
      </Router>
      <BackToTopButton/>
      <Footer/>

      </>
  )
}

export default App
