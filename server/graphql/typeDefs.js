const { gql } = require("apollo-server");

module.exports = gql`
  type NFT {
    id: ID!
    image: String!
    title: String!
    description: String!
    addresses: [String]!
    shares: [String]!
    timestamp: String!
  }
  input NFTInput {
    image: String!
    title: String!
    description: String!
    addresses: [String]!
    shares: [String]!
    timestamp: String!
  }
  type User {
    id: ID!
    address: String!
    avatar: String!
    username: String!
    name: String!
    bio: String!
    email: String!
    createdAt: String!
  }
  input UserProfileInput {
    address: String!
    avatar: String!
    username: String!
    name: String!
    bio: String!
  }
  type Query {
    getUserByAddress(address: String!): User
    getUserByUsername(username: String!): User
    getNFTs: [NFT]
    getNFT(nftId: String!): NFT
  }
  type Mutation {
    registerUserAddress(address: String!): User!
    updateUserProfile(userProfileInput: UserProfileInput!): User!
    createNFT(nftInput: NFTInput!): NFT!
  }
`;
