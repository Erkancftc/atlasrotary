

export default function About1() {
	return (
		<>

			<div className="tf-widget-about-us main-content">
				<div className="themeflat-container">
					<div className="tf-about-us">
						<div className="row">
							<div className="col-md-6 image-wraper">
								<div className="media">
									<div className="media-v1 wow fadeInLeft animated">
										<img className="mask-media" src="images/about/mask1.png" alt="image" />
										<img className="shape-media" src="images/about/graphic.png" alt="image" />
									</div>
									<img src="images/about/mask2.png" alt="image" className="image-gr wow fadeInRight animated" />
									<img src="images/about/Intersect.png" alt="image" className="intersect-img" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="about-box">
									<img src="images/about/graphic-box.png" alt="image shape" />
									{/* header style v1 */}
									<div className="title-box title-small-v2">
										<span className="sub-title wow fadeInUp animated">Welcome to runclub!</span>
										<h2 className="title-section wow fadeInUp animated">Zunzo - Your Ultimate Running Community
										</h2>
									</div>{/* header style v1 */}
									<p className="post wow fadeInUp animated">
										Welcome to our vibrant running community, where we organize exciting running events,
										provide helpful running tutorials, and keep you informed with the latest running news.
									</p>
									<div className="line" />
									<div className="about-button-group">
										<button className="flat-button wow fadeInUp animated">Find out more</button>
										<div className="infor-about">
											<img src="images/about/info.png" alt="" />
											<div className="info">
												<div className="name wow fadeInUp animated">Chris pad</div>
												<div className="job wow fadeInUp animated">Co - Founder Zunzo</div>
											</div>
										</div>
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
