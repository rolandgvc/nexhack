import {
  ApolloClient,
  QueryOptions,
  SubscriptionOptions,
  MutationOptions,
} from "@apollo/client";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: "Comment";
  body: Scalars["String"];
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  username: Scalars["String"];
};

export type Contest = {
  __typename?: "Contest";
  body: Scalars["String"];
  createdAt: Scalars["String"];
  createdBy: User;
  entries: Array<Maybe<Scalars["String"]>>;
  header: Scalars["String"];
  id: Scalars["ID"];
  isFeatured: Scalars["Boolean"];
  participants: Array<Maybe<Scalars["String"]>>;
  prizes: Array<Maybe<Scalars["String"]>>;
  slug: Scalars["String"];
  title: Scalars["String"];
};

export type ContestInput = {
  body: Scalars["String"];
  header: Scalars["String"];
  isFeatured: Scalars["Boolean"];
  prizes: Array<InputMaybe<Scalars["String"]>>;
  slug: Scalars["String"];
  title: Scalars["String"];
};

export type Like = {
  __typename?: "Like";
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  username: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createComment: Post;
  createContest: Contest;
  createPost: Post;
  deleteComment: Post;
  deleteContest: Scalars["String"];
  deletePost: Scalars["String"];
  likePost: Post;
  registerUserAddress: User;
  updateUserProfile: User;
};

export type MutationCreateCommentArgs = {
  body: Scalars["String"];
  postId: Scalars["String"];
};

export type MutationCreateContestArgs = {
  contestInput: ContestInput;
};

export type MutationCreatePostArgs = {
  body: Scalars["String"];
};

export type MutationDeleteCommentArgs = {
  commentId: Scalars["ID"];
  postId: Scalars["ID"];
};

export type MutationDeleteContestArgs = {
  contestId: Scalars["ID"];
};

export type MutationDeletePostArgs = {
  postId: Scalars["ID"];
};

export type MutationLikePostArgs = {
  postId: Scalars["ID"];
};

export type MutationRegisterUserAddressArgs = {
  address: Scalars["String"];
};

export type MutationUpdateUserProfileArgs = {
  userProfileInput: UserProfileInput;
};

export type Post = {
  __typename?: "Post";
  body: Scalars["String"];
  commentCount: Scalars["Int"];
  comments: Array<Maybe<Comment>>;
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  likeCount: Scalars["Int"];
  likes: Array<Maybe<Like>>;
  username: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  getContest?: Maybe<Contest>;
  getContests?: Maybe<Array<Maybe<Contest>>>;
  getPost?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getUserByAddress?: Maybe<User>;
  getUserByUsername?: Maybe<User>;
};

export type QueryGetContestArgs = {
  contestId: Scalars["String"];
};

export type QueryGetPostArgs = {
  postId: Scalars["ID"];
};

export type QueryGetUserByAddressArgs = {
  address: Scalars["String"];
};

export type QueryGetUserByUsernameArgs = {
  username: Scalars["String"];
};

export type User = {
  __typename?: "User";
  address: Scalars["String"];
  avatar: Scalars["String"];
  bio: Scalars["String"];
  createdAt: Scalars["String"];
  email: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  username: Scalars["String"];
};

export type UserProfileInput = {
  address: Scalars["String"];
  avatar: Scalars["String"];
  bio: Scalars["String"];
  name: Scalars["String"];
  username: Scalars["String"];
};

export type GetContestQueryVariables = Exact<{
  contestId: Scalars["String"];
}>;

export type GetContestQuery = {
  __typename?: "Query";
  getContest?: {
    __typename?: "Contest";
    title: string;
    body: string;
    prizes: Array<string | null>;
    participants: Array<string | null>;
    entries: Array<string | null>;
    header: string;
    slug: string;
    isFeatured: boolean;
    createdAt: string;
  } | null;
};

export type GetContestsQueryVariables = Exact<{ [key: string]: never }>;

export type GetContestsQuery = {
  __typename?: "Query";
  getContests?: Array<{
    __typename?: "Contest";
    title: string;
    body: string;
    prizes: Array<string | null>;
    participants: Array<string | null>;
    entries: Array<string | null>;
    header: string;
    slug: string;
    isFeatured: boolean;
    createdAt: string;
  } | null> | null;
};

export type RegisterUserAddressMutationVariables = Exact<{
  address: Scalars["String"];
}>;

export type RegisterUserAddressMutation = {
  __typename?: "Mutation";
  registerUserAddress: {
    __typename?: "User";
    id: string;
    address: string;
    createdAt: string;
  };
};

export type UpdateUserProfileMutationVariables = Exact<{
  address: Scalars["String"];
  avatar: Scalars["String"];
  username: Scalars["String"];
  name: Scalars["String"];
  bio: Scalars["String"];
}>;

export type UpdateUserProfileMutation = {
  __typename?: "Mutation";
  updateUserProfile: {
    __typename?: "User";
    id: string;
    address: string;
    username: string;
    name: string;
    avatar: string;
    bio: string;
  };
};

export type GetUserByAddressQueryVariables = Exact<{
  address: Scalars["String"];
}>;

export type GetUserByAddressQuery = {
  __typename?: "Query";
  getUserByAddress?: {
    __typename?: "User";
    address: string;
    avatar: string;
    username: string;
    name: string;
    bio: string;
  } | null;
};

export type GetUserByUsernameQueryVariables = Exact<{
  username: Scalars["String"];
}>;

export type GetUserByUsernameQuery = {
  __typename?: "Query";
  getUserByUsername?: {
    __typename?: "User";
    address: string;
    avatar: string;
    username: string;
    name: string;
    bio: string;
  } | null;
};

export const GetContestDocument = gql`
  query getContest($contestId: String!) {
    getContest(contestId: $contestId) {
      title
      body
      prizes
      participants
      entries
      header
      slug
      isFeatured
      createdAt
    }
  }
`;
export const GetContestsDocument = gql`
  query getContests {
    getContests {
      title
      body
      prizes
      participants
      entries
      header
      slug
      isFeatured
      createdAt
    }
  }
`;
export const RegisterUserAddressDocument = gql`
  mutation registerUserAddress($address: String!) {
    registerUserAddress(address: $address) {
      id
      address
      createdAt
    }
  }
`;
export const UpdateUserProfileDocument = gql`
  mutation updateUserProfile(
    $address: String!
    $avatar: String!
    $username: String!
    $name: String!
    $bio: String!
  ) {
    updateUserProfile(
      userProfileInput: {
        address: $address
        avatar: $avatar
        username: $username
        name: $name
        bio: $bio
      }
    ) {
      id
      address
      username
      name
      avatar
      bio
    }
  }
`;
export const GetUserByAddressDocument = gql`
  query getUserByAddress($address: String!) {
    getUserByAddress(address: $address) {
      address
      avatar
      username
      name
      bio
    }
  }
`;
export const GetUserByUsernameDocument = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      address
      avatar
      username
      name
      bio
    }
  }
`;
export const getSdk = (client: ApolloClient<any>) => ({
  getContestQuery(
    options: Partial<QueryOptions<GetContestQueryVariables, GetContestQuery>>
  ) {
    return client.query<GetContestQuery, GetContestQueryVariables>({
      ...options,
      query: GetContestDocument,
    });
  },
  getContestsQuery(
    options: Partial<QueryOptions<GetContestsQueryVariables, GetContestsQuery>>
  ) {
    return client.query<GetContestsQuery, GetContestsQueryVariables>({
      ...options,
      query: GetContestsDocument,
    });
  },
  registerUserAddressMutation(
    options: Partial<
      MutationOptions<
        RegisterUserAddressMutation,
        RegisterUserAddressMutationVariables
      >
    >
  ) {
    return client.mutate<
      RegisterUserAddressMutation,
      RegisterUserAddressMutationVariables
    >({ ...options, mutation: RegisterUserAddressDocument });
  },
  updateUserProfileMutation(
    options: Partial<
      MutationOptions<
        UpdateUserProfileMutation,
        UpdateUserProfileMutationVariables
      >
    >
  ) {
    return client.mutate<
      UpdateUserProfileMutation,
      UpdateUserProfileMutationVariables
    >({ ...options, mutation: UpdateUserProfileDocument });
  },
  getUserByAddressQuery(
    options: Partial<
      QueryOptions<GetUserByAddressQueryVariables, GetUserByAddressQuery>
    >
  ) {
    return client.query<GetUserByAddressQuery, GetUserByAddressQueryVariables>({
      ...options,
      query: GetUserByAddressDocument,
    });
  },
  getUserByUsernameQuery(
    options: Partial<
      QueryOptions<GetUserByUsernameQueryVariables, GetUserByUsernameQuery>
    >
  ) {
    return client.query<
      GetUserByUsernameQuery,
      GetUserByUsernameQueryVariables
    >({ ...options, query: GetUserByUsernameDocument });
  },
});
export type SdkType = ReturnType<typeof getSdk>;
