import Category from "./components/Category"
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import Hero from "./components/Hero"
import MobNavbar from "./components/MobNavbar"
import Navbar from "./components/Navbar"

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
      </main>
    </>
  )
}

export default App