
import { useState } from "react"
import { Link } from "react-router-dom"
import Countdown from "../elements/Countdown"

export default function Product2() {
	const currentTime = new Date()
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	return (
		<>

			<div className="tf-widget-product-tab">
				<div className="themeflat-container">
					<div className="tf-product-tab">
						<div className="tab-wrap-product title-small">
							<h2 className="title-section wow fadeInUp animated">Our Products</h2>
							<ul className="nav nav-tabs justify-content-end tab-our-product" id="myTab2" role="tablist">
								<li className="nav-item" onClick={() => handleTab(1)}>
									<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="home-tab2" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-controls="home" aria-selected="true">New Arrivals</button>
								</li>
								<li className="nav-item" onClick={() => handleTab(2)}>
									<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="profile-tab2" data-bs-toggle="tab" data-bs-target="#profile2" type="button" role="tab" aria-controls="profile" aria-selected="false">Best
										sellers</button>
								</li>
							</ul>
						</div>
						<div className="tab-content" id="myTabContents">
							<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="home2" role="tabpanel" aria-labelledby="home-tab2">
								<div className="widget-our-product">
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.1s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<div className="sale-percent">-20%</div>
												</div>
												<img className="image-thumnail" src="images/product/5.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												<span className="price-sale">$68.00</span>
												<span className="price-product">$98.00</span>
											</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.3s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<div className="sale-percent">-20%</div>
												</div>
												<img className="image-thumnail" src="images/product/6.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<div className="count-down relative">
												<div className="featured-countdown">
													<Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												<span className="price-sale">$68.00</span>
												<span className="price-product">$98.00</span>
											</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.5s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<span className="label-new">NEW</span>
												</div>
												<img className="image-thumnail" src="images/product/7.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												<span className="price-sale">$68.00</span>
												<span className="price-product">$98.00</span>
											</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.7s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<span className="label-new">NEW</span>
													<div className="sale-percent">-20%</div>
												</div>
												<img className="image-thumnail" src="images/product/8.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												<span className="price-sale">$68.00</span>
												<span className="price-product">$98.00</span>
											</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.1s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<span className="label-new">NEW</span>
												</div>
												<img className="image-thumnail" src="images/product/9.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">$68.00</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.3s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<span className="label-new">NEW</span>
												</div>
												<img className="image-thumnail" src="images/product/10.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">$68.00
											</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.5s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<div className="sale-percent">-20%</div>
												</div>
												<img className="image-thumnail" src="images/product/11.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												<span className="price-sale">$68.00</span>
												<span className="price-product">$98.00</span>
											</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.7s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<span className="label-new">NEW</span>
												</div>
												<img className="image-thumnail" src="images/product/12.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												$68.00
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} role="tabpanel" aria-labelledby="profile-tab2">
								<div className="widget-our-product">
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.1s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<div className="sale-percent">-20%</div>
												</div>
												<img className="image-thumnail" src="images/product/5.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												<span className="price-sale">$68.00</span>
												<span className="price-product">$98.00</span>
											</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.3s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<div className="sale-percent">-20%</div>
												</div>
												<img className="image-thumnail" src="images/product/6.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<div className="count-down relative">
												<div className="featured-countdown">
													<Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												<span className="price-sale">$68.00</span>
												<span className="price-product">$98.00</span>
											</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.5s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<span className="label-new">NEW</span>
												</div>
												<img className="image-thumnail" src="images/product/7.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												<span className="price-sale">$68.00</span>
												<span className="price-product">$98.00</span>
											</div>
										</div>
									</div>
									<div className="our-product-item wow fadeInUp animated" data-wow-delay="0.7s">
										<div className="featured-product">
											<Link to="/#" className="product-thumnail">
												<div className="label-product">
													<span className="label-new">NEW</span>
													<div className="sale-percent">-20%</div>
												</div>
												<img className="image-thumnail" src="images/product/8.png" alt="Image Product" />
											</Link>
											<div className="wrap-btn-action">
												<div className="tf-btn-wishlish">
													<span className="btn-action">
														<i className="icon-Vector2" />
													</span>
													<div className="label">Add to wish list</div>
												</div>
												<div className="tf-btn-compare">
													<span className="btn-action">
														<i className="icon-Repeat" />
													</span>
													<div className="label">Compare</div>
												</div>
												<div className="tf-btn-quickview">
													<span className="btn-action">
														<i className="icon-Eye" />
													</span>
													<div className="label">Quick View</div>
												</div>
											</div>
											<Link to="/#" className="btn-add-cart">Add To Card</Link>
										</div>
										<div className="product-content">
											<Link to="/#">
												<h3 className="product-title">BROOKS GHOST 15 - WOMEN'S</h3>
											</Link>
											<div className="star-review">
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M2.64341 7.16511L0.530896 5.41633C0.132176 5.09747 0.307053 4.45625 0.813031 4.38397L3.80926 4.25048L5.08878 1.04264C5.17797 0.864851 5.35926 0.75293 5.55803 0.75293C5.75681 0.75293 5.9381 0.865434 6.02729 1.04264L7.30681 4.25048L10.303 4.38397C10.809 4.45625 10.9839 5.09747 10.5852 5.41633L8.47266 7.16511L9.04917 10.5793C9.11562 11.0451 8.63179 11.3936 8.21151 11.1832L5.55803 9.49681L2.90456 11.1826C2.48369 11.3931 2.00045 11.0445 2.0669 10.5787L2.64341 7.16511Z" fill="#ECB018" />
												</svg>
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M3.10826 7.16511L0.99574 5.41633C0.597019 5.09747 0.771897 4.45625 1.27787 4.38397L4.27411 4.25048L5.55362 1.04264C5.64281 0.864851 5.8241 0.75293 6.02288 0.75293C6.22166 0.75293 6.40295 0.865434 6.49213 1.04264L7.77165 4.25048L10.7679 4.38397C11.2739 4.45625 11.4487 5.09747 11.05 5.41633L8.9375 7.16511L9.51401 10.5793C9.58047 11.0451 9.09664 11.3936 8.67635 11.1832L6.02288 9.49681L3.36941 11.1826C2.94854 11.3931 2.46529 11.0445 2.53175 10.5787L3.10826 7.16511Z" fill="#E9E9E9" />
												</svg>
												<span className="review">(1.234 reviews)</span>
											</div>
											<div className="price">
												<span className="price-sale">$68.00</span>
												<span className="price-product">$98.00</span>
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
