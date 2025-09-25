
import { useState } from "react"
import { Link } from "react-router-dom"
// import CartExpirationTimer from "../components/elements/CartExpirationTimer"
import CartExpirationTimer from "../../elements/CartExpirationTimer"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isCart, handleCart, isLogin, handleLogin, isRegister, handleRegister, isForgotPass, handleForgotPass }) {
	const [isToggled, setToggled] = useState(false)
	const handleToggled = () => setToggled(!isToggled)
	return (
		<>

			<div className="header-top">
				<div className="themeflat-container">
					<div className="header-top-inner">
						<div className="address">
							<Link to="/mailto:"><i className="icon-Vector" />hello@zunzo.com</Link>
							<address><i className="icon-Vector-22" />710 1st St. Easton, PA 18042 | Chester County</address>
						</div>
						<div className="social-icon">
							<Link to="/facebook.com"><i className="icon-facebook" /></Link>
							<Link to="/instagram.com"><i className="icon-instagram" /></Link>
							<Link to="/youtube.com"><i className="icon-youtube" /></Link>
							<Link to="/twitter.com"><i className="icon-twitter" /></Link>
							<Link to="/pinterest.com"><i className="icon-pinterest" /></Link>
						</div>
					</div>
				</div>
			</div>

			<header id="header" className={`header style1 clearfix ${scroll ? 'downscrolled' : ''}`}>
				<div className="themeflat-container">
					<div className="header-inner">
						<div id="logo" className="logo">
							<Link to="/" rel="home">
								<img id="a2" src="images/logo.png" alt="image" />
							</Link>
						</div>{/* /.logo */}
						<div className="nav-wrap">
							<div className="btn-menu" onClick={handleMobileMenu}>
								<span className="line-1" />
							</div>{/* //mobile menu button */}
							<nav id="mainnav" className="mainnav">
								<div id="logo-mobie" className="logo">
									<Link to="/" rel="home">
										<img src="images/logo.png" alt="image" />
									</Link>
								</div>{/* /.logo */}
								<Menu />
							</nav>{/* /.mainnav */}
						</div>{/* /.nav-wrap */}
						<div className="header-right">
							<div className="search">
								<a className={`show-search ${isToggled ? 'active-search' : ''}`} onClick={handleToggled}>
									<svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M21.0004 21.0004L16.6504 16.6504" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</a>
								<div className={`widget widget-search top-search ${isToggled ? 'active' : ''}`}>
									<form id="searchform" method="get">
										<div>
											<input type="text" id="s" className="sss" placeholder="Search" />
											<button aria-label="Search" className="wp-element-button" type="submit"><i className="icon-U" /></button>
										</div>
									</form>
								</div>{/* /.widget-search */}
							</div>
							<div className="login">
								<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19.6484 17.8756C18.2206 15.4072 16.0203 13.6372 13.4525 12.7981C14.7226 12.042 15.7094 10.8898 16.2614 9.51853C16.8134 8.14726 16.8999 6.63272 16.5078 5.20749C16.1157 3.78226 15.2666 2.52515 14.0909 1.62921C12.9151 0.733275 11.4778 0.248047 9.99964 0.248047C8.52146 0.248047 7.08414 0.733275 5.90842 1.62921C4.73269 2.52515 3.88358 3.78226 3.49146 5.20749C3.09935 6.63272 3.18592 8.14726 3.73788 9.51853C4.28984 10.8898 5.27668 12.042 6.54683 12.7981C3.97902 13.6362 1.77871 15.4062 0.350893 17.8756C0.298533 17.961 0.263803 18.056 0.248752 18.155C0.233701 18.254 0.238634 18.355 0.26326 18.4521C0.287886 18.5492 0.331707 18.6404 0.392136 18.7202C0.452565 18.8001 0.528379 18.867 0.615104 18.9171C0.70183 18.9672 0.79771 18.9995 0.897088 19.0119C0.996466 19.0243 1.09733 19.0167 1.19373 18.9896C1.29012 18.9624 1.3801 18.9162 1.45835 18.8537C1.5366 18.7912 1.60154 18.7136 1.64933 18.6256C3.41558 15.5731 6.53746 13.7506 9.99964 13.7506C13.4618 13.7506 16.5837 15.5731 18.35 18.6256C18.3977 18.7136 18.4627 18.7912 18.5409 18.8537C18.6192 18.9162 18.7092 18.9624 18.8056 18.9896C18.902 19.0167 19.0028 19.0243 19.1022 19.0119C19.2016 18.9995 19.2975 18.9672 19.3842 18.9171C19.4709 18.867 19.5467 18.8001 19.6072 18.7202C19.6676 18.6404 19.7114 18.5492 19.736 18.4521C19.7607 18.355 19.7656 18.254 19.7505 18.155C19.7355 18.056 19.7008 17.961 19.6484 17.8756ZM4.74964 7.0006C4.74964 5.96224 5.05755 4.94721 5.63443 4.08385C6.21131 3.2205 7.03124 2.54759 7.99056 2.15023C8.94987 1.75287 10.0055 1.6489 11.0239 1.85147C12.0423 2.05405 12.9777 2.55406 13.712 3.28829C14.4462 4.02251 14.9462 4.95797 15.1488 5.97637C15.3513 6.99477 15.2474 8.05037 14.85 9.00969C14.4527 9.969 13.7797 10.7889 12.9164 11.3658C12.053 11.9427 11.038 12.2506 9.99964 12.2506C8.60771 12.2491 7.27322 11.6955 6.28898 10.7113C5.30473 9.72702 4.75113 8.39253 4.74964 7.0006Z" fill="white" />
								</svg>
								<a data-bs-toggle="modal" onClick={handleLogin} role="button">Login/Register</a>
							</div>
							<div className="cart">
								<a className="nav-cart-trigger" onClick={handleCart}>
									<i className="icon-ShoppingCart" />
									<span className="shopping-cart-items-count">1</span>
								</a>
								{/*car-box*/}
								<div className={`minicar-overlay ${isCart ? 'active-minicart' : ''}`} onClick={handleCart} />
								<div className={`nav-shop-cart ${isCart ? 'active' : ''} `}>
									<div className="minicar-header">
										<span className="title">Shopping Cart</span>
										<span className="minicart-close" onClick={handleCart} />
									</div>
									<div className="widget_shopping_cart_content">
										<div className="minicar-body">
											<div className="time">
												<img src="images/retinal/fire.png" alt="" />
												<CartExpirationTimer />
											</div>
											<div className="tf-progessbar ">
												<div className="tf-notice">Buy <span>$70.00</span> more to get
													<span>Freeship</span>
												</div>
												<div className="tf-progressbar-content"><span className="tf-amount" /></div>
											</div>
											<ul className="cart_list">
												<li className="mini_cart_item">
													<div className="image">
														<Link to="/#">
															<img src="images/product/pd1.jpg" alt="image" />
														</Link>
													</div>
													<div className="title">
														<Link to="/#"> Suede leggings</Link>
														<span className="size">XL/Blue</span>
													</div>
													<div className="wrap-remove">
														<Link to="/#">Remove</Link>
														<span className="quantity">1 × $60.00 </span>
													</div>
												</li>
												<li className="mini_cart_item">
													<div className="image">
														<Link to="/#">
															<img src="images/product/pd4.jpg" alt="image" />
														</Link>
													</div>
													<div className="title">
														<Link to="/#"> Contrasting sheepskin...</Link>
														<span className="size">XL/Blue</span>
													</div>
													<div className="wrap-remove">
														<Link to="/#">Remove</Link>
														<span className="quantity">1 × $60.00 </span>
													</div>
												</li>
												<li className="mini_cart_item">
													<div className="image">
														<Link to="/#">
															<img src="images/product/pd2.jpg" alt="image" />
														</Link>
													</div>
													<div className="title">
														<Link to="/#"> Biker-style leggings </Link>
														<span className="size">XL/Blue</span>
													</div>
													<div className="wrap-remove">
														<Link to="/#">Remove</Link>
														<span className="quantity">1 × $60.00 </span>
													</div>
												</li>
												<li className="mini_cart_item">
													<div className="image">
														<Link to="/#">
															<img src="images/product/pd3.jpg" alt="image" />
														</Link>
													</div>
													<div className="title">
														<Link to="/#">Contrasting sheepskin sweatshirt</Link>
														<span className="size">XL/Blue</span>
													</div>
													<div className="wrap-remove">
														<Link to="/#">Remove</Link>
														<span className="quantity">1 × $60.00 </span>
													</div>
												</li>
											</ul>
										</div>
										<div className="minicar-footer">
											<ul className="tab-menu">
												<li>
													<a>
														<svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9.5 3.3335H3.66667C3.22464 3.3335 2.80072 3.50909 2.48816 3.82165C2.17559 4.13421 2 4.55814 2 5.00016V16.6668C2 17.1089 2.17559 17.5328 2.48816 17.8453C2.80072 18.1579 3.22464 18.3335 3.66667 18.3335H15.3333C15.7754 18.3335 16.1993 18.1579 16.5118 17.8453C16.8244 17.5328 17 17.1089 17 16.6668V10.8335" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M15.75 2.0832C16.0815 1.75168 16.5312 1.56543 17 1.56543C17.4688 1.56543 17.9185 1.75168 18.25 2.0832C18.5815 2.41472 18.7678 2.86436 18.7678 3.3332C18.7678 3.80204 18.5815 4.25168 18.25 4.5832L10.3333 12.4999L7 13.3332L7.83333 9.99986L15.75 2.0832Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
														Note
													</a>
													<a>
														<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M13.3333 2.5H0.833252V13.3333H13.3333V2.5Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M13.3333 6.6665H16.6666L19.1666 9.1665V13.3332H13.3333V6.6665Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M4.58333 17.5002C5.73393 17.5002 6.66667 16.5674 6.66667 15.4168C6.66667 14.2662 5.73393 13.3335 4.58333 13.3335C3.43274 13.3335 2.5 14.2662 2.5 15.4168C2.5 16.5674 3.43274 17.5002 4.58333 17.5002Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M15.4166 17.5002C16.5672 17.5002 17.4999 16.5674 17.4999 15.4168C17.4999 14.2662 16.5672 13.3335 15.4166 13.3335C14.266 13.3335 13.3333 14.2662 13.3333 15.4168C13.3333 16.5674 14.266 17.5002 15.4166 17.5002Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
														Shipping
													</a>
													<a>
														<svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M17.8252 11.1748L11.8502 17.1498C11.6954 17.3048 11.5116 17.4277 11.3092 17.5116C11.1069 17.5955 10.89 17.6386 10.671 17.6386C10.452 17.6386 10.2351 17.5955 10.0328 17.5116C9.83043 17.4277 9.64662 17.3048 9.49183 17.1498L2.3335 9.99984V1.6665H10.6668L17.8252 8.82484C18.1356 9.13711 18.3098 9.55953 18.3098 9.99984C18.3098 10.4401 18.1356 10.8626 17.8252 11.1748V11.1748Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M6.50049 5.8335H6.51049" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
														Coupon
													</a>
												</li>
											</ul>
											<div className="view-cart">
												<p className="total">
													<strong>Subtotal</strong> <span className="currency-symbol">$186,99</span>
												</p>
												<p className="buttons">
													<Link to="/#" className="button"> Checkout</Link>
													<Link to="/#" className="button checkout">View cart</Link>
												</p>
												<Link to="/#" className="shopping">Or continue shopping</Link>
											</div>
										</div>
									</div>
								</div>
								{/*car-box*/}
							</div>
							<button className="btn-contact">Contact Us</button>
							{/* /.login/register */}
						</div>{/* /.login-wrap */}
					</div>{/* /.header-inner */}
				</div>
			</header>

		</>
	)
}
