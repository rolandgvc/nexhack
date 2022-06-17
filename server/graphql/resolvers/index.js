const usersResolvers = require("./users");
const nftsResolvers = require("./nfts");

module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...nftsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...nftsResolvers.Mutation,
  },
};
