import { useStaticQuery, graphql } from "gatsby"

const useLinkedinLink = () => {
  const {allLinks: {nodes: [linkedin_link]}} = useStaticQuery(graphql`
  query {
    allLinks(filter: {linkId: {eq: "linkedin"}}) {
      nodes {
        id
        linkId
        link
      }
    }
  }
`)

  const { link } = linkedin_link
  return link
}

export default useLinkedinLink
