

import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"
export default function Blog() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					<div className="page-title">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">latest news</h1>
									</div>{/* /.page-title-captions */}
									<div className="breadcrumbs">
										<ul>
											<li><Link to="/">Homepage</Link></li>
											<li> <i className="icon-Arrow---Right-2" /></li>
											<li><a>Latest News</a></li>
										</ul>
									</div>{/* /.breadcrumbs */}
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.page-title */}
					{/* Blog Posts */}
					<section className="main-content blog-posts">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12 col-lg-9 col-xl-9 col-xxl-9 widget-blog-content">
									<div className="post-wrap">
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog1.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="/blog-single">Running</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link to="/blog-single">The Science Behind Running: How It
													Benefits Your
													Body and Mind</Link>
												</h2>
												<div className="entry-meta">by
													<span className="author line"><Link to="/blog-single">Maverick Nguyen</Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
													<span className="comment">
														<svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
															<g clipPath="url(#clip0_7503_84)">
																<path d="M6.71063 14.25L3 17.25V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H15.75C15.9489 4.5 16.1397 4.57902 16.2803 4.71967C16.421 4.86032 16.5 5.05109 16.5 5.25V13.5C16.5 13.6989 16.421 13.8897 16.2803 14.0303C16.1397 14.171 15.9489 14.25 15.75 14.25H6.71063Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M7.5 14.25V18C7.5 18.1989 7.57902 18.3897 7.71967 18.5303C7.86032 18.671 8.05109 18.75 8.25 18.75H17.2894L21 21.75V9.75C21 9.55109 20.921 9.36032 20.7803 9.21967C20.6397 9.07902 20.4489 9 20.25 9H16.5" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</g>
														</svg>
														02 comments
													</span>
												</div>
												<Link className="more-link" to="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog2.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="/blog-single">Running</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link to="/blog-single">The Best Running Shoes for Every
													Terrain: Find Your
													Perfect Fit</Link>
												</h2>
												<div className="entry-meta">by
													<span className="author line"><Link to="/blog-single">Maverick Nguyen</Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
													<span className="comment">
														<svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
															<g clipPath="url(#clip0_7503_84)">
																<path d="M6.71063 14.25L3 17.25V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H15.75C15.9489 4.5 16.1397 4.57902 16.2803 4.71967C16.421 4.86032 16.5 5.05109 16.5 5.25V13.5C16.5 13.6989 16.421 13.8897 16.2803 14.0303C16.1397 14.171 15.9489 14.25 15.75 14.25H6.71063Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M7.5 14.25V18C7.5 18.1989 7.57902 18.3897 7.71967 18.5303C7.86032 18.671 8.05109 18.75 8.25 18.75H17.2894L21 21.75V9.75C21 9.55109 20.921 9.36032 20.7803 9.21967C20.6397 9.07902 20.4489 9 20.25 9H16.5" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</g>
														</svg>
														02 comments
													</span>
												</div>
												<Link className="more-link" to="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog3.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="/blog-single">Running</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link to="/blog-single">From Couch to 5K: A Step-by-Step
													Guide to Becoming a
													Runner</Link>
												</h2>
												<div className="entry-meta">by
													<span className="author line"><Link to="/blog-single">Maverick Nguyen</Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
													<span className="comment">
														<svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
															<g clipPath="url(#clip0_7503_84)">
																<path d="M6.71063 14.25L3 17.25V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H15.75C15.9489 4.5 16.1397 4.57902 16.2803 4.71967C16.421 4.86032 16.5 5.05109 16.5 5.25V13.5C16.5 13.6989 16.421 13.8897 16.2803 14.0303C16.1397 14.171 15.9489 14.25 15.75 14.25H6.71063Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M7.5 14.25V18C7.5 18.1989 7.57902 18.3897 7.71967 18.5303C7.86032 18.671 8.05109 18.75 8.25 18.75H17.2894L21 21.75V9.75C21 9.55109 20.921 9.36032 20.7803 9.21967C20.6397 9.07902 20.4489 9 20.25 9H16.5" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</g>
														</svg>
														02 comments
													</span>
												</div>
												<Link className="more-link" to="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<div className="blog-pagination wow fadeInUp animated">
											<ul className="flat-pagination clearfix">
												<li><Link to="/#">1</Link></li>
												<li className="active">2</li>
												<li><Link to="/#"><i className="icon-Arrow---Right-2" /></Link></li>
											</ul>
										</div>{/* /.blog-pagination */}
									</div>
								</div>{/* /.col-md-9 */}
								<div className="col-md-12 col-lg-3 col-xl-3 col-xxl-3">
									<div className="sidebar">
										<div className="widget widget-text widget-aboutme ">
											<div className="textwidget">
												<div className="profile">
													<div className="imgae-profile">
														<img src="images/blog/profile-blog.png" alt="images" />
													</div>
													<div className="content-profile">
														<span>Maverick Nguyen</span>
														<p>200 Follower</p>
														<button className="flat-button">Follow</button>
													</div>
												</div>
												<p>Maverick Nguyen is a writer who draws. He’s the Bestselling author of “Number of The
													Year”. Donec vitae tortor efficitur</p>
												<ul className="flat-socials">
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
											</div>{/* /.textwidget */}
										</div>{/* /.widget-text */}
										<div className="widget widget-search">
											<form action="/" id="searchforms" method="get">
												<div>
													<input type="text" id="ss" className="sss" placeholder="Search" />
													<button aria-label="Search" className="wp-element-button" type="submit"><i className="icon-U" /></button>
												</div>
											</form>
										</div>{/* /.widget-search */}
										<div className="widget widget-categories">
											<h5 className="widget-title">Category</h5>
											<ul>
												<li><Link to="/#"><i className="icon-Arrow---Right-2" />Action<span className="pull-right">1</span></Link></li>
												<li><Link to="/#"><i className="icon-Arrow---Right-2" />adventure<span className="pull-right">2</span></Link></li>
												<li><Link to="/#"><i className="icon-Arrow---Right-2" />console<span className="pull-right">3</span></Link></li>
												<li><Link to="/#"><i className="icon-Arrow---Right-2" />esport<span className="pull-right">4</span></Link></li>
												<li><Link to="/#"><i className="icon-Arrow---Right-2" />racing<span className="pull-right">5</span></Link></li>
											</ul>
										</div>{/* /.widget-categories */}
										<div className="widget widget-tags">
											<h5 className="widget-title">Popular Tags</h5>
											<div className="tag">
												<ul>
													<li>
														<Link to="/#">Race</Link>
													</li>
													<li>
														<Link to="/#">Running</Link>
													</li>
													<li>
														<Link to="/#">Running</Link>
													</li>
													<li>
														<Link to="/#">Training</Link>
													</li>
													<li>
														<Link to="/#">Events</Link>
													</li>
												</ul>
											</div>
										</div>{/* /.widget-tags */}
										<div className="widget widget-popular-news">
											<h5 className="widget-title">Recent Posts</h5>
											<ul className="popular-news clearfix">
												<li>
													<div className="thumb">
														<img src="images/blog/post1.jpg" alt="image" />
													</div>
													<div className="text">
														<h6>
															<Link to="/blog-single">10 Effective Tips to Improve Your Running
																Form</Link>
														</h6>
														<p className="date-popular-news">Oct 12, 2023</p>
													</div>
												</li>
												<li>
													<div className="thumb">
														<img src="images/blog/post2.jpg" alt="image" />
													</div>
													<div className="text">
														<h6><Link to="/blog-single">Choosing the Right Running Shoes: A Complete
															Guide</Link></h6>
														<p className="date-popular-news">Oct 12, 2023</p>
													</div>
												</li>
												<li>
													<div className="thumb">
														<img src="images/blog/post3.jpg" alt="image" />
													</div>
													<div className="text">
														<h6><Link to="/blog-single">Nutrition Strategies for Peak Performance in
															Running</Link></h6>
														<p className="date-popular-news">Oct 12, 2023</p>
													</div>
												</li>
											</ul>{/* /.popular-news */}
										</div>{/* /.widget-popular-news */}
										<div className="widget widget-form-subscribe">
											<h3>Subscribe For Daily Newsletter</h3>
											<img src="images/blog/subscribe.png" alt="image" />
											<form action="/">
												<input type="email" id="email-sb" name="email" placeholder="Your email address" />
												<input type="submit" defaultValue="Follow" />
											</form>
										</div>{/* /.widget-Archive */}
									</div>{/* /.sidebar */}
								</div>{/* /.col-md-3 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</section>
				</div>

			</Layout>
		</>
	)
}