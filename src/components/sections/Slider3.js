
import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
}

export default function Slider3() {
	return (
		<>

			<div className="tf-widget-slider-v2">
				<div className="themeflat-container">
					<div className="row">
						<div className="col-md-8 pd-r-slider">
							<Swiper {...swiperOptions} className="swiper tf-slider-product wow fadeInLeft animated" data-wow-delay="0.3s">
								<div className="slide-product-wrap swiper-wrapper">
									<SwiperSlide className="slide-product-item swiper-slide">
										<div className="product-image">
											<img src="images/slides/slidev1.jpg" alt="" />
										</div>
										<div className="product-content">
											<div className="content-slide">
												<span className="sale-up">Up To 15% Sale Off</span>
												<h2>Looking For Running Shoes</h2>
												<p className="post">We Help You Finding To Right Shoes</p>
												<Link to="/#" className="flat-button">Shop Now</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="slide-product-item swiper-slide">
										<div className="product-image">
											<img src="images/slides/slidev2.jpg" alt="" />
										</div>
										<div className="product-content">
											<div className="content-slide">
												<span className="sale-up">Up To 15% Sale Off</span>
												<h2>Looking For Running Shoes</h2>
												<p className="post">We Help You Finding To Right Shoes</p>
												<Link to="/#" className="flat-button">Shop Now</Link>
											</div>
										</div>
									</SwiperSlide>
								</div>
								<div className="swiper-pagination" />
							</Swiper>
						</div>
						<div className="col-md-4 pd-l-banner">
							<div className="tf-banner-product wow fadeInRight animated" data-wow-delay="0.5s">
								<div className="banner-product-wrap">
									<div className="banner-product-item">
										<div className="product-image">
											<img src="images/slides/bannerv1.jpg" alt="Image banner" />
										</div>
										<div className="product-content">
											<div className="content-banner">
												<span className="sale-up">Save $10</span>
												<h4><Link to="/#">Launches &amp; New Arrivals</Link></h4>
												<div className="price">Starting at <span>$59.99</span></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tf-banner-product wow fadeInRight animated" data-wow-delay="0.10s">
								<div className="banner-product-wrap">
									<div className="banner-product-item">
										<div className="product-image">
											<img src="images/slides/bannerv2.jpg" alt="Image banner" />
										</div>
										<div className="product-content">
											<div className="content-banner">
												<span className="sale-up">Save $10</span>
												<h4><Link to="/#">Explore Fitness Accessories</Link></h4>
												<div className="price">Starting at <span>$59.99</span></div>
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
