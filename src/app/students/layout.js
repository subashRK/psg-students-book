import Search from "@/components/Search"
import styles from "@/app/students/students.module.css"

export default function StudentsLayout({ children }) {
	return (
		<div className={styles.studentsContainer}>
			<div className={styles.bg} />
			<Search />
			{children}
		</div>
	)
}
