const { Resolver } = require('dns');

const dns = [
  ["114",'114.114.114.114','114.114.115.115'],
  ["360中国电信/铁通/移动",'101.226.4.6','218.30.118.6'],
  ["360中国联通",'123.125.81.6','140.207.198.6'],
  ["ali",'223.5.5.5','223.6.6.6'],
]


const host = "registry.npmjs.org";


function resolution(dns,host){
  //console.log(dns,host);
  return new Promise((resolve,reject)=>{
    const resolver = new Resolver();
    resolver.setServers([dns]);
    resolver.resolve4(host, (err, addresses) => {
      if(err) reject(err)
      else resolve(addresses)
    })
  })
}

function tests(dnss,host){
  let promis = [];
  dnss.forEach(item=>{
    let stime = Date.now();
    let ip = item[0];
    let dnslist = item.slice(1);
    dnslist.forEach(function(dns,i){
      promis.push(resolution(dns,host).then(ip=>({
        tms:Date.now()-stime,
        name:item[0]+"["+(i==0?"主":"备")+"]",
        dns:dns
      })))
    })
  })
  return Promise.all(promis)
}


let cache = {};
function test(dnss,host){
  tests(dnss,host).then(function(ress){
    ress.forEach(res=>{
      cache[res.dns] = cache[res.dns] || {name:res.name,avgtms:0,dns:res.dns,count:0,tms:0};
      let obj = cache[res.dns];
      obj.count++;
      obj.tms+=res.tms;
      obj.avgtms=Math.round(obj.tms/obj.count);
    })
    return cache;
  }).then(function(res){
    console.clear();
    console.log(new Date())
    let list = [];
    for(var a in res){
      list.push(res[a]);
    }
    console.table(list)
  })
}


setInterval(()=>{
  test(dns,host);
},1000)


//test(['114.114.114.114','211.124.211.142',"8.8.8.8"])

//setInterval(()=>,1000)
