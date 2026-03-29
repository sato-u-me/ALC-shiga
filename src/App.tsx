import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import UpcomingActivities from './components/UpcomingActivities'
import PastActivities from './components/PastActivities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <PastActivities />
        <UpcomingActivities />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
