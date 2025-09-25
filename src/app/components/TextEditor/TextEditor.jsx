'use client';
import { useRef } from 'react';
import styles from './TextEditor.module.css';
import Editbar from '../EditBar/editbar';

export default function TextEditor() {
  const editorRef = useRef(null);

  // Função para executar comandos no editor
  function handleCommand(command, value = null) {
    document.execCommand(command, false, value);
    editorRef.current?.focus(); // Mantém o foco no editor
  }

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editItem}>
        <Editbar onCommand={handleCommand} />{' '}
      </div>

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className={styles.textEditor}
        placeholder="Digite seu texto aqui..."
      />
    </div>
  );
}
