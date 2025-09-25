
import { Link } from "react-router-dom"

export default function Instagram() {
	return (
		<>

			<div className="tf-widget-instagram">
				<div className="title-box title-small center-title-box">
					<h2 className="title-section wow fadeInUp animated">Runzo On Instagram</h2>
				</div>
				<div className="row">
					<div className="col-6 col-md-4 col-lg-2 pd-form">
						<Link to="/instagram.com" className="wow fadeInUp animated" data-wow-delay="0.1s">
							<div className="ig-item">
								<img src="images/retinal/ig1.jpg" alt="" />
								<i className="icon-instagram" />
							</div>
						</Link>
					</div>
					<div className="col-6 col-md-4 col-lg-2 pd-form">
						<Link to="/instagram.com" className="wow fadeInUp animated" data-wow-delay="0.2s">
							<div className="ig-item">
								<img src="images/retinal/ig2.jpg" alt="" />
								<i className="icon-instagram" />
							</div>
						</Link>
					</div>
					<div className="col-6 col-md-4 col-lg-2 pd-form">
						<Link to="/instagram.com" className="wow fadeInUp animated" data-wow-delay="0.3s">
							<div className="ig-item">
								<img src="images/retinal/ig3.jpg" alt="" />
								<i className="icon-instagram" />
							</div>
						</Link>
					</div>
					<div className="col-6 col-md-4 col-lg-2 pd-form">
						<Link to="/instagram.com" className="wow fadeInUp animated" data-wow-delay="0.4s">
							<div className="ig-item">
								<img src="images/retinal/ig4.jpg" alt="" />
								<i className="icon-instagram" />
							</div>
						</Link>
					</div>
					<div className="col-6 col-md-4 col-lg-2 pd-form">
						<Link to="/instagram.com" className="wow fadeInUp animated" data-wow-delay="0.5s">
							<div className="ig-item">
								<img src="images/retinal/ig5.jpg" alt="" />
								<i className="icon-instagram" />
							</div>
						</Link>
					</div>
					<div className="col-6 col-md-4 col-lg-2 pd-form">
						<Link to="/instagram.com" className="wow fadeInUp animated" data-wow-delay="0.6s">
							<div className="ig-item">
								<img src="images/retinal/ig6.jpg" alt="" />
								<i className="icon-instagram" />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
