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

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <MobNavbar />
        <Hero />
        <Category />
        <FeatureSectionFruits />
        <FeatureSectionBreakfast />
        <Banner />
        <BlogSection />
        <NewsLetter />
        <Feature />
        <Footer />
      </main>
    </>
  )
}

export default App