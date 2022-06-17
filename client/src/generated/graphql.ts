import { ApolloClient, QueryOptions, SubscriptionOptions, MutationOptions } from '@apollo/client';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNFT: Nft;
  registerUserAddress: User;
  updateUserProfile: User;
};


export type MutationCreateNftArgs = {
  nftInput: NftInput;
};


export type MutationRegisterUserAddressArgs = {
  address: Scalars['String'];
};


export type MutationUpdateUserProfileArgs = {
  userProfileInput: UserProfileInput;
};

export type Nft = {
  __typename?: 'NFT';
  addresses: Array<Maybe<Scalars['String']>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  shares: Array<Maybe<Scalars['String']>>;
  timestamp: Scalars['String'];
  title: Scalars['String'];
};

export type NftInput = {
  addresses: Array<InputMaybe<Scalars['String']>>;
  description: Scalars['String'];
  image: Scalars['String'];
  shares: Array<InputMaybe<Scalars['String']>>;
  timestamp: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getNFT?: Maybe<Nft>;
  getNFTs?: Maybe<Array<Maybe<Nft>>>;
  getUserByAddress?: Maybe<User>;
  getUserByUsername?: Maybe<User>;
};


export type QueryGetNftArgs = {
  nftId: Scalars['String'];
};


export type QueryGetUserByAddressArgs = {
  address: Scalars['String'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  avatar: Scalars['String'];
  bio: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  username: Scalars['String'];
};

export type UserProfileInput = {
  address: Scalars['String'];
  avatar: Scalars['String'];
  bio: Scalars['String'];
  name: Scalars['String'];
  username: Scalars['String'];
};

export type GetNftQueryVariables = Exact<{
  nftId: Scalars['String'];
}>;


export type GetNftQuery = { __typename?: 'Query', getNFT?: { __typename?: 'NFT', id: string, image: string, title: string, description: string, addresses: Array<string | null>, shares: Array<string | null>, timestamp: string } | null };

export type GetNfTsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNfTsQuery = { __typename?: 'Query', getNFTs?: Array<{ __typename?: 'NFT', id: string, image: string, title: string, description: string, addresses: Array<string | null>, shares: Array<string | null>, timestamp: string } | null> | null };

export type RegisterUserAddressMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type RegisterUserAddressMutation = { __typename?: 'Mutation', registerUserAddress: { __typename?: 'User', id: string, address: string, createdAt: string } };

export type UpdateUserProfileMutationVariables = Exact<{
  address: Scalars['String'];
  avatar: Scalars['String'];
  username: Scalars['String'];
  name: Scalars['String'];
  bio: Scalars['String'];
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'User', id: string, address: string, username: string, name: string, avatar: string, bio: string } };

export type GetUserByAddressQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetUserByAddressQuery = { __typename?: 'Query', getUserByAddress?: { __typename?: 'User', address: string, avatar: string, username: string, name: string, bio: string } | null };

export type GetUserByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserByUsernameQuery = { __typename?: 'Query', getUserByUsername?: { __typename?: 'User', address: string, avatar: string, username: string, name: string, bio: string } | null };


export const GetNftDocument = gql`
    query getNFT($nftId: String!) {
  getNFT(nftId: $nftId) {
    id
    image
    title
    description
    addresses
    shares
    timestamp
  }
}
    `;
export const GetNfTsDocument = gql`
    query getNFTs {
  getNFTs {
    id
    image
    title
    description
    addresses
    shares
    timestamp
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
    mutation updateUserProfile($address: String!, $avatar: String!, $username: String!, $name: String!, $bio: String!) {
  updateUserProfile(
    userProfileInput: {address: $address, avatar: $avatar, username: $username, name: $name, bio: $bio}
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
      getNftQuery(options: Partial<QueryOptions<GetNftQueryVariables, GetNftQuery>>) {
          return client.query<GetNftQuery, GetNftQueryVariables>({...options, query: GetNftDocument})
      },
getNfTsQuery(options: Partial<QueryOptions<GetNfTsQueryVariables, GetNfTsQuery>>) {
          return client.query<GetNfTsQuery, GetNfTsQueryVariables>({...options, query: GetNfTsDocument})
      },
registerUserAddressMutation(options: Partial<MutationOptions<RegisterUserAddressMutation, RegisterUserAddressMutationVariables>>) {
          return client.mutate<RegisterUserAddressMutation, RegisterUserAddressMutationVariables>({...options, mutation: RegisterUserAddressDocument})
      },
updateUserProfileMutation(options: Partial<MutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>>) {
          return client.mutate<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>({...options, mutation: UpdateUserProfileDocument})
      },
getUserByAddressQuery(options: Partial<QueryOptions<GetUserByAddressQueryVariables, GetUserByAddressQuery>>) {
          return client.query<GetUserByAddressQuery, GetUserByAddressQueryVariables>({...options, query: GetUserByAddressDocument})
      },
getUserByUsernameQuery(options: Partial<QueryOptions<GetUserByUsernameQueryVariables, GetUserByUsernameQuery>>) {
          return client.query<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>({...options, query: GetUserByUsernameDocument})
      }
    });
    export type SdkType = ReturnType<typeof getSdk>
