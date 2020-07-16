module.exports = (createTypes) => {
  createTypes(`
    type Experiences implements Node {
      id: String!
      experience_id: String!
      company_name: String!
      company_url: String!
      title: String!
      description: String!
      languages: [String!]!
      frameworks: [String!]!
      started_at: Date!
      finished_at: Date
      created_at: Date!
      updated_at: Date!
    }    
  `)
}
