import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './components/navbar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import EventsPage from './pages/EventsPage.jsx'
import News from './components/News/News.jsx'
import Footer from './components/Footer/Footer.jsx'

import './index.css'
import TargetCursor from './components/Cursor/TargetCursor.jsx'

function ScrollHandler() {
    const { hash, pathname } = useLocation()

    useEffect(() => {
        if (pathname === '/events') {
            window.scrollTo(0, 0)
        } else if (hash) {
            const element = document.querySelector(hash)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 100)
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [hash, pathname])

    return null
}

function HomePage() {
    return (
        <>
            <Hero/>
            <About/>
            <News/>
        </>
    )
}

function App() {
    return <div className='app-container'>
        <BrowserRouter>
            <TargetCursor 
                spinDuration={2}
                hideDefaultCursor
                parallaxOn
                hoverDuration={0.2}
            />

            <header>
                <NavBar></NavBar>
            </header>

            <main>
                <ScrollHandler />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events" element={<EventsPage />} />
                </Routes>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </BrowserRouter>
    </div>
}

export default App
