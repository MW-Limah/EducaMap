import style from './navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Image
        src={'/educamapa_logo.png'}
        width={300}
        height={300}
        alt="EducaMap Logo"
      />
      <section className={style.login}>
        <a href="#">Entrar</a>
        <a href="#">Cadastrar-se</a>
      </section>
    </nav>
  );
}
