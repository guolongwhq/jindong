window.onload=function(){
//banner轮播图的setInterval进程（K）
//楼层轮播图setInterval进程（J）

var fixed=getClass("fixed")[0];
  var onebottom=getClass("onebottom")[0];
     rightSolid(fixed,onebottom)
     for(var i=0;i<7;i++){
      var fu=getClass("fixed")[i];
      var zi=getClass("rightsolidbottom")[i];
      rightSolid(fu,zi);
     }

  function rightSolid(mouse,change){
        mouse.onmouseover=function(){
          animate(change,{right:30},300,Tween.Quad.easeIn)
        }
        mouse.onmouseout=function(){
          animate(change,{right:-30},400,Tween.Bounce.easeOut)
        }
  }





  //一楼选项卡
  var onechose=getClass("one-top-right")[0].getElementsByTagName("div");
  // console.log(onechose);
  var oneimg=getClass("onechose");
  // console.log(oneimg)
  wheel(onechose,oneimg);

//二楼选项卡
  var twochose=getClass("two-top-right")[0].getElementsByTagName("div");
  var twoimg=getClass("twochose");
  // console.log(twochose);
  // console.log(twoimg)
  wheel(twochose,twoimg)

//三楼选项卡
  var threechose=getClass("three-top-right")[0].getElementsByTagName("div");
  var threeimg=getClass("threechose");
  // console.log(threechose);
  // console.log(threeimg);
  wheel(threechose,threeimg);
  //四楼选项卡
  var fourchose=getClass("four-top-right")[0].getElementsByTagName("div");
  var fourimg=getClass("fourchose");
  wheel(fourchose,fourimg)
  //五楼选项卡
  var fivechose=getClass("five-top-right")[0].getElementsByTagName("div");
  var fiveimg=getClass("fivechose");
  wheel(fivechose,fiveimg)

  function wheel(chose,img){ //chose是上面的选项 img是下面的图片
    for(i=0;i<img.length;i++){
		chose[i].index=[i];
		chose[0].className="onechosechange"
		chose[i].onmouseover=function(){
			for(var j=0; j<chose.length; j++){
				img[j].style.display="none";
				chose[j].className="onechosenochange"
			}
            img[this.index].style.cssText="display:block;"
            chose[this.index].className="onechosechange"
		}
	 }
  }




   //banner轮播图

    var img=getClass("bannerimgs")[0].getElementsByTagName('a');
    var divs=getClass("lunbo")[0].getElementsByTagName('div');
    var num=0;                                                   //在开始前就应该让第一张图片的透明度为1，其他的透明度为0
    for(var i=0;i<img.length;i++){
       img[i].style.opacity="0";//循环让不显示的z-index变成空；
       divs[i].className="banneryuan";
       }
    divs[0].className="bannergundong"
    img[0].style.opacity="1";
    img[img.length-1].style.opacity="0";
    var k=setInterval(move,2000)
    function move(){
    num++;
    if(num==img.length){num=0;}
    for(var i=0;i<img.length;i++){
       img[i].style.opacity="0";//循环让不显示的z-index变成空；
       divs[i].className="banneryuan";
       }
        animate(img[num],{opacity:1},500)
        divs[num].className="bannergundong"
    }

        // console.log(num);
        
  //鼠标移入banner时候全部停止轮播,移出是可以继续
  var bannerbj=getClass("banner")[0];
   bannerbj.onmouseover=function(){
    clearInterval(k);
   }
   bannerbj.onmouseout=function(){
    k=setInterval(move,2000);
   }
  //banner处左右箭头，
    var leftBtn=getClass("leftbtn")[0];//之前获取到的是下层半透明的层级，点击事件发生不了
    var rightBtn=getClass("rightbtn")[0];
    rightBtn.onclick=function(){     //当点击没有反应的时候，可以在时间里面输出一些东西
      move()
    }
    leftBtn.onclick=function(){
       num--;
    if(num==-1){num=img.length-1;}
    for(var i=0;i<img.length;i++){
       img[i].style.opacity="0";//循环让不显示的z-index变成空；
       divs[i].className="banneryuan";
       }
        animate(img[num],{opacity:1},500)
        divs[num].className="bannergundong"
    }
    //banner轮播按钮
    for(var i=0;i<divs.length;i++){
      divs[i].index=i;
      divs[i].onclick=function(){
         for(var j=0;j<divs.length;j++){
          img[j].style.opacity="0";
          divs[j].className="banneryuan";
         }
         divs[this.index].className="bannergundong";
        animate(img[this.index],{opacity:1},500)
      }
    }




  // 一楼水平轮播图
  var onewheel=getClass("onewheel")[0];//固定盒子
  var onediv=getClass("one-bodymiddle-box2")[0]; //放所有图片的
  var oneimgs=getClass("one-bodymiddle-box2")[0].getElementsByTagName("img");
  var oneimgW=parseInt(getStyle(oneimgs[0],"width"));
  var oneyuan=getClass("oneLunbo")[0].getElementsByTagName("div");
  var onerBtn=getClass("one-bodymiddleyjt")[0];
  var onelBtn=getClass("one-bodymiddlezjt")[0];
  floorwheel(onewheel,onediv,oneimgs,oneimgW,oneyuan,onelBtn,onerBtn)

  //二楼轮播图
 var twowheel=getClass("twowheel")[0];//固定盒子
  var twodiv=getClass("twoWheelimg")[0]; //放所有图片的
  var twoimgs=getClass("twoWheelimg")[0].getElementsByTagName("img");
  var twoimgW=parseInt(getStyle(twoimgs[0],"width"));
  var twoyuan=getClass("twoLunbo")[0].getElementsByTagName("div");
  var tworBtn=getClass("two-bodymiddleyjt")[0];
  var twolBtn=getClass("two-bodymiddlezjt")[0];
  floorwheel(twowheel,twodiv,twoimgs,twoimgW,twoyuan,twolBtn,tworBtn)



   //三楼水平轮播图
 var threewheel=getClass("threeWheel")[0];//固定盒子
  var threediv=getClass("threeWheelimg")[0]; //放所有图片的
  var threeimgs=getClass("threeWheelimg")[0].getElementsByTagName("img");
  var threeimgW=parseInt(getStyle(threeimgs[0],"width"));
  var threeyuan=getClass("threeLunbo")[0].getElementsByTagName("div");
  var threerBtn=getClass("three-bodymiddleyjt")[0];
  var threelBtn=getClass("three-bodymiddlezjt")[0];
  floorwheel(threewheel,threediv,threeimgs,threeimgW,threeyuan,threelBtn,threerBtn)


  //四楼水平轮播图
 var fourwheel=getClass("fourWheel")[0];//固定盒子
  var fourdiv=getClass("fourWheelimg")[0]; //放所有图片的
  var fourimgs=getClass("fourWheelimg")[0].getElementsByTagName("img");
  var fourimgW=parseInt(getStyle(fourimgs[0],"width"));
  var fouryuan=getClass("fourLunbo")[0].getElementsByTagName("div");
  var fourrBtn=getClass("four-bodymiddleyjt")[0];
  var fourlBtn=getClass("four-bodymiddlezjt")[0];
  floorwheel(fourwheel,fourdiv,fourimgs,fourimgW,fouryuan,fourlBtn,fourrBtn)


 //五楼水平轮播图
 var fivewheel=getClass("fiveWheel")[0];//固定盒子
  var fivediv=getClass("fiveWheelimg")[0]; //放所有图片的
  var fiveimgs=getClass("fiveWheelimg")[0].getElementsByTagName("a");
  var fiveimgW=parseInt(getStyle(fiveimgs[0],"width"));
  var fiveyuan=getClass("fiveLunbo")[0].getElementsByTagName("div");
  var fiverBtn=getClass("five-bodymiddleyjt")[0];
  var fivelBtn=getClass("five-bodymiddlezjt")[0];
  floorwheel(fivewheel,fivediv,fiveimgs,fiveimgW,fiveyuan,fivelBtn,fiverBtn)



  //（固定的盒子，放所有图片的div，所有的图片,每张图片的宽度，按钮,左箭头，右箭头）
  function floorwheel(wheelbj,div,imgs,imgW,btn,leftBtn,rightBtn){
  div.style.width=imgs.length*imgW+"px";
  var index=0;
  var  j=setInterval(move,2000)
  function move(){
       index++;
       if(index==imgs.length){
        index=0
       }
        for(var i=0;i<imgs.length;i++){
          // console.log(imgs.length)
          btn[i].className="nochangexiaoheidian";//这里应该注意多类名问题，应该保留获取的时候用的类名
          // console.log(btn[i]) 
        }
        btn[index].className="changexiaoheidian";
   // console.log(index);
       animate(div,{marginLeft:-index*imgW},500)
  }
    
    //鼠标移入移出停止
   wheelbj.onmouseover=function(){
    console.log(2);
     clearInterval(j)
   }
   wheelbj.onmouseout=function(){
    j=setInterval(move,2000)
   }
  // //选项卡
    for(var i=0;i<imgs.length;i++){
      btn[i].index=i;
      btn[i].onclick=function(){
        animate(div,{marginLeft:-this.index*imgW},500)
        for(var j=0;j<imgs.length;j++){
          btn[j].className="nochangexiaoheidian";
        }
        btn[this.index].className="changexiaoheidian";
      }
    }

  
    //左右箭头
    rightBtn.onclick=function(){
      move()
    }
    leftBtn.onclick=function(){
        index--;
        if(index==-1){
          index=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
          btn[i].className="nochangexiaoheidian";
        }
        btn[index].className="changexiaoheidian";
        animate(div,{marginLeft:-index*imgW},500)
    }
  }



// 鼠标移入图片图片会动一下
  var ttdjImg=getClass("ttdjBodyLeftChange")[0].getElementsByTagName("img");
  // console.log(ttdjImg)
  for(var i=0;i<ttdjImg.length;i++){
mouseoverMove(ttdjImg[i],ttdjImg[i])
  }
  // mouseoverMove(ttdjImg[i],ttdjImg[i])
  // mouseoverMove(ttdjImg[2],ttdjImg[2])
   function mouseoverMove(change,move){
   change.onmouseover=function(){
      animate(move,{marginLeft:10},300)
    }
    change.onmouseout=function(){
      animate(move,{marginLeft:0},300)
    }
  }



}