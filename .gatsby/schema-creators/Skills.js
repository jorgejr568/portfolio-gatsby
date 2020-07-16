module.exports = (createTypes) => {
  createTypes(`
    type Skills implements Node {
      id: String!
      skill_id: String!
      title: String!
      category_id: String!
      category_name: String!
      created_at: String!
      updated_at: String!
    }    
  `)
}
