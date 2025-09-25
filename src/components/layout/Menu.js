import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Menu() {
	const location = useLocation()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	// Scroll to the top on route change
	useEffect(() => {
		setCurrentMenuItem(location.pathname)
		window.scrollTo(0, 0) // This will scroll the page to the top whenever the route changes
	}, [location.pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

	return (
		<>
			<ul className="menu">
				<li className={`${checkParentActive(["/homev2", "/homev3"])}`}>
					<Link to="/#">Home page</Link>
					<ul className="submenu">
						<li className={`item ${checkCurrentMenuItem("/")}`}><Link to="/">Home V.1</Link></li>
						<li className={`item ${checkCurrentMenuItem("/homev2")}`}><Link to="/homev2">Home V.2</Link></li>
						<li className={`item ${checkCurrentMenuItem("/homev3")}`}><Link to="/homev3">Home V.3</Link></li>
					</ul>{/* /.submenu */}
				</li>
				<li className={`item ${location.pathname === "/about" ? "current-menu-item" : ""}`}><Link to="/about">About us</Link></li>
				<li className={`${checkParentActive(["/event", "/event-details"])}`}>
					<Link to="/#">Our Events</Link>
					<ul className="submenu">
						<li className={`item ${checkCurrentMenuItem("/event")}`}><Link to="/event">Events</Link></li>
						<li className={`item ${checkCurrentMenuItem("/event-details")}`}><Link to="/event-details">Events Details</Link></li>
					</ul>{/* /.submenu */}
				</li>
				<li className={`${checkParentActive(["/blog", "/blog-single"])}`}>
					<Link to="/#">Latest News</Link>
					<ul className="submenu">
						<li className={`item ${checkCurrentMenuItem("/blog")}`}><Link to="/blog">Blogs</Link></li>
						<li className={`item ${checkCurrentMenuItem("/blog-single")}`}><Link to="/blog-single">Blogs Single</Link></li>
					</ul>{/* /.submenu */}
				</li>
				<li className={`item ${location.pathname === "/contact" ? "current-menu-item" : ""}`}><Link to="/contact">Contact us</Link></li>
			</ul>{/* /.menu */}
		</>
	)
}
