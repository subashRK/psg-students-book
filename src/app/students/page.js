import styles from "@/app/students/students.module.css"
import Student from "@/components/Student"

export default async function Students({ searchParams }) {
	const { batch, dept } = await searchParams
	const students = []

	for (let i = 0; i < 45; i++) {
		const res = await fetch(
			`https://edviewx.psgtech.ac.in/Hostel/Student/studDetails?rollno=${batch}${dept}${
				i < 10 ? "0" + i : i
			}`,
			{ method: "GET" }
		)
		const data = await res.json()

		if (data.length !== 0) {
			students.push({
				sname: data[0].name,
				rollno: data[0].rollno,
				programme: data[0].programme,
				year: data[0].class_,
				StudPic:
					data[0].imgStatus === "0"
						? "/profile.png"
						: "data:image/jpg;base64," + data[0].StudPic,
			})
		}
	}

	return (
		<div className={styles.listContainer}>
			{students.map(({ sname, rollno, programme, year, StudPic }) => (
				<Student
					sname={sname}
					rollno={rollno}
					programme={programme}
					year={year}
					key={rollno}
					StudPic={StudPic}
				/>
			))}
		</div>
	)
}
