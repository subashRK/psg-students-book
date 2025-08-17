export default async function Students({ searchParams }) {
	return new Promise((resolve) =>
		setTimeout(() => resolve(<div>Students List...</div>), 3000)
	)
}
