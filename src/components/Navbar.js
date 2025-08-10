import Link from "next/link"
import styles from "./navbar.module.css"
import Image from "next/image"

const HEIGHT = 60
const PROFILE_HEIGHT = 40

export default function Navbar() {
	return (
		<>
			<nav style={{ height: HEIGHT }} className={styles.navbar}>
				<Link href="/" className={styles.title}>
					PSG Students Book
				</Link>

				<Link
					href="https://github.com/subashRK"
					className={styles.profile}
					style={{ height: PROFILE_HEIGHT }}
					title="See Github Page"
					target="_blank"
				>
					Profile
					<Image
						src="/github-profile.jpg"
						height={PROFILE_HEIGHT}
						width={PROFILE_HEIGHT}
						alt="R.K.Subash"
					/>
				</Link>
			</nav>

			<div style={{ height: HEIGHT }}></div>
		</>
	)
}
