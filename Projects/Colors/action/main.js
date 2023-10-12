function get(element) {
	const ele = document.querySelectorAll(element);
	if(ele.length == 1)
		return ele[0];
	return ele;
}

function randomColor(){
	var color = '';
	const hexAlphabets = ['a','b','c','d','e','f'];
	for(var i=0;i<6;i+=1){
		var ele = Math.round(Math.random()*15);
		if(ele > 9)
			ele = hexAlphabets[ele-10];
		color += ele;
	}
	return '#'+color;
}

function setColorBoard(id,heroColor){
	get(id+'> #colorBoardColorName').innerHTML = heroColor;
	get(id+'> #colorBoard').style.background = heroColor;
	get(id+'> #colorBoardInfo').style.border = '3px solid'+heroColor;
	get(id+'> #colorBoardInfo').style.borderTop = 'none';
	get(id+'> #colorBoard > h1').innerHTML = heroColor.substring(1);
	get(id+'> div:last-child > p >code > em').innerHTML = heroColor;
}