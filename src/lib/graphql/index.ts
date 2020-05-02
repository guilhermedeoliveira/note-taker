/*
 * Single entrypoint for client-side related GraphQL imports.
 */

import * as GT from "~generated/types";
export * from "@apollo/client";
export * from "./client";
export * from "./provider";
export * from "./utils";
export * from "./type-utils";

export { GT };
