
import Header from './Component/Header'
import Banner from "./Component/Banner"
import Categories from "./Component/Categories"
import Products from "./Component/Products"
import Footer from './Component/Footer'
import End from './Component/End'

import './App.css'
import Navbar from "./Component/Navbar/Navbar"


function App() {
  

  return (
    <>
      {/* <NavBar/> */}
      <Navbar />
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Footer />
      <End />
    </>
  )
}

export default App
