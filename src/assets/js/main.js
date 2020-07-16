var string="Nagendra & Sai Krishna.....";
var strArray=string.split();

function animate(){
	if(strArray.length > 0){
		document.getElementById("animation").innerHTML += strArray.shift();
	}
	else{
document.getElementById("animation").innerHTML="";
	 strArray=string.split("");
		}
		setTimeout(animate,150);

}

