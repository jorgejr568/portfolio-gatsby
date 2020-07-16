module.exports = (createTypes) => {
  createTypes(`
    type Links implements Node {
      id: String!
      link_id: String!
      link: String!
      created_at: String!
      updated_at: String!
    }    
  `)
}
