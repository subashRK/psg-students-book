import Link from "next/link"
import styles from "./navbar.module.css"

const HEIGHT = 60

export default function Navbar() {
	return (
		<>
			<nav style={{ height: HEIGHT }} className={styles.navbar}>
				<Link href="/" className={styles.title}>
					PSG Students Book
				</Link>
			</nav>

			<div style={{ height: HEIGHT }}></div>
		</>
	)
}
