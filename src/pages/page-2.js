import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {SEO} from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi</h1>
    <p>You are on page 2</p>
    <Link to="/">Back to homepage</Link>
  </Layout>
)

export default SecondPage
