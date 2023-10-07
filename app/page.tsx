import Link from "next/link"
import styles from "./page.module.css"
function Home() {
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.logoContainer}>
					<button>
						<h1>Logo</h1>
					</button>
				</div>
				<div className={styles.buttonContainer}>
					<Link href="/login">
						<button className={styles.buttonEntrar}>Entrar</button>
					</Link>
					<Link href="/register">
						<button className={styles.buttonCadastrar}>
							Cadastrar
						</button>
					</Link>
				</div>
			</header>

			<div className={styles.container}>
				<h1 className={styles.heading}>Bem-vindo à Página Inicial</h1>
			</div>
		</div>
	)
}

export default Home
