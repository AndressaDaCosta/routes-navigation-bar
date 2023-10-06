// pages/index.js

import Link from 'next/link';
import styles from '@/styles/Home.module.css';
function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>Imagem Logo</h1>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/register">
            <button className={styles.buttonCadastrar}>Cadastrar</button>
          </Link>
          <Link href="/login">
            <button className={styles.buttonEntrar}>Entrar</button>
          </Link>
        </div>
      </header>

      <div className={styles.container}>
        <h1 className={styles.heading}>Bem-vindo à Página Inicial</h1>
      </div>
    </div>
  );
}

export default Home;
