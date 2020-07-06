window.onload=function(){
	
	//querySelector获取是单个
	//querySelectorAll获取是一组类似于数组的
	//只支持H5标准
	var obtn=document.querySelector("#oBtn_top")
	var oimg=document.querySelector("#oBtn_img")
	var oleft=document.querySelector("#left")
	var oright=document.querySelector("#right")
	var ospan=document.querySelectorAll("span")
	var isGD=true;//true为可以继续滚动，false为正常滚动中
	var time=null;//定义一个空对象来存储定时器
	var index=1;//可以当作小圆点的下标
	
	//清空当前小圆点样式再添加
	function shoubtn(){
		for (var i=0;i<ospan.length;i++) {
			if (ospan[i].className="on") {
				ospan[i].className=""
			}
		}
		ospan[index-1].className="on"
	}
	
	//点击小圆点判断去对应的位置
	for (var i=0;i<ospan.length;i++) {
		ospan[i].onclick=function(){
			if (isGD==false) {
			return
		}
			var myindex=parseInt(this.getAttribute("index"))
			var offset=-790*(myindex-index)//当前index的值去计算自定义index的值*再-790
			oset(offset)//调用oset()函数
			index=myindex;//点击变了之后要改当前全局index的值为当前点击的index值
			shoubtn()//调用清除添加小圆样式
			
		}
	}
	
	//定时器实现自动滚动
	time=setInterval(function(){
		oright.onclick()
	},1000)
	//移入移出
	obtn.onmouseenter=function(){
		clearInterval(time)
	}
	obtn.onmouseleave=function(){
		time=setInterval(function(){oright.onclick()},1000)
	}
	
	
	
	
	//点击事件
	oright.onclick=function(){
		if (isGD==false) {
			return     
		}
		if (index==8) {
		index=1
		}else{
			index+=1
		}
		shoubtn()
		oset(-790)
	}
	
	oleft.onclick=function(){
		if (isGD==false) {
			return
		}
		if (index==1) {
			index=8
		}else{
			index-=1
		}
		shoubtn()
		oset(790)

	}
	
	
	//滚动轮播核心
	function oset(value){
		if (isGD==false) {
			return
		}
		isGD=false
		var offen=oimg.offsetLeft
		
		if (offen==-790||offen==-6320) {
			oimg.style.transition="left 0.3s";
		}
		offen+=value
		oimg.style.left=offen+"px"
		
		setTimeout(function(){
			isGD=true
			
			if (offen<0) {
				if (offen==-7110) {
					oimg.style.transition="none"
					oimg.style.left=-790+"px"
				}
			} else{
				if (offen==0) {
					
					oimg.style.transition="none"
					oimg.style.left=-6320+"px"
				}
				
			}
			
			
		},300)
		
		
	}
	
	
		
	
	

	}

	

