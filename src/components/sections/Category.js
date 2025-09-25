
import { Link } from "react-router-dom"

export default function Category() {
	return (
		<>

			<div className="tf-widget-category-product main-content">
				<div className="themeflat-container">
					<div className="tf-category-product">
						<div className="title-box title-medium center-title-box">
							<h2 className="title-section wow fadeInUp animated">Shop by category</h2>
						</div>
						<div className="tf-product-category style2 columns-5">
							<div className="product-category wow fadeInUp animated" data-wow-delay="0.1s">
								<div className="inner">
									<Link to="/#">
										<div className="category-thumbnail">
											<img src="images/product/categories.png" className="img-thumbnail" alt="image" />
										</div>
									</Link>
									<h5 className="category-title">
										<Link to="/#">running shoes(54)</Link>
									</h5>
								</div>
							</div>
							<div className="product-category wow fadeInUp animated" data-wow-delay="0.3s">
								<div className="inner">
									<Link to="/#">
										<div className="category-thumbnail">
											<img src="images/product/categories1.png" className="img-thumbnail" alt="image" />
										</div>
									</Link>
									<h5 className="category-title">
										<Link to="/#">running clothes (40)</Link>
									</h5>
								</div>
							</div>
							<div className="product-category wow fadeInUp animated" data-wow-delay="0.5s">
								<div className="inner">
									<Link to="/#">
										<div className="category-thumbnail">
											<img src="images/product/categories2.png" className="img-thumbnail" alt="image" />
										</div>
									</Link>
									<h5 className="category-title">
										<Link to="/#">running watch (16)</Link>
									</h5>
								</div>
							</div>
							<div className="product-category wow fadeInUp animated" data-wow-delay="0.7s">
								<div className="inner">
									<Link to="/#">
										<div className="category-thumbnail">
											<img src="images/product/categories3.png" className="img-thumbnail" alt="image" />
										</div>
									</Link>
									<h5 className="category-title">
										<Link to="/#">accessory (22)</Link>
									</h5>
								</div>
							</div>
							<div className="product-category wow fadeInUp animated" data-wow-delay="0.9s">
								<div className="inner">
									<Link to="/#">
										<div className="category-thumbnail">
											<img src="images/product/categories4.png" className="img-thumbnail" alt="image" />
										</div>
									</Link>
									<h5 className="category-title">
										<Link to="/#">nutritional food (17)</Link>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
