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
      </main>
    </>
  )
}

export default App