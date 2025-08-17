"use client"

import { useEffect, useState } from "react"
import styles from "@/components/search.module.css"
import { useRouter } from "nextjs-toploader/app"
import { useSearchParams } from "next/navigation"

export default function Search() {
	const [disabled, setDisabled] = useState(true)
	const [dept, setDept] = useState("PT")
	const [batch, setBatch] = useState(2025)
	const router = useRouter()
	const searchParams = useSearchParams()

	useEffect(() => {
		setDisabled(false)
	}, [searchParams])

	function handleSubmit(e) {
		e.preventDefault()

		const twoDigYear = batch - 2000
		const crtYear = twoDigYear < 10 ? "0" + twoDigYear : twoDigYear + ""

		if (
			searchParams.get("dept") === dept &&
			searchParams.get("batch") === crtYear
		)
			return

		setDisabled(true)

		router.replace(`/students?dept=${dept}&batch=${crtYear}`)
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
						<option value="PT">AMCS - TCS</option>
						<option value="PW">AMCS - SS</option>
						<option value="PC">AMCS - CS</option>
						<option value="PD">AMCS - DS</option>
						<option value="M">B.E. - M.E.</option>
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

				<button type="submit" disabled={disabled}>
					Submit (Press Enter to Submit)
				</button>
			</form>
		</>
	)
}
