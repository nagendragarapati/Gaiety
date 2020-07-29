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

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.getElementById("vanish").style.display = "none"
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
	document.getElementById("vanish").style.display = "block"

  }

