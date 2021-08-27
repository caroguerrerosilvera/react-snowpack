module.exports = {
    plugins: [ 
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-webpack',
    ],
    devOptions: {
      port: 1234,
    },
    alias: {
      "@": "./src/",
    }
};