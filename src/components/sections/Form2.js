
import { Link } from "react-router-dom"

export default function Form2() {
	return (
		<>

			<div className="tf-widget-form-contact">
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
											<p className="address">(555) 123-4567</p>
										</div>
										<div className="contact">
											<span> Email: </span>
											<p className="address">hello@zunzo.com</p>
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
											<Link to="/pinterest"><i className="icon-pinterest" /></Link>
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
		</>
	)
}
