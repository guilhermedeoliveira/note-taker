/*
 * Single entrypoint for client-side related GraphQL imports.
 */

export * from "@apollo/client";
export * from "./client";
export * from "./provider";
export * from "./utils";
export * from "./type-utils";

import * as GT from "~generated/types";

export { GT };
