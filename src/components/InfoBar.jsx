import styles from './InfoBar.module.css';

const INFO_ITEMS = [
  { label: 'Opening Hours', value: '8:00 AM – 10:00 PM Daily' },
  { label: 'Phone',         value: '+60 12-885-0218'          },
  { label: 'Speciality',    value: 'Hand-brew · Signature Cakes' },
];

function InfoBar() {
  return (
    <div className={styles.infoBar}>
      {INFO_ITEMS.map((item) => (
        <div key={item.label} className={styles.cell}>
          <p className={styles.label}>{item.label}</p>
          <p className={styles.value}>{item.value}</p>
        </div>
      ))}
    </div>
  )
};

export default InfoBar;