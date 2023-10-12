var ranger = document.querySelector("#red-slider");
var rangeg = document.querySelector("#green-slider");
var rangeb = document.querySelector("#blue-slider");

var hexadecimal = ['A','B','C','D','E','F'];

ranger.addEventListener("input", function() {
	var color = "rgb("+this.value+","+parseInt(rangeg.value)+","+parseInt(rangeb.value)+")";
	document.querySelector('div').style.backgroundColor = color;
	var hexred = document.querySelector('#red-part');
	var first = parseInt(this.value/16);
	var second = (this.value/16+"").substring((this.value/16+"").indexOf('.'));
	second = parseInt(parseFloat("0"+second)*16);
	if(first > 9)
	{
		first = hexadecimal[first-9-1];
	}
	if(second > 16)
	{
		second = second %16; 
	}
	if(second > 9)
	{
		second = hexadecimal[second-9-1];
	}
	hexred.textContent = first +""+second; 
	document.querySelector("#color-code").textContent = color.substring(4,color.length-1);
}); 

rangeg.addEventListener("input", function() {
	var color = "rgb("+parseInt(ranger.value)+","+this.value+","+parseInt(rangeb.value)+")";
	var hexred = document.querySelector('#green-part');
	var first = parseInt(this.value/16);
	var second = (this.value/16+"").substring((this.value/16+"").indexOf('.'));
	second = parseInt(parseFloat("0"+second)*16);
	if(first > 9)
	{
		first = hexadecimal[first-9-1];
	}
	if(second > 16)
	{
		second = second %16; 
	}
	if(second > 9)
	{
		second = hexadecimal[second-9-1];
	}
	hexred.textContent = first +""+ second; 
	document.querySelector('div').style.backgroundColor = color;
	document.querySelector("#color-code").textContent = color.substring(4,color.length-1);
}); 

rangeb.addEventListener("input", function() {
	var color = "rgb("+parseInt(ranger.value)+","+parseInt(rangeg.value)+","+this.value+")";
	var hexred = document.querySelector('#blue-part');
	var first = parseInt(this.value/16);
	var second = (this.value/16+"").substring((this.value/16+"").indexOf('.'));
	second = parseInt(parseFloat("0"+second)*16);
	if(first > 9)
	{
		first = hexadecimal[first-9-1];
	}
	if(second > 16)
	{
		second = second %16; 
	}
	if(second > 9)
	{
		second = hexadecimal[second-9-1];
	}
	hexred.textContent = first +""+ second; 
	document.querySelector('div').style.backgroundColor = color;
	document.querySelector("#color-code").textContent = color.substring(4,color.length-1);
}); 



document.querySelector('#copy-the-code').addEventListener("click",function(e){
	const text = document.querySelector('p').textContent.trim();
		const el = document.createElement('textarea');
 		 el.value = text;
  		document.body.appendChild(el);
 		 el.select();
 		 document.execCommand('copy');
 		document.body.removeChild(el);
 		document.querySelector('#message-box').style.display = 'flex';
 		setTimeout(function(){ 
 			document.querySelector('#message-box').style.display = 'none';
 		},900);
});

document.querySelector('#copy-the-hex').addEventListener("click",function(e){
		const text = document.querySelector('#copy-the-hex').textContent.trim();
		const el = document.createElement('textarea');
 		 el.value = text;
  		document.body.appendChild(el);
 		 el.select();
 		 document.execCommand('copy');
 		document.body.removeChild(el);
 		document.querySelector('#message-box').style.display = 'flex';
 		setTimeout(function(){ 
 			document.querySelector('#message-box').style.display = 'none';
 		},900);
});
