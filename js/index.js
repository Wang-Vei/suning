/*
* @Author: Sing-V
* @Date:   2018-07-23 00:30:18
* @Last Modified by:   Sing-V
* @Last Modified time: 2018-07-23 00:36:59
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
		}
		chas[i].onmouseleave=function(){
			asideBox[i].style.display="none";
		}
	}
}
