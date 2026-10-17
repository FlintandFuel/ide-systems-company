import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { Nav, Footer, ScrollToTop } from './shared'
import Home from './pages/Home'
import { BankingSoftware, SoftwareDevelopment, MobileApps, RecentProjects, AboutUs, ContactUs } from './pages/Inner'
import './index.css'

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.2 })
    let id
    function raf(time) {
      lenis.raf(time)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  return (
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banking-software" element={<BankingSoftware />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileApps />} />
          <Route path="/recent-projects" element={<RecentProjects />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
