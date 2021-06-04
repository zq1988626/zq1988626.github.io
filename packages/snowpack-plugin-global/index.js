// my-snowpack-plugin.js
// Example: a basic Snowpack plugin file, customize the name of the file and the value of the name in the object
// snowpackConfig = The Snowpack configuration object
// pluginOptions = user-provided configuration options
console.log("global");
module.exports = function (snowpackConfig, pluginOptions) {
    let packages = pluginOptions.packages;
    return {
      name: 'snowpack-plugin-global',
      config(snowpackConfig){
        // 这里可以修改配置
        // console.log("config");
      },
      onChange(){
        // 文件改变事件监听
        // console.log("onChange");
      },
      async transform({id, contents, isDev, fileExt}) {
        // 只能项目中的代码才会执行才方法
        console.log(`id:${id},fileExt:${fileExt}`);
        if (fileExt === '.js') {
          return `/* create by zq */\n${contents}`;
        }
      },
    };
};