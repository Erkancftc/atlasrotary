import { Link } from "react-router-dom"

export default function Footer1() {
	return (
		<>

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
											<Link to="/icon-twitter.com"><i className="icon-twitter" /></Link>
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
											<input className="btn-email" name="email" id="emails" type="email" placeholder="Your email address" required />
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
			</footer>

		</>
	)
}
