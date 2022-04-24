/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@rtk-query/graphql-request-base-query']);

module.exports = withTM({
  poweredByHeader: false,
  reactStrictMode: true,
  optimizeFonts: true ,
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
});