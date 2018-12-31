var idCheck=1;
var isCheck=0;
function passcheck(){
	var pass=document.getElementById("u_password").value;
	var passcheck=document.getElementById("u_passwordcheck").value;
	var obj=document.getElementById("checktext");
	
	
	
	if(pass!=passcheck){
		if(document.getElementById("append")){
		var ob=document.getElementById("append");
		obj.removeChild(ob);
		obj.style.height="30px";
		}
		isCheck=1;
		var newobj=document.createElement("div");
		newobj.setAttribute("id","append");
		obj.style.height="30px";
		obj.style.color="red";
		newobj.innerHTML="Please check the password"
		obj.append(newobj);
	}else{
		isCheck=0;
		if(document.getElementById("append")){
			var ob=document.getElementById("append");
			obj.removeChild(ob);
			obj.style.height="30px";
			}
	}
	
}

function submitcheck(){
	if(idCheck==0){
		alert("Please, Check the ID duplication");
		return false;
	}
	if(isCheck==1||!document.getElementById("u_id").value||!document.getElementById("u_email").value||!document.getElementById("u_name").value||!document.getElementById("u_tel").value||!document.getElementById("u_password").value||!document.getElementById("u_passwordcheck").value){
		alert("Please, Check again.");
		return false;
	}
	return true;
	
	
}
function IDcheck(){
	
}