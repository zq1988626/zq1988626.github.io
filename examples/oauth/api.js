const axios = require("axios");

const clientID="8a1a334b2abe5c8adba4";
const client_secret="06c95a1a19a474808e006fc6f2113923c2902cc6";

function getTokenURL (code){
    return `https://github.com/login/oauth/access_token?code=${code}&client_id=${clientID}&client_secret=${client_secret}`
}
function getToken (code){
    var url = `https://github.com/login/oauth/access_token?code=${code}&client_id=${clientID}&client_secret=${client_secret}`
    return axios({
        method: 'post',
        url: url,
        headers: {
            accept: 'application/json'
        }
    }).then(d=>d.data);
}

function getUserInfo(access_token){
    var url = `https://api.github.com/user?access_token=${access_token}`
    return axios({
        method: 'get',
        url: url,
        headers: {
            Authorization: `token ${access_token}`
        }
    }).then(d=>d.data);
}

module.exports = {
    getToken,
    getUserInfo
}