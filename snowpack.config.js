// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    ['@snowpack/plugin-sass',{
      'compilerOptions':{
          style: 'compressed',
          loadPath: [
              './scss/main.scss',
          ]
      }
  }],


  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
