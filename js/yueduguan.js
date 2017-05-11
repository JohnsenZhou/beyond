//遮罩
function openmask(){
        var sHeight=document.body.scrollHeight,
            sWidth=document.body.scrollWidth;
        var wHeight=document.documentElement.clientHeight;

        var oMask=document.createElement("div");
            oMask.id="g-mask";
            oMask.style.height=sHeight+"px";
            oMask.style.width=sWidth+"px";
            document.body.appendChild(oMask);
        var mImg=document.createElement("div");
            mImg.id="g-mask-img" ;
            mImg.innerHTML=("<div class='mask-img'><p>越读馆微信公众号：</p><span>HZyueduguan</span><img src='../images/二维码.jpg'></div>") ;
            document.body.appendChild(mImg);

        var mHeight=mImg.offsetHeight;
        var mWidth=mImg.offsetWidth;
        mImg.style.left=sWidth/2-mWidth/2+"px"; 
        mImg.style.top=wHeight/2-mHeight/2+"px"; 

         mImg.onclick=oMask.onclick=function(){
          document.body.removeChild(oMask);
          document.body.removeChild(mImg);
         }
      }



      //tooltip提示
      function showtooltip(obj1,obj2){
        obj2.style.display="block";
        obj1.onmouseleave=function(){
          obj2.style.display="none";
        }
      }