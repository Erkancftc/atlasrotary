

import Layout from "../components/layout/Layout"
import Benefit3 from "../components/sections/Benefit3"
import Category from "../components/sections/Category"
import Instagram from "../components/sections/Instagram"
import Our from "../components/sections/Our"
import Pack from "../components/sections/Pack"
import Product2 from "../components/sections/Product2"
import Slider3 from "../components/sections/Slider3"
import Vlog from "../components/sections/Vlog"
export default function Homev3() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2} breadcrumbTitle="title" backAlt={true}>
				<Slider3 />
				<Category />
				<Product2 />
				<Our />
				<Pack />
				<div className="graphic-h3" />
				<Vlog />
				<Benefit3 />
				<Instagram />
			</Layout>
		</>
	)
}