import { GraphQLModule } from "@graphql-modules/core";
import { GT } from "~graphql";
import typeDefs from "./user.graphql";
// import { DatabaseDataSource, DatabaseProvider } from '~api/database'

const Query: GT.QueryResolvers = {
  users: () => [{ id: "01", firstName: "a", lastName: "a" }],
};

const Mutation: GT.MutationResolvers = {
  createUser: () => ({
    id: "02",
    firstName: "Guilherme",
    lastName: "Oliveira",
  }),
};

const User: GT.UserResolvers = {
  fullName: () => "a",
};

const UserModule = new GraphQLModule({
  typeDefs,
  resolvers: { Query, Mutation, User },
  // providers: [DatabaseProvider]
});

export { UserModule };
