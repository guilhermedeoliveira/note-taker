/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * Helper GraphQL client related types.
 */

import { DocumentNode } from "graphql";
import {
  ApolloError,
  QueryResult,
  QueryHookOptions,
  MutationHookOptions,
  MutationTuple,
  SubscriptionHookOptions,
  OperationVariables,
} from "@apollo/client";

/**
 * Generics for pre-typing @apollo/client hooks.
 */

export type UseMutation<TData = any, TVariables = OperationVariables> = (
  query: DocumentNode,
  options?: MutationHookOptions<TData, TVariables>,
) => MutationTuple<TData, TVariables>;

export type UseQuery<TData = any, TVariables = OperationVariables> = (
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>,
) => QueryResult<TData, TVariables>;

export type UseSubscription<TData = any, TVariables = OperationVariables> = (
  query: DocumentNode,
  options?: SubscriptionHookOptions<TData, TVariables>,
) => {
  variables: TVariables;
  loading: boolean;
  data?: TData;
  error?: ApolloError;
};

/**
 * Helper minimal GraphQL node shape.
 */
export type Node = { __typename: string };

/**
 * Extracts from a GraphQL union/interface the given the matching typename.
 */
export type IsTypeName<T, TypeName> = Extract<T, { __typename: TypeName }>;
