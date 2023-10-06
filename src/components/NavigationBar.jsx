// components/NavigationBar.js

import Link from "next/link"
import styles from "../styles/NavigationBar.module.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

function NavigationBar() {
	const [activeTab, setActiveTab] = useState("login")
	const router = useRouter()

	useEffect(() => {
		if (router.pathname === "/login") {
			setActiveTab("login")
		} else if (router.pathname === "/register") {
			setActiveTab("register")
		}
	}, [router.pathname])

	return (
		<nav
			key="navbar"
			className={styles.navBar}>
			<ul>
				<li className={activeTab === "login" ? styles.active : ""}>
					<Link href="/login">
						<button className={styles.button}>Entrar</button>
					</Link>
				</li>
				<li className={activeTab === "register" ? styles.active : ""}>
					<Link href="/register">
						<button className={styles.button}>Cadastrar</button>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavigationBar
