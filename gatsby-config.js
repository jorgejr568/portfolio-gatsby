require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Jorge Junior.`,
    description: `I am a full-stack developer with more than 5 years of experience in web development and
          infrastructure. I worked in many applications using PHP as the main technology, but I am always
          willing and in fact even more motivated to work with other languages. I have solid knowledge in
          functional programming, OOP, DevOps, PHP and Javascript (Vue and React). I am interested in
          learning
          technologies, best development practices, TDD and multi-platform development.`,
    author: 'Jorge Junior <jorge.junior.568@live.com> @jorgejr568',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jorge Junior.`,
        short_name: `JJ.`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#222222`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
