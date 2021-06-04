// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    ['snowpack-plugin-global', { 
      packages:[
        {name:"requirejs/require.js",exports:{requirejs:"requirejs"}},
        {name:"requirejs/require.js",exports:"System"}
      ]
    }]
  ],
  packageOptions: {
    /* ... */
    
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    metaUrlPath:"lib",// 默认_snowpack
    clean:true
  },
  exclude:[
    '**/node_modules/**/*',
    "**/snowpack.config.js",
    "**/package.json",
    "**/yarn.lock"
  ],
};
