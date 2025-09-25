
import { Link } from "react-router-dom"

export default function Img() {
	return (
		<>

			<div className="img-client background-grey">
				<div className="themeflat-container">
					<div className="title-box-v2 center-title-box title-large">
						<span className="sub-title wow fadeInUp animated">Our client</span>
						<h2 className="title-section wow fadeInUp animated">running is what we do</h2>
					</div>{/* header style v2 */}
					<div className="logo-partner-about">
						<div className="logo-client">
							<div className="row">
								<div className="col-md-6 col-xxl-3 pd-img">
									<Link to="/#"><img src="images/retinal/1.png" alt="image" className="wow zoomIn animated" data-wow-delay="0.1s" /></Link>
								</div>
								<div className="col-md-6 col-xxl-3 pd-img">
									<Link to="/#"><img src="images/retinal/2.png" alt="image" className="wow zoomIn animated" data-wow-delay="0.3s" /></Link>
								</div>
								<div className="col-md-6 col-xxl-3 pd-img">
									<Link to="/#"><img src="images/retinal/3.png" alt="image" className="wow zoomIn animated" data-wow-delay="0.5s" /></Link>
								</div>
								<div className="col-md-6 col-xxl-3 pd-img">
									<Link to="/#"><img src="images/retinal/4.png" alt="image" className="wow zoomIn animated" data-wow-delay="0.7s" /></Link>
								</div>
								<div className="col-md-6 col-xxl-3 pd-img">
									<Link to="/#"><img src="images/retinal/5.png" alt="image" className="wow zoomIn animated" data-wow-delay="0.1s" /></Link>
								</div>
								<div className="col-md-6 col-xxl-3 pd-img">
									<Link to="/#"><img src="images/retinal/5.png" alt="image" className="wow zoomIn animated" data-wow-delay="0.3s" /></Link>
								</div>
								<div className="col-md-6 col-xxl-3 pd-img">
									<Link to="/#"><img src="images/retinal/6.png" alt="image" className="wow zoomIn animated" data-wow-delay="0.5s" /></Link>
								</div>
								<div className="col-md-6 col-xxl-3 pd-img">
									<Link to="/#"><img src="images/retinal/7.png" alt="image" className="wow zoomIn animated" data-wow-delay="0.7s" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
