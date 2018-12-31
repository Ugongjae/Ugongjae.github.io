/**
 * 
 */
function imgOver(obj){
	var nav=document.getElementsByTagName('nav')[0].id;
	var gu=document.getElementById("img-"+nav);
	gu.setAttribute("xlink:href",obj.src);
}
function imgOut(obj){
	var nav=document.getElementsByTagName('nav')[0].id;
	var gu=document.getElementById("img-"+nav);
	gu.setAttribute("xlink:href","");
}