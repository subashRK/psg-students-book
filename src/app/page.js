import Image from "next/image"
import styles from "./home.module.css"
import Link from "next/link"

export default function Home() {
	return (
		<main className={styles.container}>
			<Image width={640} height={247} alt="People" src="/background.jpg" />
			<div>
				<div>
					<h1 className={styles.title}>
						Get to know about your seniors and juniors studying in the,{" "}
						<a href="https://www.psgtech.edu/" target="_blank">
							PSG College of Technology!
						</a>
					</h1>

					<h2>For the Students of PSG Tech, by a student.</h2>
				</div>

				<Link className={styles.gotoLink} href="/students">
					Go to Students Book &rarr;
				</Link>
			</div>
		</main>
	)
}
