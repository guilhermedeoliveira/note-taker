import React from "react";
import { GT, useQuery, UseQuery } from "~graphql";
import query from "./home.gql";

const useUsers: UseQuery<GT.HomePageQuery> = useQuery;

const HomePage: React.FC = () => {
  const { data, loading, error } = useUsers(query);

  if (error) throw error;
  if (loading) return <div>...loading</div>;

  return <div>{data}</div>;
};

export { HomePage };
