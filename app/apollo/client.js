import {ApolloClient, InMemoryCache} from '@apollo/client';
import fetch from 'cross-fetch';
import {createHttpLink} from 'apollo-link-http';

// Initialize Apollo Client
const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://rickandmortyapi.com/graphql/',
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
});
export default client;
