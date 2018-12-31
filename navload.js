/**
 * 
 */
$(document).ready(function() {
	$("#nav-div").scroll(function() {
		var dh = document.getElementById('nav-div').scrollHeight;
		var dch = document.getElementById('nav-div').clientHeight;
		var dct = document.getElementById('nav-div').scrollTop;

		if(dh==(dch+dct)){
			var newli=document.createElement("li");
			var newimg=document.createElement("img");
			newimg.setAttribute("src","sagin2.png");
			newimg.setAttribute("width","276px");
			newimg.setAttribute("onmouseover","imgOver(this)");
			newimg.setAttribute("onmouseout","imgOut(this)");
			newli.append(newimg);
			$('#imglist').append(newli);
		}
	});
});

function loadNext(){

	  $.ajax({

	    type: 'post',

	    url: '...',

	    data: '...',

	    success: function(data){

	      $('#nav-div').append(data);

	    }

	  });

	}
