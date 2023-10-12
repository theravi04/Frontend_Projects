document.querySelector('#message-box').style.display = 'none';
document.querySelector('#to-marker').addEventListener("click",function(e){

			var lis = document.querySelectorAll('li');
		if(lis.length <= 12)
		{
			var ele = document.createElement('CODE');
			var eletext = document.querySelector('#copy-the-hex').textContent.trim();
			var text = document.createTextNode(eletext);
			ele.appendChild(text);
			var secele = document.createElement('LI');
			secele.appendChild(ele);
			secele.style.backgroundColor = eletext;
			document.querySelector('#laps > ul').appendChild(secele);
		}
		else{
			document.querySelector('#message-text').textContent = 'No more!';
			document.querySelector('#message-symbol').textContent = '✖';
			document.querySelector('#message-box').style.backgroundColor = '#FF0025';
			document.querySelector('#message-box').style.display = 'flex';
 		setTimeout(function(){ 
 			document.querySelector('#message-box').style.display = 'none';
 			document.querySelector('#message-text').textContent = 'Copied';
			document.querySelector('#message-symbol').textContent = '✔';
			document.querySelector('#message-box').style.backgroundColor = '#35FF3B';
 		},900);
		}
});


document.querySelector('#refresh-marker-list').addEventListener("click",function(e){
		var lis = document.querySelectorAll('li');
		for(var i =0 ; i < lis.length;i++)
		{
			lis[i].remove();
		};
});