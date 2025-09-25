
import { Link } from "react-router-dom"

export default function Form1() {
	return (
		<>

			<div className="widget-form-register">
				<div className="row">
					<div className="col-md-6 pd-form image-register">
						<img src="images/retinal/img-form.jpg" alt="image" />
					</div>
					<div className="col-md-6 pd-form">
						<div className="widget-register background-green">
							<div className="heading-register">
								<img src="images/retinal/img-form-start.png" alt="image form" />
								<h2 className="title-register">Join our running club now </h2>
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
		</>
	)
}
