import { useStaticQuery, graphql } from "gatsby"

const useCurriculumLink = () => {
  const {allLinks: {nodes: [curriculum_link]}} = useStaticQuery(graphql`
  query {
    allLinks(filter: {link_id: {eq: "curriculum"}}) {
      nodes {
        id
        link_id
        link
      }
    }
  }
`)

  const { link } = curriculum_link
  return link
}

export default useCurriculumLink
