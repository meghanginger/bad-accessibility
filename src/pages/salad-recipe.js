import * as React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SaladRecipe = ({ data, location }) => {
  const post = "post"
  const siteTitle = "A recipe for the best salad!"
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={siteTitle}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post container mx-auto my-8 px-4"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{siteTitle}</h1>
          <p>the date</p>
        </header>
        
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
      </article>
      <footer>
          <Bio />
      </footer>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default SaladRecipe;
