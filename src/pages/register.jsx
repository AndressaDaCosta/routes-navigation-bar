// pages/register.js

import Link from "next/link"
import NavigationBar from "../components/NavigationBar"
import styles from "../styles/register.module.css"

function Register() {
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.logoContainer}>
					<Link href="/">
						<button>
							<h1>Imagem Logo</h1>
						</button>
					</Link>
				</div>
			</header>
			<div className={styles.container}>
				<NavigationBar />
				<h2 className={styles.heading}>Cadastrar</h2>
			</div>
		</div>
	)
}

export default Register
