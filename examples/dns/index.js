const { Resolver } = require('dns');

const tests = [
  //"www.baidu.com",
  "registry.npmjs.org"
];
function test(dnss){
  dnss.forEach(function(sip){
    tests.forEach(host=>{
      const resolver = new Resolver();
      resolver.setServers([sip]);
      let stime = Date.now();
      resolver.resolve4(host, (err, addresses) => {
        console.log("----------------");
        console.log(`${sip}  =>  ${host}  ${err?"失败":Date.now()-stime+"ms"}`)
        console.log(err||addresses);
        console.log("----------------");
      })
    })
  })
}
test(["211.124.211.142",'114.114.114.114',"114.114.115.115"])
//test(['114.114.114.114','211.124.211.142',"8.8.8.8"])

//setInterval(()=>,1000)
