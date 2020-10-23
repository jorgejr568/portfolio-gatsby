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

const createSkillsSchema = require('./.gatsby/schema-creators/Skills')
const createSkillsNodes = require('./.gatsby/node-creators/Skills')

const path = require('path')
const projects = require('./src/data/projects')

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createLinksSchema(createTypes)
  createExperiencesSchema(createTypes)
  createEducationsSchema(createTypes)
  createSkillsSchema(createTypes)
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  await createLinksNodes(createNode, createNodeId, createContentDigest)
  await createExperiencesNodes(createNode, createNodeId, createContentDigest)
  await createEducationsNodes(createNode, createNodeId, createContentDigest)
  await createSkillsNodes(createNode, createNodeId, createContentDigest)
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  return projects.map(project => {
    return createPage({
      path: `/portfolio/${project.slug}`,
      component: path.resolve(
        './src/components/ecosystems/PortfolioProject/index.js'
      ),
      context: {
        project,
      },
    })
  })
}
