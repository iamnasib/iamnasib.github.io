import useReveal from './hooks/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import BubbleWork from './components/BubbleWork'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <BubbleWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
