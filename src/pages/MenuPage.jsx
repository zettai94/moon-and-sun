import { useState, useRef, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import styles from '../components/MenuPage.module.css'
import useScrollReveal from '../hooks/useScrollReveal.js'

// ── placeholder — swap with real PDFs when owner provides them
import menuBeverages from '../assets/menus/menu-beverages.pdf'
import menuCakes     from '../assets/menus/menu-cakes.pdf'
import menuPizza     from '../assets/menus/menu-pizza.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const MENUS = [
  {
    key:         'beverages',
    title:       'Beverages',
    subtitle:    'Specialty coffee, cold brews & signature drinks',
    icon:        '☕',
    pdf:         menuBeverages,
    accentColor: '#E8621A',
  },
  {
    key:         'cakes',
    title:       'Cakes & Pastries',
    subtitle:    'Handcrafted cakes, daily bakes & sweet indulgences',
    icon:        '🎂',
    pdf:         menuCakes,
    accentColor: '#C4501A',
  },
  {
    key:         'pizza',
    title:       'Pizza',
    subtitle:    'Stone-baked pizzas with house-made sauces',
    icon:        '🍕',
    pdf:         menuPizza,
    accentColor: '#A04020',
  },
]

// ── reusable reveal wrapper (same pattern as AboutSection)
function Reveal({ children, delay = 0 }) {
  const [ref, isVisible, isMounted] = useScrollReveal()

  const classes = [
    isMounted ? styles.reveal   : '',
    isVisible  ? styles.revealed : '',
  ].filter(Boolean).join(' ')

  return (
    <div
        ref={ref}
        className={classes}
        style={{ transitionDelay: `${delay}ms` }}
    >
        {children}
    </div>
  )
}

// single PDF section component
function PdfSection({ menu, sectionRef, index }) {
    const [numPages, setNumPages] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [containerW, setContainerW] = useState(80)
    const containerRef = useRef(null)

    useEffect(() => {
        if(!containerRef.current) return
        const observer = new ResizeObserver((entries) => {
            for(const entry of entries) {
                setContainerW(entry.contentRect.width)
            }
        })
        observer.observe(containerRef.current)
        return () => {
            observer.disconnect()
        }
    }, [])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
        setLoading(false)
    }

    const onDocumentLoadError = (error) => {
        setError(true)
        setLoading(false)
    }

    return (
        <div
            ref={sectionRef}
            className={styles.menuSection}
            id={`menu-${menu.key}`}
        >
            {/* section header */}
            <Reveal>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionHeaderLeft}>
                        <span className={styles.sectionIcon}>{menu.icon}</span>
                        <div>
                            <p className={styles.sectionTag}>Menu 0{index + 1}</p>
                            <h2 className={styles.sectionTitle}>{menu.title}</h2>
                            <p className={styles.sectionSubtitle}>{menu.subtitle}</p>
                        </div>
                    </div>

            
                    <a href={menu.pdf}
                        download={`MoonAndSun-${menu.title}.pdf`}
                        className={styles.downloadBtn}
                    >
                        ↓ Download PDF
                    </a>
                </div>
            </Reveal>

            {/* PDF renderer */}
            <Reveal delay={150}>
                <div className={styles.pdfWrapper} ref={containerRef}>
                    {/* loading state */}
                    {loading && !error && (
                        <div className={styles.pdfStatus}>
                            <div className={styles.spinner}></div>
                            <p>Loading menu...</p>
                        </div>
                    )}

                    {/* error state */}
                    {error && (
                        <div className={styles.pdfStatus}>
                            <span className={styles.pdfStatusIcon}>📄</span>
                            <p className={styles.pdfStatusTitle}>{menu.title} Menu</p>
                            <p className={styles.pdfStatusSub}>
                                PDF not available yet — coming soon.
                            </p>
                            <a href={menu.pdf} download className={styles.downloadBtnLarge}>
                                Download Menu PDF
                            </a>
                        </div>
                    )}

                    {/* render ALL pages stacked — no scrolling */}
                    {!error && (
                            <Document
                                file={menu.pdf}
                                onLoadSuccess={onDocumentLoadSuccess}
                                onLoadError={onDocumentLoadError}
                                loading=""
                            >
                            {numPages && Array.from({ length: numPages }, (_, i) => (
                                <div key={i} className={styles.pdfPage}>
                                    <Page
                                        pageNumber={i + 1}
                                        width={containerW}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                    />
                                </div>
                            ))}
                            </Document>
                    )}
                </div>
            </Reveal>
        </div>
    )
}

function MenuPage() {
  const [activeMenu, setActiveMenu] = useState('beverages')
  const sectionRefs = {
    beverages: useRef(null),
    cakes:     useRef(null),
    pizza:     useRef(null),
  }

  // scroll to a menu section when tab is clicked
  const handleTabClick = (key) => {
    setActiveMenu(key)
    const target = sectionRefs[key].current
    if (target) {
        const offset = 88  // navbar height + breathing room
        const top = target.getBoundingClientRect().top
                    + window.scrollY
                    - offset
        window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.page}>

        {/* ── HERO ── */}
        <div className={styles.hero}>
            <div className={styles.heroInner}>
                <Reveal>
                    <p className={styles.heroTag}>Our Menu</p>
                </Reveal>
                
                <Reveal delay={100}>
                    <h1 className={styles.heroTitle}>
                        Every Item,<br />
                        <em>Crafted with Intent</em>
                    </h1>
                </Reveal>
            
                <Reveal delay={200}>
                    <p className={styles.heroSub}>
                        From in-house roasted coffee to handcrafted cakes —
                        browse our full menu below.
                    </p>
                </Reveal>
            </div>
        </div>

        {/* ── STICKY TABS ── */}
        <div className={styles.tabsWrapper}>
            <div className={styles.tabs}>
                {MENUS.map((menu) => (
                <button
                    key={menu.key}
                    className={`${styles.tab} ${activeMenu === menu.key ? styles.tabActive : ''}`}
                    onClick={() => handleTabClick(menu.key)}
                >
                    <span className={styles.tabIcon}>{menu.icon}</span>
                    <span>{menu.title}</span>
                </button>
                ))}
            </div>
        </div>

        {/* PDF SECTIONS */}
        <div className={styles.sections}>
            {MENUS.map((menu, index) => (
                <PdfSection
                    key={menu.key}
                    menu={menu}
                    sectionRef={sectionRefs[menu.key]}
                    index={index}
                />
            ))}
        </div>
    </div>
  )
}

export default MenuPage;