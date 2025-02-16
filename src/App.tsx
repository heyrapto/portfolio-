import Home from "./pages/Home";
import Services from "./pages/Services";
import RecentWorks from "./pages/RecentWorks";
import Skills from "./pages/Skills";
import WorkExp from "./pages/WorkExp";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
// import { Testimonials } from "./pages/Testimonials";

function App() {
  return (
    <>
            <Navbar />
            <Home />
            <main>
              <Services />
              <RecentWorks />
              <Skills />
              <WorkExp />
            </main>
            <Footer />
        </>
  )
}

export default App
