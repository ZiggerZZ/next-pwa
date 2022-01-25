// next.config.js

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const path = require("path");


const plugins = [
  [
    withPWA,
    {
      async redirects() {
        return [
          {
            source: "/",
            destination: "/", // Matched parameters can be used in the destination
            permanent: false,
          },
        ];
      },
      env: {
        BLABLA:
          "Hello world",
      },
      pwa: {
        dest: "public",
      },
      eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: false,
      },
    },
  ],
  /* ...other plugins... */
];

module.exports = withPlugins(plugins, {});
