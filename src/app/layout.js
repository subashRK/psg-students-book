import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
})

export const metadata = {
	title: "PSG Tech Students Book",
	description:
		"The best place to know about your seniors and juniors studying in the PSG College of Technology.",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
