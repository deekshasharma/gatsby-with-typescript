// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Link} from "gatsby"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react"

type defaultProps = {
    siteTitle: string
}
const Header = ({siteTitle}: defaultProps) => (
    <header
        style={{
            background: `#3640FF`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

export default Header
