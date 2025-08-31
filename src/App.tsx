

import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import BlogSection from "./components/BlogSection"
import Category from "./components/Category"
import Feature from "./components/Feature"
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MobNavbar from "./components/MobNavbar"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"
import { CartContextProvider } from "./context/cartContext"
import Cart from "./components/Cart"
import Loader from "./components/loader/Loader"

const App = () => {
  const [showCart, setShowCart] = useState(false);
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <CartContextProvider>
        <main>
          <Navbar setShowCart={setShowCart} />
          <MobNavbar setShowCart={setShowCart} />
          <Hero />
          <Category />
          <FeatureSectionFruits />
          <FeatureSectionBreakfast />
          <Banner />
          <BlogSection />
          <NewsLetter />
          <Feature />
          <Footer />
          {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
        </main>
      </CartContextProvider>
    </>
  )
}

export default App