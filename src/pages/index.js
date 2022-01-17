import * as React from "react"
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostObject from "../components/PostListObject";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const mockPost = {
    fields: {
      slug: "/salad-recipe"
    },
    frontmatter: {
      date: "January 01, 2022",
      description: "The surefire way to make an amazing salad",
      title: "A recipe for the best salad!"
    }
  }
  return (
    <Layout location={location} title="Fran's food blog" className="min-h-screen" >
      <Seo title="All posts" />
      <div className="container mx-auto px-2">
        <ol style={{ listStyle: `none` }}>
          {
            posts.map(post => (
            <PostObject post={post} isBlog="true"/>
          ))}
          {
           // <PostObject post={mockPost}/>
          }
        </ol>
      </div>
      <Bio mainPage="true"/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
