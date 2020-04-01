import { Node, IsTypeName } from "./type-utils";

/**
 * Helper predicate to filter objects by __typename.
 */
const isTypeName = <Typename extends string>(typename: Typename) => <
  Item extends Node
>(
  node: Item,
): node is IsTypeName<Item, Typename> => node.__typename === typename;

export { isTypeName };
