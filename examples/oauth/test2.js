const {getToken,getUserInfo} = require("./api");

getToken("6b1d4cff3903daf59972")
.then(data=>{
    if(data.error){
        throw data.error;
    }else{
        console.log(data);
        //return getUserInfo(data.access_token)
    }
})
.catch(console.error)