import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import ProgressBar from "nextjs-toploader"

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
})

export const metadata = {
	title: "PSG Tech Students Book",
	description:
		"The best place to know about your seniors and juniors studying in the PSG College of Technology.",
	keywords:
		"PSG Students Book, PSG Students List, PSG Tech Students List, PSG Tech Students Book, PSG Tech, PSG College of Technology, Coimbatore, Pilamedu, Peelamedu, PSG College of Technology Students List, PSG Hostel, PSG Hostel Students, PSG Tech Hostel Students, PSGCT Students Book, PSG iTech, PSG ITech",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<ProgressBar color="orange" showSpinner={false} />
				<Navbar />
				{children}
			</body>
		</html>
	)
}
