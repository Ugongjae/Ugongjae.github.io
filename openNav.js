/**
 * 
 */
function openNav(obj) {
	var nav = document.getElementsByTagName("nav")[0];
	var varid=obj.id;
	if (nav.style.left == "-300px") {
		nav.style.left = "0px";
		nav.setAttribute("id",varid);
	} else {
		if(nav.id==varid){
		nav.style.left = "-300px";
		}
		else{
			nav.setAttribute("id",varid);
		}
	}
}