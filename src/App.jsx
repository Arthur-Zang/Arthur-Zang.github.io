import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Social from './components/Social/Social'
import Projects from './Pages/Projects/Projects'
import './App.scss'
import { useEffect } from 'react'
import Contact from './Pages/Contact/Contact'

function App() {

  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li")
    const pages = document.querySelectorAll(".page")

    function handleScroll() {
      for (let i = 0; i < pages.length; i++) {
        let currentPage = pages[i]
        let pageTop = currentPage.getBoundingClientRect().top;
        if (pageTop < 300) {
          navLinks.forEach((link) => {
            link.classList.remove("active")
          })
          navLinks[i].classList.add("active")
        }
      }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <div className="page" id="home">
          <Home />
        </div>
        <div className="page" id="about">
          <About />
        </div>
        <div className="page" id="projects">
          <Projects />
        </div>
        <div className="page" id="contact">
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
