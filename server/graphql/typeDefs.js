const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type Contest {
    id: ID!
    slug: String!
    title: String!
    body: String!
    prizes: [String]!
    participants: [String]!
    entries: [String]!
    header: String!
    isFeatured: Boolean!
    createdBy: User!
    createdAt: String!
  }
  input ContestInput {
    slug: String!
    title: String!
    body: String!
    header: String!
    prizes: [String]!
    isFeatured: Boolean!
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
    getContests: [Contest]
    getContest(contestId: String!): Contest
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    registerUserAddress(address: String!): User!
    updateUserProfile(userProfileInput: UserProfileInput!): User!
    createContest(contestInput: ContestInput!): Contest!
    deleteContest(contestId: ID!): String!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;
