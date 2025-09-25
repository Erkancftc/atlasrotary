

import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import MobileMenu from './MobileMenu'
import ModalForgotPassword from "./ModalForgotPassword"
import ModalLogin from "./ModalLogin"
import ModalRegister from "./ModalRegister"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children,backAlt }) {
	const [scroll, setScroll] = useState(0)
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

	// Cart
	const [isCart, setCart] = useState(false)
	const handleCart = () => setCart(!isCart)

	const [isLogin, setLogin] = useState(false)
	const handleLogin = () => {
		setLogin(!isLogin)
		!isLogin ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open")
	}
	// Register
	const [isRegister, setRegister] = useState(false)
	const handleRegister = () => {
		setRegister(!isRegister)
		!isRegister ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open")
	}
	const [isForgotPass, setForgotPass] = useState(false)
	const handleForgotPass = () => {
		setForgotPass(!isForgotPass)
		!isForgotPass ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open")
	}

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])
	return (
		<><div id="top" />
			{/* <AddClassBody /> */}
			{!headerStyle && <Header1
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isCart={isCart}
				handleCart={handleCart}
				isLogin={isLogin}
				handleLogin={handleLogin}
				isRegister={isRegister}
				handleRegister={handleRegister}
				isForgotPass={isForgotPass}
				handleForgotPass={handleForgotPass}
			/>}
			{headerStyle == 1 ? <Header1
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isCart={isCart}
				handleCart={handleCart}
				isLogin={isLogin}
				handleLogin={handleLogin}
				isRegister={isRegister}
				handleRegister={handleRegister}
				isForgotPass={isForgotPass}
				handleForgotPass={handleForgotPass}
			/> : null}

			{headerStyle == 2 ? <Header2
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isCart={isCart}
				handleCart={handleCart}
				isLogin={isLogin}
				handleLogin={handleLogin}
				isRegister={isRegister}
				handleRegister={handleRegister}
				isForgotPass={isForgotPass}
				handleForgotPass={handleForgotPass}
			/> : null}
			<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />


			{children}

			{!footerStyle && < Footer1 />}
			{footerStyle == 1 ? < Footer1 /> : null}
			{footerStyle == 2 ? < Footer2 /> : null}

			<BackToTop target="#top" backAlt={backAlt} />

			<ModalLogin
				isLogin={isLogin}
				handleLogin={handleLogin}
				isRegister={isRegister}
				handleRegister={handleRegister}
				isForgotPass={isForgotPass}
				handleForgotPass={handleForgotPass}
			/>
			<ModalRegister
				isRegister={isRegister}
				handleRegister={handleRegister}
				isLogin={isLogin}
				handleLogin={handleLogin}
			/>
			<ModalForgotPassword
				isForgotPass={isForgotPass}
				handleForgotPass={handleForgotPass}
				isLogin={isLogin}
				handleLogin={handleLogin}
			/>
		</>
	)
}
