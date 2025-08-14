import styles from "@/app/students/students.module.css"
import StudentPlaceholder from "@/components/StudentPlaceholder"

export default function StudentsLoading() {
	return (
		<div className={styles.listContainer} style={{ cursor: "progress" }}>
			<StudentPlaceholder />
			<StudentPlaceholder />
			<StudentPlaceholder />
			<StudentPlaceholder />
		</div>
	)
}
