import { ApolloClient, InMemoryCache } from "@apollo/client";

import { getSdk } from "generated/graphql";

export const queryClient = new ApolloClient({
  uri: "http://localhost:4000/api/graphql",
  cache: new InMemoryCache(),
});

// TODO: investigate issues with these hooks, returning undefined
export const {
  getUserByAddressQuery,
  getUserByUsernameQuery,
  updateUserProfileMutation,
  registerUserAddressMutation,
} = getSdk(queryClient);
