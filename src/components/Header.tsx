import Logo from '../assets/images/noun-elderly-care-1334461.svg';
import gradient from '../assets/images/gradient.svg';
import styles from '../styles/header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.gradient}>
        <img src={gradient} alt='Verlauf oben' />
      </div>
      <div className={styles.logo}>
        <img src={Logo} alt='Logo KiTaLa e.V. Ladbergen' />
      </div>
    </header>
  );
}

export default Header;
