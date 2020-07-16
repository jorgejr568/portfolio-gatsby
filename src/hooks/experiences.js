import { useStaticQuery, graphql } from "gatsby"

const useExperiences = () => {
  const {allExperiences: {nodes: experiences }} = useStaticQuery(graphql`
    query {
        allExperiences(sort: {order: DESC, fields: finished_at}) {
            nodes {
                id
                company_name
                company_url
                title
                description
                languages
                frameworks
                started_at(formatString: "YYYY", locale: "pt-br")
                finished_at(formatString: "YYYY", locale: "pt-br")
            }
        }
    }
  `)

  return experiences
}

export default useExperiences
