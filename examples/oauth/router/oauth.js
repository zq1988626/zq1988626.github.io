let express = require('express');
const router = express.Router();
const {getToken,getUserInfo,getTokenURL} = require("../api");


router.get("/login", function (req, res) {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=8a1a334b2abe5c8adba4&redirect_uri=https://localhost/oauth`);
})

router.get("/oauth",function(req,res,next){
    let code = req.query.code;
    getToken(code)
    .then(data=>{
        if(data.error){
            res.send(data.error);
            throw data.error;
        }else{
            console.log(data.access_token);
            return getUserInfo(data.access_token)
        }
    }).then(function(data){
        //res.send(JSON.stringify(data));
        //domain: '.example.com',
        res.cookie('user',JSON.stringify(data), {  path: '/', secure: true })
        res.redirect("/callback.html");
    }).catch(function(err){
        console.log(err);
    })
})

module.exports = router;