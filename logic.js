
importSrc=['tile.png','tile2.png'];

var body=document.getElementsByTagName('body');
var ctx=document.getElementById("canvas").getContext('2d');

function loadImageList(src_list,callback){
	//这个函数应该在所有图片加载完后调用自己的回调函数，它会指派各加载项子回调函数
	var count=0;
	var size=src_list.length;
	var map={};
	for(var i=0;i<size;i++){
		var src=src_list[i];
		var img=new Image();
		map[src]=img;
		img.src=src;
		img.onload=function(){
			count+=1;
			if (count===size){
				callback(map);
			}
		}
	}
}

function decSpirit(img,map){
	function _take(key){
		obj={sX:map[key][0],sY:map[key][1],sWidth:map[key][2],sHeight:map[key][3]};
		obj.draw=function(ctx,x,y){
			console.log(img,obj);
			ctx.drawImage(img,obj.sX,obj.sY,obj.sWidth,obj.sHeight,x,y,obj.sWidth,obj.sHeight);
		}
		return obj;
	}
	return _take;
}

function update(){
	console.log("hit");
	
	requestAnimationFrame(update);
}
function init(map){
	// do nothing?
	console.log(map);
	var spirit=decSpirit(map['tile.png'],{tile:[50,50,50,50],tile1:[50,50,50,50],tile2:[50,100,50,50]});
	var tile1= spirit('tile1');
	tile1.draw(ctx,10,20);
	for(var i=0;i<5;i++){
		for(var j=0;j<5;j++){
			tile1.draw(ctx,10+i*50,20+j*50);
		}
	}
	
	requestAnimationFrame(update);
}

function setup(){
	loadImageList(importSrc,init);
}

setup();