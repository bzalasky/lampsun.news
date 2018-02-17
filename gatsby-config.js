module.exports = {
  siteMetadata: {
    title: 'The Lamp & Sun',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'eoqx8x6kkxhz',
        accessToken: '37d4f4e649a0da69ec866f611f6a737873a63bc7e264bd3b18c1e2c8ce4dea3a',
      },
    },
  ],
};
