import { useStaticQuery, graphql } from "gatsby"

const useCurriculumLink = () => {
  const {allLinks: {nodes: [curriculum_link]}} = useStaticQuery(graphql`
  query {
    allLinks(filter: {linkId: {eq: "curriculum"}}) {
      nodes {
        id
        linkId
        link
      }
    }
  }
`)

  const { link } = curriculum_link
  return link
}

export default useCurriculumLink
