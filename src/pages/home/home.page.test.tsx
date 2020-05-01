import React from "react";
import wait from "waait";
import { render, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { HomePage } from "./index.page";
import query from "./home.gql";

describe("Home", () => {
  const wrapper: React.FC = ({ children }) => (
    <MockedProvider
      mocks={[
        {
          request: { query },
          result: { data: { users: [] } },
        },
      ]}
    >
      {children as React.ReactElement}
    </MockedProvider>
  );

  it("test component", async () => {
    const { queryByText } = render(<HomePage />, { wrapper });

    expect(queryByText("...loading")).toBeInTheDocument();
    expect(queryByText("Hello World!")).not.toBeInTheDocument();

    // wait until query result "loads" (next tick)
    await act(() => wait(0));

    expect(queryByText("...loading")).not.toBeInTheDocument();
    expect(queryByText("Hello World!")).toBeInTheDocument();
  });
});
