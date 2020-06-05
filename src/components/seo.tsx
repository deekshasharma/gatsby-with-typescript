import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {Helmet} from "react-helmet";

type seoProps = {
    description?: string,
    title: string,
}

export const SEO = ({description, title}: seoProps, {lang = "en", meta = []}) => {
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
    return <Helmet htmlAttributes={{lang}}
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
                   ].concat(meta)}
    />

}