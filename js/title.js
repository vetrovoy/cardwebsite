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
	
	setInterval(loop, 300);

}

var x = 0;
var titleText = [ "|",
					"G|",
					"G |",
					"G R|",
					"G R |",
					"G R E|",
					"G R E |",
					"G R E A|",
					"G R E A |",
					"G R E A U|",
					"G R E A U |",
					"G R E A U X|",
					"G R E A U X |"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}