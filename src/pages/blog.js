import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PostItem from "../components/PostItem"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              border
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="blog" />
      {postList.map(
        ({
          node: {
            frontmatter: { border, title, date, description },
            timeToRead,
            fields: { slug }
          },
        }) => (
          <PostItem
            border={border}
            slug={slug}
            title={title}
            date={date}
            timeToRead={timeToRead}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default BlogPage
