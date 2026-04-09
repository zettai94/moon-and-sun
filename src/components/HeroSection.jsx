import styles from './HeroSection.module.css';
import heroImg from '../assets/hero.png';

function HeroSection() {
  return (
    <section className={styles.hero} id="about">

      {/* LEFT — text content */}
      <div className={styles.left}>
        <p className="section-tag">Certified Specialty Café · Kuching, Sarawak</p>

        <h1 className={styles.title}>
          Moon
          <em className={styles.titleItalic}>&amp; Sun</em>
          Coffee
        </h1>

        <p className={styles.sub}>
          Where every cup is a quiet ceremony — hand-brewed specialty
          coffee &amp; handcrafted cakes, nestled in Kuching's Old Street.
        </p>

        <p className={styles.address}>
          📍 No. 11, Wayang Street, 93000 Kuching, Sarawak
        </p>

        <div className={styles.btnRow}>
          <a href="#book" className="btn-primary">Reserve a Table</a>
          <a href="#menu" className="btn-ghost">View Menu</a>
        </div>
      </div>

      {/* RIGHT — image */}
      <div className={styles.right}>
        <img
          src={heroImg}
          alt="Specialty coffee being poured"
          className={styles.img}
        />
        <div className={styles.overlay}></div>
        <div className={styles.stamp}>
          Specialty<br />Coffee &amp;<br /><em>Crafted Cakes</em>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;