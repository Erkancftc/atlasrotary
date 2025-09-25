
import { useEffect, useState } from "react"

export default function BackToTop({ target,backAlt }) {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setHasScrolled(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const handleClick = () => {
		window.scrollTo({
			top: document.querySelector(target).offsetTop,
			behavior: 'smooth'
		})
	}

	return (
		<>
			{hasScrolled && (
				<a className={`go-top show ${backAlt?"back-alt":""}`} onClick={handleClick}>
					<i class="icon-ctrl"></i>
				</a>

			)}
		</>
	)
}
