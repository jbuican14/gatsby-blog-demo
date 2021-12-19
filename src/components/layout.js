/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"

const Layout = props => {
  const rootPath = `${__PATH_PREFIX__}/`
  // console.log(props, rootPath, props.children.length)
  let header
  if (props.children._owner) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{props.children._owner.key}</Link>
      </h1>
    )
    // console.log(props.children._owner.key)
  } else {
    header = (
      <Link className="header-link-home" to="/">
        Welcome to ... my blog
      </Link>
    )
  }
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  // console.log("location", location, title, rootPath)

  return (
    <>
      <header>{header}</header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{props.children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
