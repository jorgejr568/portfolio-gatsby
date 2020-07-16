module.exports = (createTypes) => {
  createTypes(`
    type Educations implements Node {
      id: String!
      education_id: String!
      institution_name: String!
      institution_url: String!
      title: String!
      started_at: Date!
      finished_at: Date
      created_at: String!
      updated_at: String!
    }    
  `)
}
