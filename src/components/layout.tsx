import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Header from "./header";
import "./layout.css"


type LayoutProps = {
    children: any;
}
export const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    return <>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.0875rem 1.45rem`,
            }}
        >
            <main>{children}</main>
            <footer> Made by {` `}
                <a href={"https://bonsaiilabs.com"}> Bonsaiilabs </a>
                using <a href="https://github.com/gatsbyjs/gatsby-starter-default">Gatsby Starter</a>
            </footer>
        </div>
    </>
}
