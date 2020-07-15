import { useStaticQuery, graphql } from "gatsby"

const useGithubLink = () => {
  const {allLinks: {nodes: [github_link]}} = useStaticQuery(graphql`
  query {
    allLinks(filter: {linkId: {eq: "github"}}) {
      nodes {
        id
        linkId
        link
      }
    }
  }
`)

  const { link } = github_link
  return link
}

export default useGithubLink
