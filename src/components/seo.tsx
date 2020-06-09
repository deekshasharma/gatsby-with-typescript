import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {Helmet} from "react-helmet";

interface HelmetProps {
    description?: string,
    title: string,
    lang?: string,
    meta?: Array<any>
}


export const SEO: React.FC<HelmetProps> = ({description, title, lang, meta}: HelmetProps) => {
    const {site} = useStaticQuery(
        graphql`
            query{
                site {
                    siteMetadata {
                        description
                        title
                    }
                }
            }
        `
    )
    const metaDescription = description || site.siteMetadata.description;
    const language = lang || "en";
    const metaTag = meta || [];
    return <Helmet htmlAttributes={{language}}
                   title={title}
                   titleTemplate={`%s | ${site.siteMetadata.title}`}
                   meta={[
                       {
                           name: `description`,
                           content: metaDescription,
                       },
                       {
                           property: `og:title`,
                           content: title,
                       },
                       {
                           property: `og:description`,
                           content: metaDescription,
                       },
                       {
                           property: `og:type`,
                           content: `website`,
                       },
                       {
                           name: `twitter:card`,
                           content: `summary`,
                       },
                       {
                           name: `twitter:creator`,
                           content: site.siteMetadata.author,
                       },
                       {
                           name: `twitter:title`,
                           content: title,
                       },
                       {
                           name: `twitter:description`,
                           content: metaDescription,
                       },
                   ].concat(metaTag)}
    />

}