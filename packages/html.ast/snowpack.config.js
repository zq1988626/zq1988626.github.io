// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {

  // import.meta.env
  env: {
    //API_URL: 'api.google.com',
  },
  // 别名
  alias: {
    // Type 1: Package Import Alias
    //lodash: 'lodash-es',
    //react: 'preact/compat',
    // Type 2: Local Directory Import Alias (relative to cwd)
    //components: './src/components',
    //'@app': './src',
  },
  mount: {
    /* ... */
    // Same behavior as the "src" example above:
    //src: {url: '/dist'},
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations:
    //public: {url: '/', static: true, resolve: false},
    // 挂载资源到静态服务
    // [path: string]: string | {url: string, resolve: boolean, static: boolean}
    /**
     * 
    mount.url| string| required：要挂载到的 URL，匹配上面简单形式的字符串。
    mount.static| boolean| 可选| 默认值: false: 如果为 true，则不在此目录中构建文件。将它们直接从磁盘复制并提供给浏览器。
    mount.resolve| boolean| 可选| 默认: true: 如果为 false，则不解析 JS、CSS 和 HTML 文件中的 JS 和 CSS 导入。而是将每个导入发送到浏览器，如所写。
     * 
     */ 
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    // out: Default: "build",
    // baseUrl:"/",
    // clean:true,
    // cacheDirPath:"./node_modules/.cache/snowpack",
    // webModulesUrl
  },

  // root:"/xxx" 工作目录
  mode:"development",
  // Type: "test" | "development" | "production" Default: "development" for snowpack dev, "production" for snowpack build.
};
