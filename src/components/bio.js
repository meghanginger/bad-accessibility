import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = ({mainPage}) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <div className={`${mainPage ? "bg-light_blue":"bg-dark_blue"}`}> 
      <div className={`bio flex items-center container mx-auto py-2`}>
        <StaticImage
          className="bio-avatar m-2"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Picture of my face"
        />
        {author?.name && (
          <p className="align-center">
            Written by <strong>{author.name}</strong> {author?.summary || null}
            {` `}
            <a href="https://www.instagram.com/francis_bourgeois43/?hl=en">
              You should follow them on Instagram
            </a>
          </p>
        )}
      </div>
    </div>
    
  )
}

export default Bio;
