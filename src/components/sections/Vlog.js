
import { Link } from "react-router-dom"

export default function Vlog() {
	return (
		<>

			<div className="tf-widget-vlog-v3 main-content">
				<div className="themeflat-container">
					<div className="tf-blog-v3">
						{/* header style v1 */}
						<div className="title-box center-title-box title-large">
							<span className="sub-title-blog wow fadeInUp animated">Latest News</span>
							<h2 className="title-section wow fadeInUp animated">News insight</h2>
						</div>{/* header style v1 */}
						<div className="row">
							<div className="col-md-4">
								<div className="item-vlog-v3 wow fadeInUp animated" data-wow-delay="0.1s">
									<div className="image-blog-v3">
										<img src="images/blog/bl-v3.jpg" alt="Image Blog" />
									</div>
									<div className="content-blog-v3">
										<div className="tag wow fadeInUp animated">
											<ul>
												<li><Link to="/blog-single">Sport</Link></li>
											</ul>
										</div>
										<h5 className="entry-title wow fadeInUp animated"><Link to="/blog-single">Exploring the
											World of Organic
											Beauty: Tips and
											Trends for a Natural Glow</Link></h5>
										<div className="entry-meta wow fadeInUp animated">
											<span className="author line">by <Link to="/blog-single">Tony Nguyen</Link></span>
											<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="item-vlog-v3 wow fadeInUp animated" data-wow-delay="0.3s">
									<div className="image-blog-v3">
										<img src="images/blog/bl-v3-1.jpg" alt="Image Blog" />
									</div>
									<div className="content-blog-v3">
										<div className="tag wow fadeInUp animated">
											<ul>
												<li><Link to="/blog-single">Fashion</Link></li>
											</ul>
										</div>
										<h5 className="entry-title wow fadeInUp animated"><Link to="/#">The Benefits of Going Organic:
											A Guide to Healthier
											Living</Link></h5>
										<div className="entry-meta wow fadeInUp animated">
											<span className="author line">by <Link to="/blog-single">Tony Nguyen </Link></span>
											<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="item-vlog-v3 wow fadeInUp animated" data-wow-delay="0.5s">
									<div className="image-blog-v3">
										<img src="images/blog/bl-v3-2.jpg" alt="Image Blog" />
									</div>
									<div className="content-blog-v3">
										<div className="tag wow fadeInUp animated">
											<ul>
												<li><Link to="/blog-single">Fitness</Link></li>
											</ul>
										</div>
										<h5 className="entry-title wow fadeInUp animated"><Link to="/#">How to Create a Sustainable
											Home with Organic
											Products</Link></h5>
										<div className="entry-meta wow fadeInUp animated">
											<span className="author line">by <Link to="/blog-single">Michale Chen </Link></span>
											<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
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
