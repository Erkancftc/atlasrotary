
// import "@/node_modules/react-modal-video/css/modal-video.css"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css"

export default function Benefit1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<div className="tf-widget-benefit background-black">
				<div className="themeflat-container">
					<div className="tf-benefit">
						{/* header style v2 */}
						<div className="title-box-v2 center-title-box title-large">
							<span className="sub-title wow fadeInUp animated">running's benefits</span>
							<h2 className="title-section wow fadeInUp animated">Benefits of running reference</h2>
						</div>{/* header style v2 */}
						<div className="benefit-wrap-content">
							<div className="row">
								<div className="col-md-4 benefit-on-left">
									<div className="benefit-item">
										<div className="benefit-content">
											<h6 className="title-benefit wow fadeInLeft animated">
												Be healthy
											</h6>
											<p className="description-benefit wow fadeInLeft animated">
												Improve your physical fitness and well-being through regular running.
											</p>
										</div>
										<div className="benefit-number">
											<span className="number wow zoomIn animated">01</span>
										</div>
									</div>
									<div className="benefit-item">
										<div className="benefit-content">
											<h6 className="title-benefit wow fadeInLeft animated">
												Feel Free
											</h6>
											<p className="description-benefit wow fadeInLeft animated">
												Experience the freedom of running outdoors, and challenging yourself.
											</p>
										</div>
										<div className="benefit-number">
											<span className="number wow zoomIn animated">02</span>
										</div>
									</div>
								</div>
								<div className="col-md-4 benefit-center ">
									<div className="benefit-video">
										<img className="video" src="images/retinal/video.jpg" alt="" />
										<a onClick={() => setOpen(true)} className="popup-youtube">
											<i className="icon-play3" />
										</a>
										<img className="shape-video-1" src="images/retinal/Inforgraphic.png" alt="" />
										<img className="shape-video-2" src="images/retinal/Inforgraphic1.png" alt="" />
										<img className="shape-video-3" src="images/retinal/Inforgraphic2.png" alt="" />
										<img className="shape-video-4" src="images/retinal/Inforgraphic3.png" alt="" />
									</div>
								</div>
								<div className="col-md-4 benefit-on-right">
									<div className="benefit-item">
										<div className="benefit-number">
											<span className="number wow zoomIn animated">03</span>
										</div>
										<div className="benefit-content">
											<h6 className="title-benefit wow fadeInRight animated">
												Be one of us
											</h6>
											<p className="description-benefit wow fadeInRight animated">
												Join a supportive community of like-minded runners and achieving goals together.
											</p>
										</div>
									</div>
									<div className="benefit-item">
										<div className="benefit-number">
											<span className="number wow zoomIn animated">04</span>
										</div>
										<div className="benefit-content">
											<h6 className="title-benefit wow fadeInRight animated">
												be strong</h6>
											<p className="description-benefit wow fadeInRight animated">
												Build resilience and mental toughness as you push your limits.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
