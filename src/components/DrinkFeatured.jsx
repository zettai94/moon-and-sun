import styles from "./DrinkFeatured.module.css";

import dark1 from "../assets/drinks-dark/drink1-dark.png";
import dark2 from "../assets/drinks-dark/drink2-dark.png";
import dark3 from "../assets/drinks-dark/drink3-dark.png";
import dark4 from "../assets/drinks-dark/drink4-dark.png";
import dark5 from "../assets/drinks-dark/drink5-dark.png";
import dark6 from "../assets/drinks-dark/drink6-dark.png";
import dark7 from "../assets/drinks-dark/drink7-dark.png";
import dark8 from "../assets/drinks-dark/drink8-dark.png";
import dark9 from "../assets/drinks-dark/drink9-dark.png";

import light1 from "../assets/drinks-light/drink1-light.png";
import light2 from "../assets/drinks-light/drink2-light.png";
import light3 from "../assets/drinks-light/drink3-light.png";
import light4 from "../assets/drinks-light/drink4-light.png";
import light5 from "../assets/drinks-light/drink5-light.png";
import light6 from "../assets/drinks-light/drink6-light.png";
import light7 from "../assets/drinks-light/drink7-light.png";
import light8 from "../assets/drinks-light/drink8-light.png";
import light9 from "../assets/drinks-light/drink9-light.png";

const DRINKS = [
    {
    name:  'Twilight',
    desc:  'description of twilight',
    light: light1,
    dark:  dark1,
  },
  {
    name:  'Snow White',
    desc:  'Description of snow white',
    light: light2,
    dark:  dark2,
  },
  {
    name:  'Coconut Coffee',
    desc:  'Description of coconut coffee',
    light: light3,
    dark:  dark3,
  },
  {
    name:  'Sun Light',
    desc:  'Description of sun light',
    light: light4,
    dark:  dark4,
  },
  {
    name:  'Espresso Romano',
    desc:  'Description of espresso romano',
    light: light5,
    dark:  dark5,
  },
  {
    name:  'Shakerato',
    desc:  'Description of shakerato',
    light: light6,
    dark:  dark6,
  },
  {
    name:  'Dirty Saigon',
    desc:  'Description of dirty saigon',
    light: light7,
    dark:  dark7,
  },
  {
    name:  'Rosa Rogusa',
    desc:  'Description of rosa rogusa',
    light: light8,
    dark:  dark8,
  },
  {
    name:  'Moonwater',
    desc:  'Description of moonwater',
    light: light9,
    dark:  dark9,
  }
]

function DrinkFeatured( { isDark } ) {
return (
    <section className={`section ${styles.drinkSection}`} id="featured">

      {/* HEADER */}
      <div className="section-header">
        <div>
          <p className="section-tag">Signature Selection</p>
          <h2 className="section-title">
            Featured <em>Drinks</em>
          </h2>
        </div>
      </div>

      {/* GRID — 3x3 */}
      <div className={styles.grid}>
        {DRINKS.map((drink) => (
          <div key={drink.name} className={styles.card}>

            {/* IMAGE — swaps based on theme */}
            <div className={styles.imgWrapper}>
              <img
                src={isDark ? drink.dark : drink.light}
                alt={drink.name}
                className={styles.img}
              />
            </div>

            {/* TEXT */}
            <div className={styles.cardBody}>
              <p className={styles.cardName}>{drink.name}</p>
              <p className={styles.cardDesc}>{drink.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default DrinkFeatured;
