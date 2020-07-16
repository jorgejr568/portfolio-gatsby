import { useStaticQuery, graphql } from "gatsby"

const useGithubLink = () => {
  const {allLinks: {nodes: [github_link]}} = useStaticQuery(graphql`
  query {
    allLinks(filter: {link_id: {eq: "github"}}) {
      nodes {
        id
        link_id
        link
      }
    }
  }
`)

  const { link } = github_link
  return link
}

export default useGithubLink
