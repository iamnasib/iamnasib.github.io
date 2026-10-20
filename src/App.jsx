import Masthead from './components/Masthead'
import Intro from './components/Intro'
import { Candi, Celia } from './components/CaseStudies'
import Platform from './components/Platform'
import Building from './components/Building'
import WorkLog from './components/WorkLog'
import Toolbox from './components/Toolbox'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Masthead />
      <main className="page ruled">
        <Intro />
        <Celia />
        <Candi />
        <Platform />
        <Building />
        <WorkLog />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
