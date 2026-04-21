import styles from "./MenuSection.module.css";

const MENU_ITEMS = [
    {
    cat:   'Signature Coffee',
    name:  'Dirty Chai Latte',
    desc:  'Spiced chai with a bold espresso shot',
    price: 'RM 16',
  },
  {
    cat:   'Cold Brew',
    name:  'Sarawak Liberica',
    desc:  'Roasted in-house — bold, smooth, earthy',
    price: 'RM 15',
  },
  {
    cat:   'Coffee',
    name:  'Cold Americano',
    desc:  'Clean, crisp, single origin',
    price: 'RM 13',
  },
  {
    cat:   'Tea',
    name:  'Melbourne Tea',
    desc:  'Smooth milk tea, our own blend',
    price: 'RM 9',
  },
  {
    cat:   'Cake',
    name:  'Indulgence Batik',
    desc:  'A classic kek batik — rich & nostalgic',
    price: 'RM 14',
  },
  {
    cat:   'Cake',
    name:  'Burnt Basque',
    desc:  'Creamy, caramelised, deeply satisfying',
    price: 'RM 16',
  },
  {
    cat:   'Cake',
    name:  'Russian Honey Cake',
    desc:  'Layered, delicate, a house favourite',
    price: 'RM 18',
  },
  {
    cat:   'Pastry',
    name:  'Croissant & Danish',
    desc:  'Baked fresh, pairs well with any brew',
    price: 'RM 8',
  }
]

function MenuSection() {
    return (
    <section className={`section ${styles.menuSection}`} id="menu">

      {/* HEADER */}
      <div className="section-header">
        <div>
          <p className="section-tag">What We Serve</p>
          <h2 className="section-title">
            Our <em>Offerings</em>
          </h2>
        </div>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {MENU_ITEMS.map((item) => (
          <div key={item.name} className={styles.card}>
            <p className={styles.cardCat}>{item.cat}</p>
            <p className={styles.cardName}>{item.name}</p>
            <p className={styles.cardDesc}>{item.desc}</p>
            <p className={styles.cardPrice}>{item.price}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default MenuSection;