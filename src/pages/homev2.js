

import Layout from "../components/layout/Layout"
import About2 from "../components/sections/About2"
import Benefit2 from "../components/sections/Benefit2"
import Counter from "../components/sections/Counter"
import Course2 from "../components/sections/Course2"
import Event2 from "../components/sections/Event2"
import Form2 from "../components/sections/Form2"
import Img from "../components/sections/Img"
import Product from "../components/sections/Product"
import Slider2 from "../components/sections/Slider2"
import Team2 from "../components/sections/Team2"
import Testimonial2 from "../components/sections/Testimonial2"
export default function Homev2() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<Slider2 />
				<Counter />
				<About2 />
				<Img />
				<Benefit2 />
				<Event2 />
				<Course2 />
				<Product />
				<Testimonial2 />
				<Team2 />
				<Form2 />
				<div className="graphic-form background-green" />

			</Layout>
		</>
	)
}