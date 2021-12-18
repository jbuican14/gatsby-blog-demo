import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
  & {
    background: transparent;
  }
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #18a6d5;
`

const IndexPage = ({ data }) => {
  console.log(data, data.allMarkdownRemark)
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Demo Blogs</h1>
        <h4>Number of Blog :: {data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} -{node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p>{node.frontmatter.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`
