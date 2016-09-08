// 通过类名的方法获取元素

  function getClass(classname,obj){
            var obj=obj||document;
             if(document.getElementsByClassName!=undefined){
	           return obj.getElementsByClassName(classname);
            }else{
	            var qita=document.getElementsByTagName("*");
              var arr=[];
	           for(var i=0;i<qita.length;i++){
              //compare(qita[i].className,classname)
		          if(compare(qita[i].className,classname)){
			       arr.push(qita[i]);
		           }
	            }
	         return arr;
             }
  }
  function compare(oldclass,newclass){    //防止多个类名识别不了
      var arr=oldclass.split(" ");
      for(i=0;i<arr.length;i++){
          if(arr[i]==newclass){
            return true;
          }
      }
      return false;
  }
//getStyle 获取属性，解决兼容
function getStyle(obj,attr){
   if(obj.currentStyle==undefined){
    return getComputedStyle(obj,null)[attr]
   }else{
    return obj.currentStyle[attr]
   }
 }      
//
function getText(obj,val){  //obj是对象，val是要设置的obj的参数
	if(val==undefined){
		if(obj.innerText){
            return obj.innerText;
        }else{
    	    return obj.textContent;
        }
    }
    else{
    	if(obj.innerText){
            return obj.innerText=val; //设置参数，将val的值设置给obj
        }else{
    	    return obj.textContent=val;
             }
        }
	}
    
