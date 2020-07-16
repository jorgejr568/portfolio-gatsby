import { useStaticQuery, graphql } from "gatsby"

const useSkills = () => {
  const {allSkills: {group: skills}} = useStaticQuery(graphql`
    query {
        allSkills(sort: {fields: level, order: DESC}) {
            group(field: category_id) {
                nodes {
                    id
                    category_name
                    title
                    level
                }
            }
        }
    }
  `)

  return skills.map(({nodes}) => nodes)
}

export default useSkills
