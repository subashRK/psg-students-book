import styles from "@/app/students/students.module.css"
import Image from "next/image"

export default async function Student({
	src,
	sname,
	programme,
	year,
	rollno,
	StudPic,
}) {
	return (
		<div className={styles.student}>
			<Image
				className={styles.image}
				src={StudPic}
				height={168}
				width={168}
				alt={sname}
			/>
			<div className={styles.content}>
				<div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{sname}</div>
				<div>{rollno}</div>
				<div>{programme}</div>
				<div>{year}</div>
			</div>
		</div>
	)
}
