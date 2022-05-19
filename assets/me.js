if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "y","yt","yt.","yt.c","yt.co","yt.com","yt.com/","yt.com/p","yt.com/pe","yt.com/pee","yt.com/peen","yt.com/peenx","t.com/peenx",".com/peenx","com/peenx","om/peenx","m/peenx", "/peenx", "peenx", "eenx", "enx", "nx", "x", " "];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}