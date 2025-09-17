import styles from './main.module.css';
import Editbar from '../EditBar/editbar';
import SearchCenter from '../SearchCenter/searchcenter';

export default function Main() {
  return (
    <main className={styles.container}>
      <div className={styles.coverRight}>
        <section className={styles.contentRight}>
          <Editbar />
        </section>
      </div>
      <span className={styles.divisor}></span>
      <span className={styles.shadow}></span>
      <div className={styles.coverLeft}>
        <section className={styles.contentLeft}>
          <SearchCenter />
        </section>
      </div>
    </main>
  );
}
