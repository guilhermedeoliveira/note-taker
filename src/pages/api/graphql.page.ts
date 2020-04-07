import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { AppModule } from "~api/modules/index.module";

const { typeDefs, resolvers } = AppModule;

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const handler = apolloServer.createHandler({ path: "/api/graphql" });
const cors = Cors({ allowMethods: ["GET", "POST", "OPTIONS"] });

// now config
export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);
