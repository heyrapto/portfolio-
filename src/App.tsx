import Home from "./sections/Home";
import Services from "./sections/Services";
import RecentWorks from "./sections/RecentWorks";
import Skills from "./sections/Skills";
import WorkExp from "./sections/WorkExp";
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

export default App;