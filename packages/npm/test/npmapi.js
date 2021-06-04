var  NPMAPI  =  require('npm-api');
var npm = new NPMAPI();
var view = npm.view('byUser');
console.log(view)
var repo =  npm.repo('express');
console.log(repo)

var list = npm.list('express',view);
console.log(list)