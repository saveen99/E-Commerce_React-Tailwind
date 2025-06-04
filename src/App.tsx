import Category from "./components/Category"
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
      </main>
    </>
  )
}

export default App