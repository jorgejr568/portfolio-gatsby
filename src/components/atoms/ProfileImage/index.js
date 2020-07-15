import React from "react"
import GatsbyImage from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function ProfileImage() {
  const {placeholderImage: {childImageSharp: {fluid: image}}} = useStaticQuery(graphql`
      query {
          placeholderImage: file(relativePath: { eq: "profile.jpeg" }) {
              childImageSharp {
                  fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
          }
      }
  `)

  return <GatsbyImage fluid={image} />
}

export default ProfileImage
