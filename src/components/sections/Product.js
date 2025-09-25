
import { Link } from "react-router-dom"

export default function Product() {
	return (
		<>

			<div className="tf-widget-product main-content background-grey">
				<div className="themeflat-container">
					<div className="tf-product">
						{/* header style v2 */}
						<div className="title-box-v2 title-large center-title-box">
							<h2 className="title-section wow fadeInUp animated">Product</h2>
						</div>{/* header style v2 */}
						<div className="row">
							<div className="col-12 col-sm-6 col-md-6 col-lg-3">
								<div className="product-item-v1 wow fadeInUp animated" data-wow-delay="0.1s">
									<div className="product-image">
										<img src="images/product/1.jpg" alt="" />
									</div>
									<div className="product-content">
										<h6 className="title-product"><Link to="/#">Basic fuseau leggings</Link></h6>
										<div className="category-product"><Link to="/#">Glurmarket</Link></div>
										<div className="price">$68.00</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-6 col-lg-3">
								<div className="product-item-v1 wow fadeInUp animated" data-wow-delay="0.3s">
									<div className="product-image">
										<img src="images/product/2.jpg" alt="" />
									</div>
									<div className="product-content">
										<h6 className="title-product"><Link to="/#">running pant</Link></h6>
										<span className="category-product"><Link to="/#">Glurmarket</Link></span>
										<div className="price">
											<span className="price-sale">$68.00</span>
											<span className="price-product">$98.00</span>
											<span className="percent-sale">-25%</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-6 col-lg-3">
								<div className="product-item-v1 wow fadeInUp animated" data-wow-delay="0.5s">
									<div className="product-image">
										<img src="images/product/3.jpg" alt="" />
									</div>
									<div className="product-content">
										<h6 className="title-product"><Link to="/#">Basic fuseau leggings</Link></h6>
										<span className="category-product"><Link to="/#">Glurmarket</Link></span>
										<span className="price">$68.00</span>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-6 col-lg-3">
								<div className="product-item-v1 wow fadeInUp animated" data-wow-delay="0.7s">
									<div className="product-image">
										<img src="images/product/4.jpg" alt="" />
									</div>
									<div className="product-content">
										<h6 className="title-product"><Link to="/#">Basic fuseau leggings</Link></h6>
										<span className="category-product"><Link to="/#">Glurmarket</Link></span>
										<span className="price">$68.00</span>
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
