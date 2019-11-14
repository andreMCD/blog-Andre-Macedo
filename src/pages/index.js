import React from "react"

// Imports Components 
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile/>
  </Layout>
)

export default IndexPage
