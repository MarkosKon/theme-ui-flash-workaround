/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>
      Welcome to your new, <strong>strong Gatsby site.</strong>
    </p>
    <p>
      <i>Now go build something italic.</i>
    </p>
    <p>
      <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit.
      Quisquam libero quis odit fuga molestias laudantium ut eaque? Vel
      inventore cupiditate odit iusto quisquam, dolor, nemo aliquid nam veniam
      mollitia numquam, tempora perferendis fuga? Quaerat, incidunt! Molestiae a
      aperiam laborum consequuntur?
    </p>
    <Link sx={{ color: "primary" }} to="/page-2/">
      Go to page 2
    </Link>
  </Layout>
)

export default IndexPage
