import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

const getClient = (initialState: NormalizedCacheObject) =>
  new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache().restore(initialState || {})
  })

export { getClient }
