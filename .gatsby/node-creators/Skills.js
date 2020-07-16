const api = require('../consumers/api')
const fetchSkills = () => api.get('/skills');

module.exports = async (createNode, createNodeId, createContentDigest) => {
  console.log('Fetching skills...');

  const {
    data: { data: skills },
  } = await fetchSkills();

  skills.forEach((skill) => {
    createNode({
      id: createNodeId(`Skills-${skill.id}`),
      skill_id: skill.id,
      parent: null,
      children: [],
      internal: {
        type: `Skills`,
        contentDigest: `skills_${createContentDigest(skill)}`,
      },
      ...skill.attributes,
    });

    return skills;
  });
};
