import React from "react";
import { NextComponentType } from "next";
import withApollo from "next-with-apollo";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

import { getClient } from "./client";

interface RenderProps {
  Page: NextComponentType;
  props: {
    apollo: ApolloClient<NormalizedCacheObject>;
  };
}

const render = ({ Page, props: { apollo, ...props } }: RenderProps) => (
  <ApolloProvider client={apollo}>
    <Page {...props} />
  </ApolloProvider>
);

const connectGraphQL = withApollo<NormalizedCacheObject>(
  ({ initialState }) => getClient(initialState),
  { render },
);

export { connectGraphQL };
