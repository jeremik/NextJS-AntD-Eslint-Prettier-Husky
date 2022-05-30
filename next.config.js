/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withLess = require('next-with-less')
const modifyVars = require('./customTheme.json')
const withPWA = require('next-pwa')

const nextConfig = withLess(
  withPWA({
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
    },
  }),
  {
    lessLoaderOptions: {
      lessOptions: {
        modifyVars, // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
      },
    },
    eslint: {
      dirs: ['src'],
    },
  }
)

module.exports = nextConfig
