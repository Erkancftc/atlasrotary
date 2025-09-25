import { Link } from "react-router-dom"

export default function Footer2() {
	return (
		<>

			<div>
				<footer className="footer background-black">
					<div className="footer-widgets">
						<div className="themeflat-container">
							<div className="row footer-top">
								<div className="col-xxl-4 col-lg-4 col-xl-4 col-md-12 logo-footer">
									<div className="widget">
										<div className="textwidget">
											<img id="a1" src="images/logo-footer.png" alt="images" />
											<p>Welcome to our running community! Discover the joy of running, connect with fellow
												enthusiasts, and unlock your full potential with our expert resources and training
												programs.
											</p>
											<div className="social-icon-footer">
												<Link to="/facebook.com"><i className="icon-facebook" /></Link>
												<Link to="/linkedin.com"><i className="icon-linkedin2" /></Link>
												<Link to="/twitter.com"><i className="icon-twitter" /></Link>
												<Link to="/instagram.com"><i className="icon-instagram" /></Link>
												<Link to="/youtube.com"><i className="icon-youtube" /></Link>
											</div>
										</div>
									</div>{/* /.widget */}
								</div>{/* /.col-md-4 */}
								<div className="col-xxl-4 col-lg-4 col-xl-4 col-md-6 link-footer">
									<div className="widget widget_menu-footer">
										<h5 className="widget-title">Quick Links</h5>
										<ul className="menu-footer">
											<li><Link to="/about">About Us</Link></li>
											<li><Link to="/event">Our Event</Link></li>
											<li><Link to="/blog">Latest News</Link></li>
											<li><Link to="/contact">Contact Us</Link></li>
										</ul>{/* /.menu */}
									</div>{/* /.widget */}
									<div className="widget widget_menu-footer">
										<h5 className="widget-title">Page</h5>
										<ul className="menu-footer">
											<li><Link to="/blog">Blogs</Link></li>
											<li><Link to="/event-details">Events Detail</Link></li>
											<li><Link to="/event">Events</Link></li>
											<li><Link to="/about">About Us</Link></li>
										</ul>{/* /.menu */}
									</div>{/* /.widget */}
									<div className="widget widget_menu-footer">
										<h5 className="widget-title">About Us</h5>
										<ul className="menu-footer">
											<li><Link to="/">Demos</Link></li>
											<li><Link to="/about">About Us</Link></li>
											<li><Link to="/event">Events</Link></li>
											<li><Link to="/contact">Contact</Link></li>
										</ul>{/* /.menu */}
									</div>{/* /.widget */}
								</div>{/* /.col-md-4 */}
								<div className="col-xxl-4 col-lg-4 col-xl-4 col-md-6 new-letter">
									<div className="widget widget_text">
										<h5 className="widget-title">Newsletter</h5>
										<div className="text-phone">
											<svg width={36} height={37} viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M26.43 16.3754C25.785 16.3754 25.275 15.8504 25.275 15.2204C25.275 14.6654 24.72 13.5104 23.79 12.5054C22.875 11.5304 21.87 10.9604 21.03 10.9604C20.385 10.9604 19.875 10.4354 19.875 9.80539C19.875 9.17539 20.4 8.65039 21.03 8.65039C22.53 8.65039 24.105 9.46039 25.485 10.9154C26.775 12.2804 27.6 13.9754 27.6 15.2054C27.6 15.8504 27.075 16.3754 26.43 16.3754Z" fill="white" />
												<path d="M31.8456 16.375C31.2006 16.375 30.6906 15.85 30.6906 15.22C30.6906 9.895 26.3556 5.575 21.0456 5.575C20.4006 5.575 19.8906 5.05 19.8906 4.42C19.8906 3.79 20.4006 3.25 21.0306 3.25C27.6306 3.25 33.0006 8.62 33.0006 15.22C33.0006 15.85 32.4756 16.375 31.8456 16.375Z" fill="#C3E92D" />
												<path d="M17.685 21.565L12.78 26.47C12.24 25.99 11.715 25.495 11.205 24.985C9.66 23.425 8.265 21.79 7.02 20.08C5.79 18.37 4.8 16.66 4.08 14.965C3.36 13.255 3 11.62 3 10.06C3 9.04 3.18 8.065 3.54 7.165C3.9 6.25 4.47 5.41 5.265 4.66C6.225 3.715 7.275 3.25 8.385 3.25C8.805 3.25 9.225 3.34 9.6 3.52C9.99 3.7 10.335 3.97 10.605 4.36L14.085 9.265C14.355 9.64 14.55 9.985 14.685 10.315C14.82 10.63 14.895 10.945 14.895 11.23C14.895 11.59 14.79 11.95 14.58 12.295C14.385 12.64 14.1 13 13.74 13.36L12.6 14.545C12.435 14.71 12.36 14.905 12.36 15.145C12.36 15.265 12.375 15.37 12.405 15.49C12.45 15.61 12.495 15.7 12.525 15.79C12.795 16.285 13.26 16.93 13.92 17.71C14.595 18.49 15.315 19.285 16.095 20.08C16.635 20.605 17.16 21.115 17.685 21.565Z" fill="#C3E92D" />
												<path d="M32.9554 27.7436C32.9554 28.1636 32.8804 28.5986 32.7304 29.0186C32.6854 29.1386 32.6404 29.2586 32.5804 29.3786C32.3254 29.9186 31.9954 30.4286 31.5604 30.9086C30.8254 31.7186 30.0154 32.3036 29.1004 32.6786C29.0854 32.6786 29.0704 32.6936 29.0554 32.6936C28.1704 33.0536 27.2104 33.2486 26.1754 33.2486C24.6454 33.2486 23.0104 32.8886 21.2854 32.1536C19.5604 31.4186 17.8354 30.4286 16.1254 29.1836C15.5404 28.7486 14.9554 28.3136 14.4004 27.8486L19.3054 22.9436C19.7254 23.2586 20.1004 23.4986 20.4154 23.6636C20.4904 23.6936 20.5804 23.7386 20.6854 23.7836C20.8054 23.8286 20.9254 23.8436 21.0604 23.8436C21.3154 23.8436 21.5104 23.7536 21.6754 23.5886L22.8154 22.4636C23.1904 22.0886 23.5504 21.8036 23.8954 21.6236C24.2404 21.4136 24.5854 21.3086 24.9604 21.3086C25.2454 21.3086 25.5454 21.3686 25.8754 21.5036C26.2054 21.6386 26.5504 21.8336 26.9254 22.0886L31.8904 25.6136C32.2804 25.8836 32.5504 26.1986 32.7154 26.5736C32.8654 26.9486 32.9554 27.3236 32.9554 27.7436Z" fill="white" />
											</svg>
											<div className="address">
												<p>Need help? 24/7</p>
												<span>001-1234-88888</span>
											</div>
										</div>
										<p><i className="icon-MapPin" />710 1st St. Easton, PA 18042 | Chester County</p>
										<form>
											<div className="input-new-letter">
												<input className="btn-email" name="email" id="email" type="email" placeholder="Your email address" required />
												<button className="btn-submit" type="submit"><i className="icon-uniE925" /></button>
											</div>
										</form>
									</div>{/* /.widget */}
								</div>{/* /.col-md-4 */}
							</div>{/* /.row */}
							<div className="row footer-bottom">
								<div className="col-md-6 col-sm-12">
									<div className="copyright">
										<p>©2023 <Link to="/" target="_blank"> Zunzo.</Link> All Rights Reserved.
										</p>
									</div>
								</div>{/* /.col-md-6 */}
								<div className="col-md-6 col-sm-12">
									<ul className="link-footer-bottom">
										<li><Link to="/#">Terms Of Services</Link></li>
										<li><Link to="/#">Privacy Policy</Link></li>
										<li><Link to="/#">Cookie Policy</Link></li>
									</ul>{/* /.menu */}
								</div>{/* /.col-md-6 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.footer-widgets */}
				</footer>{/* Footer */}
				<div className="footer-shop">
					<div className="item">
						<Link to="/" className="link">
							<svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.25 18.3332H16.5833C17.0254 18.3332 17.4493 18.1576 17.7618 17.845C18.0744 17.5325 18.25 17.1085 18.25 16.6665V7.49984L10.75 1.6665L3.25 7.49984V16.6665C3.25 17.1085 3.42559 17.5325 3.73816 17.845C4.05072 18.1576 4.47464 18.3332 4.91667 18.3332H8.25" stroke="#121212" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M8.25 18.3335V13.3335H13.25V18.3335" stroke="#121212" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<div className="text">Home</div>
						</Link>
					</div>
					<div className="item category">
						<div className="sign-in">
							<svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.25" y={4} width={20} height={2} rx={1} fill="#121212" />
								<rect x="0.25" y={9} width={10} height={2} rx={1} fill="#121212" />
								<rect x="0.25" y={14} width={16} height={2} rx={1} fill="#121212" />
							</svg>
							<div className="text">Category</div>
						</div>
					</div>
					<div className="item wishlist-wrapper">
						<div className="wishlist">
							<Link to="/#">
								<svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21.3382 4.60987C20.8274 4.09888 20.221 3.69352 19.5535 3.41696C18.8861 3.14039 18.1707 2.99805 17.4482 2.99805C16.7257 2.99805 16.0103 3.14039 15.3428 3.41696C14.6754 3.69352 14.0689 4.09888 13.5582 4.60987L12.4982 5.66987L11.4382 4.60987C10.4065 3.57818 9.0072 2.99858 7.54817 2.99858C6.08913 2.99858 4.68986 3.57818 3.65817 4.60987C2.62647 5.64156 2.04688 7.04084 2.04688 8.49987C2.04687 9.95891 2.62647 11.3582 3.65817 12.3899L4.71817 13.4499L12.4982 21.2299L20.2782 13.4499L21.3382 12.3899C21.8492 11.8791 22.2545 11.2727 22.5311 10.6052C22.8076 9.93777 22.95 9.22236 22.95 8.49987C22.95 7.77738 22.8076 7.06198 22.5311 6.39452C22.2545 5.72706 21.8492 5.12063 21.3382 4.60987V4.60987Z" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p>Wishlist</p>
							</Link>
						</div>
					</div>
					<div className="item cart">
						<a className="nav-cart-trigger">
							<svg width={21} height={24} viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.0078 10.8724V6.36589C15.0078 5.17068 14.533 4.02444 13.6879 3.1793C12.8428 2.33417 11.6965 1.85938 10.5013 1.85938C9.3061 1.85938 8.15985 2.33417 7.31472 3.1793C6.46958 4.02444 5.99479 5.17068 5.99479 6.36589V10.8724M2.61491 8.61914H18.3877L19.5143 22.1387H1.48828L2.61491 8.61914Z" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<span className="shopping-cart-items-count">1</span>
							<p>Cart</p>
						</a>
						{/*car-box*/}
						<div className="minicar-overlay" />
						<div className="nav-shop-cart ">
							<div className="minicar-header">
								<span className="title">Shopping Cart</span>
								<span className="minicart-close" />
							</div>
							<div className="widget_shopping_cart_content">
								<div className="minicar-body">
									<div className="time">
										<img src="images/retinal/fire.png" alt="" />
										<p>Your cart will expire in <span id="timer-sell-outs">04:48</span>
											minutes!
											Please checkout now
											before your items sell
											out!</p>
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
				</div>
			</div>

		</>
	)
}
