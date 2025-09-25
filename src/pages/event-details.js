

import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"
export default function EventDetails() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					<div className="page-title">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">Event Detail</h1>
									</div>{/* /.page-title-captions */}
									<div className="breadcrumbs">
										<ul>
											<li><Link to="/">Homepage</Link></li>
											<li> <i className="icon-Arrow---Right-2" /></li>
											<li><a>Event Detail</a></li>
										</ul>
									</div>{/* /.breadcrumbs */}
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.page-title */}
					{/* Event Detail Content */}
					<div className="tf-widget-events">
						<div className="themeflat-container">
							<div className="event-detail-box">
								<h2 className="title-event-detail title-small wow fadeInUp animated ">Running Events Coming Up include</h2>
								<div className="detail-box-content">
									<div className="image-event">
										<img src="images/evtent/evt2.jpg" alt="Image Events" className="wow fadeInLeft animated" />
									</div>
									<div className="event-detail-card">
										<div className="event-detail-container">
											<h4 className="event-detail-heading">Ticket</h4>
											<p className="price">
												<span>$45</span>
												<span className="ticket-price">/ticket</span>
											</p>
											<p className="event-title">Zunzo Fun Run 2023 - Run, Connect, Thrive!</p>
											<div className="event-date-time-or-location">
												<div className="event-date-time">
													<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<g clipPath="url(#clip0_6600_3485)">
															<path d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM19.5 7.5H4.5V4.5H6.75V5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6C7.69891 6 7.88968 5.92098 8.03033 5.78033C8.17098 5.63968 8.25 5.44891 8.25 5.25V4.5H15.75V5.25C15.75 5.44891 15.829 5.63968 15.9697 5.78033C16.1103 5.92098 16.3011 6 16.5 6C16.6989 6 16.8897 5.92098 17.0303 5.78033C17.171 5.63968 17.25 5.44891 17.25 5.25V4.5H19.5V7.5Z" fill="#C3E92D" />
														</g>
														<defs>
															<clipPath id="clip0_6600_3485">
																<rect width={24} height={24} fill="white" />
															</clipPath>
														</defs>
													</svg>
													<p>oct 20, 2023</p>
												</div>
												<div className="event-date-time">
													<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<g clipPath="url(#clip0_6600_3490)">
															<path d="M12 3.75C10.22 3.75 8.47991 4.27784 6.99987 5.26677C5.51983 6.25571 4.36628 7.66131 3.68509 9.30585C3.0039 10.9504 2.82567 12.76 3.17294 14.5058C3.5202 16.2516 4.37737 17.8553 5.63604 19.114C6.89472 20.3726 8.49836 21.2298 10.2442 21.5771C11.99 21.9243 13.7996 21.7461 15.4442 21.0649C17.0887 20.3837 18.4943 19.2302 19.4832 17.7501C20.4722 16.2701 21 14.53 21 12.75C20.9973 10.3639 20.0482 8.07629 18.361 6.38905C16.6737 4.70182 14.3861 3.75273 12 3.75ZM16.2806 9.53063L12.5306 13.2806C12.4609 13.3503 12.3782 13.4056 12.2872 13.4433C12.1961 13.481 12.0986 13.5004 12 13.5004C11.9015 13.5004 11.8039 13.481 11.7128 13.4433C11.6218 13.4056 11.5391 13.3503 11.4694 13.2806C11.3997 13.2109 11.3444 13.1282 11.3067 13.0372C11.269 12.9461 11.2496 12.8485 11.2496 12.75C11.2496 12.6515 11.269 12.5539 11.3067 12.4628C11.3444 12.3718 11.3997 12.2891 11.4694 12.2194L15.2194 8.46938C15.2891 8.39969 15.3718 8.34442 15.4628 8.30671C15.5539 8.26899 15.6515 8.24958 15.75 8.24958C15.8486 8.24958 15.9461 8.26899 16.0372 8.30671C16.1282 8.34442 16.2109 8.39969 16.2806 8.46938C16.3503 8.53906 16.4056 8.62178 16.4433 8.71283C16.481 8.80387 16.5004 8.90145 16.5004 9C16.5004 9.09855 16.481 9.19613 16.4433 9.28717C16.4056 9.37822 16.3503 9.46094 16.2806 9.53063ZM9 1.5C9 1.30109 9.07902 1.11032 9.21967 0.96967C9.36033 0.829018 9.55109 0.75 9.75 0.75H14.25C14.4489 0.75 14.6397 0.829018 14.7803 0.96967C14.921 1.11032 15 1.30109 15 1.5C15 1.69891 14.921 1.88968 14.7803 2.03033C14.6397 2.17098 14.4489 2.25 14.25 2.25H9.75C9.55109 2.25 9.36033 2.17098 9.21967 2.03033C9.07902 1.88968 9 1.69891 9 1.5Z" fill="#C3E92D" />
														</g>
														<defs>
															<clipPath id="clip0_6600_3490">
																<rect width={24} height={24} fill="white" />
															</clipPath>
														</defs>
													</svg>
													<p>Start 06:00 AM - Until Finish</p>
												</div>
												<div className="event-date-time">
													<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<g clipPath="url(#clip0_6600_3495)">
															<path d="M12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 16.8094 11.25 22.1409 11.5697 22.3641C11.6958 22.4524 11.846 22.4998 12 22.4998C12.154 22.4998 12.3042 22.4524 12.4303 22.3641C12.75 22.1409 20.25 16.8094 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 6.75C12.5933 6.75 13.1734 6.92595 13.6667 7.25559C14.1601 7.58524 14.5446 8.05377 14.7716 8.60195C14.9987 9.15013 15.0581 9.75333 14.9424 10.3353C14.8266 10.9172 14.5409 11.4518 14.1213 11.8713C13.7018 12.2909 13.1672 12.5766 12.5853 12.6924C12.0033 12.8081 11.4001 12.7487 10.8519 12.5216C10.3038 12.2946 9.83524 11.9101 9.50559 11.4167C9.17595 10.9234 9 10.3433 9 9.75C9 8.95435 9.31607 8.19129 9.87868 7.62868C10.4413 7.06607 11.2044 6.75 12 6.75Z" fill="#C3E92D" />
														</g>
														<defs>
															<clipPath id="clip0_6600_3495">
																<rect width={24} height={24} fill="white" />
															</clipPath>
														</defs>
													</svg>
													<p>710 1st St. Easton, PA 18042 | Chester County</p>
												</div>
											</div>
											<div className="btn-learn-more">
												<Link to="/event-details" className="flat-button">Join now</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="event-detail-content">
										<h3 className="wow fadeInUp animated">Zunzo Fun Run 2023 - Run, Connect, Thrive!</h3>
										<p className="post wow fadeInUp animated">Zunzo is delighted to present our exciting running event -
											"Zunzo Fun Run 2023." Get ready to embark on a thrilling running adventure, where you can
											connect with a passionate running community and experience the full joy of this amazing
											sport.</p>
										<ul>
											<li className="wow fadeInUp animated">
												<span>
													<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48438 0 0 4.48438 0 10C0 15.5156 4.48438 20 10 20C15.5156 20 20 15.5156 20 10C20 4.48438 15.5156 0 10 0Z" fill="#C3E92D" />
														<path d="M14.4776 6.9806L14.4776 6.98061L14.4804 6.98344C14.5274 7.03036 14.5274 7.11222 14.4804 7.15914L8.62106 13.0185C8.59595 13.0436 8.56393 13.0557 8.5332 13.0557C8.50248 13.0557 8.47045 13.0436 8.44535 13.0185L5.51566 10.0888C5.46874 10.0419 5.46874 9.96005 5.51566 9.91312C5.56259 9.8662 5.64444 9.8662 5.69137 9.91312L8.17965 12.4014L8.5332 12.755L8.88676 12.4014L14.3047 6.98344L14.3047 6.98345L14.3075 6.9806C14.3538 6.93355 14.4313 6.93355 14.4776 6.9806Z" fill="#121212" stroke="#121212" />
													</svg>
													Suitable for All Levels
												</span>
											</li>
											<li className="wow fadeInUp animated">
												<span>
													<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48438 0 0 4.48438 0 10C0 15.5156 4.48438 20 10 20C15.5156 20 20 15.5156 20 10C20 4.48438 15.5156 0 10 0Z" fill="#C3E92D" />
														<path d="M14.4776 6.9806L14.4776 6.98061L14.4804 6.98344C14.5274 7.03036 14.5274 7.11222 14.4804 7.15914L8.62106 13.0185C8.59595 13.0436 8.56393 13.0557 8.5332 13.0557C8.50248 13.0557 8.47045 13.0436 8.44535 13.0185L5.51566 10.0888C5.46874 10.0419 5.46874 9.96005 5.51566 9.91312C5.56259 9.8662 5.64444 9.8662 5.69137 9.91312L8.17965 12.4014L8.5332 12.755L8.88676 12.4014L14.3047 6.98344L14.3047 6.98345L14.3075 6.9806C14.3538 6.93355 14.4313 6.93355 14.4776 6.9806Z" fill="#121212" stroke="#121212" />
													</svg>
													A Unified Community
												</span>
											</li>
											<li className="wow fadeInUp animated">
												<span>
													<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48438 0 0 4.48438 0 10C0 15.5156 4.48438 20 10 20C15.5156 20 20 15.5156 20 10C20 4.48438 15.5156 0 10 0Z" fill="#C3E92D" />
														<path d="M14.4776 6.9806L14.4776 6.98061L14.4804 6.98344C14.5274 7.03036 14.5274 7.11222 14.4804 7.15914L8.62106 13.0185C8.59595 13.0436 8.56393 13.0557 8.5332 13.0557C8.50248 13.0557 8.47045 13.0436 8.44535 13.0185L5.51566 10.0888C5.46874 10.0419 5.46874 9.96005 5.51566 9.91312C5.56259 9.8662 5.64444 9.8662 5.69137 9.91312L8.17965 12.4014L8.5332 12.755L8.88676 12.4014L14.3047 6.98344L14.3047 6.98345L14.3075 6.9806C14.3538 6.93355 14.4313 6.93355 14.4776 6.9806Z" fill="#121212" stroke="#121212" />
													</svg>
													Charitable Giving
												</span>
											</li>
											<li className="wow fadeInUp animated">
												<span>
													<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48438 0 0 4.48438 0 10C0 15.5156 4.48438 20 10 20C15.5156 20 20 15.5156 20 10C20 4.48438 15.5156 0 10 0Z" fill="#C3E92D" />
														<path d="M14.4776 6.9806L14.4776 6.98061L14.4804 6.98344C14.5274 7.03036 14.5274 7.11222 14.4804 7.15914L8.62106 13.0185C8.59595 13.0436 8.56393 13.0557 8.5332 13.0557C8.50248 13.0557 8.47045 13.0436 8.44535 13.0185L5.51566 10.0888C5.46874 10.0419 5.46874 9.96005 5.51566 9.91312C5.56259 9.8662 5.64444 9.8662 5.69137 9.91312L8.17965 12.4014L8.5332 12.755L8.88676 12.4014L14.3047 6.98344L14.3047 6.98345L14.3075 6.9806C14.3538 6.93355 14.4313 6.93355 14.4776 6.9806Z" fill="#121212" stroke="#121212" />
													</svg>
													Personal Achievements
												</span>
											</li>
										</ul>
										<p className="post regis-now wow fadeInUp animated">Register now, and don't miss out on this
											incredible opportunity!</p>
										<Link to="/contact" className="flat-button wow fadeInUp animated">Register now</Link>
									</div>
								</div>
								<div className="col-md-6">
									<div className="image-event-content">
										<img src="images/evtent/evt1.jpg" alt="" className="wow fadeInRight animated" />
									</div>
								</div>
							</div>
						</div>
					</div>{/*Event Detail Content */}
					{/* Widget form conatct*/}
					<div className="tf-widget-form-contact form-contact-v2">
						<div className="themeflat-container">
							<div className="tf-form-contact">
								<div className="row">
									<div className="col-md-6 pd-form">
										<div className="map-contact relative">
											<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={585} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
										</div>
									</div>
									<div className="col-md-6 pd-form">
										<div className="form-contact background-black">
											<div className="heading-register">
												<h2 className="title-register">Contact Us</h2>
											</div>
											<div className="list-contact">
												<div className="contact">
													<span> Phone: </span>
													<div className="address">(555) 123-4567</div>
												</div>
												<div className="contact">
													<span> Email: </span>
													<div className="address">hello@zunzo.com</div>
												</div>
											</div>
											<ul className="social-media">
												<li>
													<Link to="/twitter.com"><i className="icon-twitter" /></Link>
												</li>
												<li>
													<Link to="/dribbble.com"><i className="icon-dribbble" /></Link>
												</li>
												<li>
													<Link to="/behance.com"><i className="icon-behance" /></Link>
												</li>
												<li>
													<Link to="/pinterest.com"><i className="icon-pinterest" /></Link>
												</li>
											</ul>
											<div className="form-register">
												<form id="registerform" className="register-form" noValidate>
													<fieldset className="name-container">
														<input type="text" id="author" placeholder="Your name*" className="tb-my-input" name="author" tabIndex={1} size={32} aria-required="true" />
													</fieldset>
													<fieldset className="email-container">
														<input type="text" id="email" placeholder="Your email*" className="tb-my-input" name="email" tabIndex={2} size={32} aria-required="true" />
													</fieldset>
													<fieldset className="telephone-container">
														<input type="text" id="telephone" placeholder="Telephone*" className="tb-my-input" name="telephone" tabIndex={1} size={32} aria-required="true" />
													</fieldset>
													<fieldset className="sex-container">
														<select name="sex" id="sexs" className="tb-my-input" aria-required="true">
															<option value>Male</option>
															<option value="female">Female</option>
														</select>
													</fieldset>
													<p className="form-submit">
														<input name="submit" type="submit" id="comment-reply" className="submit-register" defaultValue="Join now" />
													</p>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="graphic-form background-green" />
				</div>

			</Layout>
		</>
	)
}