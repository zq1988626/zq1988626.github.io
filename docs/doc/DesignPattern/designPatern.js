//1.单例模式
function singleton(fn){
	var result;
	return function(){
		return result || (result = fn.apply(this,arguments)) || (result=true);
	}
}

//2.简单工厂模式  new 实现
function simpleFactory(){
	var obj = {},
	Constructor = Array.prototype.shift.call(arguments);
	obj.__proto__ = typeof Constructor.prototype === "number"?Object.prototype:Constructor.prototype;
	var ret = Constructor.apply(obj,arguments);
	return typeof ret ==="object"?ret:obj;
}

/*
var A = function(name){
	this.name = name;
}

var a = simpleFactory(333);
alert(a.name)
*/

//3.订阅者（观察者）模式
var Events = function(){
	var listen,log,obj,one,remove,trigger,__this;
	obj = {};
	__this = this;
	listen = function(key,eventfn){
		var stack,_ref;
		stack = (_ref = obj[key]) != null?_ref:obj[key]=[];
		return stack.push(eventfn);
	};
	one = function(key,eventfn){
		remove(key);
		return listen(key,eventfn);
	};
	remove = function(key){
		var _ref;
		return (_rf=ojb[key])
	}
}

