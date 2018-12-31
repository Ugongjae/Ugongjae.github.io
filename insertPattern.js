/**
 * 
 */

function insPattern(){
	var defs=document.getElementByTagName("defs")[0];
	var st=["img-Yongsan-gu","img-Seongdong-gu","img-Gwangjin-gu","img-Jungrang-gu","img-Seongbuk-gu","img-Dongdaemun-gu","img-Noweon-gu","img-Dobong-gu", "img-Gangbuk-gu","img-Jung-gu","img-Jongro-gu", "img-Seodaemun-gu", "img-Eunpyeong-gu", "img-Mapo-gu", "img-Gangdong-gu", "img-Songpa-gu", "img-Gangnam-gu", "img-Seocho-gu", "img-Dongjak-gu", "img-Gwanak-gu", "img-Geumcheon-gu", "img-Youngdeungpo-gu", "img-Guro-gu", "img-Yangcheon-gu", "img-Gangseo-gu"];
	for(var i=0;i<25;i++){
		var newel=document.createElement("pattern");
		var newel2=document.createElement("image");
		newel.setAttribute("id",st[i]);
		newel.setAttribute("x","0");
		newel.setAttribute("y","0");
		newel.setAttribute("width","1");
		newel.setAttribute("height","1");
		
		newel2.setAttribute("width","120px");
		newel2.setAttribute("xlink:href","");
		
		newel.appendChild(newel2);
		defs.appendChild(newel);
	}
}