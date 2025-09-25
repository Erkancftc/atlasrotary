
import { useState } from "react"
import { Link } from "react-router-dom"
// import CartExpirationTimer from "../components/elements/CartExpirationTimer"
import CartExpirationTimer from "../../elements/CartExpirationTimer"
import Menu from "../Menu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isCart, handleCart, isLogin, handleLogin, isRegister, handleRegister, isForgotPass, handleForgotPass }) {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	return (
		<>

			<div className="header-boxed">
				{/* Topbar */}
				<div className="header-top">
					<div className="themeflat-container">
						<div className="header-top-inner">
							<div className="address">
								<Link to="/mailto:"><i className="icon-Vector" />hi.avitex@gmail.com</Link>
								<address><i className="icon-Vector-22" />4140 Parker Rd. Allentown, NY</address>
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
				</div>{/* /.topbar */}
				<header id="header" className={`header-v2 style2 clearfix ${scroll ? 'downscrolled' : ''}`}>
					<div className="inner-header">
						<div className="wrap-inner-header themeflat-container">
							<div className="header-wrap clearfix">
								<div className="btn-menu-v2" onClick={handleMobileMenu}>
									<span className="line-1">
										<svg width={40} height={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x={2} y={6} width={20} height={2} rx={1} fill="#121212" />
											<rect x={2} y={11} width={10} height={2} rx={1} fill="#121212" />
											<rect x={2} y={16} width={16} height={2} rx={1} fill="#121212" />
										</svg>
									</span>
								</div>
								<div className="header-ct-left">
									<div id="logo" className="logo">
										<Link to="/" title="Zunzo – Running Club and Sports WordPress Theme">
											<img id="a3" className="site-logo" src="images/logo-v2.png" alt="Zunzo – Running Club and Sports WordPress Theme" />
										</Link>
									</div>
								</div>
								<div className="header-ct-center">
									<div className="inner-center">
										<div className="search-form-inner" id="form_search_inner">
											<form method="get" className="search-form products-search searchform ajax-search">
												<span className="select-category">
													<select name="product_cat" id="product_cat" className="dropdown_product_cat">
														<option value selected="selected">All Categories</option>
														<option value="accessory">Accessory</option>
														<option value="nutritional-food">Nutritional Food</option>
														<option value="running-clothes">Running Clothes</option>
														<option value="running-shoes">Running Shoes</option>
														<option value="running-watch">Running Watch</option>
													</select>
												</span>
												<label>
													<input type="search" name="s" className="s search-field input-search" placeholder="Search for products..." autoComplete="off" />
													<input type="hidden" name="post_type" defaultValue="product" />
												</label>
												<button type="submit" className="search-submit">SEARCH</button>
												<div className="clear-input">
													<i className="onsus-icon-close" />
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="header-ct-right">
									<div className="show-login">
										<a data-bs-toggle="modal" onClick={handleLogin}>
											<span>
												<svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20.5 21V19C20.5 17.9391 20.0786 16.9217 19.3284 16.1716C18.5783 15.4214 17.5609 15 16.5 15H8.5C7.43913 15 6.42172 15.4214 5.67157 16.1716C4.92143 16.9217 4.5 17.9391 4.5 19V21" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
													</path>
													<path d="M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11Z" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
													</path>
												</svg>
											</span>
											<p>Account</p>
										</a>
									</div>
									<div className="wishlist-wrapper">
										<div className="wishlist">
											<Link href="#">
												<svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M21.3382 4.60987C20.8274 4.09888 20.221 3.69352 19.5535 3.41696C18.8861 3.14039 18.1707 2.99805 17.4482 2.99805C16.7257 2.99805 16.0103 3.14039 15.3428 3.41696C14.6754 3.69352 14.0689 4.09888 13.5582 4.60987L12.4982 5.66987L11.4382 4.60987C10.4065 3.57818 9.0072 2.99858 7.54817 2.99858C6.08913 2.99858 4.68986 3.57818 3.65817 4.60987C2.62647 5.64156 2.04688 7.04084 2.04688 8.49987C2.04687 9.95891 2.62647 11.3582 3.65817 12.3899L4.71817 13.4499L12.4982 21.2299L20.2782 13.4499L21.3382 12.3899C21.8492 11.8791 22.2545 11.2727 22.5311 10.6052C22.8076 9.93777 22.95 9.22236 22.95 8.49987C22.95 7.77738 22.8076 7.06198 22.5311 6.39452C22.2545 5.72706 21.8492 5.12063 21.3382 4.60987V4.60987Z" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
												</svg>
												<p>Wishlist</p>
											</Link>
										</div>
									</div>
									<div className="cart">
										<a className="nav-cart-trigger" onClick={handleCart}>
											<svg width={21} height={24} viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M15.0078 10.8724V6.36589C15.0078 5.17068 14.533 4.02444 13.6879 3.1793C12.8428 2.33417 11.6965 1.85938 10.5013 1.85938C9.3061 1.85938 8.15985 2.33417 7.31472 3.1793C6.46958 4.02444 5.99479 5.17068 5.99479 6.36589V10.8724M2.61491 8.61914H18.3877L19.5143 22.1387H1.48828L2.61491 8.61914Z" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span className="shopping-cart-items-count">1</span>
											<p>Cart</p>
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
														<div className="tf-progressbar-content"><span className="tf-amount" />
														</div>
													</div>
													<ul className="cart_list">
														<li className="mini_cart_item">
															<div className="image">
																<Link href="#">
																	<img src="images/product/pd1.jpg" alt="image" />
																</Link>
															</div>
															<div className="title">
																<Link href="#"> Suede leggings</Link>
																<span className="size">XL/Blue</span>
															</div>
															<div className="wrap-remove">
																<Link href="#">Remove</Link>
																<span className="quantity">1 × $60.00 </span>
															</div>
														</li>
														<li className="mini_cart_item">
															<div className="image">
																<Link href="#">
																	<img src="images/product/pd4.jpg" alt="image" />
																</Link>
															</div>
															<div className="title">
																<Link href="#"> Contrasting sheepskin...</Link>
																<span className="size">XL/Blue</span>
															</div>
															<div className="wrap-remove">
																<Link href="#">Remove</Link>
																<span className="quantity">1 × $60.00 </span>
															</div>
														</li>
														<li className="mini_cart_item">
															<div className="image">
																<Link href="#">
																	<img src="images/product/pd2.jpg" alt="image" />
																</Link>
															</div>
															<div className="title">
																<Link href="#"> Biker-style leggings </Link>
																<span className="size">XL/Blue</span>
															</div>
															<div className="wrap-remove">
																<Link href="#">Remove</Link>
																<span className="quantity">1 × $60.00 </span>
															</div>
														</li>
														<li className="mini_cart_item">
															<div className="image">
																<Link href="#">
																	<img src="images/product/pd3.jpg" alt="image" />
																</Link>
															</div>
															<div className="title">
																<Link href="#">Contrasting sheepskin sweatshirt</Link>
																<span className="size">XL/Blue</span>
															</div>
															<div className="wrap-remove">
																<Link href="#">Remove</Link>
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
															<Link href="#" className="button"> Checkout</Link>
															<Link href="#" className="button checkout">View cart</Link>
														</p>
														<Link href="#" className="shopping">Or continue shopping</Link>
													</div>
												</div>
											</div>
										</div>
										{/*car-box*/}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="header-bottom">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="header-bottom-inner clearfix">
										<div className="header-ct-left">
											<div className="nav-wrap-category">
												<div className="title-menu">
													<span className="text-title">Browse Categories</span>
													<nav id="menu-category">
														<ul className="category-menu">
															<li className="menu-item"><Link href="#">Men’s Clothing</Link></li>
															<li className="menu-item"><Link href="#">Women’s Clothing</Link></li>
															<li className="menu-item"><Link href="#">Accessories</Link></li>
															<li className="menu-item"><Link href="#">Bags &amp; Backpacks</Link></li>
															<li className="menu-item"><Link href="#">Shoes</Link></li>
															<li className="menu-item"><Link href="#">Jewelry</Link></li>
															<li className="menu-item"><Link href="#">Watches</Link></li>
															<li className="menu-item"><Link href="#">Beauty &amp; Care</Link></li>
															<li className="menu-item"><Link href="#">Kids &amp; Baby</Link></li>
														</ul>
													</nav>{/* #site-navigation */}
												</div>
											</div>{/* /.nav-wrap */}
											<div className="nav-wrap">
												<div className="btn-menu" onClick={handleMobileMenu} />{/* //mobile menu button */}
												<nav id="mainnav" className="mainnav">
													<Menu />
												</nav>{/* /.mainnav */}
											</div>{/* /.nav-wrap */}
										</div>
										<div className="header-ct-right">
											<div className="infor-phone">
												<span>Hotline:</span>
												<span className="phone">+01 1234 8888</span>
											</div>
										</div>
									</div>
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>
					<div className="canvas-nav-wrap">
						<ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
							<li className="nav-item" onClick={() => handleTab(1)}>
								<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Menu</button>
							</li>
							<li className="nav-item" onClick={() => handleTab(2)}>
								<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Categories</button>
							</li>
						</ul>
						<div className="tab-content" id="myTabContent">
							<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="home" role="tabpanel" aria-labelledby="home-tab">
								<nav id="mainnav_canvas" className="mainnav_canvas" role="navigation">
									<ul id="menu-main-nav-1" className="menu">
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">Home page</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link to="/">Home 01</Link>
												</li>
												<li className="menu-item">
													<Link to="/homev2">Home 02</Link>
												</li>
												<li className="menu-item current-menu-item">
													<Link to="/homev3">Home 03</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<Link to="/about">About</Link>
										</li>
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">OUR EVENTS</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link to="/event">EVENTS</Link>
												</li>
												<li className="menu-item">
													<Link to="/event-details">EVENTS Details</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">LATEST NEWS</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link to="/blog-single">Blog</Link>
												</li>
												<li className="menu-item">
													<Link to="/blog-single">Blog Single</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<Link to="/contact">Contact Us</Link>
										</li>
										<li className="menu-item">
											<a className="menu-icon-sidebar">
												<svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M16.9424 16.058L13.0306 12.1471C14.1644 10.7859 14.7298 9.04002 14.6091 7.27263C14.4884 5.50524 13.691 3.85241 12.3828 2.65797C11.0745 1.46353 9.35615 0.819439 7.5851 0.859689C5.81406 0.899939 4.12671 1.62143 2.87407 2.87407C1.62143 4.12671 0.899939 5.81406 0.859689 7.5851C0.819439 9.35615 1.46353 11.0745 2.65797 12.3828C3.85241 13.691 5.50524 14.4884 7.27263 14.6091C9.04002 14.7298 10.7859 14.1644 12.1471 13.0306L16.058 16.9424C16.1161 17.0004 16.185 17.0465 16.2609 17.0779C16.3367 17.1094 16.4181 17.1255 16.5002 17.1255C16.5823 17.1255 16.6636 17.1094 16.7395 17.0779C16.8154 17.0465 16.8843 17.0004 16.9424 16.9424C17.0004 16.8843 17.0465 16.8154 17.0779 16.7395C17.1094 16.6636 17.1255 16.5823 17.1255 16.5002C17.1255 16.4181 17.1094 16.3367 17.0779 16.2609C17.0465 16.185 17.0004 16.1161 16.9424 16.058ZM2.12518 7.75018C2.12518 6.63766 2.45508 5.55012 3.07316 4.6251C3.69124 3.70007 4.56975 2.9791 5.59758 2.55336C6.62542 2.12761 7.75642 2.01622 8.84756 2.23326C9.9387 2.4503 10.941 2.98603 11.7277 3.7727C12.5143 4.55937 13.0501 5.56165 13.2671 6.6528C13.4841 7.74394 13.3727 8.87494 12.947 9.90277C12.5213 10.9306 11.8003 11.8091 10.8753 12.4272C9.95023 13.0453 8.8627 13.3752 7.75018 13.3752C6.25884 13.3735 4.82906 12.7804 3.77453 11.7258C2.72 10.6713 2.12683 9.24151 2.12518 7.75018Z" fill="#121212" />
												</svg>
												<p>Search</p>
											</a>
										</li>
										<li className="menu-item">
											<a data-bs-toggle="modal" onClick={handleLogin} className="menu-icon-sidebar">
												<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
													<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
												</svg>
												<p>Account</p>
											</a>
										</li>
										<li className="menu-item">
											<Link href="#" className="menu-icon-sidebar">
												<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20.8382 4.60987C20.3274 4.09888 19.721 3.69352 19.0535 3.41696C18.3861 3.14039 17.6707 2.99805 16.9482 2.99805C16.2257 2.99805 15.5103 3.14039 14.8428 3.41696C14.1754 3.69352 13.5689 4.09888 13.0582 4.60987L11.9982 5.66987L10.9382 4.60987C9.90647 3.57818 8.5072 2.99858 7.04817 2.99858C5.58913 2.99858 4.18986 3.57818 3.15817 4.60987C2.12647 5.64156 1.54688 7.04084 1.54688 8.49987C1.54687 9.95891 2.12647 11.3582 3.15817 12.3899L4.21817 13.4499L11.9982 21.2299L19.7782 13.4499L20.8382 12.3899C21.3492 11.8791 21.7545 11.2727 22.0311 10.6052C22.3076 9.93777 22.45 9.22236 22.45 8.49987C22.45 7.77738 22.3076 7.06198 22.0311 6.39452C21.7545 5.72706 21.3492 5.12063 20.8382 4.60987V4.60987Z" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
												</svg>
												<p>Wish List</p>
											</Link>
										</li>
										<li className="menu-item">
											<Link href="#" className="menu-icon-sidebar">
												<svg width={22} height={24} viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M15.5078 10.8724V6.36589C15.5078 5.17068 15.033 4.02444 14.1879 3.1793C13.3428 2.33417 12.1965 1.85938 11.0013 1.85938C9.8061 1.85938 8.65985 2.33417 7.81472 3.1793C6.96958 4.02444 6.49479 5.17068 6.49479 6.36589V10.8724M3.11491 8.61914H18.8877L20.0143 22.1387H1.98828L3.11491 8.61914Z" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
												</svg>
												<p>Cart</p>
											</Link>
										</li>
									</ul>
								</nav>{/* #mainnav_canvas */}
							</div>
							<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="profile" role="tabpanel" aria-labelledby="profile-tab">
								<nav id="mainnav_canvas2" className="mainnav_canvas" role="navigation">
									<ul id="menu-main-nav-2" className="menu">
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">Men’s Clothing</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link href="#">Men’s Clothing</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">Women’s Clothing</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link href="#">Women’s Clothing</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">Accessories</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link href="#">Accessories</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">Shoes</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link href="#">Shoes</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">Jewelry</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link href="#">Jewelry</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">Watches</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link href="#">Watches</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">Beauty &amp; Care</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link href="#">Beauty &amp; Care</Link>
												</li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children-mobile">
											<Link href="#">Kids &amp; Baby</Link>
											<span className="btn-submenu" />
											<ul className="sub-menu-sidebar">
												<li className="menu-item">
													<Link href="#">Kids &amp; Baby</Link>
												</li>
											</ul>
										</li>
									</ul>
								</nav>{/* #mainnav_canvas */}
							</div>
							<div className="infor-tab-menu">
								<span>Infomation</span>
								<ul>
									<li>
										<svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M16.5 0.75H1.5C1.33424 0.75 1.17527 0.815848 1.05806 0.933058C0.940848 1.05027 0.875 1.20924 0.875 1.375V12C0.875 12.3315 1.0067 12.6495 1.24112 12.8839C1.47554 13.1183 1.79348 13.25 2.125 13.25H15.875C16.2065 13.25 16.5245 13.1183 16.7589 12.8839C16.9933 12.6495 17.125 12.3315 17.125 12V1.375C17.125 1.20924 17.0592 1.05027 16.9419 0.933058C16.8247 0.815848 16.6658 0.75 16.5 0.75ZM14.893 2L9 7.40234L3.10703 2H14.893ZM15.875 12H2.125V2.79609L8.57734 8.71094C8.69265 8.81679 8.84348 8.87552 9 8.87552C9.15652 8.87552 9.30735 8.81679 9.42266 8.71094L15.875 2.79609V12Z" fill="#121212" />
										</svg>
										<p>hi.avitex@gmail.com</p>
									</li>
									<li>
										<svg width={14} height={18} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M7 4C6.38193 4 5.77775 4.18328 5.26384 4.52666C4.74994 4.87004 4.3494 5.3581 4.11288 5.92911C3.87635 6.50013 3.81447 7.12847 3.93505 7.73466C4.05562 8.34085 4.35325 8.89767 4.79029 9.33471C5.22733 9.77175 5.78415 10.0694 6.39034 10.19C6.99653 10.3105 7.62487 10.2486 8.19589 10.0121C8.7669 9.7756 9.25496 9.37506 9.59834 8.86116C9.94172 8.34725 10.125 7.74307 10.125 7.125C10.125 6.2962 9.79576 5.50134 9.20971 4.91529C8.62366 4.32924 7.8288 4 7 4ZM7 9C6.62916 9 6.26665 8.89003 5.95831 8.68401C5.64996 8.47798 5.40964 8.18514 5.26773 7.84253C5.12581 7.49992 5.08868 7.12292 5.16103 6.75921C5.23337 6.39549 5.41195 6.0614 5.67417 5.79917C5.9364 5.53695 6.27049 5.35837 6.63421 5.28603C6.99792 5.21368 7.37492 5.25081 7.71753 5.39273C8.06014 5.53464 8.35298 5.77496 8.55901 6.08331C8.76503 6.39165 8.875 6.75416 8.875 7.125C8.875 7.62228 8.67746 8.09919 8.32583 8.45083C7.97419 8.80246 7.49728 9 7 9ZM7 0.25C5.17727 0.252068 3.42979 0.97706 2.14092 2.26592C0.85206 3.55479 0.127068 5.30227 0.125 7.125C0.125 9.57812 1.25859 12.1781 3.40625 14.6445C4.37127 15.759 5.45739 16.7626 6.64453 17.6367C6.74962 17.7103 6.87482 17.7498 7.00312 17.7498C7.13143 17.7498 7.25663 17.7103 7.36172 17.6367C8.54668 16.7623 9.63069 15.7587 10.5938 14.6445C12.7383 12.1781 13.875 9.57812 13.875 7.125C13.8729 5.30227 13.1479 3.55479 11.8591 2.26592C10.5702 0.97706 8.82273 0.252068 7 0.25ZM7 16.3438C5.70859 15.3281 1.375 11.5977 1.375 7.125C1.375 5.63316 1.96763 4.20242 3.02252 3.14752C4.07742 2.09263 5.50816 1.5 7 1.5C8.49184 1.5 9.92258 2.09263 10.9775 3.14752C12.0324 4.20242 12.625 5.63316 12.625 7.125C12.625 11.5961 8.29141 15.3281 7 16.3438Z" fill="#121212" />
										</svg>
										<p>4140 Parker Rd. Allentown, NY</p>
									</li>
									<li>
										<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M15.3727 11.3795L11.6922 9.73031L11.682 9.72562C11.491 9.6439 11.2825 9.61111 11.0756 9.6302C10.8687 9.6493 10.6698 9.71969 10.4969 9.835C10.4765 9.84844 10.457 9.86305 10.4383 9.87875L8.53673 11.4998C7.33204 10.9147 6.08829 9.68031 5.50313 8.49125L7.12657 6.56078C7.14219 6.54125 7.15704 6.52172 7.1711 6.50062C7.28394 6.3282 7.35239 6.13056 7.37039 5.92529C7.38838 5.72002 7.35534 5.51348 7.27423 5.32406V5.31469L5.62032 1.62797C5.51309 1.38052 5.3287 1.17438 5.09468 1.04034C4.86067 0.906297 4.58958 0.85153 4.32188 0.884217C3.26326 1.02352 2.29155 1.54341 1.58824 2.34679C0.884919 3.15017 0.498093 4.1821 0.500007 5.24984C0.500007 11.453 5.54688 16.4998 11.75 16.4998C12.8177 16.5018 13.8497 16.1149 14.6531 15.4116C15.4564 14.7083 15.9763 13.7366 16.1156 12.678C16.1484 12.4104 16.0937 12.1393 15.9598 11.9053C15.8259 11.6713 15.62 11.4869 15.3727 11.3795ZM11.75 15.2498C9.09873 15.2469 6.55687 14.1924 4.68214 12.3177C2.8074 10.443 1.7529 7.90112 1.75001 5.24984C1.74707 4.48694 2.02192 3.74906 2.52324 3.17399C3.02456 2.59892 3.71806 2.22599 4.47423 2.12484C4.47392 2.12796 4.47392 2.1311 4.47423 2.13422L6.11485 5.80609L4.50001 7.7389C4.48362 7.75776 4.46873 7.77788 4.45548 7.79906C4.33791 7.97947 4.26894 8.18718 4.25525 8.40208C4.24157 8.61697 4.28362 8.83176 4.37735 9.02562C5.08516 10.4733 6.54376 11.9209 8.00704 12.628C8.20232 12.7208 8.41835 12.7614 8.63403 12.7458C8.8497 12.7302 9.05763 12.6589 9.23751 12.5389C9.25757 12.5254 9.27687 12.5108 9.29532 12.4952L11.1945 10.8748L14.8664 12.5194C14.8664 12.5194 14.8727 12.5194 14.875 12.5194C14.7751 13.2766 14.4027 13.9715 13.8275 14.4741C13.2524 14.9766 12.5138 15.2524 11.75 15.2498Z" fill="#121212" />
										</svg>
										<p>+01 1234 8888</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="overlay-canvas-nav">
						<div className="close-btn">
							<span className="close-menus" />
						</div>
					</div>
				</header>
			</div>

		</>
	)
}
