import styles from "./home.module.css"
import Link from "next/link"

const IMG_WIDTH = 1000

export default function Home() {
	return (
		<div>
			<main className={styles.container}>
				<h1 className={styles.title}>
					Get to know about your seniors and juniors studying in the,
					<br />
					<a href="https://www.psgtech.edu/" target="_blank">
						PSG College of Technology!
					</a>
				</h1>

				<Link className={styles.gotoLink} href="/students">
					Go to Students Book &rarr;
				</Link>

				<h2 style={{ opacity: 0.9, textAlign: "center" }}>
					For the Students of PSG Tech, by a student.
				</h2>
			</main>
		</div>
	)
}
