/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const createLinksSchema = require('./.gatsby/schema-creators/Links')
const createLinksNodes = require('./.gatsby/node-creators/Links')

const createExperiencesSchema = require('./.gatsby/schema-creators/Experiences')
const createExperiencesNodes = require('./.gatsby/node-creators/Experiences')

const createEducationsSchema = require('./.gatsby/schema-creators/Educations')
const createEducationsNodes = require('./.gatsby/node-creators/Educations')


exports.createSchemaCustomization = ({ actions: {createTypes}}) => {
  createLinksSchema(createTypes);
  createExperiencesSchema(createTypes);
  createEducationsSchema(createTypes);
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  await createLinksNodes(createNode, createNodeId, createContentDigest)
  await createExperiencesNodes(createNode, createNodeId, createContentDigest)
  await createEducationsNodes(createNode, createNodeId, createContentDigest)
}
