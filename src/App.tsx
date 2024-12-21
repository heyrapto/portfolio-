import Home from "./pages/Home";
import Services from "./pages/Services";
import RecentWorks from "./pages/RecentWorks";
import Skills from "./pages/Skills";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
            <Navbar />
            <Home />
            <main>
              <Services />
              <RecentWorks />
              <Skills />
            </main>
            <Footer />
        </>
  )
}

export default App
