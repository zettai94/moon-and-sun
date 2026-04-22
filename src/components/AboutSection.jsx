import styles from './AboutSection.module.css';
import useScrollReveal from '../hooks/useScrollReveal.js';

// ── real photos now
import storyOpening  from '../assets/story-opening.png';
import storyReborn   from '../assets/story-reborn.png';
import storyCoffee   from '../assets/story-coffee.png';

// ── reusable reveal wrapper
function Reveal({ children, className = '', delay = 0 }) {
  const [ref, isVisible, isMounted] = useScrollReveal();

  const classes = [
    isMounted ? styles.reveal   : '',   // hidden ONLY after mount
    isVisible  ? styles.revealed : '',   // shown when scrolled to
    className,
  ].filter(Boolean).join(' ');

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

function AboutSection() {
  return (
    <div className={styles.about} id="about">

      {/* ═══════════════════════════════════════
          SECTION 1 — THE STORY
      ═══════════════════════════════════════ */}
      <section className={styles.storySection}>
        <div className={styles.storySectionInner}>

          {/* LEFT — text */}
          <div className={styles.textCol}>

            <Reveal>
              <p className="section-tag">Our Story</p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className={`section-title ${styles.storyTitle}`}>
                Born from Fire,<br />
                <em>Reborn with Purpose</em>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className={styles.bodyText}>
                Moon &amp; Sun Coffee first opened its doors on{' '}
                <span className={styles.highlight}>11 November 2023</span>{' '}
                on Ewe Hai Street, Kuching — a quiet corner where a bold
                dream took its first breath. Specialty coffee, handcrafted
                cakes, and a warmth that felt like home from the very
                first cup.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className={styles.bodyText}>
                Then fire came. Within months of opening, the café was
                reduced to ash — the equipment gone, the space gone, but
                never the spirit. Because some things survive fire.
                Passion is one of them.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <p className={styles.bodyText}>
                On{' '}
                <span className={styles.highlight}>7 June 2024</span>,
                Moon &amp; Sun rose again — reborn on Wayang Street,
                in the very heart of Kuching. The lion dance roared,
                the balloons rose orange against the sky, and the team
                that refused to quit opened their doors once more.
                Not just a new address. A new chapter. The same soul,
                now with deeper roots and a story worth telling.
              </p>
            </Reveal>

            {/* dates strip */}
            <Reveal delay={500}>
              <div className={styles.dateStrip}>
                <div className={styles.dateItem}>
                  <span className={styles.dateNumber}>11.11</span>
                  <span className={styles.dateLabel}>First opened · 2023</span>
                </div>
                <div className={styles.dateDivider}></div>
                <div className={styles.dateItem}>
                  <span className={styles.dateNumber}>🔥</span>
                  <span className={styles.dateLabel}>The fire · Early 2024</span>
                </div>
                <div className={styles.dateDivider}></div>
                <div className={styles.dateItem}>
                  <span className={styles.dateNumber}>07.06</span>
                  <span className={styles.dateLabel}>Reborn · 2024</span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* RIGHT — photos */}
          <div className={styles.photoCol}>
            <Reveal delay={150}>
              <div className={styles.photoWrap}>
                <img
                  src={storyOpening}
                  alt="Soft opening 11.11.2023"
                  className={styles.photoImg}
                />
                <div className={styles.photoOverlay}>
                  <p className={styles.photoOverlayText}>
                    Ewe Hai Street<br />
                    <em>Where It Began · 11.11.2023</em>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — WHAT WE DO
      ═══════════════════════════════════════ */}
      <section className={`${styles.storySection} ${styles.storySectionAlt}`}>
        <div className={styles.storySectionInner}>

          {/* LEFT — coffee photo, full bleed */}
          <div className={styles.photoCol}>
            <Reveal delay={100}>
              <div className={styles.photoWrap}>
                <img
                  src={storyCoffee}
                  alt="In-house roasted specialty coffee"
                  className={styles.photoImg}
                />
                <div className={styles.photoOverlay}>
                  <p className={styles.photoOverlayText}>
                    In-house Roasted<br />
                    <em>Crafted Cup by Cup</em>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — text */}
          <div className={styles.textCol}>

            <Reveal>
              <p className="section-tag">What We Do</p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className={`section-title ${styles.storyTitle}`}>
                Craft in Every<br />
                <em>Cup &amp; Crumb</em>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className={styles.bodyText}>
                At Moon &amp; Sun, nothing comes from a shortcut.
                Our coffee begins before the first pour — with beans
                carefully selected, roasted in-house, and brewed with
                a precision that respects both the origin and the
                person holding the cup. From the raw green bean to
                the final extraction, every step is deliberate,
                every flavour earned.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className={styles.bodyText}>
                The same philosophy carries into our kitchen.
                Each cake — from the caramelised depth of our
                Burnt Basque to the nostalgic layering of our
                Russian Honey — is crafted with the same meticulous
                care. We believe a great café feeds more than hunger.
                It feeds the senses, the memory, the moment.
              </p>
            </Reveal>

            {/* craft pillars */}
            <Reveal delay={400}>
              <div className={styles.pillars}>
                <div className={styles.pillar}>
                  <span className={styles.pillarIcon}>🌱</span>
                  <span className={styles.pillarLabel}>Sourced</span>
                </div>
                <div className={styles.pillarArrow}>→</div>
                <div className={styles.pillar}>
                  <span className={styles.pillarIcon}>🔥</span>
                  <span className={styles.pillarLabel}>Roasted</span>
                </div>
                <div className={styles.pillarArrow}>→</div>
                <div className={styles.pillar}>
                  <span className={styles.pillarIcon}>☕</span>
                  <span className={styles.pillarLabel}>Brewed</span>
                </div>
                <div className={styles.pillarArrow}>→</div>
                <div className={styles.pillar}>
                  <span className={styles.pillarIcon}>🫶</span>
                  <span className={styles.pillarLabel}>Served</span>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — WHERE WE ARE
      ═══════════════════════════════════════ */}
      <section className={styles.storySection}>
        <div className={styles.storySectionInner}>

          {/* LEFT — text */}
          <div className={styles.textCol}>

            <Reveal>
              <p className="section-tag">Where We Are</p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className={`section-title ${styles.storyTitle}`}>
                A Cup Shared<br />
                <em>at Kuching's Heart</em>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className={styles.bodyText}>
                Wayang Street — known to locals as{' '}
                <span className={styles.highlight}>Hua Xiang Street</span>{' '}
                — is more than an address. It is one of Kuching's most
                storied lanes, a living thread of cultural memory where
                the Chinese, Malay, Iban, and every community of Sarawak
                have gathered for generations to celebrate, to trade,
                to simply be together.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className={styles.bodyText}>
                This street has witnessed lantern festivals, harvest
                celebrations, and the quiet ordinary mornings that make
                a city feel like home. It is the Pride of Sarawak —
                a living proof that harmony isn't just possible,
                it's the natural state of things here.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <p className={styles.bodyText}>
                Moon &amp; Sun found its true home here not by accident.
                Because what we pour into every cup — the meeting of
                tradition and modern craft, the welcome for every
                person regardless of background — is exactly what
                this street has always stood for.
                <em className={styles.closingLine}>
                  {' '}Come as you are. Leave with a story.
                </em>
              </p>
            </Reveal>

            {/* location tag */}
            <Reveal delay={500}>
              <div className={styles.locationTag}>
                <span className={styles.locationPin}>📍</span>
                <div>
                  <p className={styles.locationStreet}>
                    No. 11, Wayang Street (Hua Xiang Street)
                  </p>
                  <p className={styles.locationCity}>
                    93000 Kuching, Sarawak · Malaysia
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

          {/* RIGHT — reborn photo showing the street */}
          <div className={styles.photoCol}>
            <Reveal delay={200}>
              <div className={styles.photoWrap}>
                <img
                  src={storyReborn}
                  alt="Moon & Sun Coffee on Wayang Street"
                  className={styles.photoImg}
                />
                <div className={styles.photoOverlay}>
                  <p className={styles.photoOverlayText}>
                    Wayang Street<br />
                    <em>Hua Xiang Street</em>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          CLOSING QUOTE
      ═══════════════════════════════════════ */}
      <Reveal>
        <div className={styles.closingQuote}>
          <p className={styles.quoteText}>
            "From the ashes of one dream,<br />
            <em>a better one was built."</em>
          </p>
          <p className={styles.quoteSub}>
            Moon &amp; Sun Coffee · Kuching, Sarawak
          </p>
        </div>
      </Reveal>

    </div>
  );
}

export default AboutSection;