import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../assets/moon&Sun_transparent.png";


function NavBar({ isDark, toggleTheme}) {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleAnchorClick = (e, hash) => {
        e.preventDefault();
        closeMenu();

        if(location.pathname === '/') {
            // already on home page, just scroll
            const target = document.querySelector(hash);
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
        else
        {
            navigate('/');
            setTimeout(() => {
                const target = document.querySelector(hash);
                if(target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }

    //scroll from top if navigated from home to story page
    const handleStoryClick = () => {
        closeMenu();
        navigate('/story');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
    }

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
                    <a hred="/story" onClick={(e) => {
                        e.preventDefault();
                        handleStoryClick();
                    }}>
                        Our Story
                    </a>
                </li>
                <li><a href="#menu" onClick={(e) => handleAnchorClick(e, '#menu')}>
                    Menu</a>
                </li>
                <li><a href="#featured" onClick={(e) => handleAnchorClick(e, '#featured')}>
                    Drinks</a>
                </li>
                <li><a href="#book" onClick={(e) => handleAnchorClick(e, '#book')}>
                    Reserve</a>
                </li>
                <li><a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>
                    Contact</a>
                </li>
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
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li>
                        <a href="/story" onClick={(e) => {
                                e.preventDefault()
                                handleStoryClick()
                        }}>
                                Our Story
                        </a>
                    </li>
                    <li>
                        <a href="#menu"
                            onClick={(e) => handleAnchorClick(e, '#menu')}>
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#featured"
                            onClick={(e) => handleAnchorClick(e, '#featured')}>
                            Drinks
                        </a>
                    </li>
                    <li>
                        <a href="#book"
                            onClick={(e) => handleAnchorClick(e, '#book')}>
                            Reserve
                        </a>
                    </li>
                    <li>
                        <a href="#contact"
                            onClick={(e) => handleAnchorClick(e, '#contact')}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;