(()=>{var e={916:e=>{"use strict";e.exports=JSON.parse('{"dayArr":["","","2022/11/10","2022/11/9","2022/11/8","2022/11/7","2022/11/6","2022/11/5","2022/11/4","2022/11/3","2022/11/2","2022/11/1","2022/10/31","2022/10/30","2022/10/29","2022/10/28","2022/10/27","2022/10/26","2022/10/25","2022/10/24","2022/10/23","2022/10/22","2022/10/21","2022/10/20","2022/10/19","2022/10/18","2022/10/17","2022/10/16","2022/10/15","2022/10/14","2022/10/13","2022/10/12","2022/10/11","2022/10/10","2022/10/9","2022/10/8","2022/10/7","2022/10/6","2022/10/5","2022/10/4","2022/10/3","2022/10/2"],"totalCountArr":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"beforeDayStr1":"2022/11/10","beforeDayofweek":4}')}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{let e;new Promise((t=>{e=n(916),t("終わり")})).then((t=>{const n=document.getElementById("content"),o=document.getElementById("dayofweek"),l=["日","月","火","水","木","金","土"];let r,a,s,g=new Date,c=(g.getMonth(),g.getDate()),u=g.getDay(),d=(g.toLocaleDateString(),g.toLocaleDateString().substring(5)),i=[["#022D10","#088D34","#3AF478","#CBFCDB"],["#8F1209","#EF1E0F","#F34A3E","#F9A49E"],["#0E0157","#1E02BC","#4727FD","#9D8CFE"],["coffee4.png","coffee3.png","coffee2.png","coffee1.png"]["skirt1.png"]],m=e.totalCountArr,y=0,b=0,p=1,k=250,f=600,v=1e3;class I{constructor(e,t,n,o){this.level1=e,this.level2=t,this.level3=n,this.level4=o}getLevel1(){return this.level1}getLevel2(){return this.level2}getLevel3(){return this.level3}getLevel4(){return this.level4}}let E,h=[new I(1,250,600,1e3),new I(250,600,1e3,2e3),new I(600,1e3,2e3,5e3),new I(1e3,2e3,5e3,1e4)];document.getElementById("levels").onchange=function(){let e=h[this.value];p=e.getLevel1(),k=e.getLevel2(),f=e.getLevel3(),v=e.getLevel4(),x(y)};for(let e=0;e<7;e++)a=document.createElement("div"),a.id="day"+e,a.setAttribute("class","dayText"),a.innerHTML=l[e],a.style.width="100px",a.style.height="30px",a.style.marginRight="5px",a.style.fontWeight="500",o.appendChild(a);for(let e=0;e<6;e++){r=document.createElement("div"),r.setAttribute("class","contentRow"),r.style.display="flex",n.appendChild(r);for(let t=0;t<7;t++)a=document.createElement("div"),a.id=10*e+t,a.setAttribute("class","contentCol"),a.style.width="100px",a.style.height="75px",a.style.marginRight="5px",a.style.marginBottom="5px",r.appendChild(a)}localStorage.getItem("beforeDay")!=d&&(localStorage.setItem("beforeDay",d),localStorage.setItem("totalCount",0));let C=6-u;for(let e=u;e>=0;e--){E=document.getElementById(e),E.style.background="#022D10";let t=document.createElement("p");t.innerHTML=d,E.appendChild(t),contentHoverElemet=document.createElement("div"),contentHoverElemetText=document.createElement("p"),contentHoverElemetText.innerHTML=d+"<br>"+m[C]+"コード",contentHoverElemet.classList.add("hovercss"),contentHoverElemet.appendChild(contentHoverElemetText),E.appendChild(contentHoverElemet),c=g.setDate(g.getDate()-1),d=g.toLocaleDateString().substring(5),C++}for(let e=1;e<6;e++)for(let t=6;t>=0;t--)E=document.getElementById(10*e+t),E.innerHTML=d,E.style.backgroundColor="#dcdcdc",contentHoverElemet=document.createElement("div"),contentHoverElemetText=document.createElement("p"),d=g.toLocaleDateString().substring(5),contentHoverElemetText.innerHTML=d+"<br>"+m[C]+"コード",contentHoverElemet.classList.add("hovercss"),contentHoverElemet.appendChild(contentHoverElemetText),E.appendChild(contentHoverElemet),c=g.setDate(g.getDate()-1),d=g.toLocaleDateString().substring(5),C++;const D=document.getElementById("touchCount");let L=0;for(let e=0;e<m.length;e++)L+=m[e];D.innerHTML=L;document.getElementById("medal").src=L>=2e4?"../images/medal_ribbon_gold_illust_528.png":L>=8e3?"../images/medal_ribbon_silver_illust_529.png":"../images/medal_ribbon_bronze_illust_530.png";for(let e=6;e>=0;e--)s=document.getElementById(e),e<=u?m[b]>=v?s.style.backgroundColor=i[y][0]:m[b]>=f?s.style.backgroundColor=i[y][1]:m[b]>=k?s.style.backgroundColor=i[y][2]:m[b]>=p?s.style.backgroundColor=i[y][3]:s.style.backgroundColor="#dcdcdc":s.style.backgroundColor="transparent",b++;for(let e=1;e<6;e++)for(let t=6;t>=0;t--)s=document.getElementById(10*e+t),m[b]>=v?s.style.backgroundColor=i[y][0]:m[b]>=f?s.style.backgroundColor=i[y][1]:m[b]>=k?s.style.backgroundColor=i[y][2]:m[b]>=p?s.style.backgroundColor=i[y][3]:s.style.backgroundColor="#dcdcdc",b++;function x(e){b=0;for(let t=6;t>=0;t--)s=document.getElementById(t),t<=u?3==e?(m[b]>=v?s.style.backgroundImage="url(../images/coffee4.png)":m[b]>=f?s.style.backgroundImage="url(../images/coffee3.png)":m[b]>=k?s.style.backgroundImage="url(../images/coffee2.png)":m[b]>=p?s.style.backgroundImage="url(../images/coffee1.png)":s.style.backgroundImage="url(../images/coffee5.png)",s.style.color="black",s.style.backgroundRepeat="no-repeat",s.style.backgroundPosition="center",s.style.backgroundColor="transparent"):4==e?(m[b]>=v?s.style.backgroundImage="url(../images/skirt5.png)":m[b]>=f?s.style.backgroundImage="url(../images/skirt1.png)":m[b]>=k?s.style.backgroundImage="url(../images/skirt2.png)":m[b]>=p?s.style.backgroundImage="url(../images/skirt3.png)":s.style.backgroundImage="url(../images/skirt4.png)",s.style.color="black",s.style.backgroundRepeat="no-repeat",s.style.backgroundPosition="center",s.style.backgroundColor="transparent"):5==e?(m[b]>=v?s.style.backgroundImage="url(../images/pantsu5.png)":m[b]>=f?s.style.backgroundImage="url(../images/pantsu1.png)":m[b]>=k?s.style.backgroundImage="url(../images/pantsu2.png)":m[b]>=p?s.style.backgroundImage="url(../images/pantsu3.png)":s.style.backgroundImage="url(../images/pantsu4.png)",s.style.color="black",s.style.backgroundRepeat="no-repeat",s.style.backgroundPosition="center",s.style.backgroundColor="transparent"):(m[b]>=v?s.style.background=i[e][0]:m[b]>=f?s.style.background=i[e][1]:m[b]>=k?s.style.background=i[e][2]:m[b]>=p?s.style.background=i[e][3]:s.style.background="#dcdcdc",s.style.color="white"):s.style.backgroundColor="transparent",b++;for(let t=1;t<6;t++)for(let n=6;n>=0;n--)s=document.getElementById(10*t+n),3==e?(m[b]>=v?s.style.backgroundImage="url(../images/coffee4.svg)":m[b]>=f?s.style.backgroundImage="url(../images/coffee3.svg)":m[b]>=k?s.style.backgroundImage="url(../images/coffee2.svg)":m[b]>=p?s.style.backgroundImage="url(../images/coffee1.svg)":s.style.backgroundImage="url(../images/coffee5.png)",s.style.color="black",s.style.backgroundRepeat="no-repeat",s.style.backgroundPosition="center",s.style.backgroundColor="transparent"):4==e?(m[b]>=v?s.style.backgroundImage="url(../images/skirt5.png)":m[b]>=f?s.style.backgroundImage="url(../images/skirt1.png)":m[b]>=k?s.style.backgroundImage="url(../images/skirt2.png)":m[b]>=p?s.style.backgroundImage="url(../images/skirt3.png)":s.style.backgroundImage="url(../images/skirt4.png)",s.style.color="black",s.style.backgroundRepeat="no-repeat",s.style.backgroundPosition="center",s.style.backgroundColor="transparent"):5==e?(m[b]>=v?s.style.backgroundImage="url(../images/pantsu5.png)":m[b]>=f?s.style.backgroundImage="url(../images/pantsu1.png)":m[b]>=k?s.style.backgroundImage="url(../images/pantsu2.png)":m[b]>=p?s.style.backgroundImage="url(../images/pantsu3.png)":s.style.backgroundImage="url(../images/pantsu4.png)",s.style.color="black",s.style.backgroundRepeat="no-repeat",s.style.backgroundPosition="center",s.style.backgroundColor="transparent"):(m[b]>=v?s.style.background=i[e][0]:m[b]>=f?s.style.background=i[e][1]:m[b]>=k?s.style.background=i[e][2]:m[b]>=p?s.style.background=i[e][3]:s.style.background="#dcdcdc",s.style.color="white"),b++}document.getElementById("color").onchange=function(){let e=document.getElementById("color");switch(y=this.value,console.log(y),x(this.value),y){case"0":e.style.color="green";break;case"1":e.style.color="red";break;case"2":e.style.color="blue";break;default:e.style.color="black"}}}))})()})();