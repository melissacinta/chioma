import * as contentful from 'contentful';
const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const getProjects = () =>
  client
    .getEntries({ content_type: 'portfolioProject' })
    .then((response) => response.items);

const getSingleProject = (slug) =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'portfolioProject',
    })
    .then((response) => response?.items[0]?.fields);

export { getProjects, getSingleProject };
