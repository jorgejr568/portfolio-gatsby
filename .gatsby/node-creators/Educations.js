const api = require('../consumers/api')
const fetchEducations = () => api.get('/educations');

module.exports = async (createNode, createNodeId, createContentDigest) => {
  console.log('Fetching educations...');

  const {
    data: { data: educations },
  } = await fetchEducations();

  educations.forEach((education) => {
    createNode({
      id: createNodeId(`Educations-${education.id}`),
      education_id: education.id,
      parent: null,
      children: [],
      internal: {
        type: `Educations`,
        contentDigest: `educations_${createContentDigest(education)}`,
      },
      ...education.attributes,
    });

    return educations;
  });
};
