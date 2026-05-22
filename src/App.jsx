import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Loader      from './components/Loader'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Certificates from './components/Certificates'
import Timeline    from './components/Timeline'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

function PortfolioApp() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loader for 2.8s then fade out
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isVisible={loading} />
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  )
}
