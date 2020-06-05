import React from "react"
import {Link} from "gatsby"
import {Layout} from "../components/layout"
import Image from "../components/image"
import {SEO} from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <h1>Hello</h1>
        <p>Welcome to this Gatsby site.</p>
        <p>Now you can build something great using Gatsby with TypeScript.</p>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <Image/>
        </div>
        <Link to="/page-2/">Next Page</Link> <br/>
        <Link to="/using-typescript/">This starter app uses TypeScript"</Link>
    </Layout>
)

export default IndexPage
