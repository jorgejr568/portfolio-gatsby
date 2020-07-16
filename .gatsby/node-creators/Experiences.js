const api = require('../consumers/api')
const fetchExperiences = () => api.get('/experiences');

module.exports = async (createNode, createNodeId, createContentDigest) => {
  console.log('Fetching experiences...');

  const {
    data: { data: experiences },
  } = await fetchExperiences();

  experiences.forEach((experience) => {
    createNode({
      id: createNodeId(`Experiences-${experience.id}`),
      experience_id: experience.id,
      parent: null,
      children: [],
      internal: {
        type: `Experiences`,
        contentDigest: `experiences_${createContentDigest(experience)}`,
      },
      ...experience.attributes,
    });

    return experiences;
  });
};
