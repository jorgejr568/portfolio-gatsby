const api = require('../consumers/api')
const fetchLinks = () => api.get('/links');

module.exports = async (createNode, createNodeId, createContentDigest) => {
  console.log('Fetching links...');

  const {
    data: { data: links },
  } = await fetchLinks();

  links.forEach((link) => {
    createNode({
      id: createNodeId(`Links-${link.id}`),
      link_id: link.id,
      parent: null,
      children: [],
      internal: {
        type: `Links`,
        contentDigest: `links_${createContentDigest(link)}`,
      },
      ...link.attributes,
    });

    return links;
  });
};
