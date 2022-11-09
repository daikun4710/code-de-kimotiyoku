let jsonsData;
const promise = new Promise((resolve) => {
    jsonsData = require('../out/file2.json');
    // console.log(jsonsData.totalCountArr);
        resolve("終わり");
}).then((val) => {
        
        const content = document.getElementById('content');
    //曜日によって変更する位置が変更される
        const dayArr = ['日', '月', '火', '水', '木', '金', '土'];

        //現在の曜日を取得
        let d = new Date();
        let day = d.getDate();  //日
        let dayofweek = d.getDay(); //曜日
        let changeDay = d.toLocaleDateString();
        let dayStr = d.toLocaleDateString().substring(5);

        //変数宣言
        let contentRow;
        let contentCol;
        let row = 6;  //縦のdiv要素の数
        let col = 7;  //横のdiv要素の数

        //左が濃い
        let colorArr = [
            ['#022D10', '#088D34', '#3AF478', '#CBFCDB'],//緑
            ['#8F1209', '#EF1E0F', '#F34A3E', '#F9A49E'],//赤
            ['#0E0157', '#1E02BC', '#4727FD', '#9D8CFE'],//青
            ['coffee4.png','coffee3.png','coffee2.png','coffee1.png']//コーヒー
            ['skirt4.png','skirt3.png','skirt2.png','skirt1.png']//スカート
        ];

        //色が変わる量
        let level1 = 1;
        let level2 = 250;
        let level3 = 600;
        let level4 = 1000;

        //ダミーデータ
        // let totalCountArrDummy = [800,500,250,500,300,100,700,600,200,100,400,500,900,1000,300,500,600,100,300,500,300,700,800,200,400,500,200,600,400,500,200,250,500,300,100,700,600,200,100,400,100,250];
        // let totalCountArrDummyReverse = [];

        // 日付ごとの書いた量(本物)
        let totalCountArr = jsonsData.totalCountArr;
        //ダミー
        // totalCountArr = totalCountArrDummy;

        let totalCountReverse = [];
        // 対応する日付の配列
        let totalDayArr = jsonsData.dayArr;
        let totalDayArrReverse = [];


        for(let i = totalCountArr.length - 1; i >= 0; i--){
          let num = 0;
          num = totalCountArr[i];
          totalCountReverse[totalCountArr.length - 1 - i] = num;
        }


        for (var i = totalDayArr.length - 1; i >= 0; i--) {
          if(!totalDayArr[i] == ""){
            let str = "";
            str = totalDayArr[i];
            totalDayArrReverse[totalDayArr.length - 1 - i] = str.substring(5);
            let num = 0;
            num = totalCountArr[i];
            totalCountReverse[totalDayArr.length - 1 - i] = num;
          }
        }


        const touchCount = document.getElementById('touchCount');

        let touchCountSum = 0;
        for(let i = 0; i<totalCountArr.length; i++){
            touchCountSum = touchCountSum  + totalCountArr[i];
        }

        touchCount.innerHTML = touchCountSum;
        // console.log();

        //メダル処理
        const medal = document.getElementById('medal');
        if(touchCountSum >= 20000){
            medal.src = "../images/medal_ribbon_gold_illust_528.png";
        } else if(touchCountSum >= 8000){
            medal.src = "../images/medal_ribbon_silver_illust_529.png";
        } else {
            medal.src = "../images/medal_ribbon_bronze_illust_530.png";
        }
        
          const data = {
            labels: totalDayArrReverse,
            datasets: [
              
              {
                label: 'あなたの頑張り',
                // data: totalCountReverse,
                data: totalCountReverse,
                borderColor: 'rgba(28,185,55,0.8)',
                backgroundColor: 'rgba(53,236,84,0.37)',
                fill: 'start',
                tension: 0
              }
            ]
          };
        
          const config = {
            type: 'line',
            data: data,
            options: {
              animations: {
                y: {
                  easing: 'easeInOutElastic',
                  from: (ctx) => {
                    if (ctx.type === 'data') {
                      if (ctx.mode === 'default' && !ctx.dropped) {
                        ctx.dropped = true;
                        return 1000;
                      }
                    }
                  }
                }
              },
              scales: {
                y: {
                  min: 0
                }
              }
            },
          };

          const chart = new Chart(
            document.getElementById('chart'),
            config
          );
});