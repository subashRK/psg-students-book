"use client"

import { useEffect, useState } from "react"
import styles from "@/components/search.module.css"
import { useRouter } from "nextjs-toploader/app"
import { useSearchParams } from "next/navigation"

export default function Search() {
	const [disabled, setDisabled] = useState(true)
	const [dept, setDept] = useState("PT")
	const [batch, setBatch] = useState(2025)
	const [range, setRange] = useState(60)
	const [initialRollNo, setInitialRollNo] = useState(1)
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
			searchParams.get("batch") === crtYear &&
			searchParams.get("initialRollNo") === initialRollNo?.toString() &&
			searchParams.get("range") === range?.toString()
		)
			return

		setDisabled(true)

		router.replace(
			`/students?dept=${dept}&batch=${crtYear}&initialRollNo=${initialRollNo}&range=${range}`
		)
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
			case "init-roll-no":
				setInitialRollNo(val)
				break
			case "range":
				setRange(val)
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
						<option value="A">B.E. - Auto.E.</option>
						<option value="D">B.E. - BioMed.E.</option>
						<option value="C">B.E. - Civ.E.</option>
						<option value="Z">B.E. - C.S.E.</option>
						<option value="E+">B.E. - E.E.E.</option>
						<option value="E">B.E. - E.E.E. (Sand.)</option>
						<option value="L">B.E. - E.C.E.</option>
						<option value="U">B.E. - Inst. E.</option>
						<option value="M">B.E. - Mech. E. and Mech. E. (Sand.)</option>
						<option value="Y">B.E. - Metal. E.</option>
						<option value="P">B.E. - Prod. E. and Prod. E. (Sand.)</option>
						<option value="R">B.E. - Rob. and Aut. E.</option>
						<option value="B">B.Tech. - Bio Tech.</option>
						<option value="H">B.Tech. - Fash. Tech.</option>
						<option value="I">B.Tech. - I.T.</option>
						<option value="T">B.Tech. - Tex. Tech.</option>
						<option value="MR">M.E. - App. Elec.</option>
						<option value="MS">M.E. - Auto. Eng.</option>
						<option value="PB">M.E. - Biomet. and C.S.</option>
						<option value="ML">M.E. - Comm. Sys.</option>
						<option value="MI">M.E. - Comp. Int. Man.</option>
						<option value="MZ">M.E. - C.S.E.</option>
						<option value="MO">M.E. - Cont. Sys.</option>
						<option value="MD">M.E. - Eng. Des.</option>
						<option value="MF">M.E. - Ind. Eng.</option>
						<option value="MQ">M.E. - Pow. and Elec.</option>
						<option value="MJ">M.E. - Prod. Des. and Com.</option>
						<option value="MP">M.E. - Manuf. Eng.</option>
						<option value="MW">M.E. - Soft. Eng.</option>
						<option value="MC">M.E. - Struc. Eng.</option>
						<option value="MV">M.E. - VLSI</option>
						<option value="PI">M.E. - Wir. Comm.</option>
						<option value="MG">M.Tech. - Bio. Tech.</option>
						<option value="MA">M.Tech. - I.T.</option>
						<option value="MA">M.Tech. - I.T.</option>
						<option value="MY">M.Tech. - Ind. Met.</option>
						<option value="MT">M.Tech. - Tex. Tech.</option>
						<option value="PA">M.Sc. - App. Mat.</option>
						<option value="S">B.Sc. - App. Sci.</option>
						<option value="X">B.Sc. - C.S.D.</option>
						<option value="MC">MCA</option>
						<option value="AA">MBA (A)</option>
						<option value="AB">MBA (B)</option>
						<option value="AC">MBA (C)</option>
						<option value="AD">MBA (D)</option>
						<option value="UTA">MBA (UTA)</option>
						<option value="UTB">MBA (UTB)</option>
						<option value="PGM">PGDM</option>
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
						min={2010}
						required={true}
						max={new Date().getFullYear()}
					/>
				</div>

				<div>
					<label htmlFor="batch">Initial Roll No. (To start from):</label>
					<input
						type="number"
						id="init-roll-no"
						name="init-roll-no"
						placeholder="Enter the initial roll no."
						value={initialRollNo}
						onChange={handleChange}
						min={1}
						required={true}
						max={1000}
					/>
				</div>

				<div>
					<label htmlFor="range">
						Enter the range (No. of Students): {range}
					</label>
					<input
						type="range"
						id="range"
						name="range"
						placeholder="Enter the year"
						value={range}
						onChange={handleChange}
						min={1}
						required={true}
						max={60}
					/>
				</div>

				<button type="submit" disabled={disabled}>
					Submit (Press Enter to Submit)
				</button>
			</form>
		</>
	)
}
