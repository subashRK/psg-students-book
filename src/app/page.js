import Image from "next/image"
import styles from "./home.module.css"
import Link from "next/link"

const IMG_WIDTH = 800

export default function Home() {
	return (
		<div>
			<main className={styles.container}>
				<h1 className={styles.title}>
					Get to know about your seniors and juniors studying in the{" "}
					<a href="https://www.psgtech.edu/" target="_blank">
						PSG College of Technology!
					</a>
				</h1>

				<Link className={styles.gotoLink} href="/">
					Go to Students Book &rarr;
				</Link>

				<Image
					src="/phone-notebook.jpg"
					width={IMG_WIDTH}
					height={IMG_WIDTH / 1.5} // 1.5 is the aspect ratio
					alt="Phone book"
				/>
			</main>
		</div>
	)
}
