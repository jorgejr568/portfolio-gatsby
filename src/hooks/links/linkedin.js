import { useStaticQuery, graphql } from "gatsby"

const useLinkedinLink = () => {
  const {allLinks: {nodes: [linkedin_link]}} = useStaticQuery(graphql`
  query {
    allLinks(filter: {link_id: {eq: "linkedin"}}) {
      nodes {
        id
        link_id
        link
      }
    }
  }
`)

  const { link } = linkedin_link
  return link
}

export default useLinkedinLink
