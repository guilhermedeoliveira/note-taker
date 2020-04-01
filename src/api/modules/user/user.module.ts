import { GraphQLModule } from '@graphql-modules/core'
import { GT } from '~graphql'
import typeDefs from './user.graphql'
// import { DatabaseDataSource, DatabaseProvider } from '~api/database'

const { Normal } = GT.ContactTypeEnum

const Query: GT.QueryResolvers = {
  users: () => []
}

const Mutation: GT.MutationResolvers = {
  createCustomer: () => {}
}

const User: GT.UserResolvers = {
  __resolveType: () => 'User'
}

const UserModule = new GraphQLModule({
  typeDefs,
  resolvers: { Query, Mutation, User }
  // providers: [DatabaseProvider]
})

export { UserModule }
