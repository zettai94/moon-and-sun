import { useState } from 'react'
import styles from './FormSection.module.css'

// ── Temporary: swap these with real Google Form links after form creations
const FORM_LINKS = {
  contact:     'https://docs.google.com/forms/u/0/',
  reservation: 'https://docs.google.com/forms/u/0/',
  cake:        'https://docs.google.com/forms/u/0/',
}

const TABS = [
  { key: 'contact',     label: 'Contact'          },
  { key: 'reservation', label: 'Reserve a Table'  },
  { key: 'cake',        label: 'Order a Cake'      },
]

// ── what each form collects — shown as a preview to the user
const FORM_INFO = {
  contact: {
    title:       'Send Us a Message',
    description: 'Have a question or just want to say hello? Fill in our contact form and we\'ll get back to you within 24 hours.',
    fields:      ['Your Name', 'Email Address', 'Phone Number', 'Subject', 'Message'],
    icon:        '✉',
  },
  reservation: {
    title:       'Reserve a Table',
    description: 'Book your spot at Moon & Sun. We\'ll confirm your reservation via WhatsApp or email within 24 hours.',
    fields:      ['Full Name', 'Contact Number', 'Date', 'Time', 'Number of Guests', 'Seating Preference', 'Special Requests'],
    icon:        '📅',
  },
  cake: {
    title:       'Order a Custom Cake',
    description: 'Custom cakes require 3–5 days notice. A deposit may be required for orders above RM 100.',
    fields:      ['Your Name', 'Phone / WhatsApp', 'Cake Type', 'Size', 'Fillings', 'Toppings', 'Pickup Date', 'Message on Cake'],
    icon:        '🎂',
  },
}

function FormSection({ activeTab, setActiveTab }) {
  // current form data based on active tab
  const current = FORM_INFO[activeTab]

  return (
    <section className={`section section-bg ${styles.formSection}`} id="book">

        {/* HEADER */}
        <div className="section-header">
            <div>
                <p className="section-tag">Get in Touch</p>
                <h2 className="section-title">
                    Connect <em>with Us</em>
                </h2>
            </div>
        </div>

        {/* TABS */}
        <div className={styles.tabs}>
            {TABS.map((tab) => (
                <button
                    key={tab.key}
                    className={`${styles.tab} ${activeTab === tab.key ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab(tab.key)}
                >
                    {tab.label}
                </button>
            ))}
        </div>

        {/* PANEL */}
        <div className={styles.panel}>

            {/* LEFT — info */}
            <div className={styles.info}>
                <span className={styles.icon}>{current.icon}</span>
                <h3 className={styles.infoTitle}>{current.title}</h3>
                <p className={styles.infoDesc}>{current.description}</p>

                <div className={styles.fieldList}>
                    <p className={styles.fieldListLabel}>This form collects:</p>
                    {current.fields.map((field) => (
                        <div key={field} className={styles.fieldItem}>
                            <span className={styles.fieldDot}></span>
                            <span>{field}</span>
                        </div>
                    ))}
                </div>

                {activeTab === 'cake' && (
                    <p className={styles.note}>
                        ⚠ Please allow 3–5 business days for custom cake orders.
                    </p>
                )}

                {activeTab === 'reservation' && (
                    <p className={styles.note}>
                        ⚠ Reservations confirmed within 24 hours via WhatsApp.
                    </p>
                )}
            </div>

            {/* RIGHT — CTA */}
            <div className={styles.cta}>
                <div className={styles.ctaCard}>
                    <p className={styles.ctaLabel}>
                        Clicking below opens our {current.title} in a new tab
                    </p>
                
                    <a href={FORM_LINKS[activeTab]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn-primary ${styles.ctaBtn}`}
                    >
                        Open {current.title} →
                    </a>
                    <p className={styles.ctaNote}>
                        Powered by Google Forms — your responses go directly to us.
                    </p>
                    <div className={styles.divider}>
                        <span>or reach us directly</span>
                    </div>

                    <div className={styles.directLinks}>
                        <a href="tel:+601288500218" className={styles.directLink}>
                            <span>📞</span>
                            <span>+60 12-885 0218</span>
                        </a>
                    
                        <a href="https://wa.me/601288500218"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.directLink}
                        >
                            <span>💬</span>
                            <span>WhatsApp Us</span>
                        </a>
                    
                        <a href="https://www.instagram.com/moonandsuncoffee.malaysia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.directLink}
                        >
                            <span>📸</span>
                            <span>Instagram DM</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FormSection;