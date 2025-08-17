"use client"

import { useState } from "react"
import styles from "@/components/search.module.css"
import { useRouter } from "nextjs-toploader/app"

export default function Search() {
	const [dept, setDept] = useState("TCS")
	const [batch, setBatch] = useState(2025)
	const router = useRouter()

	function handleSubmit(e) {
		e.preventDefault()

		router.push(`/students?dept=${dept}&batch=${batch}`)
	}

	function handleChange(e) {
		const val = e.target.value

		switch (e.target.id) {
			case "dept":
				setDept(val)
				break
			case "batch":
				setBatch(val)
				break
		}
	}

	return (
		<>
			<h1 style={{ fontSize: "2.5rem" }}>Search</h1>

			<form className={styles.form} onSubmit={handleSubmit}>
				<div>
					<label htmlFor="dept">Department:</label>
					<select
						name="department"
						id="dept"
						value={dept}
						onChange={handleChange}
						required={true}
					>
						<option value="TCS">AMCS - TCS</option>
						<option value="SS">AMCS - SS</option>
						<option value="CS">AMCS - CS</option>
						<option value="DS">AMCS - DS</option>
						<option value="ME">B.E. - M.E.</option>
						<option value="CE">B.E. - C.E.</option>
					</select>
				</div>

				<div>
					<label htmlFor="batch">Batch (First Year):</label>
					<input
						type="number"
						id="batch"
						name="batch"
						placeholder="Enter the year"
						value={batch}
						onChange={handleChange}
						min={2001}
						required={true}
						max={new Date().getFullYear()}
					/>
				</div>

				<button type="submit">Submit (Press Enter to Submit)</button>
			</form>
		</>
	)
}
