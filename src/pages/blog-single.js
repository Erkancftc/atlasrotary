

import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"
export default function BlogSingle() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					<div className="page-title page-title-blog text-left">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">Blog detail</h1>
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
					<section className="main-content blog-content-single">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12 col-lg-9 col-xl-9 col-xxl-9 widget-blog-content">
									<div className="post-wrap">
										<article className="entry format-standard">
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="/#">Running</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title-single">
													10 Essential Tips for Beginner Runners: Start Your Running Journey Right
												</h2>
												<div className="entry-meta">
													<span className="author line"><img src="images/blog/Avatar.png" alt="" /><Link to="/#">by
														Tony Nguyen </Link></span>
													<span className="date line"><Link to="/#">Oct 12, 2023</Link></span>
												</div>{/* /.entry-meta */}
												<div className="entry-content">
													<p className="post">Kim Kardashian West needs no introduction. In the 14 years since she
														first graced
														our screens in Keeping Up With The Kardashians, she has built her KKW beauty
														empire, filmed her show, wrapped her show, become a billionaire, studied law,
														campaigned for the rights of death row inmates, travelled the world to attend
														events such as Paris Fashion Week, raised four children and launched her wildly
														successful shapewear brand SKIMS.</p>
												</div>{/* /.entry-post */}
												<div className="feature-post">
													<div className="entry-image">
														<img src="images/blog/blog-details.jpg" alt="image" />
													</div>{/* /.entry-image */}
												</div>{/* /.feature-post */}
												<blockquote className="alignleft">
													<i className="icon-clarity_block-quote-line"> </i>
													<div className="wrap-text">
														<p className="blockqoute-text">
															“For bras, I love our Cotton Jersey Scoop Bralette – it’s lined with this
															amazing power mesh so you get great support and is so comfy I can sleep in
															it.”</p>
														<span className="whisper">- Anthony Bourdain</span>
													</div>
												</blockquote>
												<div className="content-post-single">
													<h4 className="title-single">How did SKIMS start?</h4>
													<p className="post">
														This is such a hard question! Honestly, every time we drop a new collection I
														get
														obsessed with it. The pieces that have been my go-tos though are some of our
														simplest styles that we launched with. I wear our Fits Everybody Thong every
														single
														day – it is the only underwear I have now, it’s so comfortable and stretchy and
														light enough that you can wear anything over it.
													</p>
													<p className="post">
														For bras, I love our Cotton Jersey Scoop Bralette – it’s lined with this amazing
														power mesh so you get great support and is so comfy I can sleep in it. I also
														love
														our Seamless Sculpt Bodysuit – it’s the perfect all in one sculpting, shaping
														and
														smoothing shapewear piece with different levels of support woven throughout.
													</p>
												</div>
												<div className="wrap-share">
													<div className="tag">
														<span>Tag:</span>
														<ul>
															<li>
																<Link to="/#">Race</Link>
															</li>
															<li>
																<Link to="/#">Running</Link>
															</li>
															<li>
																<Link to="/#">Gym</Link>
															</li>
														</ul>
													</div>
													<div className="share-post">
														<span>Share</span>
														<ul className="flat-socials">
															<li>
																<Link to="/#"><i className="icon-twitter" /></Link>
															</li>
															<li>
																<Link to="/#"><i className="icon-dribbble" /></Link>
															</li>
															<li>
																<Link to="/#"><i className="icon-behance" /></Link>
															</li>
															<li>
																<Link to="/#"><i className="icon-pinterest" /></Link>
															</li>
														</ul>
													</div>
												</div>
											</div>{/* /.main-post */}
										</article>
										<nav className="posts-navigation">
											<ul className="nav-links">
												<li className="previous-post">
													<div className="button-navigation prev-button">
														<Link to="/#">Previous</Link>
													</div>
													<div className="title-post"><Link to="/#">I Couldn’t Help But Splurge On These Epic Fall
														Finds</Link></div>
												</li>
												<li className="next-post">
													<div className="button-navigation prev-button">
														<Link to="/#">Next</Link>
													</div>
													<div className="title-post"><Link to="/#">My Mani Photo Dump To Save To Your Nail Inspo
														Folder</Link></div>
												</li>
											</ul>{/* .nav-links */}
										</nav>
										<div className="comment-post">
											<div className="comment-list-wrap">
												<div className="select-comment">
													<h4 className="comment-title">03 Comments</h4>
													<div className="sort-by">
														<span>Sort By:</span>
														<select name="run" id="runs">
															<option value="Newest">Newest</option>
															<option value="oldest">Oldest</option>
														</select>
													</div>
												</div>
												<ul className="comment-list">
													<li>
														<article className="comment">
															<div className="profile">
																<div className="comment-user">
																	<div className="avata">
																		<img src="images/blog/cmt1.jpg" alt="image" />
																	</div>
																	<div className="name">
																		<span className="comment-author"><Link to="/#">Guy Hawkins</Link></span>
																		<span className="comment-date">1 days ago</span>
																	</div>
																</div>
																<div className="icon-comment">
																	<svg width={20} height={5} viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path fillRule="evenodd" clipRule="evenodd" d="M10 5C9.41063 5 8.8454 4.76587 8.42865 4.34913C8.01191 3.93238 7.77778 3.36715 7.77778 2.77778C7.77778 2.18841 8.01191 1.62318 8.42865 1.20643C8.8454 0.789682 9.41063 0.555555 10 0.555555C10.5894 0.555555 11.1546 0.789682 11.5713 1.20643C11.9881 1.62318 12.2222 2.18841 12.2222 2.77778C12.2222 3.36715 11.9881 3.93238 11.5713 4.34913C11.1546 4.76587 10.5894 5 10 5ZM17.7778 5C17.1884 5 16.6232 4.76587 16.2064 4.34913C15.7897 3.93238 15.5556 3.36715 15.5556 2.77778C15.5556 2.18841 15.7897 1.62318 16.2064 1.20643C16.6232 0.789682 17.1884 0.555555 17.7778 0.555555C18.3671 0.555555 18.9324 0.789682 19.3491 1.20643C19.7659 1.62318 20 2.18841 20 2.77778C20 3.36715 19.7659 3.93238 19.3491 4.34913C18.9324 4.76587 18.3671 5 17.7778 5ZM2.22222 5C1.63285 5 1.06762 4.76587 0.650874 4.34913C0.234126 3.93238 0 3.36715 0 2.77778C0 2.18841 0.234126 1.62318 0.650874 1.20643C1.06762 0.789682 1.63285 0.555555 2.22222 0.555555C2.81159 0.555555 3.37682 0.789682 3.79357 1.20643C4.21032 1.62318 4.44444 2.18841 4.44444 2.77778C4.44444 3.36715 4.21032 3.93238 3.79357 4.34913C3.37682 4.76587 2.81159 5 2.22222 5Z" fill="#A0A0A0" />
																	</svg>
																</div>
															</div>
															<div className="comment-detail">
																<p className="post comment-body">Lorem ipsum dolor sit amet consectetur.
																	Cursus
																	nunc pharetra arcu quam turpis risus amet turpis. Facilisis
																	elementum tincidunt pellentesque sed rutrum enim.</p>
															</div>
															<div className="comment-meta">
																<div className="meta-emotional"><i className="icon-Icon-3" />20</div>
																<div className="meta-reply">
																	<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M15.5 10.5C15.5 10.942 15.3244 11.366 15.0118 11.6785C14.6993 11.9911 14.2754 12.1667 13.8333 12.1667H3.83333L0.5 15.5V2.16667C0.5 1.72464 0.675595 1.30072 0.988155 0.988155C1.30072 0.675595 1.72464 0.5 2.16667 0.5H13.8333C14.2754 0.5 14.6993 0.675595 15.0118 0.988155C15.3244 1.30072 15.5 1.72464 15.5 2.16667V10.5Z" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" />
																	</svg>
																	Hide Replies
																</div>
																<Link to="/#" className="comment-reply">Reply</Link>
															</div>
														</article>{/* /.comment */}
														<ul className="children">
															<li>
																<article className="comment">
																	<div className="profile">
																		<div className="comment-user">
																			<div className="avata">
																				<img src="images/blog/cmt2.jpg" alt="image" />
																			</div>
																			<div className="name">
																				<span className="comment-author"><Link to="/#">Jost
																					Phegan</Link></span>
																				<span className="comment-date">1 days ago</span>
																			</div>
																		</div>
																		<div className="icon-comment">
																			<svg width={20} height={5} viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
																				<path fillRule="evenodd" clipRule="evenodd" d="M10 5C9.41063 5 8.8454 4.76587 8.42865 4.34913C8.01191 3.93238 7.77778 3.36715 7.77778 2.77778C7.77778 2.18841 8.01191 1.62318 8.42865 1.20643C8.8454 0.789682 9.41063 0.555555 10 0.555555C10.5894 0.555555 11.1546 0.789682 11.5713 1.20643C11.9881 1.62318 12.2222 2.18841 12.2222 2.77778C12.2222 3.36715 11.9881 3.93238 11.5713 4.34913C11.1546 4.76587 10.5894 5 10 5ZM17.7778 5C17.1884 5 16.6232 4.76587 16.2064 4.34913C15.7897 3.93238 15.5556 3.36715 15.5556 2.77778C15.5556 2.18841 15.7897 1.62318 16.2064 1.20643C16.6232 0.789682 17.1884 0.555555 17.7778 0.555555C18.3671 0.555555 18.9324 0.789682 19.3491 1.20643C19.7659 1.62318 20 2.18841 20 2.77778C20 3.36715 19.7659 3.93238 19.3491 4.34913C18.9324 4.76587 18.3671 5 17.7778 5ZM2.22222 5C1.63285 5 1.06762 4.76587 0.650874 4.34913C0.234126 3.93238 0 3.36715 0 2.77778C0 2.18841 0.234126 1.62318 0.650874 1.20643C1.06762 0.789682 1.63285 0.555555 2.22222 0.555555C2.81159 0.555555 3.37682 0.789682 3.79357 1.20643C4.21032 1.62318 4.44444 2.18841 4.44444 2.77778C4.44444 3.36715 4.21032 3.93238 3.79357 4.34913C3.37682 4.76587 2.81159 5 2.22222 5Z" fill="#A0A0A0" />
																			</svg>
																		</div>
																	</div>
																	<div className="comment-detail">
																		<p className="post comment-body">Lorem ipsum dolor sit amet
																			consectetur. Cursus
																			nunc pharetra arcu quam turpis risus amet turpis. Facilisis
																			elementum tincidunt pellentesque sed rutrum enim.</p>
																	</div>
																	<div className="comment-meta">
																		<div className="meta-emotional"><i className="icon-Icon-3" />20</div>
																		<Link to="/#" className="comment-reply">Reply</Link>
																	</div>
																</article>{/* /.comment */}
															</li>
														</ul>{/* /.children */}
													</li>
													<li>
														<article className="comment">
															<div className="profile">
																<div className="comment-user">
																	<div className="avata">
																		<img src="images/blog/cmt3.jpg" alt="image" />
																	</div>
																	<div className="name">
																		<span className="comment-author"><Link to="/#">John Smith</Link></span>
																		<span className="comment-date">1 days ago</span>
																	</div>
																</div>
																<div className="icon-comment">
																	<svg width={20} height={5} viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path fillRule="evenodd" clipRule="evenodd" d="M10 5C9.41063 5 8.8454 4.76587 8.42865 4.34913C8.01191 3.93238 7.77778 3.36715 7.77778 2.77778C7.77778 2.18841 8.01191 1.62318 8.42865 1.20643C8.8454 0.789682 9.41063 0.555555 10 0.555555C10.5894 0.555555 11.1546 0.789682 11.5713 1.20643C11.9881 1.62318 12.2222 2.18841 12.2222 2.77778C12.2222 3.36715 11.9881 3.93238 11.5713 4.34913C11.1546 4.76587 10.5894 5 10 5ZM17.7778 5C17.1884 5 16.6232 4.76587 16.2064 4.34913C15.7897 3.93238 15.5556 3.36715 15.5556 2.77778C15.5556 2.18841 15.7897 1.62318 16.2064 1.20643C16.6232 0.789682 17.1884 0.555555 17.7778 0.555555C18.3671 0.555555 18.9324 0.789682 19.3491 1.20643C19.7659 1.62318 20 2.18841 20 2.77778C20 3.36715 19.7659 3.93238 19.3491 4.34913C18.9324 4.76587 18.3671 5 17.7778 5ZM2.22222 5C1.63285 5 1.06762 4.76587 0.650874 4.34913C0.234126 3.93238 0 3.36715 0 2.77778C0 2.18841 0.234126 1.62318 0.650874 1.20643C1.06762 0.789682 1.63285 0.555555 2.22222 0.555555C2.81159 0.555555 3.37682 0.789682 3.79357 1.20643C4.21032 1.62318 4.44444 2.18841 4.44444 2.77778C4.44444 3.36715 4.21032 3.93238 3.79357 4.34913C3.37682 4.76587 2.81159 5 2.22222 5Z" fill="#A0A0A0" />
																	</svg>
																</div>
															</div>
															<div className="comment-detail">
																<p className="post comment-body">Lorem ipsum dolor sit amet consectetur.
																	Cursus
																	nunc pharetra arcu quam turpis risus amet turpis. Facilisis
																	elementum tincidunt pellentesque sed rutrum enim.</p>
															</div>
															<div className="comment-meta">
																<div className="meta-emotional"><i className="icon-Icon-3" />20</div>
																<div className="meta-reply">
																	<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M15.5 10.5C15.5 10.942 15.3244 11.366 15.0118 11.6785C14.6993 11.9911 14.2754 12.1667 13.8333 12.1667H3.83333L0.5 15.5V2.16667C0.5 1.72464 0.675595 1.30072 0.988155 0.988155C1.30072 0.675595 1.72464 0.5 2.16667 0.5H13.8333C14.2754 0.5 14.6993 0.675595 15.0118 0.988155C15.3244 1.30072 15.5 1.72464 15.5 2.16667V10.5Z" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" />
																	</svg>
																	Hide Replies
																</div>
																<Link to="/#" className="comment-reply">Reply</Link>
															</div>
														</article>{/* /.comment */}
													</li>
												</ul>{/* /.comment-list */}
											</div>{/* /.comment-list-wrap */}
											<div id="respond" className="comment-respond">
												<h4 className="comment-title">Leave a Comment</h4>
												<form id="commentform" className="comment-form" noValidate>
													<fieldset className="name-container">
														<input type="text" id="author" placeholder="Your name" className="tb-my-input" name="author" tabIndex={1} size={32} aria-required="true" />
													</fieldset>
													<fieldset className="email-container">
														<input type="text" id="email" placeholder="Your email" className="tb-my-input" name="email" tabIndex={2} size={32} aria-required="true" />
													</fieldset>
													<fieldset className="message">
														<textarea id="comment-message" name="comment" rows={8} tabIndex={4} defaultValue={"Comment"} />
													</fieldset>
													<p className="check">
														<input type="checkbox" name="vehicle" defaultValue="Boat" defaultChecked />
														<span> Save my name, email, and website in this browser for the next time I
															comment.</span>
													</p>
													<p className="form-submit">
														<input name="submit" type="submit" id="comment-reply" className="submit" defaultValue="Send messenger" />
													</p>
												</form>
											</div>{/* /#respond */}
										</div>{/* /.comment-post */}
									</div>{/* /.post-wrap */}
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
							<div className="widget-tf-blog">
								<div className="tf-title-wrap title-small">
									<h2 className="title-blog wow fadeInUp animated">
										Our Blogs
									</h2>
									<Link to="/blog" className="view-more wow fadeInUp animated">View all
										<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_6718_7111)">
												<path d="M5.25 4.5L12.75 12L5.25 19.5" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M12.75 4.5L20.25 12L12.75 19.5" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
											</g>
										</svg>
									</Link>
								</div>
								<div className="row">
									<div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6 widget-blog-left">
										<article className="entry-widget-blog format-standard wow fadeInLeft animated">
											<div className="feature-post">
												<img src="images/blog/post-widget1.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="/blog-single">Running</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link to="/blog-single">10 Essential Tips for Beginner
													Runners: Start Your
													Running Journey Right</Link>
												</h2>
												<div className="entry-meta">
													<span className="author line"><Link to="/blog-single">by Tony Nguyen </Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
												</div>
												<Link className="more-link" to="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
									</div>
									<div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6 widget-blog-right">
										<article className="entry-item format-standard">
											<div className="feature-post">
												<img src="images/blog/post-widget2.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag wow fadeInUp animated">
													<ul>
														<li><Link to="/blog-single">Race</Link></li>
													</ul>
												</div>
												<h2 className="entry-title wow fadeInUp animated"><Link to="/blog-single">The Science
													Behind Running:
													How It Benefits Your
													Body
													and Mind</Link>
												</h2>
												<div className="entry-meta wow fadeInUp animated">
													<span className="author line">by <Link to="/blog-single">Rae Lil </Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
												</div>
												<Link className="more-link wow fadeInUp animated" to="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<article className="entry-item format-standard">
											<div className="feature-post">
												<img src="images/blog/post-widget3.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag wow fadeInUp animated">
													<ul>
														<li><Link to="/blog-single">Running</Link></li>
													</ul>
												</div>
												<h2 className="entry-title wow fadeInUp animated"><Link to="/blog-single">From Couch to
													5K: A
													Step-by-Step Guide to Becoming a
													Runner</Link>
												</h2>
												<div className="entry-meta wow fadeInUp animated">
													<span className="author line">by <Link to="/blog-single">Michale Chen </Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
												</div>
												<Link className="more-link wow fadeInUp animated" to="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<article className="entry-item format-standard">
											<div className="feature-post">
												<img src="images/blog/post-widget4.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag wow fadeInUp animated">
													<ul>
														<li><Link to="/blog-single">Running</Link></li>
													</ul>
												</div>
												<h2 className="entry-title wow fadeInUp animated"><Link to="/blog-single">The Best
													Running Shoes for
													Every Terrain: Find Your
													Perfect Fit</Link>
												</h2>
												<div className="entry-meta wow fadeInUp animated">
													<span className="author line">by <Link to="/blog-single">Maverick Nguyen</Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2023</Link></span>
												</div>
												<Link className="more-link wow fadeInUp animated" to="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
									</div>
								</div>
							</div>
						</div>{/* /.container */}
					</section>
				</div>

			</Layout>
		</>
	)
}