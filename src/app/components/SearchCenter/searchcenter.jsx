'use client';

import { useState } from 'react';
import styles from './searchcenter.module.css';
import Image from 'next/image';

export default function SearchCenter() {
  const [filtrosAtivos, setFiltrosAtivos] = useState([]);
  const [historicoAberto, setHistoricoAberto] = useState(false); // controla se o histórico está aberto

  const filtros = ['Livros', 'Artigos', 'Vídeos', 'Sites', 'Imagens'];

  // Função para adicionar/remover filtros
  const toggleFiltro = (filtro) => {
    setFiltrosAtivos((prev) =>
      prev.includes(filtro)
        ? prev.filter((f) => f !== filtro)
        : [...prev, filtro]
    );
  };

  return (
    <div className={styles.SearchCenter}>
      <h2 className={styles.Title}>Central de Pesquisas</h2>

      <div className={styles.SearchCenterContainer}>
        {/* Campo de pesquisa */}
        <div className={styles.SearchInput}>
          <input type="text" placeholder="O que você quer estudar?" />
          <button>
            <Image width={100} height={100} alt="Lupa" src="/lupa.png" />
          </button>
        </div>

        {/* Botões de filtro */}
        <section className={styles.SearchCenterContainerFilters}>
          {filtros.map((filtro) => (
            <button
              key={filtro}
              className={`${styles.BtnFilter} ${
                filtrosAtivos.includes(filtro) ? styles.BtnFilterAtivo : ''
              }`}
              onClick={() => toggleFiltro(filtro)}
            >
              {filtro}
            </button>
          ))}
        </section>
      </div>

      {/* Histórico de pesquisas */}
      <section className={styles.HistoricalSummary}>
        <div className={styles.HistoricalSummaryPanel}>
          <h3 className={styles.HistoricalSummaryTitle}>
            Histórico de Pesquisas
          </h3>

          {/* Botão para expandir/recolher */}
          <button
            className={`${styles.ToggleButton} ${
              historicoAberto ? styles.Rotate : ''
            }`}
            onClick={() => setHistoricoAberto((prev) => !prev)}
          >
            <Image
              width={35}
              height={35}
              alt="Expandir/Recolher"
              src="/expandir.png"
            />
          </button>
        </div>

        {/* Article visível ou escondido */}
        <article
          className={`${styles.HistoricalArticle} ${
            historicoAberto ? styles.ShowArticle : styles.HideArticle
          }`}
        >
          {[2].map((num) => (
            <div key={num}>
              <a href={'#'}>Como fazer pesquisa científica?</a>
              <a href={'#'}>Como cruzar dados?</a>
              <a href={'#'}>Como citar um artigo na redação?</a>
              <a href={'#'}>Metodologias de Ensino</a>
              <a href={'#'}>
                Qual conteúdo de matemática é ensinado no 1° ano do Ensino
                Médio?
              </a>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}
