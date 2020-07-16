import { useStaticQuery, graphql } from "gatsby"

const useEducations = () => {
  const {allEducations: {nodes: educations }} = useStaticQuery(graphql`
    query {
        allEducations(sort: {fields: finished_at, order: DESC}) {
            nodes {
                id
                title
                institution_name
                institution_url
                finished_at(formatString: "YYYY", locale: "pt-BR")
                started_at(formatString: "YYYY", locale: "pt-BR")
            }
        }
    }
  `)

  return educations
}

export default useEducations
