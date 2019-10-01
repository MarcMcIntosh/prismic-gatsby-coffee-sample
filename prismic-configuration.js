require('dotenv').config();

module.exports = {
  apiEndpoint: 'https://prismic-gatsby-coffee.prismic.io/graphql',
  accessToken: process.env.TOKEN,
};