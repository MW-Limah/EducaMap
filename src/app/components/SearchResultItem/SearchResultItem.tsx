import styles from './SearchResultItem.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchRersultItem() {
  return (
    <div className={styles.SearchResultItemBox}>
      <div className={styles.TypeAndGo}>
        {/* Devera mostrar o simbolo a depender do titulo */}
        <div className={styles.Type}>
          <Image
            src="/icons/livro.png"
            alt="Ícone de livro"
            width={30}
            height={30}
          />
          <h3>Livro</h3> {/* {type} */}
        </div>
        <div className={styles.Go}>
          <Link href={'#'}>Ir ao conteúdo {/*  {link} */}</Link>
          <button>
            {/* Botão leva ao Link */}
            <Image
              width={24}
              height={24}
              alt="Icone do Link"
              src={'/icons/link.png'}
            />
          </button>
        </div>
      </div>
      <h4 className={styles.title}>
        {/* {title} */}
        Como fazer uma pesquisa científica? - Metodologias comprovadas
      </h4>
      <p className={styles.description}>
        Livro completo sobre os fundamentos da metodologia científica com
        exemplos práticos e estudos de caso. {/* {description} */}
      </p>
      <div>
        <h5 className={styles.AuthorAndDate}>Autor: Jonh Doe - 2014</h5>{' '}
        {/* Posteriormente concatenado os valores com $`{author}" - "{data}`*/}
        {/* Adicionar mecanismo de tempo de leitura */}
        <div className={styles.ReadTime}>
          <p>Tempo de leitura </p> <p>&#8776;</p> <p>15 min</p>
        </div>
      </div>
    </div>
  );
}
