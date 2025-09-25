
import { Link } from "react-router-dom"

export default function Banner() {
	return (
		<>

			<div className="tf-widget-banner">
				<div className="themeflat-container">
					<div className="tf-banne-paralax">
						<h2 className="title-banner wow fadeInUp animated ">
							Join our running club now
						</h2>
						<span className="sale wow fadeInUp animated ">-30%</span>
						<img src="images/retinal/runclub.png" alt="runclub" className="wow fadeInUp animated" />
						<Link to="/contact" className="flat-button wow fadeInUp animated ">Join now</Link>
					</div>
				</div>
			</div>
		</>
	)
}
