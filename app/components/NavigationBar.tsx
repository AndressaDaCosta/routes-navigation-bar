"use client"

import Link from "next/link"
import styles from "../styles/NavigationBar.module.css"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
function NavigationBar() {
	const pathname = usePathname()
	const [activeTab, setActiveTab] = useState("login")

	useEffect(() => {
		if (pathname === "/login") {
			setActiveTab("login")
		} else if (pathname === "/register") {
			setActiveTab("register")
		}
	}, [pathname])

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
