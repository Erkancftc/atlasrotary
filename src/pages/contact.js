

import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"
export default function Contact() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					<div className="page-title page-title-blog">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">Contact Us</h1>
									</div>{/* /.page-title-captions */}
									<div className="breadcrumbs">
										<ul>
											<li><Link to="/">Homepage</Link></li>
											<li><i className="icon-Arrow---Right-2" /></li>
											<li><a>Contact Us</a></li>
										</ul>
									</div>{/* /.breadcrumbs */}
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.page-title */}
					{/* Map Contact us */}
					<div className="map-contact-us">
						<div className="map-contact relative">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
						</div>
					</div>
					{/* Map Contact us */}
					{/* Contact us */}
					<div className="tf-contact-page main-content">
						<div className="themeflat-container">
							<div className="row contact-page">
								<div className="col-md-5">
									<div className="contact-page-content">
										<div className="content-page-title">
											<span className="wow fadeInUp animated">Contact us</span>
											<h2 className="wow fadeInUp animated">Get it touch</h2>
											<p className="post wow fadeInUp animated">In the 14 years since she first graced our screens in
												Keeping Up With The
												Kardashians.</p>
										</div>
										<div className="list-contact-us">
											<div className="inner">
												<span className="wow fadeInUp animated">Phone: </span>
												<h6 className="wow fadeInUp animated">(555) 123-4567</h6>
											</div>
											<div className="inner">
												<span className="wow fadeInUp animated">Email:</span>
												<Link href="#" className="wow fadeInUp animated">
													<h6>hi.avitex@gmail.com</h6>
												</Link>
											</div>
											<div className="inner">
												<span className="wow fadeInUp animated">Location:</span>
												<h6 className="wow fadeInUp animated">710 1st St. Easton, PA 18042 | Chester County</h6>
											</div>
										</div>
										<div className="social-contact">
											<ul className="social-media wow fadeInUp animated">
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
										</div>
									</div>
								</div>
								<div className="col-md-7">
									<div className="contact-page-form">
										<form id="contactform-page" className="contact-page form-submit" action="/" acceptCharset="utf-8" noValidate="novalidate">
											<div className="text-wrap clearfix">
												<fieldset className="name-wrap">
													<input type="text" id="name" className="tb-my-input" name="name" tabIndex={1} placeholder="Your name" size={32} aria-required="true" required />
												</fieldset>
												<fieldset className="email-wrap">
													<input type="email" id="email" className="tb-my-input" name="email" tabIndex={2} placeholder="Your email" size={32} aria-required="true" required />
												</fieldset>
												<fieldset className="phone-wrap">
													<input type="tel" id="phone" className="tb-my-input" name="phone" tabIndex={1} placeholder="Telephone" size={32} aria-required="true" required />
												</fieldset>
												<fieldset className="age-wrap">
													<input type="text" id="age" className="tb-my-input" name="site" tabIndex={1} placeholder="Age" size={32} aria-required="true" required />
												</fieldset>
											</div>
											<fieldset className="message-wrap">
												<textarea id="comment-message" name="message" rows={3} tabIndex={4} placeholder="Message" aria-required="true" defaultValue={""} />
											</fieldset>
											<button name="submit" type="submit" id="comment-reply" className="flat-button btn-submit-comment"><span>Join now</span></button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}