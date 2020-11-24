var createMask = singleton(function(){
	var mask = document.createElement("div");
	mask.className = "mask";
	document.body.appendChild(mask)
});




var $id = function(id){
	return document.getElementById(id)
}
