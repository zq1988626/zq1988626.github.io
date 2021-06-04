
const packageCaches = {};

const registry = "https://registry.npm.taobao.org/";

[
    "https://registry.npm.taobao.org/",
    "https://registry.npmjs.org/",
    "https://registry.yarnpkg.com/",
    "http://r.cnpmjs.org/",
    "https://registry.nodejitsu.com/",
    "https://skimdb.npmjs.com/registry/"
]

const cache = ({
    add(name,data){
      packageCaches[name]=data;
    },
    find(name){
      return packageCaches[name]
    }
})

function loadDependencieTree(name,version,hasDev=false){
    return queryPackageJSON(name,version).then(d=>{
      let rev = {
        name: d.name,
        version: d.version,
        description: d.description
      }
      if(d.dependencies){
        console.log(`${name}:有依赖`);
        let dependencies = Object.keys(versionData.dependencies);
        if(dependencies.length==0){return Promise.resolve(rev)}
        return new Promise(resolve=>setTimeout(resolve,1000))
          .then(e=>Promise.all(dependencies.map(name=>loadDependencieTree(name)))
                .then(ds=>{
          rev.dependencies = ds
          return rev;
        }))
      }
      console.log(`${name}:无依赖`);
      return Promise.resolve(rev);
    })
}

// 获取包的指定版本 package.json
export function queryPackageJSON(name,version){
    return query(name).then(d=>getVersionData(d,version))
}

// 从包中获取最新版本号
function getVersionData(d,version){
    version = version || d["dist-tags"].latest
    return d.versions[version]||{};
}
function queryDependencies(name,version){
    return queryVersionData(name,version).then(d=>{
        return Promise.all(getDependencies(d).map(n=>queryVersionData(n).then(d=>({
            name: d.name, 
            version: d.version, 
            description: d.description,
            dependencies:d.dependencies && Object.keys(d.dependencies) || []
        }))))
    })
} 
function getDependencies(d){
    if(d.dependencies){
      return Object.keys(d.dependencies);
    }
    return []
}


// 获取包信息
export function query(name){
    try{
      return Promise.resolve(cache.find(name) || fetch(`${registry}${name}`)
        .then(d=>d.json()).then(d=>{
          if(d.error){
            return Promise.reject(d.error)
          }
          return d;
      }))
    }catch(ex){
      return Promise.reject(ex.message)
    }
}