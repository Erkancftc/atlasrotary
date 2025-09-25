import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
	const location = useLocation()
	const [currentMenuItem, setCurrentMenuItem] = useState("")
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	useEffect(() => {
		setCurrentMenuItem(location.pathname)
	}, [location.pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

	return (
		<>
			<nav id="mainnav-mobi" className={`mainnav style1 ${isMobileMenu ? 'active' : ''}`}>
				<div id="logo-mobie" className="logo">
					<a href="index.html" rel="home">
						<img src="images/logo.png" alt="image" />
					</a>
				</div>
				<ul className="menu">
					<li className={`${checkParentActive(["/homev2", "/homev3"])}`}>
						<Link to="/#">Home page</Link>
						<span className="btn-submenu" onClick={() => handleAccordion(1)} />
						<ul className="submenu" style={{ display: `${isAccordion === 1 ? "block" : "none"}` }}>
							<li className={`item ${checkCurrentMenuItem("/")}`}><Link to="/">Home V.1</Link></li>
							<li className={`item ${checkCurrentMenuItem("/homev2")}`}><Link to="/homev2">Home V.2</Link></li>
							<li className={`item ${checkCurrentMenuItem("/homev3")}`}><Link to="/homev3">Home V.3</Link></li>
						</ul>{/* /.submenu */}
					</li>
					<li className={`item ${location.pathname === "/about" ? "current-menu-item" : ""}`}><Link to="/about">About us</Link></li>
					<li className={`${checkParentActive(["/event", "/event-details"])}`}>
						<Link to="/#">Our Events</Link>
						<span className="btn-submenu" onClick={() => handleAccordion(2)} />
						<ul className="submenu" style={{ display: `${isAccordion === 2 ? "block" : "none"}` }}>
							<li className={`item ${checkCurrentMenuItem("/event")}`}><Link to="/event">Events</Link></li>
							<li className={`item ${checkCurrentMenuItem("/event-details")}`}><Link to="/event-details">Events Details</Link></li>
						</ul>{/* /.submenu */}
					</li>
					<li className={`${checkParentActive(["/blog", "/blog-single"])}`}>
						<Link to="/#">Latest News</Link>
						<span className="btn-submenu" onClick={() => handleAccordion(3)} />
						<ul className="submenu" style={{ display: `${isAccordion === 3 ? "block" : "none"}` }}>
							<li className={`item ${checkCurrentMenuItem("/blog")}`}><Link to="/blog">Blogs</Link></li>
							<li className={`item ${checkCurrentMenuItem("/blog-single")}`}><Link to="/blog-single">Blogs Single</Link></li>
						</ul>{/* /.submenu */}
					</li>
					<li className={`item ${location.pathname === "/contact" ? "current-menu-item" : ""}`}><Link to="/contact">Contact us</Link></li>
				</ul>{/* /.menu */}
			</nav>
			<div className={`overlay-menu-mobie ${isMobileMenu ? 'active' : ''}`} onClick={handleMobileMenu}>
				<div className="close-btn">
					<span className="close-menus" />
				</div>
			</div>
		</>
	)
}
