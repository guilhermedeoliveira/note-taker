import { isTypeName } from "./utils";

describe("lib/graphql/utils", () => {
  describe("isTypeName", () => {
    it.each([
      ["First", { __typename: "First" }, true],
      ["First", { __typename: "Second" }, false],
      ["Second", { __typename: "Second" }, true],
      ["Second", { __typename: "First" }, false],
    ])(
      "should validate if objects match given typename",
      (typename, node, expected) => {
        expect(isTypeName(typename)(node)).toBe(expected);
      },
    );
  });
});
