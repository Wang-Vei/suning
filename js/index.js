/*
* @Author: Sing-V
* @Date:   2018-07-23 00:30:18
* @Last Modified by:   Sing-V
* @Last Modified time: 2018-07-24 00:22:17
*/
window.onload=function(){
	let aside=document.getElementsByClassName("aside")[0];
	let chas=aside.getElementsByClassName("cha");
	let asideBox=document.getElementsByClassName("asideBox");
	console.log(chas);
	for(let i=0;i<chas.length;i++){
		chas[i].onmouseenter=function(){
			for(let j=0;j<chas.length;j++){
				asideBox[j].style.display="none";
			}
			asideBox[i].style.display="block";
		};
		chas[i].onmouseleave=function(){
			asideBox[i].style.display="none";
		}
	}


	let background=document.getElementsByClassName("background")[0];
	let banner=background.getElementsByClassName("banner")[0];
	let warper=banner.getElementsByClassName("warper")[0];
	let a=warper.getElementsByTagName("a");
	let prev=banner.getElementsByClassName("prev")[0];
	let next=banner.getElementsByClassName("next")[0];

	console.log(banner,warper,a,next,prev);

	
	let t=setInterval(move,2000);
		let num=0;
		function move(){
			num++;
			console.log(num);
			if(num==a.length){
				num=0;
			}
			for(let i=0;i<a.length;i++){
				a[i].style.zIndex=5;
			}
			a[num].style.zIndex=10;
		}
		background.onmouseenter=function(){
			clearInterval(t);
		};
		background.onmouseleave=function(){
			t=setInterval(move,2000);
		};
		next.onclick=function(){
			move();
		};

		function move2(){
			num--;
			if(num<0) {
                num == a.length - 1;
            }
		for(let j=0;j<a.length;j++){
			a[j].style.zIndex=5;
		}
		a[num].style.zIndex=10;
	}
		prev.onclick=function(){
			move2();
		}








}
