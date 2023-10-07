import React from "react"
import NavigationBar from "../components/NavigationBar"
import Link from "next/link"
import styles from "../styles/register.module.css"

const RegisterLayout = ({ children }: any) => {
	return (
		<div>
			<header className={styles.header}>
				<div>
					<Link href="/">
						<button>
							<h1>Logo</h1>
						</button>
					</Link>
				</div>
			</header>
			<main>
				<NavigationBar />
				{children}
			</main>
		</div>
	)
}

export default RegisterLayout
