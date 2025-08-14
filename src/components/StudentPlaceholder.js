import styles from "@/app/students/students.module.css"

export default function StudentPlaceholder() {
	return (
		<div className={styles.studentLoading}>
			<div className={styles.image}></div>
			<div className={styles.content}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
