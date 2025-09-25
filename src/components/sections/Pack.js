
import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Countdown from "../elements/Countdown"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.h1n',
		prevEl: '.h1p',
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	}
}

export default function Pack() {
	const currentTime = new Date()
	return (
		<>

			<div className="tf-widget-pack-product">
				<div className="row">
					<div className="col-md-6 pd-form">
						<div className="tf-pack-image">
							<img src="images/product/pack.jpg" alt="Image Pack" />
							<div className="dot-content pack-1">
								<div className="dot tf-dot-active">
									<Link to="/#" className="content">
										<span>BROOKS GHOST 15</span>
										<div className="price">
											<span className="price-sale">$68.00</span>
											<span className="price-product">$98.00</span>
										</div>
									</Link>
								</div>
							</div>
							<div className="dot-content pack-2">
								<div className="dot">
									<Link to="/#" className="content">
										<span>BROOKS GHOST 15</span>
										<div className="price">
											<span className="price-sale">$68.00</span>
											<span className="price-product">$98.00</span>
										</div>
									</Link>
								</div>
							</div>
							<div className="dot-content pack-3">
								<div className="dot">
									<Link to="/#" className="content">
										<span>BROOKS GHOST 15</span>
										<div className="price">
											<span className="price-sale">$68.00</span>
											<span className="price-product">$98.00</span>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 pd-form">
						<div className="tf-pack-product">
							<div className="title-box title-small center-title-box">
								<h2 className="title-section wow fadeInUp animated">Running Sets</h2>
							</div>
							<Swiper {...swiperOptions} className="owl-themes owl-carousel wow fadeInUp animated">
								<SwiperSlide className="our-product-item">
									<div className="featured-product">
										<Link to="/#" className="product-thumnail">
											<div className="label-product">
												<div className="sale-percent">-20%</div>
											</div>
											<img className="image-thumnail" src="images/product/13.png" alt="Image Product" />
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
								</SwiperSlide>
								<SwiperSlide className="our-product-item">
									<div className="featured-product">
										<Link to="/#" className="product-thumnail">
											<div className="label-product">
												<span className="label-new">NEW</span>
											</div>
											<img className="image-thumnail" src="images/product/14.png" alt="Image Product" />
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
								</SwiperSlide>
								<SwiperSlide className="our-product-item">
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
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
