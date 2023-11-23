import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const toggleMenu = () => setShowLinks(!showLinks)
    const closeMenu = () => setShowLinks(false)
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };  

    return (
        <div>
            <nav className="nav">
            <Link to="/" id="logo" onClick={scrollToTop}><img src="https://i.imgur.com/Krwaoex.png" alt="logo"/></Link>
            <div className="nav_links">
                <NavLink to="/" className={({isActive}) => isActive ? "nav_links_link nav_links_link_active" : "nav_links_link"} onClick={scrollToTop}>home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "nav_links_link nav_links_link_active" : "nav_links_link"} onClick={scrollToTop}>about</NavLink>
                <NavLink to="/classes" className={({isActive}) => isActive ? "nav_links_link nav_links_link_active" : "nav_links_link"} onClick={scrollToTop}>classes</NavLink>
                <NavLink to="/schedule/monday" className={({isActive}) => isActive ? "nav_links_link nav_links_link_active" : "nav_links_link"} onClick={scrollToTop}>schedule</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "nav_links_link nav_links_link_active" : "nav_links_link"} onClick={scrollToTop}>contact</NavLink>
            </div>
            <Link to="/contact" className="nav_join-now">Join now</Link>
            <img src="https://i.imgur.com/bjk0cNu.png" alt="" className="burger" onClick={toggleMenu}/>
            </nav>
            <div id={showLinks ? "burger-menu-active" : "burger-menu"}>
                    <Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>home</Link>
                    <Link to="/about" onClick={() => { closeMenu(); scrollToTop(); }}>about</Link>
                    <Link to="/classes" onClick={() => { closeMenu(); scrollToTop(); }}>classes</Link>
                    <Link to="/schedule/monday" onClick={() => { closeMenu(); scrollToTop(); }}>schedule</Link>
                    <Link to="/contact" onClick={() => { closeMenu(); scrollToTop(); }}>contact</Link>
            </div>
        </div>
        
    )
}