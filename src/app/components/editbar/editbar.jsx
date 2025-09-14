import styles from './editbar.module.css';
import Image from 'next/image';
export default function Editbar() {
  return (
    <div className={styles.editbar}>
      <section className={styles.font}>
        <select className={styles.fontlist} name="searchfont" id="">
          <option value="1">Arial</option>
          <option value="2">Instrument Sans</option>
          <option value="3">Cambria</option>
          <option value="4">Kavivanar</option>
        </select>
        <input className={styles.showsizefont} type="number" min={0} step={1} />
      </section>
      <section className={styles.fontpanel}>
        <button>
          <strong>B</strong>
        </button>
        <button>
          <i>I</i>
        </button>
        <button>
          <u>U</u>
        </button>
      </section>
      <section className={styles.textstyle}>
        <button>
          <Image
            src={'/liststyle.png'}
            width={45}
            height={45}
            alt="Estilo de Lista"
          ></Image>
        </button>
        <button>
          <Image
            src={'/textorganization.png'}
            width={45}
            height={45}
            alt="Organização de textos"
          ></Image>
        </button>
      </section>
    </div>
  );
}
