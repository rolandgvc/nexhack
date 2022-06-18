import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import { getSdk } from "generated/graphql";

// export const queryClient = new ApolloClient({
//   uri: "http://localhost:4000/api/graphql",
//   cache: new InMemoryCache(),
//   onError: ({ networkError, graphQLErrors }) => {
//     console.log("graphQLErrors", graphQLErrors);
//     console.log("networkError", networkError);
//   },
// });

export const queryClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/api/graphql",
    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors);
      console.log("networkError", networkError);
    },
  }),
});

// TODO: investigate issues with these hooks, returning undefined
export const {
  getUserByAddressQuery,
  getUserByUsernameQuery,
  updateUserProfileMutation,
  registerUserAddressMutation,
} = getSdk(queryClient);
