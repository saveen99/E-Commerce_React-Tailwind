import Banner from "./components/Banner"
import BlogSection from "./components/BlogSection"
import Category from "./components/Category"
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
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
      </main>
    </>
  )
}

export default App