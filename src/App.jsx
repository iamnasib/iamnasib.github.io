import Masthead from './components/Masthead'
import Intro from './components/Intro'
import { Candi, Celia } from './components/CaseStudies'
import Platform from './components/Platform'
import Side from './components/Side'
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
        <Side />
        <WorkLog />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
