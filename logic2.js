
var body=document.getElementsByTagName('body');
var ctx=document.getElementById("canvas").getContext('2d');

function loadImg(src){
	var img=new Image();
	img.src=src;
	//img.onload=callback;
	return img;
}

function loadSpirit(src,map){
	var img=loadImg(src);
	function _take(key){
		obj={sX:map[key][0],sY:map[key][1],sWidth:map[key][2],sHeight:map[key][3]};
		obj.draw=function(ctx,x,y){
			ctx.drawImage(img,obj.sX,obj.sY,obj.sWidth,obj.sHeight,x,y,obj.sWidth,obj.sHeight);
		}
		return obj;
	}
	return _take;
}


var spirit=loadSpirit('tile.png',{tile1:[50,50,50,50],tile2:[50,100,50,50]});
var tile1= spirit('tile1');
/*
setInterval(function(){
	if (tile1.draw){
		tile1.draw(ctx,10,20);
	}
	else{
		console.log('miss');
	}
},1);
*/
/*
console.log(tile1.draw);
console.log(tile1.draw);
console.log(tile1.draw);
*/
tile1.draw(ctx,10,20);
tile1.draw(ctx,60,20);
tile1.draw(ctx,110,20);

