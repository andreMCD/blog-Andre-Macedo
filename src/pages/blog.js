import React from "react"

import PostItem from "../components/PostItem"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="blog" />
    <PostItem
      border="#00f911"
      slug="/about/"
      title="Título do Post"
      date="30 de Julho de 2019"
      timeToRead="7"
      description="Essa é uma pequena descrição do post."
    />
  </Layout>
)

export default BlogPage
