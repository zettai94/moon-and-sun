import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../assets/moon&Sun_transparent.png";


function NavBar({ isDark, toggleTheme}) {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={styles.nav}>
            {/* LOGO — Link goes to home */}
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="Moon & Sun Coffee" />
            </Link>

            {/* DESKTOP LINKS */}
            <ul className={styles.links}>
                <li><a href="/">Home</a></li>
                <li>
                {/* Link for page navigation */}
                <Link to="/story">Our Story</Link>
                </li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#featured">Drinks</a></li>
                <li><a href="#book">Reserve</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/* RIGHT SIDE */}
            <div className={styles.right}>

                {/* THEME TOGGLE */}
                <button
                    className={`${styles.toggle} ${isDark ? styles.isDark : ''}`}
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    <span className={styles.track}>
                    <span className={styles.knob}></span>
                    </span>
                {isDark ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                    </svg>
                ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
                    <line x1="12" y1="2"  x2="12" y2="4"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <line x1="2"  y1="12" x2="4"  y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                )}
                <span className={styles.label}>
                    {isDark ? 'Dark' : 'Light'}
                </span>
                </button>

                {/* HAMBURGER */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

            {/* MOBILE DRAWER */}
            <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
                <ul className={styles.drawerLinks}>
                <li><a href="#about"    onClick={closeMenu}>Home</a></li>
                <li>
                    <Link to="/story" onClick={closeMenu}>Our Story</Link>
                </li>
                <li><a href="#menu"     onClick={closeMenu}>Menu</a></li>
                <li><a href="#featured" onClick={closeMenu}>Drinks</a></li>
                <li><a href="#book"     onClick={closeMenu}>Reserve</a></li>
                <li><a href="#contact"  onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;