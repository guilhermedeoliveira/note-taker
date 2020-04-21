module.exports = {
  // page entrypoints must end with those prefixes (i.e.: "index.page.tsx", "api.page.ts"):
  pageExtensions: ["page.tsx", "page.ts"],
  typescript: { ignoreDevErrors: true, ignoreBuildErrors: true },
  webpack: config => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/u,
      exclude: /node_modules/u,
      loader: "graphql-tag/loader",
    });

    return config;
  },
};
