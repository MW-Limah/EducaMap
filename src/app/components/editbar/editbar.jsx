'use client';

import styles from './editbar.module.css';
import Image from 'next/image';

export default function Editbar({ onCommand }) {
  return (
    <div className={styles.editbar}>
      <section className={styles.font}>
        <select
          className={styles.fontlist}
          onChange={(e) => onCommand?.('fontName', e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Instrument Sans">Instrument Sans</option>
          <option value="Cambria">Cambria</option>
          <option value="Kavivanar">Kavivanar</option>
        </select>

        <input
          className={styles.showsizefont}
          type="number"
          min={1}
          max={7}
          step={1}
          onChange={(e) => onCommand?.('fontSize', e.target.value)}
        />
      </section>

      <section className={styles.fontpanel}>
        <button onClick={() => onCommand?.('bold')}>
          <strong>B</strong>
        </button>
        <button onClick={() => onCommand?.('italic')}>
          <i>I</i>
        </button>
        <button onClick={() => onCommand?.('underline')}>
          <u>U</u>
        </button>
      </section>

      <section className={styles.textstyle}>
        <button onClick={() => onCommand?.('insertUnorderedList')}>
          <Image
            src={'/liststyle.png'}
            width={45}
            height={45}
            alt="Estilo de Lista"
          />
        </button>
        <button onClick={() => onCommand?.('justifyCenter')}>
          <Image
            src={'/textorganization.png'}
            width={45}
            height={45}
            alt="Organização de textos"
          />
        </button>
      </section>
    </div>
  );
}
