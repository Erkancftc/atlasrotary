
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
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
			slidesPerView: 3,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 6,
			spaceBetween: 30,
		},
	}
}

export default function Partner() {
	return (
		<>

			<div className="tf-widget-partner background-black">
				<div className="themeflat-container">
					<div className="tf-partner">
						<Swiper {...swiperOptions} className="sologan-logo">
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/5.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/2.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/3.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/4.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/6.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/1.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/5.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/2.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/3.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/4.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/6.png" alt="image logo" />
							</SwiperSlide>
							<SwiperSlide>
								<img className="image-logo" src="images/retinal/1.png" alt="image logo" />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</>
	)
}
