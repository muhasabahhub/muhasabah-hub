import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Apps from "./components/Apps";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Apps />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
