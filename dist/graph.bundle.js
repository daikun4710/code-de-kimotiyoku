(()=>{var e={916:e=>{"use strict";e.exports=JSON.parse('{"dayArr":["","","","","2022/11/8","2022/11/7","2022/11/6","2022/11/5","2022/11/4","2022/11/3","2022/11/2","2022/11/1","2022/10/31","2022/10/30","2022/10/29","2022/10/28","2022/10/27","2022/10/26","2022/10/25","2022/10/24","2022/10/23","2022/10/22","2022/10/21","2022/10/20","2022/10/19","2022/10/18","2022/10/17","2022/10/16","2022/10/15","2022/10/14","2022/10/13","2022/10/12","2022/10/11","2022/10/10","2022/10/9","2022/10/8","2022/10/7","2022/10/6","2022/10/5","2022/10/4","2022/10/3","2022/10/2"],"totalCountArr":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"beforeDayStr1":"2022/11/8","beforeDayofweek":2}')}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{let e;new Promise((t=>{e=r(916),t("終わり")})).then((t=>{document.getElementById("content");let r=new Date,n=(r.getDate(),r.getDay(),r.toLocaleDateString(),r.toLocaleDateString().substring(5),e.totalCountArr),o=[],a=e.dayArr,l=[];for(let e=n.length-1;e>=0;e--){let t=0;t=n[e],o[n.length-1-e]=t}for(var s=a.length-1;s>=0;s--)if(""==!a[s]){let e="";e=a[s],l[a.length-1-s]=e.substring(5);let t=0;t=n[s],o[a.length-1-s]=t}const i=document.getElementById("touchCount");let d=0;for(let e=0;e<n.length;e++)d+=n[e];i.innerHTML=d;document.getElementById("medal").src=d>=2e4?"../images/medal_ribbon_gold_illust_528.png":d>=8e3?"../images/medal_ribbon_silver_illust_529.png":"../images/medal_ribbon_bronze_illust_530.png";const g={type:"line",data:{labels:l,datasets:[{label:"あなたの頑張り",data:o,borderColor:"rgba(28,185,55,0.8)",backgroundColor:"rgba(53,236,84,0.37)",fill:"start",tension:0}]},options:{animations:{y:{easing:"easeInOutElastic",from:e=>{if("data"===e.type&&"default"===e.mode&&!e.dropped)return e.dropped=!0,1e3}}},scales:{y:{min:0}}}};new Chart(document.getElementById("chart"),g)}))})()})();