let jsonsData;
const promise = new Promise((resolve) => {
    jsonsData = require('../out/file2.json');
    console.log(jsonsData.totalCountArr);
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

    //レイアウトの作成(col)
    for (let i = 0; i < row; i++) {
        contentRow = document.createElement('div');
        contentRow.setAttribute('class', 'contentRow');
        contentRow.style.display = 'flex';
        content.appendChild(contentRow);
        for (let j = 0; j < col; j++) {
            contentCol = document.createElement('div');
            contentCol.id = i * 10 + j;
            contentCol.setAttribute('class', 'contentCol');
            contentCol.style.width = '100px';
            contentCol.style.height = '75px';
            contentCol.style.marginRight = '5px';
            contentCol.style.marginBottom = '5px';

            // const shodiv = document.createElement('div');
            // contentCol.appendChild(shodiv);
            
            // hoverwidth = document.createElement('p');
            // hoverwidth.setAttribute('class', 'hoverwidh');
            // contentRow.appendChild(hoverwidth);
            contentRow.appendChild(contentCol);
        }
    }


    //前回開いた日付と現在の日付が同じか確認
    if(localStorage.getItem("beforeDay") != dayStr){
        //違ければ前回の日付を上書き、totalCountを初期化
        localStorage.setItem("beforeDay",dayStr);
        localStorage.setItem("totalCount",0);
    }

    let contentDay;
    //現在の日にちから現在の週の日曜日までの日付を出力
    for(let m = dayofweek; m >= 0; m--){
        contentDay = document.getElementById(m);
        contentDay.innerHTML = dayStr;
        contentDay.style.background = '#022D10';
        day = d.setDate(d.getDate() - 1);
        dayStr = d.toLocaleDateString().substring(5);
    }

    //残りの日付を出力
    for (let k = 1; k < row; k++) {
        for (let l = col - 1; l >= 0; l--) {
            contentDay = document.getElementById(k * 10 + l);
            contentDay.innerHTML = dayStr;
            contentDay.style.backgroundColor = '#dcdcdc';
            day = d.setDate(d.getDate() - 1);
            dayStr = d.toLocaleDateString().substring(5);
        }
    }




    //【仮】試験的に、書いた回数、左が最新
    let totalCountArr = jsonsData.totalCountArr;

    //【仮】選択した色の二次元配列の番号を入れる。緑=0、赤=1、青=2、初期値=0
    let selectColorNum = 0;
    //【仮】対象のdiv要素を示す変数
    let kariokiba;
    let kariCoffee;
    let i = 0;
    

    //初回起動時の色の振り分け
    for(let n = 6; n >= 0; n--){
        kariokiba = document.getElementById(n);
        if(n <= dayofweek){
            if(totalCountArr[i] >= level4){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][0];
            }else if(totalCountArr[i] >= level3){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][1];
            }else if(totalCountArr[i] >= level2){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][2];
            }else if(totalCountArr[i] >= level1){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][3];
            }else {
                kariokiba.style.backgroundColor = '#dcdcdc';
            }
        }else{
            kariokiba.style.backgroundColor = 'transparent';
        }
        
        i++;
    }
    for (let k = 1; k < row; k++) {
        for (let l = col - 1; l >= 0; l--) {
            kariokiba = document.getElementById(k * 10 + l);
            if(totalCountArr[i] >= level4){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][0];
            }else if(totalCountArr[i] >= level3){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][1];
            }else if(totalCountArr[i] >= level2){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][2];
            }else if(totalCountArr[i] >= level1){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][3];
            }else {
                kariokiba.style.backgroundColor = '#dcdcdc';
            }
            i++;
        }
    }

    document.getElementById('color').onchange = function(){
        colorClick(this.value);
    }
    //二回目から------------------------------------------------------------------
    function colorClick(selectColorNum){
        i = 0;
        for(let n = 6; n >= 0; n--){
            kariokiba = document.getElementById(n);
            if(n <= dayofweek){
                if(selectColorNum == 3){
                    if(totalCountArr[i] >= level4){
                        kariokiba.style.backgroundImage = 'url(../images/coffee4.png)';
                    }else if(totalCountArr[i] >= level3){
                        kariokiba.style.backgroundImage = 'url(../images/coffee3.png)';
                    }else if(totalCountArr[i] >= level2){
                        kariokiba.style.backgroundImage = 'url(../images/coffee2.png)';
                    }else if(totalCountArr[i] >= level1){
                        kariokiba.style.backgroundImage = 'url(../images/coffee1.png)';
                    }
                    else{
                        kariokiba.style.backgroundImage = 'url(../images/coffee5.png)';
                    }
                    kariokiba.style.color = 'black';
                    kariokiba.style.backgroundRepeat = 'no-repeat';
                    kariokiba.style.backgroundPosition = 'center';
                    kariokiba.style.backgroundColor = 'transparent';
                }
                else if(selectColorNum == 4){
                    if(totalCountArr[i] >= level4){
                        kariokiba.style.backgroundImage = 'url(../images/skirt5.png)';
                    }else if(totalCountArr[i] >= level3){
                        kariokiba.style.backgroundImage = 'url(../images/skirt1.png)';
                    }else if(totalCountArr[i] >= level2){
                        kariokiba.style.backgroundImage = 'url(../images/skirt2.png)';
                    }else if(totalCountArr[i] >= level1){
                        kariokiba.style.backgroundImage = 'url(../images/skirt3.png)';
                    }
                    else{
                        kariokiba.style.backgroundImage = 'url(../images/skirt4.png)';
                    }
                    kariokiba.style.color = 'black';
                    kariokiba.style.backgroundRepeat = 'no-repeat';
                    kariokiba.style.backgroundPosition = 'center';
                    kariokiba.style.backgroundColor = 'transparent';
                }
                else if(selectColorNum == 5){
                    if(totalCountArr[i] >= level4){
                        kariokiba.style.backgroundImage = 'url(../images/pantsu5.png)';
                    }else if(totalCountArr[i] >= level3){
                        kariokiba.style.backgroundImage = 'url(../images/pantsu1.png)';
                    }else if(totalCountArr[i] >= level2){
                        kariokiba.style.backgroundImage = 'url(../images/pantsu2.png)';
                    }else if(totalCountArr[i] >= level1){
                        kariokiba.style.backgroundImage = 'url(../images/pantsu3.png)';
                    }
                    else{
                        kariokiba.style.backgroundImage = 'url(../images/pantsu4.png)';
                    }
                    kariokiba.style.color = 'black';
                    kariokiba.style.backgroundRepeat = 'no-repeat';
                    kariokiba.style.backgroundPosition = 'center';
                    kariokiba.style.backgroundColor = 'transparent';
                }
                else{
                    if(totalCountArr[i] >= level4){
                        kariokiba.style.background = colorArr[selectColorNum][0];
                    }else if(totalCountArr[i] >= level3){
                        kariokiba.style.background = colorArr[selectColorNum][1];
                    }else if(totalCountArr[i] >= level2){
                        kariokiba.style.background = colorArr[selectColorNum][2];
                    }else if(totalCountArr[i] >= level1){
                        kariokiba.style.background = colorArr[selectColorNum][3];
                    }else {
                        kariokiba.style.background = '#dcdcdc';
                    }
                    kariokiba.style.color = 'white';
                }
            }else{
                kariokiba.style.backgroundColor = 'transparent';
            }
            i++;
        }
        for (let k = 1; k < row; k++) {
            for (let l = col - 1; l >= 0; l--) {
                kariokiba = document.getElementById(k * 10 + l);

                
                // coffee画像の処理
        if(selectColorNum == 3){
            
           if(totalCountArr[i] >= level4){
                kariokiba.style.backgroundImage = 'url(../images/coffee4.svg)';
            }else if(totalCountArr[i] >= level3){
                kariokiba.style.backgroundImage = 'url(../images/coffee3.svg)';
            }else if(totalCountArr[i] >= level2){
                kariokiba.style.backgroundImage = 'url(../images/coffee2.svg)';
            }else if(totalCountArr[i] >= level1){
                kariokiba.style.backgroundImage = 'url(../images/coffee1.svg)';
            }
            else{
                  kariokiba.style.backgroundImage = 'url(../images/coffee5.png)';
             }
             kariokiba.style.color = 'black';
            kariokiba.style.backgroundRepeat = 'no-repeat';
            kariokiba.style.backgroundPosition = 'center';
            kariokiba.style.backgroundColor = 'transparent';
        
        }
         else if(selectColorNum == 4){
            if(totalCountArr[i] >= level4){
                 kariokiba.style.backgroundImage = 'url(../images/skirt5.png)';
             }else if(totalCountArr[i] >= level3){
                 kariokiba.style.backgroundImage = 'url(../images/skirt1.png)';
             }else if(totalCountArr[i] >= level2){
                 kariokiba.style.backgroundImage = 'url(../images/skirt2.png)';
             }else if(totalCountArr[i] >= level1){
                 kariokiba.style.backgroundImage = 'url(../images/skirt3.png)';
             }
             else{
                kariokiba.style.backgroundImage = 'url(../images/skirt4.png)';
             }
             kariokiba.style.color = 'black';
             kariokiba.style.backgroundRepeat = 'no-repeat';
             kariokiba.style.backgroundPosition = 'center';
             kariokiba.style.backgroundColor = 'transparent';
         }
         else if(selectColorNum == 5){
            if(totalCountArr[i] >= level4){
                 kariokiba.style.backgroundImage = 'url(../images/pantsu5.png)';
             }else if(totalCountArr[i] >= level3){
                 kariokiba.style.backgroundImage = 'url(../images/pantsu1.png)';
             }else if(totalCountArr[i] >= level2){
                 kariokiba.style.backgroundImage = 'url(../images/pantsu2.png)';
             }else if(totalCountArr[i] >= level1){
                 kariokiba.style.backgroundImage = 'url(../images/pantsu3.png)';
             }
             else{
                kariokiba.style.backgroundImage = 'url(../images/pantsu4.png)';
             }
             kariokiba.style.color = 'black';
             kariokiba.style.backgroundRepeat = 'no-repeat';
             kariokiba.style.backgroundPosition = 'center';
             kariokiba.style.backgroundColor = 'transparent';
         }
        else{
            if(totalCountArr[i] >= level4){
                kariokiba.style.background = colorArr[selectColorNum][0];
            }else if(totalCountArr[i] >= level3){
                kariokiba.style.background = colorArr[selectColorNum][1];
            }else if(totalCountArr[i] >= level2){
                kariokiba.style.background = colorArr[selectColorNum][2];
            }else if(totalCountArr[i] >= level1){
                kariokiba.style.background = colorArr[selectColorNum][3];
            }else {
                kariokiba.style.background = '#dcdcdc';
            }
            kariokiba.style.color = 'white';
        }
            i++;
            }
        }
    }
});