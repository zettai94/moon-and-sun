import styles from './FooterSection.module.css'
import logo from '../assets/moon&Sun_transparent.png'

const FOOTER_LINKS = {
  visit: [
    { label: 'No. 11, Wayang Street',        href: '#'                                                    },
    { label: '93000 Kuching, Sarawak',        href: '#'                                                    },
    { label: '+60 12-885 0218',               href: 'tel:+601288500218'                                    },
    { label: '8:00 AM – 10:00 PM Daily',      href: '#'                                                    },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/moonandsuncoffee.malaysia/' },
    { label: 'Facebook',  href: 'https://www.facebook.com/p/Moon-Sun-Coffee-61553345211110/' },
    { label: 'WhatsApp',  href: 'https://wa.me/601288500218' },
  ],
  explore: [
    { label: 'About Us',   href: '#about'    },
    { label: 'Our Menu',   href: '#menu'     },
    { label: 'Drinks',     href: '#featured' },
    { label: 'Reserve',    href: '#book'     },
  ],
}

function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact">

      {/* MAIN FOOTER */}
      <div className={styles.footer}>

        {/* COL 1 — brand */}
        <div className={styles.brand}>
          <img
            src={logo}
            alt="Moon & Sun Coffee"
            className={styles.logo}
          />
          <h3 className={styles.brandName}>
            Moon <span className={styles.accent}>&</span> Sun
          </h3>
          <p className={styles.tagline}>
            Specialty coffee &amp; handcrafted cakes
          </p>
          <p className={styles.taglineSub}>
            Certified Specialty Café · Kuching, Sarawak
          </p>
        </div>

        {/* COL 2 — visit */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Visit Us</p>
          <ul className={styles.colLinks}>
            {FOOTER_LINKS.visit.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.colLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 3 — explore */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Explore</p>
          <ul className={styles.colLinks}>
            {FOOTER_LINKS.explore.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.colLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 4 — follow */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Follow Along</p>
          <ul className={styles.colLinks}>
            {FOOTER_LINKS.social.map((link) => (
              <li key={link.label}>
                
                <a href={link.href}
                  className={styles.colLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottom}>
        <p>© {currentYear} Moon &amp; Sun Coffee, Kuching. All rights reserved.</p>
        <p>Crafted with care in Sarawak 🌙</p>
      </div>

    </footer>
  )
}

export default FooterSection;