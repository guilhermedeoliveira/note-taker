declare module "*.gql";

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const document: DocumentNode;
  export default document;
}
